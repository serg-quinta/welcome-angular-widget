import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
        email: ['', [Validators.required, Validators.minLength(this.fieldWidth)]],
        confirmEmail: ['', [Validators.required, Validators.minLength(this.fieldWidth)]]
      }),
      password: ['', [Validators.required, Validators.minLength(this.fieldWidth)]]
    });
  }

  public submit(value: any): void {
    console.log(value);
  }

}
