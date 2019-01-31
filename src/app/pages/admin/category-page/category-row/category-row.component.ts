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
      <td style="width: 20px" class="align-middle"><i class="material-icons" (click)="onClickEdit()">edit</i></td>
      <td style="width: 20px" class="align-middle"><i class="material-icons" (click)="onClickDelete()">delete</i></td>
    </ng-template>
    <ng-template [ngIf]="currentState === state.EDIT || currentState === state.NEW">
      <td>
        <input class="form-control" type="text" [(ngModel)]="data.name" placeholder="Naam">
      </td>
      <td style="width: 20px" class="align-middle"><i class="material-icons" (click)="onClickSave()">save</i></td>
      <td style="width: 20px" class="align-middle"><i class="material-icons" (click)="onClickCancel()">cancel</i></td>
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
  styles: [`
    i { 
      cursor: pointer;
      -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
      user-select: none; 
    }
  `]
})
/* tslint:enable */
export class CategoryRowComponent implements TableRow, OnInit {
  data: any;
  table: TableComponent;

  // Reference for RowState
  state = RowState;
  private internalState: RowState = null;

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
    if (this.data.hasOwnProperty('state')) { return <RowState> this.data.state; }
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

  public get currentState(): RowState {
    return this.internalState;
  }

  public set currentState(state: RowState) {
    this.internalState = state;
    this.data.state = state;
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
    if (this.data.new) { this.data.deleted = true; }
    this.currentState = this.data.new ? RowState.DELETED : RowState.VIEW;
  }

  public onClickSave() {
    // Check if it is new
    this.loading = true;

    const callback: Observable<Category> = this.data.new ?
      this.categoryService.create(this.data) :
      this.categoryService.update(this.data);

    callback.subscribe((category) => {
      this.currentState = RowState.VIEW;
      this.data = category;
      this.loading = false;
    });

  }

}
