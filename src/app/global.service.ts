import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  cardData: any = [];
  cardDetails$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(public _toast: ToastrService) { }

  storeCardDetails() {
    localStorage.setItem('cardDetails', encodeURI(JSON.stringify(this.cardDetails$.value)));
  }

  getCardDetails() {
    const lData: any = JSON.parse(decodeURI(localStorage.getItem('cardDetails') as string));
    this.cardDetails$.next(lData);
    this.cardData = this.cardDetails$.value;
    return this.cardData;
  }

  // type = success/error/warning/info
  toast(type: any, title: string, description?: any, timeOut?: number) {
    this._toast.success(description, title, {
      timeOut: timeOut || 3000,
      progressAnimation: "decreasing",
      progressBar: true
    });
  }
}
