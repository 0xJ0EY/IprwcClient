import {Component, OnInit, ViewChild} from '@angular/core';
import {TableRow} from '../../../../../table/interfaces/table-row.interface';
import {TableComponent} from '../../../../../table/components/table/table.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProductService} from '../../../../../shared/services/product.service';

/* tslint:disable */
@Component({
  selector: 'tr[app-product-overview-row]',
  template: `
    <ng-template [ngIf]="render">
      <td>{{ data.subcategory?.name }}</td>
      <td>{{ data.brand?.name }}</td>
      <td>{{ data.name }}</td>
      <td style="width: 20px" class="align-middle"><a [routerLink]="['aanpassen', data.id]" class="material-icons">edit</a></td>
      <td style="width: 20px" class="align-middle"><a class="material-icons" (click)="onClickDelete()">delete</a></td>
    </ng-template>
      
    <ng-template #deleteModal let-modal>
      <div class="modal-header">
        <h3>Verwijderen</h3>
      </div>
      <div class="modal-body">
        <p>Verwijder het product "{{ data.name }}"?</p>
      </div>

      <div class="modal-footer">
        <a (click)="modal.close('close')">Sluiten</a>
        <button type="button" class="btn btn-primary" (click)="modal.close('delete')">Verwijderen</button>
      </div>
    </ng-template>
  `,
  styles: [`
    a { 
      color: #000;
      cursor: pointer;
      -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
      user-select: none; 
    }
  `,
  `a:hover {
      text-decoration: none;
  }`]
})
/* tslint:enable */
export class ProductOverviewRowComponent implements TableRow {
  data: any;
  table: TableComponent;

  render = true;

  @ViewChild('deleteModal') modal;

  constructor(
    private modalService: NgbModal,
    private productService: ProductService
  ) { }

  public openModal(modal) {
    this.modalService.open(modal).result.then((result) => {

      switch (result) {
        case 'delete': this.onClickDeleteConfirm();
      }

    });
  }

  public onClickDelete() {
    this.openModal(this.modal);
  }

  public onClickDeleteConfirm() {
    this.productService.delete(this.data.id).subscribe(() => {
      this.render = false;
    });
  }

}
