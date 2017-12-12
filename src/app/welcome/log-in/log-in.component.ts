import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  public formModel: FormGroup;
  public constructor(
    private _fb: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.formModel = this._fb.group({
      loginEmail: ['', [Validators.required]],
      loginPassword: ['', [Validators.required]]
    });
  }

}
