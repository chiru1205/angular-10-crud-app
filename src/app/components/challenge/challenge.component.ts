import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RespondusService } from 'src/app/services/respondus.service';
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {

  challengeString : string;
  constructor(private route: ActivatedRoute, private router: Router, private respondusService : RespondusService, private cookieService : CookieService) { }

  ngOnInit(): void {
    const firstParam: string = this.route.snapshot.queryParamMap.get('Token');
    if(firstParam == '123' && this.cookieService.get('rldbci') === '1'){
      this.router.navigate(['/exam', {Token: '123',courseId:123,examId:235}]);
    }else{
      this.retrieveHandshakeChallenge();
    }
  } 

  retrieveHandshakeChallenge(): void {
    this.respondusService.getHandshakeChallenge("123",123,235)
      .subscribe(
        data => {
          this.challengeString = data;
          this.router.navigate(['/challenge', {Token: '123',courseId:123,examId:235,rldbsi:1,rldbcv:data}])
          console.log(data);
        },
        error => {
          console.log(error);
        });
      }


}
