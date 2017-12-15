import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  public formModel: FormGroup;
  public fieldWidth: number = 6;

  public constructor(
    private _fb: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.formModel = this._fb.group({
      loginEmail: ['', [Validators.required, Validators.email]],
      loginPassword: ['', [Validators.required, Validators.minLength(this.fieldWidth)]]
    });
  }

  public get loginEmail(): AbstractControl { return this.formModel.get('loginEmail'); }

  public get loginPassword(): AbstractControl { return this.formModel.get('loginPassword'); }

}
