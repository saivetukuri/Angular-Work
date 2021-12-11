import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import Validation from '../utils/validation';
@Component({
  selector: 'app-fundtransfer',
  templateUrl: './fundtransfer.component.html',
  styleUrls: ['./fundtransfer.component.css']
})
export class FundtransferComponent implements OnInit {
  form: FormGroup = new FormGroup({
    bname: new FormControl(''),
    baccno: new FormControl(''),
    fund: new FormControl(''),
    password: new FormControl(''),
    transtype: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;
  transList:string[]= [];
  transfer:boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.transList=["NEFT","IMPS","RTGS"]
    this.form = this.formBuilder.group(
      {
        
        bname: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        baccno: [
          '',
          [
            Validators.required,
            Validators.minLength(9),
            Validators.maxLength(18),
            Validators.pattern('[0-9]{9,18}$')
          ]
        ],
        fund:[
          '',
          [
            Validators.required,
            Validators.min(100),
            Validators.max(1000000)
          ]
        ],
        acceptTerms: [false, Validators.requiredTrue],
        transtype: ['', Validators.required]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
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


    if(this.form.value['fund']>20000){
      alert('Insufficient Balance');

      return;
    }


this.transfer=true;

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.transfer=false;
    this.form.reset();
  }

  }


