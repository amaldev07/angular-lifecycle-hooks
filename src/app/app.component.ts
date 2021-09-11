import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  public name = '';
  public age = '';
  doChange() {
    this.name = 'amal';
    this.age = '22';
  }
}
