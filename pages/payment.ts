import { expect, type Locator, type Page } from '@playwright/test';

export class PaymentPage {
  readonly page: Page; 
  readonly nameTxtBx: Locator;
  readonly cardNumTxtBx: Locator;
  readonly cvcTxtBx: Locator;
  readonly expMonthTxtBx: Locator;
  readonly expYearTxtBx: Locator;
  readonly confirmBtn: Locator;

  constructor(page: Page) {
    this.page          = page;  
    this.nameTxtBx     = page.getByTestId('name-on-card');
    this.cardNumTxtBx  = page.getByTestId('card-number');
    this.cvcTxtBx      = page.getByTestId('cvc');
    this.expMonthTxtBx = page.getByTestId('expiry-month');
    this.expYearTxtBx  = page.getByTestId('expiry-year');
    this.confirmBtn    = page.getByTestId('pay-button');    
  } 

  async typeName(name: string) {
    await this.nameTxtBx.fill(name);   
  }

  async typeCardNum(number: string) {
    await this.cardNumTxtBx.fill(number);   
  }

  async typeCvc(cvc: string) {
    await this.cvcTxtBx.fill(cvc);   
  }

  async typeExpirationMonth(month: string) {
    await this.expMonthTxtBx.fill(month);   
  }

  async typeExpirationYear(year: string) {
    await this.expYearTxtBx.fill(year);   
  }

  async clickConfirmOrder() {
    await this.confirmBtn.click();   
  }

}