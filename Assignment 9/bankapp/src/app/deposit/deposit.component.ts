import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  form: FormGroup = new FormGroup({
    depostype: new FormControl(''),
    age: new FormControl(''),
    prinamo: new FormControl(''),
    term: new FormControl('')
  });
  interest:number=0;
  rate:number=0;
  submitted = false;
  depostype:string[]= [];
  age:string[]=[];

  dtype:string="";
  atype:string="";
  final:number=0;
  n:number=0;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.depostype=["Fixed Deposit","Recurring Deposit"];
    this.age=["Normal Citizen","Senior Citizen"]
    this.form = this.formBuilder.group(
      {
        
        depostype: [
          '',
          [
            Validators.required,
            
          ]
        ],
        age: [
          '',
          [
            Validators.required,
          ]
        ],
        prinamo:[
          '',
          [
            Validators.required,
            Validators.min(100),
            Validators.max(1000000)
          ]
        ],
        
        term: ['', Validators.required
    ]
      }
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    
    this.dtype=this.form.value['depostype'];
    this.atype=this.form.value['age'];

    if(this.atype=="Normal Citizen"){
      this.rate=6.5;
    }
    else if(this.atype=="Senior Citizen"){
      this.rate=7;
    }

    
 if(this.dtype== "Fixed Deposit"){
this.interest = (this.form.value['prinamo'] * this.rate * this.form.value['term']/100)*this.form.value['term'];
this.final = this.form.value['prinamo'] + this.interest;
 } 
 else if(this.dtype== "Recurring Deposit"){
  this.n = this.form.value['term'] * 12;
this.interest= this.form.value['prinamo'] * this.n * (this.n + 1) * this.rate / 2400;
this.final = this.form.value['prinamo'] * this.n + this.interest;
 }

console.log(this.interest);
console.log(this.final);
   

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
