import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";


export interface dataDialog {
  message: string;
}

@Component({
  templateUrl: './error.component.html'
})
export class ErrorComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data : dataDialog) {}
}
