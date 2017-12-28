import { Component, OnInit } from '@angular/core';

import { ItemService } from '../shared/item.service';

import { Item } from '../shared/item';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent implements OnInit {

  items: Observable<Item[]>;
  showSpinner = true;

  constructor(private itemService: ItemService) {
    this.items = this.itemService.getItemsList();
    console.log(this.items);
    this.items.subscribe((items) => {
      console.log(items);
    });
  }

  ngOnInit() {
    this.items.subscribe((x) => {
      this.showSpinner = false;
    });
  }

  deleteItems() {
    this.itemService.deleteAll();
  }
}
