import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://localhost:5001/api/respondus';



@Injectable({
  providedIn: 'root'
})
export class RespondusService {

  constructor(private http: HttpClient) { }

  getlaunchUrl(sessionKey: string , courseId : number, examId : number ): Observable<any> {
    return this.http.get(`${baseUrl}/launchurl?sessionKey=${sessionKey}&courseId=${courseId}&examId=${examId}`);
  }

  getHandshakeChallenge(sessionKey: string , courseId : number, examId : number ): Observable<any> {
    return this.http.get(`${baseUrl}/handshakechallenge?sessionKey=${sessionKey}&courseId=${courseId}&examId=${examId}`);
  }
}
