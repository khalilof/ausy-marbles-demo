import { TestBed } from '@angular/core/testing';

import { ConsumerService } from './consumer.service';
import { DataService } from './data.service';
import { cold, hot } from 'jest-marbles';

describe('ConsumerService', () => {
  let sut: ConsumerService;
  let dataService: DataService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    dataService = new DataService();
    dataService.getFruit = jest.fn(() =>  hot('^-a-b-c', {
      a: 'Orange',
      b: 'Apple',
      c: 'Banana'
    }));
    sut = new ConsumerService(dataService);
  });

  it('should be created', () => {
    expect(sut).toBeTruthy();
  });

  it('should correctly return modified fruits', () => {
    const expectedObservable = cold('--a-b-c', {
      a: 'Modified Orange',
      b: 'Modified Apple',
      c: 'Modified Banana'
    });
    expect(sut.getModifiedFruits).toBeObservable(expectedObservable);
  });

});

