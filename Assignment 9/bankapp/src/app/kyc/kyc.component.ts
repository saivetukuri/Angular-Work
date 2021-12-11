import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.css']
})
export class KycComponent implements OnInit {

  form: FormGroup = new FormGroup({
    doctype: new FormControl(''),
    kycid: new FormControl(''),
    kycname: new FormControl(''),
    acceptTerms: new FormControl(false)
  });
  
  submitted = false;
  verified= false;
  doctype:string[]= [];

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.doctype=["Passport","Voter's Identity Card","Driving License","Aadhaar Card","PAN Card"];
    
    this.form = this.formBuilder.group(
      {
        
        doctype: [
          '',
          [
            Validators.required,
            
          ]
        ],
        kycid: [
          '',
          [
            Validators.required,
          ]
        ],
        kycname:[
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        
        acceptTerms: [false, Validators.requiredTrue]
    
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

this.verified=true;

   

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
