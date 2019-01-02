import { Component, OnInit } from '@angular/core';

import { ClientService } from './../client/client.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  dataVehicles = [];

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.dataVehicles = this.clientService.getAllClients();

  }

}
