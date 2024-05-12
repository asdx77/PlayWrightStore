import { expect, type Locator, type Page } from '@playwright/test';

export class CreateAccountPage {
  readonly page: Page;
  readonly titleRadioBtnMr: Locator;  
  readonly emailTxtBox: Locator;
  readonly passwordTxtBox: Locator;
  readonly daysSelect: Locator;
  readonly monthSelect: Locator;
  readonly yearSelect: Locator;
  readonly firstNameTxtBox: Locator;
  readonly lastNameTxtBox: Locator;
  readonly addressTxtBox: Locator;
  readonly countrySelect: Locator;
  readonly stateTxtBox: Locator;
  readonly cityTxtBox: Locator;
  readonly zipTxtBox: Locator;
  readonly mobileTxtBox: Locator;
  readonly createAcctBtn: Locator;
  
  constructor(page: Page) {
    this.page            = page;
    this.titleRadioBtnMr = page.locator('#uniform-id_gender1');
    this.passwordTxtBox  = page.getByTestId('password');   
    this.daysSelect      = page.getByTestId('days');
    this.monthSelect     = page.getByTestId('months');
    this.yearSelect      = page.getByTestId('years');
    this.firstNameTxtBox = page.getByTestId('first_name');
    this.lastNameTxtBox  = page.getByTestId('last_name');    
    this.addressTxtBox   = page.getByTestId('address');
    this.countrySelect   = page.getByTestId('country');
    this.stateTxtBox     = page.getByTestId('state');
    this.cityTxtBox      = page.getByTestId('city');
    this.zipTxtBox       = page.getByTestId('zipcode');
    this.mobileTxtBox    = page.getByTestId('mobile_number');
    this.createAcctBtn   = page.getByTestId('create-account');  
  }

  async checkRegistrationTitle() {
    await expect(this.page.getByRole('heading', { name: 'ENTER ACCOUNT INFORMATION' })).toBeVisible();   
  }

  async SelectMr() {
    await this.titleRadioBtnMr.click();
  }

  async typePassword(name: string) {
    await this.passwordTxtBox.fill(name);   
  }

  async selectDay(day: string) {
    await this.daysSelect.selectOption(day);   
  }

  async selectMonth(month: string) {
    await this.monthSelect.selectOption(month);   
  }

  async selectYear(year: string) {
    await this.yearSelect.selectOption(year);   
  }

  async typeFirstName(name: string) {
    await this.firstNameTxtBox.fill(name);   
  }

  async typeLastName(name: string) {
    await this.lastNameTxtBox.fill(name);   
  }

  async typeAddress(name: string) {
    await this.addressTxtBox.fill(name);   
  }

  async selectCountry(country: string) {
    await this.countrySelect.selectOption(country);   
  }

  async typeState(state: string) {
    await this.stateTxtBox.fill(state);   
  }

  async typeCity(city: string) {
    await this.cityTxtBox.fill(city);   
  }

  async typeZipCode(zip: string) {
    await this.zipTxtBox.fill(zip);   
  }

  async typeMobileNum(mobile: string) {
    await this.mobileTxtBox.fill(mobile);   
  }

  async clickCreateAcct() {
    await this.createAcctBtn.click();
  }

}