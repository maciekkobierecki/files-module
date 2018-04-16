import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService{

  createDb(){
    const files=[
      { id: 1, name: 'kolos', description:'orem ipsum dolor sit amet,'},
      { id: 2, name: 'analiza', description:'orem ipsum dolor sit amet, '},
      { id: 3, name: 'algebra kolos', description:'orem ipsum dolor sit amet,.'},
      { id: 4, name: 'notatki na fize', description:'orem ipsum dolor sit amet,'},
      { id: 5, name: 'egzamin poprawa eliu', description:'orem ipsum dolor sit amet,'},
      { id: 122, name: 'pofa kolejny raz', description:'orem ipsum dolor sit amet,'},
      { id: 156, name: 'kolos z analizy', description:'orem ipsum dolor sit amet, '},
      { id: 133, name: 'egzmain to zło', description:'orem ipsum dolor sit amet,'}
  
  ];
  return {files};
  }
  constructor() { }

}
