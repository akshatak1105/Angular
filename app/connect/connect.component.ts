import { Component } from '@angular/core';
import { DbserviceService } from '../dbservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css'],
})
export class ConnectComponent {

  connectionString: string = "";
  guid: any;

  constructor(private _services: DbserviceService,
    private _router: Router) {}

  onSubmit(): void {
    const requestData = {
      url: this.connectionString,
    };

    this._services.connect(requestData).subscribe(result => {
      console.log(result);
      this.guid = result;
      this._router.navigate(['/query']);
    });
  }
}
