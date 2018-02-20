import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { Profile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 user:Object;
  constructor(private authSerivce:AuthService,private router:Router) { }

  ngOnInit() {
    this.authSerivce.getProfile().subscribe(profile=>{
      this.user=profile.user;
    }, err => {
      console.log(err);
      return false;
    });
  }

}
