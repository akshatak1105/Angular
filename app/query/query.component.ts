import { Component } from '@angular/core';
import { DbserviceService } from '../dbservice.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrl: './query.component.css',
})
export class QueryComponent {
  query: string = '';
  message: string = '';
  guid: any;

  constructor(private _services: DbserviceService) {}

  onSubmit(): void {
    const requestData = {
      query: this.query,
    };

  }
}
