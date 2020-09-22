import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const firstParam: string = this.route.snapshot.queryParamMap.get('Token');
    const secondParam: string = this.route.snapshot.queryParamMap.get('courseId');
    const thirdParam: string = this.route.snapshot.queryParamMap.get('examId');

    console.log(firstParam);
    console.log(secondParam);
  }

}
