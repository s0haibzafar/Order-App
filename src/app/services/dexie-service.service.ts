import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class DexieService extends Dexie{

  public orderItems!: Dexie.Table<OrderItem, number>;

  constructor() {
    super('OrderMngDB');

    this.version(1).stores({
      items: '++id, name, description'  // Define the schema
    });

    this.orderItems = this.table('items');
   }

   // Add a new item to the database
  addItem(item: OrderItem): Promise<number> {
    console.log("--------> data ", item);
    return this.orderItems.add(item);
  }

   // Get all items from the database
   getAllItems(): Promise<OrderItem[]> {
    return this.orderItems.toArray();
  }

  // Delete an item from the database by its id
  deleteItem(id: number | undefined): Promise<void> {
    if(id){
      return this.orderItems.delete(id);
    }
    return Promise.resolve();
  }

  // Update an item in the database
  updateItem(id: number | undefined, changes: Partial<OrderItem>): Promise<number> {
    if(id){
      return this.orderItems.update(id, changes);
    }
    return Promise.resolve(1);
  }

}



// Define the Item model
export interface OrderItem {
  id?: number;
  name?: string;
  phone?: number;
  amount?: number;
  status?: string;
  date?: string;
  selected?: false;
}