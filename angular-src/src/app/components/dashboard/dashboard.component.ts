import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from 'angular2-flash-messages';
import { OrderPipe } from 'ngx-order-pipe';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: any;
  rings: any = [];
  ears: any = [];
  necks: any = [];
  pens: any = [];
  bracs: any = [];
  i: any;
  constructor(private authService: AuthService,
    private router: Router, private flashMessage: FlashMessagesService) { }


  ngOnInit() {
    this.authService.getProducts().subscribe(data => {
      this.products = data;
      for (let product of this.products) {
        if (product.Catag == "ring") {
          // 1, "string", false
          this.rings.push(product);
        }
        else if (product.Catag == "neck") {
          this.necks.push(product);
        }
        else if (product.Catag == "brac") {
          this.bracs.push(product);
        }
        else if (product.Catag == "pen") {
          this.pens.push(product);
        }
        else if (product.Catag == "ear") {
          this.ears.push(product);
        }
      }
    }, err => {
      console.log(err);
      return false;
    });
  }

  onEditProduct(product: any) {
    this.authService.storeProductData(product);
    this.router.navigate(['editproduct']);
  }
  onDeleteProduct(product: any) {
    this.authService.deleteProduct(product._id).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('Successfully Deleted', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/products']);
      } else {
        this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/products']);
      }
    });
  }
}
