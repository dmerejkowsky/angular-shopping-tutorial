import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  constructor() {
    this.product = undefined;
  }

  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();

  ngOnInit(): void {}
}
