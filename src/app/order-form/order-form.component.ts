import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DexieService, OrderItem } from '../services/dexie-service.service';
import * as moment from 'moment';

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

  constructor(private dexieService: DexieService, protected router: Router,) { }

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


  getCurrentTime(): string {
    const now = moment();
    const formattedTime = now.format('YYYY-MM-DD HH:mm:ss'); // Customize the format as needed
    return formattedTime;
  }

  Submit() {
    if (!this.reactiveLoginForm.valid) {
      return;
    }

    console.log(" data ", this.reactiveLoginForm.value)

    // var data: OrderItem;
    const orderItem = { ...this.reactiveLoginForm.value };
    const date = this.getCurrentTime();

    this.dexieService.addItem({ ...orderItem, date } as OrderItem).then(() => {
      this.router.navigate(['/']);
    });

  }

}
