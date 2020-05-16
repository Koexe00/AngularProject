/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyReceiverService } from './myReceiver.service';

describe('Service: MyReceiver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyReceiverService]
    });
  });

  it('should ...', inject([MyReceiverService], (service: MyReceiverService) => {
    expect(service).toBeTruthy();
  }));
});
