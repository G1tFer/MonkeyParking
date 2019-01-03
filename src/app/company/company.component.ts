import { Component, OnInit } from '@angular/core';

import { CompanyService } from './company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  dataCompany = [];
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

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.dataCompany = this.companyService.getAllCompanies();
  }

  clearNote(){
    this.company.note = '';
  }

  resetCompany(){
    this.company = {
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
  
  }

  add(addCompany){
    this.dataCompany.push(addCompany);
    this.resetCompany();
  }

}
