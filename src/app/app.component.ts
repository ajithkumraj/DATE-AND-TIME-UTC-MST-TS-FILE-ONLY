import { Component } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'my-app',
  template: ` <header>DATE & TIME</header>
  <h3>CURRENT DATE</h3>
  <p>
    {{ date }}
  </p>
  <hr />
  <h3>CURRENT INDIA TIME</h3>
  <p>
    {{ Date | date: 'hh:mm:ss' }}
  </p>
  <hr />
  <h3>CURRENT UTC TIME</h3>
  <p>
    {{ Date | date: 'hh:mm:ss':'UTC' }}
  </p>
  <hr />
  <h3>CURRENT MST TIME</h3>
  <p>
    {{ Date | date: 'hh:mm:ss':'MST' }}
  </p>
  <hr /> 
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  date = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
  Date: Date;

  constructor() {
    setInterval(() => {
      this.Date = new Date();
    }, 1000);
  }
}
