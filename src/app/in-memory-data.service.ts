import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', email: '' },
      { id: 12, name: 'Narco', email: '' },
      { id: 13, name: 'Bombasto', email: '' },
      { id: 14, name: 'Celeritas', email: '' },
      { id: 15, name: 'Magneta', email: '' },
      { id: 16, name: 'RubberMan', email: '' },
      { id: 17, name: 'Dynama', email: '' },
      { id: 18, name: 'Dr IQ', email: '' },
      { id: 19, name: 'Magma', email: '' },
      { id: 20, name: 'Tornado', email: '' }
    ];
    return {heroes};
  }
}
