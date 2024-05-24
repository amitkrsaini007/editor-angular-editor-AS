import { Component } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  radioValue: string = 'one';
  radioButtonChanged($event: any) {
    this.radioValue = $event.target.value;
  }
}
