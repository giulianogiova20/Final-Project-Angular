import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
/*   form!: FormGroup;
  
  constructor(
    private registerService: RegisterService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.form = new FormGroup({
      user: new FormControl(),
      password: new FormControl(),
      isAdmin: new FormControl(false)
    });
  }

  register(){
    let user: User = {
      user: this.form.value.user,
      password: this.form.value.password,
      isAdmin: this.form.value.isAdmin
    }
    this.registerService.register(user);
    this.router.navigate(['home']);
  } */
}
