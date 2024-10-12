import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  reactiveLoginForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required]),
    status: new FormControl('pending', [Validators.required]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  get name() {
    return this.reactiveLoginForm.get("name");
  }
  get phone() {
    return this.reactiveLoginForm.get("phone");
  }
  get amount() {
    return this.reactiveLoginForm.get("amount");
  }



  Submit() {
    if (!this.reactiveLoginForm.valid) {
      return;
    }
    console.log(" data ", this.reactiveLoginForm.value)
  }

}
