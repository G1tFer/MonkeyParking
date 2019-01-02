import { Component, OnInit } from '@angular/core';

import { CompanyService } from './company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  dataCompany = [];

  constructor(private conpanyService: CompanyService) { }

  ngOnInit() {
    this.dataCompany = this.conpanyService.getAllCompanies();
  }

}
