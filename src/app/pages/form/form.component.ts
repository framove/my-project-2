import { UserRegister } from '../../models/register.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public userRegisterForm: FormGroup;
  public userRegister: UserRegister;
  public submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userRegisterForm = this.formBuilder.group(
      {
      name: [''],
      password: [''],
      passwordRepeat: [''],
      }
    );
    console.log(this.userRegisterForm);
  }

  onSubmit() {
    console.log(this.userRegisterForm)
  }
}

