import {Injectable} from '@angular/core';
import {Toast, ToastController} from "ionic-angular";

@Injectable()
export class ToasterService {

  constructor(private _toastController: ToastController) {}

  createToast(message: string): Toast {
    return  this._toastController.create({
      message,
      duration: 3000,
      position: 'bottom',
    });
  };
}
