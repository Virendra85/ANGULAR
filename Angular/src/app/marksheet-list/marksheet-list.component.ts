import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarksheetService } from '../service/marksheet.service';

@Component({
  selector: 'app-marksheet-list',
  templateUrl: './marksheet-list.component.html',
  styleUrls: ['./marksheet-list.component.css']
})
export class MarksheetListComponent implements OnInit {

  // Search form
  form = {
    "rollNumber":"",
    "pageNo":1,
    "index":1,
    "MaxId":1,
    "LastId":1,
    "mesg":1
  }

  // Contains list
  list = []

  // Server success/fail message
  message = "";

  // Server error
  success:boolean = true;

  constructor(private router:Router, private service:MarksheetService) { }

  ngOnInit() {
    this.search();
  }

  /** Edit a record */

  edit(id){
    this.router.navigateByUrl("/marksheet/" + id);
  }

  /** Delete a record */

  delete(id){
    var _self = this;
    this.service.delete(id, function (res,error){
      if(error){
        alert("Error: " + error.message);
        return;
      }
      _self.success = true;
      _self.message = res.data.message
      _self.form = {
        "rollNumber":"",
        "pageNo":1,
        "index":1,
        "MaxId":1,
        "LastId":1,
        "mesg":1    
      };
      _self.search();
      setTimeout(()=>{
        $("#timeout").fadeOut(1000);
      },2000);
    })
  };

  /** Search and get list */

  search() {
    var _self = this;
    this.service.search(this.form, function (res,error){
      if (error){
        alert("Error: " + error.message);
        return;
      }
      _self.form.index = res.result.index;
      _self.form.LastId = res.result.LastId;
      _self.form.MaxId = res.result.MaxId;
      _self.form.mesg = res.result.mesg;
      _self.list = res.result.data;
    })
  };

  /** Submit the form */

  submit(){
    this.form.pageNo = 1;
    this.search();
  }

  /** Get previous records */

  previous(){
    this.form.pageNo -= 1;
    this.search();
  }

  /** Get next records */

  next(){
    this.form.pageNo += 1;
    this.search();
  }

  reload(){
    window.location.reload();
  }

}
