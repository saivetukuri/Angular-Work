import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../uimodel/user';
import Validation from '../utils/validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password:new FormControl('')
  });
  title:string="";
    user:User=new User("","","");
    data1:any;
    users: User[] = [];
    isLoggedIn:boolean=false;

  submitted = false;
  constructor(private formBuilder: FormBuilder,private authService: AuthService,private router:Router, private route:ActivatedRoute) {}

  ngOnInit(): void {

    console.log("===================in Login Init");
    this.isLoggedIn=false;

    this.form = this.formBuilder.group(
{
username: ['',[Validators.required]],
password: ['',[Validators.required,
  Validators.minLength(5),
  Validators.maxLength(10)]]

}
    );
    this.title = this.route.snapshot.data['title'];


  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;


    if (this.form.invalid) {
      return;
    }

console.log('Form Data: ');
      console.log(this.form);
      console.log("==.."+this.form.value['username']);
      this.data1=this.form.value;
    
      let id = this.form.value['username'];
      let pass = this.form.value['password'];
      console.log("===============ID==" + JSON.stringify(id));
      if (id != "saidv" || pass!="saidv123"){
        //throw new Error('Only Interna Users are allowed');
        alert("Invalid Credentials");
        this.form.reset();

        throw new Error("{'err':'Only Interna Users are allowed','mod':'login'}");

      }

      this.authService.isLoggedIn = true;
      this.isLoggedIn=true;
      //this.router.navigate(['/lhsnav']);
      this.router.navigate(['mainpage']);

      // this.authService.fetchUser(id).subscribe(user => {
      //   this.user=user;
      //   console.log("===============IN==" + JSON.stringify(this.user.username));
      //   localStorage.setItem('loginSessId', user.username);
      //   this.authService.isLoggedIn = true;
      //   this.isLoggedIn=true;
      //   //this.router.navigate(['/lhsnav']);
      //   this.router.navigate(['mainpage']);
      // })

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }


}
