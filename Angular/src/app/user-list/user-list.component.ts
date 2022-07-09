import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import  * as $  from 'jquery'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  // Server response message
  message  = "";

  // Server error
  success: boolean = true;
  
  // Cotains User list
  list = [];

  // Search form
  form = {
    "firstName":"",
    "login_id":"",
    "pageNo":1,
    "index":1,
    "MaxId":1,
    "LastId":1,
    "mesg":""
  }
/**
 * 
 * @param router 
 * @param service 
 */
  constructor(private router:Router,private service:UserService) { }

/**
 * Loads list
 */
  ngOnInit() {
    this.search();
    console.log("THIs.search()------")
  }
   
/**
 * Edits a User
 * @param id
 */

  edit(id){
    this.router.navigateByUrl("/user/" + id);
  }

/**
 * Deletes a record
 */

  delete(id){
    var _self = this;
    this.service.delete(id, function (res, error){
      if (res.data.error){
        alert("Error: " + res.data.message);
        return;
      }else {
        _self.success = true;
        _self.message = res.data.message;
      }
    });
    this.form = {
      "firstName":"",
      "login_id":"",
      "pageNo":1,
      "index":1,
      "MaxId":1,
      "LastId":1,
      "mesg":""
    }  
     this.search();
     setTimeout(() => {
      $('#timeout').fadeOut(1000);
    }, 2000);

  }

/**
 * Searches and get list
 */

  search() {
    var _self = this;
    console.log("FFFFFFFFFFF--------->",this.form);
    this.service.search(this.form, function (res, error){
      if (error){
        alert("Error: " + res.result.message);
        return ;
      }
      _self.form.index = res.result.index;
      _self.form.LastId = res.result.LastId;
      _self.form.MaxId = res.result.MaxId;
      _self.form.mesg = res.result.mesg;
      _self.list = res.result.data;
      console.log("LLLLLLLLLL--------->",_self.list);
    });
  }

  /**
   *  Submit the form  */

  submit(){
    var _self = this;
    _self.form.pageNo = 1;
    this.search();
  }

  // Get previous records

  previous(){
    var _self = this;
    _self.form.pageNo -= 1; 
    this.search();
  }

  // Get next records

  next(){
    var _self = this;
    _self.form.pageNo += 1;
    this.search();
  }

  // Reloads the page

  reload(){
    window.location.reload();
  }
}
