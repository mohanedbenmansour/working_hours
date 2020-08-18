import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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

  constructor(
    public userService: UserService,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  serverErrorMessages: boolean;
  submitted: boolean;
  ngOnInit(): void {
    // if (this.userService.isLoggedIn()) this.router.navigate(['/addpost']);
  }
  onSubmit(form: FormGroup) {
    this.submitted = true;
    this.userService.login(form.value).subscribe(
      (res) => {
        this.userService.setToken(res['token']);
        this.showSuccess();
        this.goToDashboard();
      },
      (err) => {
        if (err.error.statusCode == 500) this.showUserError();
        else this.showServerError();
      }
    );
  }
  goToDashboard() {
    this.router.navigateByUrl('/addpost');
  }

  showSuccess() {
    this.toastrService.success('you have signed in successfully', 'success', {
      timeOut: 2000,
    });
  }
  showServerError() {
    this.toastrService.error(
      'something went wrong check your password',
      'server error',
      {
        timeOut: 3000,
      }
    );
  }
  showUserError() {
    this.toastrService.error('user does not exist', 'server error', {
      timeOut: 3000,
    });
  }
}
