import { Injectable } from '@angular/core';
import { Http,Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
    authToken:any;
    user:any;
  product:any;
  oldproduct:any;
  role:any;
    constructor(private http:Http)  { }
    registerUser(user){
      let headers=new Headers();
      headers.append('Content-Type','application/json');
      return this.http.post('users/register',user,{headers:headers})
      .map(res=>res.json());
    };
  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/authenticate', user, { headers: headers })
      .map(res => res.json());
  }
  getProfile(){
    let headers = new Headers();
    this.loadToken();

    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('users/profile', { headers: headers })
      .map(res => res.json());
  }

  getProducts(){
    let headers = new Headers();
    
    headers.append('Content-Type', 'application/json');
    return this.http.get('users/product', { headers: headers })
      .map(res => res.json());
  }

  addProduct(product){
    let headers = new Headers();
    this.loadToken();

    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/addproduct',product, { headers: headers })
      .map(res => res.json());
  }

  editProduct(product){
    let headers = new Headers();
    this.loadToken();

    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.put('users/editproduct', product, { headers: headers })
      .map(res => res.json());
  }


  deleteProduct(productID) {
    let headers = new Headers();
    this.loadToken();

    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.delete('users/deleteproduct/'+productID, { headers: headers })
      .map(res => res.json());
  }



  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('role', user.role);
    this.authToken= token;
    this.user= user;
    this.role=user.role;
  }

  storeProductData(product1:any){
    this.oldproduct = product1;
 
  }

  getProductData() {
    return this.oldproduct;
  } 

  loadToken(){
    const token=localStorage.getItem('id_token');
    this.authToken=token;
  }
  
  loggedIn(){
    return tokenNotExpired('id_token');
  }

  userRole(){
    const role = localStorage.getItem('role');
    if(role=='admin')
      return true;
    else 
        return false;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
