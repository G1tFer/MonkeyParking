import { Injectable } from '@angular/core';

import { CompanyService } from './../company/company.service';
import { VehicleService } from './../vehicle/vehicle.service';

@Injectable()
export class ClientService {

  company = {};
  vehicle = {};

  constructor(private companyService: CompanyService, private vehicleService: VehicleService) {
    this.company = companyService.getAllCompanies();
    this.vehicle = vehicleService.getAllVehicles();
  }

  getAllClients(){
    return [
      {
        name: 'Fernando Augusto de',
        lastName:'Souza',
        celFone: '(16) 9 8236-6787',
        fone: '',
        vehicle: this.vehicle[0],
        company: this.company[0],
        vacancy: {
          address:'',
          number: 100
        }
      },
      {
        name: 'Pablo',
        lastName: 'Garcia',
        celFone: '(16) 9 8888-9999',
        fone: '',
        vehicle: this.vehicle[1],
        company: this.company[0],
        vacancy: {
          address:'',
          number: 99
        },
      },
      {
        name: 'Felipe',
        lastName: 'Armentano',
        celFone: '(19) 9 8999-8888',
        fone: '',
        vehicle: this.vehicle[2],
        company: this.company[0],
        vacancy: {
          address:'',
          number: 88
        }
      }
    ];
  }
 
  

}
