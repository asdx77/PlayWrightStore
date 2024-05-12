import { expect, type Locator, type Page } from '@playwright/test';

export class ProductDetailsPage {
  readonly page: Page;
  readonly quantityTxtBox: Locator;
  readonly addToCartBtn: Locator;
  readonly productAddedLbl: Locator;
  readonly viewCartLk: Locator;

  constructor(page: Page) {
    this.page            = page;  
    this.quantityTxtBox  = page.locator('#quantity');
    this.addToCartBtn    = page.locator('button.btn.btn-default.cart');
    this.quantityTxtBox  = page.locator('#quantity');
    this.productAddedLbl = page.getByRole('heading', { name: 'Added!' });
    this.viewCartLk      = page.getByRole('link', { name: 'View Cart' });
  } 

  async checkProductTitle(productName: string) {
    await expect(this.page.getByRole('heading', { name: productName })).toBeVisible();   
  }

  async addQuantity(quantity: string) {
   await this.quantityTxtBox.fill(quantity);      
  }

  async clickAddtoCart() {
    await this.addToCartBtn.click();   
    await expect(this.productAddedLbl).toBeVisible(); 
  }

  async clickViewCart() {
    await this.viewCartLk.click();      
  }

}