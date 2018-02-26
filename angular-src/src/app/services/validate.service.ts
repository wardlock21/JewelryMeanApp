import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
      return false;
    } else {
      return true;
    }
  }
  validateProduct(product) {
    if (product.name == undefined || product.img == undefined || product.description == undefined || product.Catag == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateEditProduct(product) {
    if (product.name == undefined || product.img == undefined || product.description == undefined
      || product.Catag == undefined || product._id == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateCheckout(chekcout) {
    if (chekcout.firstName == undefined || chekcout.lastName == undefined || chekcout.email == undefined
      || chekcout.Address == undefined || chekcout.state == undefined || chekcout.city == undefined
      || chekcout.zip == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateCard(Card){
    if ( Card.ccname == undefined || Card.ccnumber  == undefined
      || Card.ccexpiration == undefined || Card.cccvv  == undefined) {
      return false;
    } else {
      return true;
    }
  }
  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

}
