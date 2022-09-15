import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { products } from './products';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can add a product', () => {
    const phone1 = products[0];
    service.addToCart(phone1);

    const inCart = service.getItems();
    expect(inCart).toEqual([phone1]);
  })

  it('can remove a product from the cart', () => {
    const phone1 = products[0];
    const phone2 = products[1];
    service.addToCart(phone1);
    service.addToCart(phone2);

    service.remove(phone1);

    const inCart = service.getItems();
    expect(inCart).toEqual([phone2]);
  })
});
