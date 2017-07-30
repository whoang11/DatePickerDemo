import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  datePickerConfig: any = {};
  appointmentForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.datePickerConfig = {
      format: 'M-D-YYYY'
    };

  }

  ngOnInit() {
    this.appointmentForm = this.fb.group({
          streetAddress: [''],
          appointmentDate: [''],
    });
  }

}
