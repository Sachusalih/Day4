import { Injectable } from '@angular/core';
import { data } from '../assets/data';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  givedata(){
    return data;
  }
}
