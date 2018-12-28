import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  company = {
    name: 'Scan Brazil Consulting',
    address: {
      street:'Rua Padro Duarto',
      district:'Jardim Nova América',
      number: 151,
      CEP: '14800-360'
    },
    building: 'Ed. América',
    floor: '13º andar',
    room: 136
  };

  dataClients = [
    {
      client: { 
        name: 'Fernando Augusto de Souza',
      },
      vehicle: {
        type:'Moto',
        model: 'CB 300R',
        year: 2010,
        plate: 'EKF 7627'
      },
      company: this.company,
      space: {
        address:'',
        number: 100
      }

    },
    {
      client: { 
        name: 'Pablo Garcia',
      },
      vehicle: {
        type:'Carro',
        model: 'Fox',
        year: 2006,
        plate: 'FOX 1234'
      },
      company: this.company,
      space: {
        address:'',
        number: 99
      },
    },
    {
      client: { 
        name: 'Felipe Armentano',
      },
      vehicle: {
        type:'Moto',
        model: 'Harley Davidson 883',
        year: 2010,
        plate: 'FLA 1234'
      },
      company: this.company,
      space: {
        address:'',
        number: 88
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
