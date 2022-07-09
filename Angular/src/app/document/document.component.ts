import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    console.log("DOCUMENT--->")
    localStorage.setItem("sess_msg", "OOPS! Your Session has been expired");
    this.router.navigateByUrl("/sessionOut");
  }

}
