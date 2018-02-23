import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service'
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  name: String;
  img: String;
  description: String;
  Catag: String;

  products: any;
  oldId: any;

  constructor(private validateService: ValidateService, private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.products = this.authService.getProductData();
    this.name = this.products.name;
    this.img = this.products.img;
    this.description = this.products.description;
    this.Catag = this.products.Catag;
    this.oldId = this.products._id;
    console.log(this.products);
    console.log(this.products._id);
    console.log(this.oldId);
  }

  onEditProductSubmit() {
    const product = {
      name: this.name,
      img: this.img,
      description: this.description,
      Catag: this.Catag,
      oldId: this.oldId
    }

    // Required Fields
    if (!this.validateService.validateProduct(product)) {
      this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    this.authService.editProduct(product).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('Successfully Added', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/products']);
      } else {
        this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/editproduct']);
      }
    });
    this.name = "";
    this.description = "";
    this.Catag = "";
    this.img = "";
    this.oldId = "";

  }
}
