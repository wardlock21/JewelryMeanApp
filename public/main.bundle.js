webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<br>\n<br>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_add_product_add_product_component__ = __webpack_require__("./src/app/components/add-product/add-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_edit_product_edit_product_component__ = __webpack_require__("./src/app/components/edit-product/edit-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_shopping_cart_shopping_cart_component__ = __webpack_require__("./src/app/components/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_checkout_checkout_component__ = __webpack_require__("./src/app/components/checkout/checkout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'addproduct', component: __WEBPACK_IMPORTED_MODULE_19__components_add_product_add_product_component__["a" /* AddProductComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'editproduct', component: __WEBPACK_IMPORTED_MODULE_20__components_edit_product_edit_product_component__["a" /* EditProductComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_21__components_shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'checkout', component: __WEBPACK_IMPORTED_MODULE_22__components_checkout_checkout_component__["a" /* CheckoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_add_product_add_product_component__["a" /* AddProductComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_edit_product_edit_product_component__["a" /* EditProductComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_checkout_checkout_component__["a" /* CheckoutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_17_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_14_ngx_toastr__["a" /* ToastrModule */].forRoot(),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-product/add-product.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-product/add-product.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Add Product</h2>\n<form (submit)=\"onProductSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Image Source</label>\n    <input type=\"text\" [(ngModel)]=\"img\" name=\"img\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>description</label>\n    <input type=\"text\" [(ngModel)]=\"description\" name=\"description\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Category</label>\n    <input type=\"text\" [(ngModel)]=\"Catag\" name=\"Catag\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>"

/***/ }),

/***/ "./src/app/components/add-product/add-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(validateService, flashMessage, authservice, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authservice = authservice;
        this.router = router;
    }
    AddProductComponent.prototype.ngOnInit = function () {
    };
    AddProductComponent.prototype.onProductSubmit = function () {
        var _this = this;
        var product = {
            name: this.name,
            img: this.img,
            description: this.description,
            Catag: this.Catag
        };
        // Required Fields
        if (!this.validateService.validateProduct(product)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.authservice.addProduct(product).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Successfully Added', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/addproduct']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/addproduct']);
            }
        });
        this.name = "";
        this.description = "";
        this.Catag = "";
        this.img = "";
    };
    AddProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-product',
            template: __webpack_require__("./src/app/components/add-product/add-product.component.html"),
            styles: [__webpack_require__("./src/app/components/add-product/add-product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], AddProductComponent);
    return AddProductComponent;
}());



/***/ }),

/***/ "./src/app/components/checkout/checkout.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h4 class=\"mb-3\">Billing address</h4>\n      <form class=\"needs-validation\" novalidate>\n        <div class=\"row\">\n          <div class=\"col-md-6 mb-3\">\n            <label for=\"firstName\">First name</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"firstName\" name=\"firstName\" placeholder=\"\" required>\n          </div>\n          <div class=\"col-md-6 mb-3\">\n            <label for=\"lastName\">Last name</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lastName\" name=\"lastName\" placeholder=\"\" required>\n          </div>\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"email\">Email\n            <span class=\"text-muted\">(Optional)</span>\n          </label>\n          <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"you@example.com\">\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"address\">Address</label>\n          <input type=\"text\" class=\"form-control\" id=\"address\" [(ngModel)]=\"Address\" name=\"Address\" placeholder=\"1234 Main St\" required>\n        </div>\n\n        <div class=\"mb-3\">\n          <label for=\"address2\">Address 2\n            <span class=\"text-muted\">(Optional)</span>\n          </label>\n          <input type=\"text\" class=\"form-control\" id=\"address2\" [(ngModel)]=\"address2\" name=\"address2\" placeholder=\"Apartment or suite\">\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-5 mb-3\">\n            <label for=\"State\">State</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"state\" name=\"state\" placeholder=\"\" required>\n          </div>\n          <div class=\"col-md-4 mb-3\">\n            <label for=\"City\">City</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"city\" name=\"city\" placeholder=\"\" required>\n          </div>\n          <div class=\"col-md-3 mb-3\">\n            <label for=\"zip\">Zip</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"zip\" name=\"zip\" placeholder=\"\" required>\n          </div>\n        </div>\n        \n        <hr class=\"mb-4\">\n\n        <h4 class=\"mb-3\">Payment</h4>\n\n        <div class=\"d-block my-3\">\n          <div class=\"custom-control custom-radio\">\n            <input id=\"credit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" checked [(ngModel)]=\"paymentMethod\" required>\n            <label class=\"custom-control-label\" for=\"credit\">Credit card</label>\n          </div>\n          <div class=\"custom-control custom-radio\">\n            <input id=\"debit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" [(ngModel)]=\"paymentMethod\" required>\n            <label class=\"custom-control-label\" for=\"debit\">Debit card</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6 mb-3\">\n            <label for=\"cc-name\">Name on card</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"ccname\" name=\"ccname\" placeholder=\"\" required>\n            <small class=\"text-muted\">Full name as displayed on card</small>\n          </div>\n          <div class=\"col-md-6 mb-3\">\n            <label for=\"cc-number\">Credit/Debit card number</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"ccnumber\" name=\"ccnumber\" placeholder=\"\" required>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3 mb-3\">\n            <label for=\"cc-expiration\">Expiration</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"ccexpiration\" name=\"ccexpiration\" placeholder=\"\" required>\n          </div>\n          <div class=\"col-md-3 mb-3\">\n            <label for=\"cc-expiration\">CVV</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cccvv\" name=\"cccvv\" placeholder=\"\" required>\n          </div>\n        </div>\n        <hr class=\"mb-4\">\n        <button class=\"btn btn-primary btn-lg btn-block\" type=\"button\" (click)=\"orderPlaced()\">Continue to checkout</button>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(flashMessage, authService, router, validateService) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.validateService = validateService;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    CheckoutComponent.prototype.orderPlaced = function () {
        var checkout = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            Address: this.Address,
            address2: this.address2,
            state: this.state,
            city: this.state,
            zip: this.zip
        };
        var card = {
            type: this.type,
            ccname: this.ccname,
            ccnumber: this.ccnumber,
            ccexpiration: this.ccexpiration,
            cccvv: this.cccvv
        };
        if (!this.validateService.validateCheckout(checkout)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validateCard(card)) {
            this.flashMessage.show('Please fill all the card details', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.flashMessage.show('Your order is Placed', { cssClass: 'alert-success', timeout: 8000 });
        this.authService.orderClear();
        this.router.navigate(['/']);
    };
    CheckoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__("./src/app/components/checkout/checkout.component.html"),
            styles: [__webpack_require__("./src/app/components/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ":root {\r\n    --jumbotron-padding-y: 3rem;\r\n}\r\n\r\n.jumbotron {\r\n    padding-top: var(--jumbotron-padding-y);\r\n    padding-bottom: var(--jumbotron-padding-y);\r\n    margin-bottom: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .jumbotron {\r\n        padding-top: calc(var(--jumbotron-padding-y) * 2);\r\n        padding-bottom: calc(var(--jumbotron-padding-y) * 2);\r\n    }\r\n}\r\n\r\n.jumbotron p:last-child {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.jumbotron-heading {\r\n    font-weight: 300;\r\n}\r\n\r\n.jumbotron .container {\r\n    max-width: 40rem;\r\n}\r\n\r\nfooter {\r\n    padding-top: 3rem;\r\n    padding-bottom: 3rem;\r\n}\r\n\r\nfooter p {\r\n    margin-bottom: .25rem;\r\n}\r\n\r\n.box-shadow {\r\n    -webkit-box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n            box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"jumbotron text-center\">\n  <div class=\"container\">\n    <h1 class=\"jumbotron-heading\">Album example</h1>\n    <p class=\"lead text-muted\">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not\n      too short so folks don't simply skip over it entirely.</p>\n    <p>\n      <a class=\"btn btn-primary\" *ngIf=\"!authService.loggedIn()\" [routerLink]=\"['/register']\">Register</a>\n      <a class=\"btn btn-dark\" *ngIf=\"!authService.loggedIn()\" [routerLink]=\"['/login']\">Login</a>\n    </p>\n  </div>\n</section>\n<br>\n<div class=\"album py-5 bg-light\">\n  <div class=\"container\">\n    <div class=\"ring\">\n      <h2>Ring</h2>\n      <hr>\n      <div *ngIf=\"products\">\n        <div class=\"row \">\n          <div *ngFor=\"let product of rings \" class=\"col-md-4\">\n            <div class=\"card mb-4 box-shadow \">\n              <img class=\"card-img-top\" src=\"{{product.img}}\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">{{product.name}}</h5>\n                <p class=\"card-text\">{{product.description}}</p>\n                <button type=\"button\" *ngIf=\"!authService.loggedIn()\" class=\"btn btn-dark btn-lg btn-block\" [routerLink]=\"['/login']\">Shop</button>\n                <div class=\"row\" *ngIf=\"authService.loggedIn() && authService.userRole()\">\n                  <div class=\"col-xs-12 col-md-6\">\n                    <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" (click)=\"onEditProduct(product)\">Edit</button>\n                  </div>\n                  <div class=\"col-xs-12 col-md-6\">\n                    <button type=\"button\" class=\"btn btn-danger btn-lg btn-block\" (click)=\"onDeleteProduct(product)\">Delete</button>\n                  </div>\n                </div>\n                <button type=\"button\" *ngIf=\"authService.loggedIn() && !authService.userRole()\" class=\"btn btn-dark btn-lg btn-block\" (click)=\"onAddProductToCart(product)\">Add to cart</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"necklace\">\n      <h2>Necklace</h2>\n      <hr>\n      <div *ngIf=\"products\">\n        <div class=\"row \">\n          <div *ngFor=\"let product of necks\" class=\"col-md-4\">\n            <img class=\"card-img-top\" src=\"{{product.img}}\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">{{product.name}}</h5>\n              <p class=\"card-text\">{{product.description}}</p>\n              <button type=\"button\" *ngIf=\"!authService.loggedIn()\" class=\"btn btn-dark btn-lg btn-block\" [routerLink]=\"['/login']\">Shop</button>\n              <div class=\"row\" *ngIf=\"authService.loggedIn() && authService.userRole()\">\n                <div class=\"col-xs-12 col-md-6\">\n                  <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" (click)=\"onEditProduct(product)\">Edit</button>\n                </div>\n                <div class=\"col-xs-12 col-md-6\">\n                  <button type=\"button\" class=\"btn btn-danger btn-lg btn-block\" (click)=\"onDeleteProduct(product)\">Delete</button>\n                </div>\n              </div>\n              <button type=\"button\" *ngIf=\"authService.loggedIn() && !authService.userRole()\" class=\"btn btn-dark btn-lg btn-block\" (click)=\"onAddProductToCart(product)\">Add to cart</button>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"earring\">\n      <h2>Earring</h2>\n      <hr>\n      <div *ngIf=\"products\">\n        <div class=\"row \">\n          <div *ngFor=\"let product of ears\" class=\"col-md-4\">\n            <div class=\"card mb-4 box-shadow \">\n              <img class=\"card-img-top\" src=\"{{product.img}}\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">{{product.name}}</h5>\n                <p class=\"card-text\">{{product.description}}</p>\n                <button type=\"button\" *ngIf=\"!authService.loggedIn()\" class=\"btn btn-dark btn-lg btn-block\" [routerLink]=\"['/login']\">Shop</button>\n                <div class=\"row\" *ngIf=\"authService.loggedIn() && authService.userRole()\">\n                  <div class=\"col-xs-12 col-md-6\">\n                    <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" (click)=\"onEditProduct(product)\">Edit</button>\n                  </div>\n                  <div class=\"col-xs-12 col-md-6\">\n                    <button type=\"button\" class=\"btn btn-danger btn-lg btn-block\" (click)=\"onDeleteProduct(product)\">Delete</button>\n                  </div>\n                </div>\n                <button type=\"button\" *ngIf=\"authService.loggedIn() && !authService.userRole()\" class=\"btn btn-dark btn-lg btn-block\" (click)=\"onAddProductToCart(product)\">Add to cart</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"bracelets\">\n      <h2>Bracelets</h2>\n      <hr>\n      <div *ngIf=\"products\">\n        <div class=\"row \">\n          <div *ngFor=\"let product of bracs\" class=\"col-md-4\">\n            <div class=\"card mb-4 box-shadow \">\n              <img class=\"card-img-top\" src=\"{{product.img}}\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">{{product.name}}</h5>\n                <p class=\"card-text\">{{product.description}}</p>\n                <button type=\"button\" *ngIf=\"!authService.loggedIn()\" class=\"btn btn-dark btn-lg btn-block\" [routerLink]=\"['/login']\">Shop</button>\n                <div class=\"row\" *ngIf=\"authService.loggedIn() && authService.userRole()\">\n                  <div class=\"col-xs-12 col-md-6\">\n                    <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" (click)=\"onEditProduct(product)\">Edit</button>\n                  </div>\n                  <div class=\"col-xs-12 col-md-6\">\n                    <button type=\"button\" class=\"btn btn-danger btn-lg btn-block\" (click)=\" onDeleteProduct(product)\">Delete</button>\n                  </div>\n                </div>\n                <button type=\"button\" *ngIf=\"authService.loggedIn() && !authService.userRole()\" class=\"btn btn-dark btn-lg btn-block\" (click)=\"onAddProductToCart(product)\">Add to cart</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"pendants\">\n      <h2>Pendents</h2>\n      <hr>\n      <div *ngIf=\"products\">\n        <div class=\"row \">\n          <div *ngFor=\"let product of pens\" class=\"col-md-4 clearfix\">\n            <div class=\"card mb-4 box-shadow \">\n              <img class=\"card-img-top\" src=\"{{product.img}}\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">{{product.name}}</h5>\n                <p class=\"card-text\">{{product.description}}</p>\n                <button type=\"button\" *ngIf=\"!authService.loggedIn()\" class=\"btn btn-dark btn-lg btn-block\" [routerLink]=\"['/login']\">Shop</button>\n                <div class=\"row\" *ngIf=\"authService.loggedIn() && authService.userRole()\">\n                  <div class=\"col-xs-12 col-md-6\">\n                    <button class=\"btn btn-primary btn-lg btn-block\" (click)=\"onEditProduct(product)\">Edit</button>\n                  </div>\n                  <div class=\"col-xs-12 col-md-6\">\n                    <button type=\"button\" class=\"btn btn-danger btn-lg btn-block\" (click)=\"onDeleteProduct(product)\">Delete</button>\n                  </div>\n                </div>\n                <button type=\"button\" *ngIf=\"authService.loggedIn() && !authService.userRole()\" class=\"btn btn-dark btn-lg btn-block\" (click)=\"onAddProductToCart(product)\">Add to cart</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, router, flashMessage, toastr) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.toastr = toastr;
        this.rings = [];
        this.ears = [];
        this.necks = [];
        this.pens = [];
        this.bracs = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProducts().subscribe(function (data) {
            _this.products = data;
            for (var _i = 0, _a = _this.products; _i < _a.length; _i++) {
                var product = _a[_i];
                if (product.Catag == "ring") {
                    // 1, "string", false
                    _this.rings.push(product);
                }
                else if (product.Catag == "neck") {
                    _this.necks.push(product);
                }
                else if (product.Catag == "brac") {
                    _this.bracs.push(product);
                }
                else if (product.Catag == "pen") {
                    _this.pens.push(product);
                }
                else if (product.Catag == "ear") {
                    _this.ears.push(product);
                }
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DashboardComponent.prototype.onEditProduct = function (product) {
        this.authService.storeProductData(product);
        this.router.navigate(['editproduct']);
    };
    DashboardComponent.prototype.onDeleteProduct = function (product) {
        var _this = this;
        this.authService.deleteProduct(product._id).subscribe(function (data) {
            if (data.success) {
                _this.toastr.success('Successfully Deleted!', 'Delete!', { timeOut: 2000, });
                _this.router.navigate(['/products']);
            }
            else {
                _this.toastr.error('Something went wrong!', 'Error!', { timeOut: 2000, });
                _this.router.navigate(['/products']);
            }
        });
    };
    DashboardComponent.prototype.onAddProductToCart = function (product) {
        var item = {
            name: product.name,
            product_id: product._id,
            img: product.img,
            price: 350,
            added: true,
            quantity: 1
        };
        this.authService.storeItemToOrder(item);
        this.toastr.success('Item is Added to your Cartng!', 'Cart!', {
            timeOut: 1000,
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-product/edit-product.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/edit-product/edit-product.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Edit Product</h2>\n<form (submit)=\"onEditProductSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Image Source</label>\n    <input type=\"text\" [(ngModel)]=\"img\" name=\"img\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>description</label>\n    <input type=\"text\" [(ngModel)]=\"description\" name=\"description\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Category</label>\n    <input type=\"text\" [(ngModel)]=\"Catag\" name=\"Catag\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ "./src/app/components/edit-product/edit-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditProductComponent = /** @class */ (function () {
    function EditProductComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    EditProductComponent.prototype.ngOnInit = function () {
        this.products = this.authService.getProductData();
        this.name = this.products.name;
        this.img = this.products.img;
        this.description = this.products.description;
        this.Catag = this.products.Catag;
        this.oldId = this.products._id;
        console.log(this.products);
        console.log(this.products._id);
        console.log(this.oldId);
    };
    EditProductComponent.prototype.onEditProductSubmit = function () {
        var _this = this;
        var product = {
            name: this.name,
            img: this.img,
            description: this.description,
            Catag: this.Catag,
            oldId: this.oldId
        };
        // Required Fields
        if (!this.validateService.validateProduct(product)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.authService.editProduct(product).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Successfully Added', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/products']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/editproduct']);
            }
        });
        this.name = "";
        this.description = "";
        this.Catag = "";
        this.img = "";
        this.oldId = "";
    };
    EditProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-product',
            template: __webpack_require__("./src/app/components/edit-product/edit-product.component.html"),
            styles: [__webpack_require__("./src/app/components/edit-product/edit-product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], EditProductComponent);
    return EditProductComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".box-shadow { -webkit-box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>MEAN App</h1>\n  <p class=\"lead\">Welcome to our custom MEAN application built for Jewellery Store</p>\n  <div>\n    <a class=\"btn btn-primary\" *ngIf=\"!authService.loggedIn()\" [routerLink]=\"['/register']\">Register</a> <a class=\"btn btn-dark\"*ngIf=\"!authService.loggedIn()\" [routerLink]=\"['/login']\">Login</a>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Rings</h3>\n    <div class=\"card mb-4 box-shadow\">\n      <img class=\"card-img-top\" src=\"../../../assets/images/rings.jpeg\" alt=\"Card image cap\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little\n          bit longer.</p>\n        <div class=\"d-flex justify-content-between align-items-center\">\n            <button type=\"button\" class=\"btn btn-dark btn-lg btn-block\" [routerLink]=\"['/products']\">Shop</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Neckless</h3>\n    <div class=\"card mb-4 box-shadow\">\n      <img class=\"card-img-top\" src=\"../../../assets/images/neck.jpeg\" alt=\"Card image cap\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little\n          bit longer.</p>\n        <div class=\"d-flex justify-content-between align-items-center\">\n            <button type=\"button\" class=\"btn btn-dark btn-lg btn-block\" [routerLink]=\"['/products']\">Shop</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Bracelet</h3>\n    <div class=\"card mb-4 box-shadow\">\n    <img class=\"card-img-top\" src=\"../../../assets/images/bracelet.jpeg\" alt=\"Card image cap\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little\n          bit longer.</p>\n        <div class=\"d-flex justify-content-between align-items-center\">\n            <button type=\"button\" class=\"btn btn-dark btn-lg btn-block\" [routerLink]=\"['/products']\">Shop</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authSerivce, router, flashMessage) {
        this.authSerivce = authSerivce;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authSerivce.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authSerivce.storeUserData(data.token, data.user);
                _this.flashMessage.show('Your now logged in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".btn btn-gray1{\r\n    background-color: #373a3c;\r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\">MEAN App</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/']\">Home\n          <span></span>\n        </a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\" *ngIf=\"authSerivce.loggedIn() && authSerivce.userRole()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/addproduct']\">Add Product </a>\n      </li>\n      <li class=\"nav-item\"   [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/products']\">Products </a>\n      </li>\n      <li class=\"nav-item\"  *ngIf=\"authSerivce.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authSerivce.loggedIn() && !authSerivce.userRole()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/cart']\">Cart </a>\n      </li>\n      <li class=\"nav-item\"  *ngIf=\"!authSerivce.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/login']\">Login </a>\n      </li>\n      <li class=\"nav-item\"  *ngIf=\"!authSerivce.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"authSerivce.loggedIn()\">\n        <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<br>\n<br>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authSerivce, router, flashMessage) {
        this.authSerivce = authSerivce;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authSerivce.logout();
        this.flashMessage.show('You are logged out', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">\n    <strong>Name: </strong>{{user.name}}</h2>\n  <h2 class=\"page-header\">\n    <strong>Email: </strong>{{user.email}}</h2>\n</div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authSerivce, router) {
        this.authSerivce = authSerivce;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authSerivce.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessage, authservice, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authservice = authservice;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password,
            role: 'users'
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.authservice.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Successfully Registered', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.css":
/***/ (function(module, exports) {

module.exports = ".table>tbody>tr>td,\r\n.table>tfoot>tr>td {\r\n    vertical-align: middle;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    table#cart tbody td .form-control {\r\n        \r\n        display: inline !important;\r\n    }\r\n    .actions .btn {\r\n        width: 36%;\r\n        margin: 1.5em 0;\r\n    }\r\n    .actions .btn-info {\r\n        float: left;\r\n    }\r\n    .actions .btn-danger {\r\n        float: right;\r\n    }\r\n    table#cart thead {\r\n        display: none;\r\n    }\r\n    table#cart tbody td {\r\n        display: block;\r\n        padding: .6rem;\r\n        min-width: 320px;\r\n    }\r\n    table#cart tbody tr td:first-child {\r\n        background: #333;\r\n        color: #fff;\r\n    }\r\n    table#cart tbody td:before {\r\n        content: attr(data-th);\r\n        font-weight: bold;\r\n        display: inline-block;\r\n        width: 8rem;\r\n    }\r\n    table#cart tfoot td {\r\n        display: block;\r\n    }\r\n    table#cart tfoot td .btn {\r\n        display: block;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<h4 class=\"justify-content-between align-items-center mb-3\">\n  <span class=\"text-muted\">Your cart</span>\n  <span class=\"badge badge-secondary badge-pill\">{{totalitems}}</span>\n</h4>\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-10 col-md-offset-1\">\n      <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <th >Product</th>\n            <th class=\"text-center\">Price</th>\n            <th> </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of items; let i = index \" >\n            <td class=\"col-sm-8 col-md-6\">\n              <div class=\"media\">\n                <a class=\"thumbnail pull-left\" href=\"#\">\n                  <img class=\"media-object\" src=\"{{item.img}}\" style=\"width: 72px; height: 72px;\"> </a>\n                <div class=\"media-body\">\n                  <h4 class=\"media-heading \">{{item.name}}</h4>\n                </div>\n              </div>\n            </td>\n            <td class=\"col-sm-1 col-md-1 text-center\">\n              <strong>$350</strong>\n            </td>\n            <td class=\"col-sm-1 col-md-1\">\n              <button  class=\"btn btn-danger btn-sm\"(click)=\"removeProduct(i)\">\n                <span class=\"glyphicon glyphicon-remove\"></span> Remove\n              </button>\n            </td>\n          </tr>\n          <tr>\n            <td>   </td>\n            <td>\n              <h5>Subtotal</h5>\n            </td>\n            <td class=\"text-right\">\n              <h5>\n                <strong>${{subtotal}}</strong>\n              </h5>\n            </td>\n          </tr>\n          <tr>\n            <td>   </td>\n            <td>\n              <h5>Estimated shipping</h5>\n            </td>\n            <td class=\"text-right\">\n              <h5>\n                <strong>$6.94</strong>\n              </h5>\n            </td>\n          </tr>\n          <tr>\n            <td>   </td>\n            <td>\n              <h3>Total</h3>\n            </td>\n            <td class=\"text-right\">\n              <h3>\n                <strong>${{total}}</strong>\n              </h3>\n            </td>\n          </tr>\n          <tr>\n            <td>   </td>\n            <td>\n              <button  class=\"btn btn-default\" *ngIf=\"authService.loggedIn()\" [routerLink]=\"['/products']\">\n                <span class=\"glyphicon glyphicon-shopping-cart\"></span> Continue Shopping\n              </button>\n            </td>\n            <td>\n              <button type=\"button\" class=\"btn btn-success\" *ngIf=\"authService.itemslenth()\"(click)=\"checkout()\">\n                Checkout\n                <span class=\"glyphicon glyphicon-play\"></span>\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.quantity = 1;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        this.items = this.authService.getOrderFromItems();
        if (this.items == null) {
            this.flashMessage.show('Please add some items to Cart', { cssClass: 'alert-danger', timeout: 2000 });
            this.subtotal = 0;
            this.total = 0;
            this.totalitems = 0;
        }
        else {
            this.totalitems = this.items.length;
            this.subtotal = this.totalitems * 350;
            this.total = this.subtotal + 6.94;
        }
    };
    ShoppingCartComponent.prototype.removeProduct = function (i) {
        if (i > -1) {
            this.items.splice(i, 1);
        }
        this.totalitems = this.items.length;
        this.subtotal = this.totalitems * 350;
        this.total = this.subtotal + 6.94;
        this.authService.updateItemsInOrder(this.items);
        this.router.navigate(['/cart']);
    };
    ShoppingCartComponent.prototype.itemslenth = function () {
        if (this.items.length == null || this.items.length == 0) {
            return false;
        }
        else
            return true;
    };
    ShoppingCartComponent.prototype.checkout = function () {
        if (this.items.length == null || this.items.length == 0) {
            this.flashMessage.show('Please add some items to Cart', { cssClass: 'alert-danger', timeout: 3000 });
        }
        else {
            this.authService.storeTotal(this.total);
            this.router.navigate(['/checkout']);
        }
    };
    ShoppingCartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__("./src/app/components/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__("./src/app/components/shopping-cart/shopping-cart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ;
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProducts = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/product', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.addProduct = function (product) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/addproduct', product, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.editProduct = function (product) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.put('users/editproduct', product, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteProduct = function (productID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.delete('users/deleteproduct/' + productID, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('role', user.role);
        this.authToken = token;
        this.user = user;
        this.role = user.role;
    };
    AuthService.prototype.storeProductData = function (product1) {
        this.oldproduct = product1;
    };
    AuthService.prototype.storeItemToOrder = function (item) {
        var tempItem = JSON.parse(localStorage.getItem("items"));
        if (tempItem == null)
            tempItem = [];
        localStorage.setItem("item", JSON.stringify(item));
        tempItem.push(item);
        localStorage.setItem("items", JSON.stringify(tempItem));
    };
    AuthService.prototype.updateItemsInOrder = function (items) {
        localStorage.removeItem("items");
        localStorage.setItem("items", JSON.stringify(items));
    };
    AuthService.prototype.getOrderFromItems = function () {
        return this.iteml = JSON.parse(localStorage.getItem("items"));
    };
    AuthService.prototype.orderClear = function () {
        localStorage.removeItem("items");
        localStorage.removeItem("item");
    };
    AuthService.prototype.getProductData = function () {
        return this.oldproduct;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.getUser = function () {
        return this.user;
    };
    AuthService.prototype.getOrder = function () {
        return this.iteml = JSON.parse(localStorage.getItem("items"));
        ;
    };
    AuthService.prototype.storeTotal = function (total) {
        this.totall = total;
    };
    AuthService.prototype.getTotal = function () {
        return this.totall;
    };
    AuthService.prototype.itemslenth = function () {
        var tempItem = JSON.parse(localStorage.getItem("items"));
        if (tempItem.length > 0) {
            return true;
        }
        else
            return false;
    };
    AuthService.prototype.userRole = function () {
        var role = localStorage.getItem('role');
        if (role == 'admin')
            return true;
        else
            return false;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateProduct = function (product) {
        if (product.name == undefined || product.img == undefined || product.description == undefined || product.Catag == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEditProduct = function (product) {
        if (product.name == undefined || product.img == undefined || product.description == undefined
            || product.Catag == undefined || product._id == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateCheckout = function (chekcout) {
        if (chekcout.firstName == undefined || chekcout.lastName == undefined || chekcout.email == undefined
            || chekcout.Address == undefined || chekcout.state == undefined || chekcout.city == undefined
            || chekcout.zip == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateCard = function (Card) {
        if (Card.ccname == undefined || Card.ccnumber == undefined
            || Card.ccexpiration == undefined || Card.cccvv == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map