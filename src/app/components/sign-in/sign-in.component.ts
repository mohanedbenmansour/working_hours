import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(public userService: UserService, private router: Router) {}

  serverErrorMessages: boolean;
  submitted: boolean;
  ngOnInit(): void {
    if (this.userService.isLoggedIn()) this.router.navigate(['/home']);
  }
  onSubmit(form: FormGroup) {
    this.submitted = true;
    this.userService.login(form.value).subscribe(
      (res) => {
        this.userService.setToken(res['accessToken']);

        this.userService.setId(res['data'].userId);
        alert('welcome to your profile');
        this.goToDashboard();
      },
      (err) => {
        this.serverErrorMessages = true;
        console.log(err);
      }
    );
  }
  goToDashboard() {
    this.router.navigateByUrl('/addpost');
  }
}
