import { expect, type Locator, type Page } from '@playwright/test';

export class ContactUsPage {
  readonly page: Page;
  readonly nameTxtBox: Locator;
  readonly emailTxtBox: Locator;
  readonly subjectTxtBox: Locator;
  readonly msgTxtBox: Locator;
  readonly submitBtn: Locator;

  constructor(page: Page) {
    this.page           = page;  
    this.nameTxtBox     = page.getByTestId('name');
    this.emailTxtBox    = page.getByTestId('email');
    this.subjectTxtBox  = page.getByTestId('subject');
    this.msgTxtBox      = page.getByTestId('message');
    this.submitBtn      = page.getByTestId('submit-button');
  }
 
  async checkContactusTitle() {
    await expect(this.page.getByRole('heading', { name: 'CONTACT US' })).toBeVisible();   
  }

  async typeName(name: string) {
    await this.nameTxtBox.fill(name);      
  }

  async typeEmail(email: string) {
    await this.emailTxtBox.fill(email);      
  }

  async typeSubject(subject: string) {
    await this.subjectTxtBox.fill(subject);      
  }

  async typeMsg(msg: string) {
    await this.msgTxtBox.fill(msg);      
  }

  async clickSubmit() {
    await this.submitBtn.click();   
  }

  async clickAlertOk() {
    this.page.on('dialog', async dialog => {    
      await dialog.accept();
    });
  }
}