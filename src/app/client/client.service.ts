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
        client: { 
          name: 'Fernando Augusto de Souza',
        },
        vehicle: this.vehicle[0],
        company: this.company[0],
        space: {
          address:'',
          number: 100
        }
  
      },
      {
        client: { 
          name: 'Pablo Garcia',
        },
        vehicle: this.vehicle[1],
        company: this.company[0],
        space: {
          address:'',
          number: 99
        },
      },
      {
        client: { 
          name: 'Felipe Armentano',
        },
        vehicle: this.vehicle[2],
        company: this.company[0],
        space: {
          address:'',
          number: 88
        }
      }
    ];
  }
 
  

}
