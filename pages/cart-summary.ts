import { expect, type Locator, type Page } from '@playwright/test';

export class CartPage {
  readonly page: Page; 
  readonly checkoutBtn: Locator;
  readonly regLoginBtn: Locator;
  readonly placeOrderBtn: Locator;


  constructor(page: Page) {
    this.page          = page;  
    this.checkoutBtn   = page.locator('a',  { hasText: 'Proceed To Checkout' });
    this.regLoginBtn   = page.locator('a',  { hasText: 'Register / Login' });
    this.placeOrderBtn = page.locator('a',  { hasText: 'Place Order' });
  } 

  async clickCheckout() {
    await this.checkoutBtn.click();   
  }

  async clickRegLogin() {
    await this.regLoginBtn.click();   
  }

  async clickPlaceOrder() {
    await this.placeOrderBtn.click();   
  }

}