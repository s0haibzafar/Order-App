import { Component, OnInit } from '@angular/core';
import { DexieService, OrderItem } from 'src/app/services/dexie-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isDeleteEnabled = false;  // Track if delete button should be enabled
  orderItems: OrderItem[] = [];

  constructor(private dexieService: DexieService) { }

  ngOnInit(): void {
    this.loadItems();
  }


  // Load all items from the database
  loadItems() {
    this.dexieService.getAllItems().then((items) => {
      this.orderItems = items;
    });
  }

  // Delete an item by its id
  deleteItem(id: number | undefined) {
    this.dexieService.deleteItem(id).then(() => {
      this.loadItems();  // Reload the item list
    });
  }


  onCheckboxChange(){
    this.isDeleteEnabled = this.orderItems.some(item => item.selected); 
  }

  // Delete selected items
  deleteSelectedItems() {
    const selectedItems = this.orderItems.filter(item => item.selected);

    if (selectedItems.length > 0) {
      selectedItems.forEach(item => {
        this.deleteItem(item.id);

      });

      // Disable the delete button after deletion
      this.isDeleteEnabled = false;
    }
  }

  updateSelectedItems() {
    const selectedItems = this.orderItems.filter(item => item.selected);

    if (selectedItems.length > 0) {
      selectedItems.forEach(item => {
        item.status = "paid"
        this.dexieService.updateItem(item.id, item).then(() => {
          this.loadItems();  // Reload the item list
        });
        item.selected = false;
      });

      // Disable the delete button after deletion
      this.isDeleteEnabled = false;
    }
  }



}
