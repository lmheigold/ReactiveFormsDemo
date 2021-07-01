import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { avoidWord } from '../custom-validators/customValidation';

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.css'],
})
export class ReactiveFormExampleComponent implements OnInit {
  signupForm = this.formBuilder.group({
    email: ['', [Validators.required,avoidWord(RegExp('admin'))]],
    username: ['', [Validators.required,avoidWord(RegExp('hack'))]],
    password: ['', [Validators.required,avoidWord(RegExp('hack'))]],
    confirmPassword: ['', [Validators.required,avoidWord(RegExp('hack'))]],
  });

  // signupForm = new FormGroup({
  //   username: new FormControl(""),
  //   password: new FormControl(""),
  //   confirmPassword: new FormControl("")
  // });
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
