import { expect, type Locator, type Page } from '@playwright/test';

export class ConfirmationPage {
  readonly page: Page;
  readonly accountcreatedLb: Locator;
  readonly accountdeletedLb: Locator;
  readonly orderPlacedLb: Locator;
  readonly continueBtn: Locator;

  constructor(page: Page) {
    this.page             = page;   
    this.accountcreatedLb = page.getByTestId('account-created');
    this.accountdeletedLb = page.getByTestId('account-deleted');
    this.orderPlacedLb    = page.getByTestId('order-placed');
    this.continueBtn      = page.getByTestId('continue-button');       
  }

  async clickContinue() {
    await this.continueBtn.click();   
  }

  async checkAccountCreated() {
    await expect(this.accountcreatedLb).toHaveText('Account Created!');   
  }

  async checkAccountDeleted() {
    await expect(this.accountdeletedLb).toHaveText('Account Deleted!');   
  }

  async checkOrderPlaced() {
    await expect(this.orderPlacedLb).toHaveText('Order Placed!');   
  }

}