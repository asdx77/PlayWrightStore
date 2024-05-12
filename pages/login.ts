import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly regNameTxtBox: Locator;
  readonly regEmailTxtBox: Locator;
  readonly regSubmitBtn: Locator;
  readonly loginEmailTxtBox: Locator;
  readonly loginPasswordTxtBox: Locator;
  readonly loginSubmitBtn: Locator;


  constructor(page: Page) {
    this.page                = page;   
    this.regNameTxtBox       = page.getByTestId('signup-name');
    this.regEmailTxtBox      = page.getByTestId('signup-email');
    this.regSubmitBtn        = page.getByTestId('signup-button');
    this.loginEmailTxtBox    = page.getByTestId('login-email');
    this.loginPasswordTxtBox = page.getByTestId('login-password');
    this.loginSubmitBtn      = page.getByTestId('login-button');  
  }

  async typeRegName(name: string) {
    await this.regNameTxtBox.fill(name);   
  }

  async typeRegEmail(email: string) {
    await this.regEmailTxtBox.fill(email);   
  }

  async clickSingUp() {
    await this.regSubmitBtn.click();   
  }

  async typeLogName(name: string) {
    await this.regNameTxtBox.fill(name);   
  }

  async typeLogEmail(email: string) {
    await this.loginEmailTxtBox.fill(email);   
  }

  async typePassword(pass: string) {
    await this.loginPasswordTxtBox.fill(pass);   
  }

  async clickLogin() {
    await this.loginSubmitBtn.click();   
  }


}