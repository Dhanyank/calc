import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  
  qstn:any;
  
answer:any;
  resultForm = this.fb.group({

    answer:""
    

  })




  constructor(private ds: DataService,private fb:FormBuilder,private router:Router) {
  
this.answer=localStorage.getItem('answer')
  }    
  ngOnInit(): void {
    
  }
calc()

  {

    
 this.qstn = JSON.parse(localStorage.getItem('input') || "")
      this.ds.calc(this.qstn)
      .subscribe((result: any) => {
        if (result) {
          this.answer = result.calc
        }
      },
        (result) => {
          alert(result.error.message)
        }
      )
  
      }

  
  
    
back()
  {
    
    this.router.navigateByUrl("")

  }
  // calc(){
    
}
  





























// calc() {
//   let formula = this.input;

//   let lastKey = formula[formula.length - 1];

//   if (lastKey === '.') {
//     formula = formula.substr(0, formula.length - 1);
//   }

//   lastKey = formula[formula.length - 1];

//   if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.') {
//     formula = formula.substr(0, formula.length - 1);
//   }

//   console.log("Formula " + formula);
//   this.answer = eval(formula);

// }

//   result() {

//     this.calc();
//     this.input = this.result;
//     if (this.input == "0") this.input = "";

// }


// displayNumber(input)
// {
//     let txtbox=document.querySelector("#result")
//     txtbox.value+=num
// }
// function clearBox()
// {
//     result.value=""
// }
// calc()
// {
//   result.value = eval(result.value)
// }
// }