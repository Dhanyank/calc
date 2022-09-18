import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-qstn',
  templateUrl: './qstn.component.html',
  styleUrls: ['./qstn.component.css']
})
export class QstnComponent implements OnInit {
  

  
  submitForm = this.fb.group({

    input:''

  })
  

  

  constructor(private ds: DataService,private router:Router,private fb :FormBuilder) {}
    
    
    
  
  ngOnInit(): void {

  }

  submit()
  {
    this.router.navigateByUrl("answer")

  }

  // calc()
  // {

  //   this.input = JSON.parse(localStorage.getItem('input') || '')
  //     this.ds.calc(this.input)
  //      .subscribe((result: any) => {
  //        if (result) {
  //         this.answer = result.calc
  //         }
  //       },
  //       )
        
  //   this.answer=result.calc
  // }





}

  // submit()
  // {
  //   var input = this.submitForm.value.


  //   // this.result()
  //   this.router.navigateByUrl("answer")

  // }

  // calc() {
  //       let formula = this.input;
    
  //       let lastKey = formula[formula.length - 1];
    
  //       if (lastKey === '.') {
  //         formula = formula.substr(0, formula.length - 1);
  //       }
    
  //       lastKey = formula[formula.length - 1];
    
  //       if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.') {
  //         formula = formula.substr(0, formula.length - 1);
  //       }
    
  //       console.log("Formula " + formula);
  //       this.result = eval(formula);
  //     }
    
  //     answer() {
  //       this.calc();
  //       this.result = this.result;
  //       if (this.input == "0") this.input = "";
  //     }
    
    

