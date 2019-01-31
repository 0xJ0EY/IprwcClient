import {Component, OnInit, ViewChild} from '@angular/core';
import {TableRow} from '../../../../table/interfaces/table-row.interface';
import {TableComponent} from '../../../../table/components/table/table.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CategoryService} from '../../../../shared/services/category.service';
import {Observable} from 'rxjs';
import Category from '../../../../shared/models/category.model';


enum RowState { VIEW, EDIT, NEW, DELETED }

/* tslint:disable */
@Component({
  selector: 'tr[app-category-row]',
  template: `
    <ng-template [ngIf]="currentState === state.VIEW">
      <td>{{ data.name }}</td>
      <td style="width: 20px"><span (click)="onClickEdit()">E</span></td>
      <td style="width: 20px"><span (click)="onClickDelete()">D</span></td>
    </ng-template>
    <ng-template [ngIf]="currentState === state.EDIT || currentState === state.NEW">
      <td>
        <input class="form-control" type="text" [(ngModel)]="data.name" placeholder="Naam">
      </td>
      <td style="width: 20px"><span (click)="onClickSave()">S</span></td>
      <td style="width: 20px"><span (click)="onClickCancel()">C</span></td>
    </ng-template>
    
    <ng-template #deleteModal let-modal>
      <div class="modal-header">
        <h3>Verwijderen</h3>
      </div>
      <div class="modal-body">
        <p>Verwijder de categorie "{{ data.name }}"?</p>
      </div>
      
      <div class="modal-footer">
        <a (click)="modal.close('close')">Sluiten</a>
        <button type="button" class="btn btn-primary" (click)="modal.close('delete')">Verwijderen</button>
      </div>
    </ng-template>
    
    <ng-template #invalid let-modal>
      <div class="modal-header">
        Ongeldig
      </div>
      <div class="modal-body">
        <p>De regel is ongeldig</p>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-primary" (click)="modal.close('close')">Sluiten</button>
      </div>
    </ng-template>
  `,
  styles: ['tr {width: 100%; display: block;}','.form-control {width: 100%}']
})
/* tslint:enable */
export class CategoryRowComponent implements TableRow, OnInit {
  data: any;
  table: TableComponent;

  // Reference for RowState
  state = RowState;
  currentState: RowState;

  loading = true;

  @ViewChild('deleteModal') modal;

  constructor(
    private modalService: NgbModal,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.currentState = this.initialState;
    this.loading = false;
  }

  private get initialState(): RowState {
    if (this.data.deleted) { return RowState.DELETED; }
    return this.data.editable ? RowState.EDIT : RowState.VIEW;
  }

  public openModal(modal) {
    this.modalService.open(modal).result.then((result) => {

      switch (result) {
        case 'delete': this.onClickDeleteConfirm();
      }

    });
  }

  public onClickEdit() {
    this.currentState = RowState.EDIT;

  }

  public onClickDelete() {
    this.openModal(this.modal);
  }

  public onClickDeleteConfirm() {
    this.categoryService.delete(this.data.id).subscribe(() => {
      this.data.deleted = true;
      this.currentState = RowState.DELETED;
    });
  }

  public onClickCancel() {
    // Save it in the table, because this component get re-rendered every table update and the local variables will be purged.
    this.data.deleted = true;
    this.currentState = this.data.new ? RowState.DELETED : RowState.VIEW;
  }

  public onClickSave() {
    // Check if it is new
    this.loading = true;

    const callback: Observable<Category> = this.data.new ?
      this.categoryService.create(this.data) :
      this.categoryService.update(this.data);

    callback.subscribe((category) => {
      this.data = category;
      this.loading = false;
      this.currentState = RowState.VIEW;
    });

  }

}
