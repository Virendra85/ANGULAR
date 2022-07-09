import { Component, OnInit } from '@angular/core';
/** 
 *  ActivatedRoute  is used to read route parameters
 */
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';

/**
 * User Controller
 */

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // User Form
  form = {
    "id":0,
    "firstName":"",
    "lastName":"",
    "login_id":"",
    "password":"",
    "confirmpassword":"",
    "dob":"",
    "address":"",
    "gender":"",
    "mobilenumber":"",
    "role_Id":"",
    "role_Name":""
  }

  // Input Errors
  inputError = {
    "firstName":"",
    "lastName":"",
    "login_id":"",
    "password":"",
    "confirmpassword":"",
    "dob":"",
    "address":"",
    "gender":"",
    "mobilenumber":"",
    "role_Id":"",
    "role_Name":""
  }

  // Server Success/Fail message
  message = "";

  // Server Error
  success: boolean = true;
/**
 * 
 * @param aroute 
 * @param router 
 * @param service 
 */
  constructor(private aroute:ActivatedRoute,private router:Router,private service:UserService) { }
/**
 * Display record if primary key is used
 */
  ngOnInit() {
    var _self = this;
    this.form.id = parseInt(this.aroute.snapshot.paramMap.get("id"));
    if ( !isNaN(this.form.id) && this.form.id > 0){
      this.service.get(this.form.id, function (res, error){
        if (error) {
          alert("Error: "+error.message);
          return;
        }
        _self.form = res.data;
      });
    }
    this.preload();
  }

/**
 * Save a record
 */

  save(){
    var _self = this;
    this.ngOnInit();
    if(isNaN(this.form.id)){
      this.form.id = 0;
    }
    this.service.save(this.form, function (res, error){
      if (res.data.error){
        _self.success = false;
        _self.message = res.data.message;
        _self.inputError = res.form.inputError;
        return ;
      }
      _self.success = res.data.message;
      console.log("res.data.message---",_self.success)
      if (_self.success){
        _self.success = true;
        _self.message = res.data.message;
        _self.inputError = {
          "firstName":"",
          "lastName":"",
          "login_id":"",
          "password":"",
          "confirmpassword":"",
          "dob":"",
          "address":"",
          "gender":"",
          "mobilenumber":"",
          "role_Id":"",
          "role_Name":""
        }
      }else{
        _self.message = "Data was not saved";
      }
    });
  }

/**
 * Go to Search page
 */

  search(){
    this.router.navigateByUrl("/userlist");
  }

  preloadData = []

  preload() {
    var _self = this;
    this.service.preload(function (res,error){
      if (error){
        alert("Error: "+ error.message);
        return;
      }
      _self.preloadData = res.preloadList;
      console.log("PreloadList---------",res.preloadList);
    })
  }

  reset(){
    this.form = {
      "id":0,
      "firstName":"",
      "lastName":"",
      "login_id":"",
      "password":"",
      "confirmpassword":"",
      "dob":"",
      "address":"",
      "gender":"",
      "mobilenumber":"",
      "role_Id":"",
      "role_Name":""
    }
    this.ngOnInit();
    this.inputError = {
      "firstName":"",
      "lastName":"",
      "login_id":"",
      "password":"",
      "confirmpassword":"",
      "dob":"",
      "gender":"",
      "address":"",
      "mobilenumber":"",
      "role_Id":"",
      "role_Name":""
    }
    this.message = "";
  };



}
