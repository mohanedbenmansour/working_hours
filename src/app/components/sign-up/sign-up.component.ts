import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  serverErrorMessages: boolean;
  submitted: boolean;
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {}
  constructor(
    public userService: UserService,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  onSubmit(form: FormGroup) {
    this.submitted = true;
    this.userService.createUser(form.value).subscribe(
      (data) => {
        this.showSuccess();
        form.reset();
      },
      (err) => {
        console.log(err);
        this.serverErrorMessages = true;
      }
    );
  }
  get email() {
    return this.profileForm.get('email');
  }
  get name() {
    return this.profileForm.get('name');
  }
  get password() {
    return this.profileForm.get('password');
  }
  showSuccess() {
    this.toastrService.success(
      'you have signed up successfully',
      'Toastr fun!',
      { timeOut: 2000 }
    );
  }
  showError() {
    this.toastrService.error('something went wrong', 'Major Error', {
      timeOut: 3000,
    });
  }
}
