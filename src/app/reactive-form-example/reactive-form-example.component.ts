import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.css'],
})
export class ReactiveFormExampleComponent implements OnInit {
  signupForm = this.formBuilder.group({
    email: ['', [Validators.required]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  });

  // signupForm = new FormGroup({
  //   username: new FormControl(""),
  //   password: new FormControl(""),
  //   confirmPassword: new FormControl("")
  // });
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
