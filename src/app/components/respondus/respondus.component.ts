import { Component, OnInit } from '@angular/core';
import { RespondusService } from 'src/app/services/respondus.service';

@Component({
  selector: 'app-respondus',
  templateUrl: './respondus.component.html',
  styleUrls: ['./respondus.component.css']
})
export class RespondusComponent implements OnInit {

  launchUri : string;

  constructor( private respondusService : RespondusService) { }
  
  ngOnInit(): void {
    //this.retrieveLaunchUrl();
  }

  retrieveLaunchUrl(): void {
    this.respondusService.getlaunchUrl("123",123,235)
      .subscribe(
        data => {
          this.launchUri = data;
          console.log(data);         
        },
        error => {
          console.log(error);
        });
      }
   
}
