import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public formModel: FormGroup;
  public fieldWidth: number = 6;

  public constructor(
    private _fb: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.formModel = this._fb.group({
      firstName: ['', [Validators.required, Validators.minLength(this.fieldWidth)]],
      lastName: ['', [Validators.required, Validators.minLength(this.fieldWidth)]],
      emailGroup: this._fb.group({
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', [Validators.required, Validators.email]]
      }),
      password: ['', [Validators.required, Validators.minLength(this.fieldWidth)]]
    });
  }

  public get firstName(): AbstractControl { return this.formModel.get('firstName'); }
  public get lastName(): AbstractControl { return this.formModel.get('lastName'); }
  public get emailGroup(): AbstractControl { return this.formModel.get('emailGroup'); }
  public get email(): AbstractControl { return this.formModel.get('emailGroup').get('email'); }
  public get confirmEmail(): AbstractControl { return this.formModel.get('emailGroup').get('confirmEmail'); }
  public get password(): AbstractControl { return this.formModel.get('password'); }

  public submit(value: any): void {
    console.log(value);
  }

}
