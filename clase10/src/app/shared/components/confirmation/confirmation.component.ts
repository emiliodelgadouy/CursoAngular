import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent {

  private message;
  private action: Observable<any>;
  private busy = false;

  constructor(public dialogRef: MatDialogRef<ConfirmationComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.message = this.data.message;
    this.action = this.data.action;
  }

  confirm() {
    this.busy = true;
    this.action.subscribe(() => {
      this.busy = false;
      this.dialogRef.close({status: 'CONFIRMED'});
    });
  }

  cancel() {
    this.dialogRef.close({status: 'CANCELED'});
  }

}
