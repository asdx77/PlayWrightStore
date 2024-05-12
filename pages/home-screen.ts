import { expect, type Locator, type Page } from '@playwright/test';

export class HomeScreenPage {
  readonly page: Page;
  readonly closeAddBtn: Locator;
  readonly loginBtn: Locator;
  readonly logoutBtn: Locator;
  readonly cartBtn: Locator;
  readonly deleteAcctBtn: Locator;
  readonly contactusBtn: Locator;
 
  constructor(page: Page) {
    this.page          = page;  
    this.closeAddBtn   = page.getByRole('button', { name: 'Close ad' });
    this.loginBtn      = page.getByRole('link', { name: ' Signup / Login' }); 
    this.logoutBtn     = page.getByRole('link', { name: ' Logout' });
    this.cartBtn       = page.getByRole('link', { name: ' Cart' });
    this.deleteAcctBtn = page.getByRole('link', { name: ' Delete Account' });
    this.contactusBtn  = page.getByRole('link', { name: ' Contact us' });        
  }

  async goto() {
    await this.page.goto('https://automationexercise.com/');
  }

  async clickLogin() {
    await this.loginBtn.click();      
  }

  async clickLogout() {
    await this.logoutBtn.click();      
  }

  async clickCart() {
    await this.cartBtn.click();      
  }

  async clickContactus() {
    await this.contactusBtn.click();      
  }

  async clickDelete() {
    await this.deleteAcctBtn.click();      
  }

  async closeAdds() {
    if (await this.closeAddBtn.isVisible({ timeout: 3000 })) {
      await this.closeAddBtn.click();
    }
  }

  async clickViewProduct(prodId: string) {
    await this.page.keyboard.press('PageDown');
    await this.page.keyboard.press('PageDown');
  
    await this.page.locator(`xpath=//a[@href=\'/product_details/${prodId}\']`).click();  
  }




}