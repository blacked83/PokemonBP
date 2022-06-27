import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeletemodalService {

  constructor() { }

  $modal = new EventEmitter<any>();
  
}
