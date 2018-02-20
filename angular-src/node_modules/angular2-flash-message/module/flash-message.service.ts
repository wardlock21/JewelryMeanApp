import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FlashMessage } from './flash-message';

@Injectable()
export class FlashMessageService {

  public _flashMessage: BehaviorSubject<FlashMessage>;

  constructor() {
    this._flashMessage = new BehaviorSubject<FlashMessage>(null);
  }

  public display(flashMsg: FlashMessage) {
    this._flashMessage.next(flashMsg);
  }
}
