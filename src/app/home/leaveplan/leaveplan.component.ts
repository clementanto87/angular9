import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-leaveplan',
  templateUrl: './leaveplan.component.html',
  styleUrls: ['./leaveplan.component.scss']
})
export class LeaveplanComponent implements OnInit {

  questions = [
    {
      value: "How happy you are with work?"
    }, {
      value: "Are you happy about your manager?"
    }
  ];
  data = "";
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      data: []
    })
  }

  onSave() {
    console.log(this.form.value, "hello");
  }

}
