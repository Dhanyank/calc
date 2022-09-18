import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const options = {
  headers: new HttpHeaders()
}
@Injectable({
  providedIn: `root`
})
export class DataService {

  input: any;
  answer: any;


  constructor(private http: HttpClient) {
     this.getDetails()
  }

  saveDetails() {

    if (this.input) {
      localStorage.setItem("input", JSON.stringify(this.input))
    }

  }


  // //to get data from local storage
  getDetails() {



    if (localStorage.getItem("answer")) {
      this.answer = JSON.parse(localStorage.getItem('answer') || ``)
    }


  }


  // submit(input:any)
  // {
  //   const data=-{
  //     input
  //   }
  //   return this.http.post('http://localhost:3000/submit', data)

  

  calc(qstn: any) {

    const data = {
      qstn
    }

    return this.http.get('http://localhost:3000/calc')

  }

}