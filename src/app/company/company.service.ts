import { Injectable } from '@angular/core';

@Injectable()
export class CompanyService {

  company = [
    {
      id: 1,
      name: 'Scan Brazil Consulting',
      fone: '3333-3333',
      address: {
        street:'Rua Padro Duarto',
        district:'Jardim Nova América',
        number: 151,
        CEP: '14800-360'
      },
      building: 'Ed. América',
      floor: '13º andar',
      room: 136,
      note: '--Descrição--'
    },
    {
      id: 2,
      name: 'Café América',
      fone: '3232-3232',
      address: {
        street:'Rua Padro Duarto',
        district:'Jardim Nova América',
        number: 151,
        CEP: '14800-360'
      },
      building: 'Ed. América',
      floor: 'Térrio',
      room: '-',
      note: '--Descrição--'
    },
    {
      id: 3,
      name: 'LL Gestão de Bens e Serviços',
      fone: '3434-3434',
      address: {
        street:'Rua Padro Duarto',
        district:'Jardim Nova América',
        number: 151,
        CEP: '14800-360'
      },
      building: 'Ed. América',
      floor: '4° andar',
      room: '142',
      note: '--Descrição--'
    }
  ];

  constructor() { }

  getAllCompanies(){
    return this.company;
  }

}
