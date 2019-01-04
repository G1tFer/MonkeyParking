import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from  '@angular/forms';

import { ClientService } from './client.service';
import { CompanyService } from './../company/company.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  formClient: FormGroup;
  dataClients:any = [];

  companies = [];

  vacancy = {
    address: '',
    number: ''
  };

  typeVehicle = [
    {id:0, label:'Carro'},
    {id:1, label:'Moto'},
    {id:2, label:'Pickup'},
  ];

  setTypeVehicle(type){
    switch(type.id){
      case 0:
        return 'Carro';
      case 1:
        return 'Moto';
      case 2:
        return 'Pickup';
      default:
        '';
    }
  };

  vehicle = {
    type: this.setTypeVehicle(this.typeVehicle),
    model: '',
    year: '',
    plate: '',
    mark: '',
    color: '',
  };

  company = {
    id: '',
      name: '',
      fone: '',
      address: {
        street:'',
        district:'',
        number: '',
        CEP: ''
      },
      building: '',
      floor: '',
      room: '',
      note: ''
  };
  
  client = {
    name: '',
    lastName: '',
    celFone: '',
    fone: '',
    CPF: '',
    RG: '',
    driverLicense: '',
    birth: '',
    company: '',
    vehicle: this.vehicle,
    vacancy: this.vacancy
  };

  constructor(
    private clientService: ClientService,
    private companyService: CompanyService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dataClients = this.clientService.getAllClients();
    this.companies = this.companyService.getAllCompanies();

    this.formClient = this.formBuilder.group({
      name: [null],
      lastName: [null],
      celFone: [null],
      fone: [null],
      CPF: [null],
      RG: [null],
      driverLicense: [null],
      birth: [null],
      company: [null],
      vacancy:{
        address: [null],
        number: [null]
      },
      vehicle: {
        type: [null],
        model: [null],
        year: [null],
        plate: [null],
        mark: [null],
        color: [null],
      }
    });

  }

  add(newClient){
    console.log(newClient);
    let copyClient = Object.assign({},newClient)
    this.dataClients.push(copyClient);
  }

  

  
}
