import { Component, OnInit } from '@angular/core';

import { ClientService } from './client.service';
import { CompanyService } from './../company/company.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  

  dataClients:any = [];
  companies = [];

  typeVehicle = [
    {id:0, label:'Carro'},
    {id:1, label:'Moto'},
    {id:2, label:'Pickup'},
  ]

  vehicle = {
    type: '',
    model: '',
    year: '',
    plate: '',
    mark: '',
    color: '',
  };

  company;
  
  client = {
    name: '',
    lastName: '',
    celFone: '',
    fone: '',
    CPF: '',
    RG: '',
    driverLicense: '',
    birth: '',
    company: this.company,
    vehicle: this.vehicle,
  };

  constructor(
    private clientService: ClientService,
    private companyService: CompanyService) { }

  ngOnInit() {
    this.dataClients = this.clientService.getAllClients();
    this.companies = this.companyService.getAllCompanies();
  }

  add(newClient){
    console.log(newClient);
  }

  
}
