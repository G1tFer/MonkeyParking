import { Injectable } from '@angular/core';

@Injectable()
export class VehicleService {

  vehicle = [
    {
      type:'Moto',
      model: 'CB 300R',
      year: 2010,
      plate: 'EKF 7627',
      mark: 'Honda',
      color: 'Vermelha',
    },
    {
      type:'Carro',
      model: 'Fox',
      year: 2006,
      plate: 'FOX 1234',
      mark: 'Volkswagen',
      color: 'Prata'
    },
    {
      type:'Moto',
      model: '883',
      year: 2010,
      plate: 'FLA 1234',
      mark: 'Harley Davidson',
      color: 'Preto'
    }
  ];

  constructor() { }

  getAllVehicles(){
    return this.vehicle;
  }

}
