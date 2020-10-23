import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  get getModifiedFruits(): Observable<string> {
    return this.dataService.getFruit().pipe(map(user => `Modified ${user}`));
  }

  constructor(private dataService: DataService) {}
}
