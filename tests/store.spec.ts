import { test, expect, Page } from '@playwright/test';
import { CartPage } from '../pages/cart-summary';
import { ConfirmationPage} from '../pages/confirmation'
import { ContactUsPage } from '../pages/contact-us';
import { CreateAccountPage } from '../pages/create-account';
import { HomeScreenPage } from '../pages/home-screen';
import { LoginPage } from '../pages/login';
import { PaymentPage } from '../pages/payment';
import { ProductDetailsPage } from '../pages/product-details';
import testData from '../data/testData.json';

var page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();  
  //avoid adds 
    await page.route("**/*", route => {
      route.request().url().startsWith("https://googleads.") ?
        route.abort() : route.continue();
      return;
    })
});


test('Verify Page Title', async () => {

  const homeScreen = new HomeScreenPage(page);
  await homeScreen.goto();
  await expect(page).toHaveTitle(/Automation Exercise/);

});

test('Add Product to Cart', async () => {

  const homeScreen = new HomeScreenPage(page);  
  await homeScreen.goto();  
  await homeScreen.clickViewProduct(testData.productId);
     
  const productDetails = new ProductDetailsPage(page);    
  await productDetails.checkProductTitle(testData.productName);
  await productDetails.addQuantity(testData.quantity);
  await productDetails.clickAddtoCart();
  await productDetails.clickViewCart();  

});


test('Register while Checkout', async () => {

  const cart = new CartPage(page);  
  await cart.clickCheckout();
  await cart.clickRegLogin();
 
  const loginReg = new LoginPage(page);  
  await loginReg.typeRegName(testData.name);
  await loginReg.typeRegEmail(testData.email);
  await loginReg.clickSingUp();

  const createAcc = new CreateAccountPage(page);  
  await createAcc.checkRegistrationTitle();
  await createAcc.SelectMr();
  await createAcc.typePassword(testData.password);
  await createAcc.selectDay(testData.day);
  await createAcc.selectMonth(testData.month);
  await createAcc.selectYear(testData.year); 
  await createAcc.typeFirstName(testData.name);
  await createAcc.typeLastName(testData.lastName);
  await createAcc.typeAddress(testData.address);
  await createAcc.selecCountry(testData.country);
  await createAcc.typeState(testData.state);
  await createAcc.typeCity(testData.city);
  await createAcc.typeZipCode(testData.zipcode);
  await createAcc.typeMobileNum(testData.mobileNumber);
  await createAcc.clickCreateAcct();

  const confirmation = new ConfirmationPage(page);  
  await confirmation.checkAccountCreated();
  await confirmation.clickContinue();  

});

test('Place Order and logout', async () => {
  
  const homeScreen = new HomeScreenPage(page);  
  await homeScreen.clickCart(); 
  const cart = new CartPage(page);  
  await cart.clickCheckout();
  await cart.clickPlaceOrder();

  const payement = new PaymentPage(page);  
  await payement.typeName(testData.name);
  await payement.typeCardNum(testData.cardNumber);
  await payement.typeCvc(testData.cvc);
  await payement.typeExpirationMonth(testData.expirationMonth);
  await payement.typeExpirationYear(testData.expirationYear);
  await payement.clickConfirmOrder();

  const confirmation = new ConfirmationPage(page);
  await confirmation.checkOrderPlaced();
  await confirmation.clickContinue();
  
  await homeScreen.clickLogout(); 

});

test('Login', async () => {

  const homeScreen = new HomeScreenPage(page);  
  await homeScreen.goto();
  await homeScreen.clickLogin(); 

  const loginReg = new LoginPage(page);  
  await loginReg.typeLogEmail(testData.email);
  await loginReg.typePassword(testData.password);
  await loginReg.clickLogin();
});

test('Fill Contact Form', async () => {

   const homeScreen = new HomeScreenPage(page);  
   await homeScreen.goto();    
   await homeScreen.clickContactus();  
 
   const contactUs = new ContactUsPage(page);  
   await contactUs.checkContactusTitle();  
   await contactUs.typeName("John Doe");
   await contactUs.typeEmail("JohnDoe@email.com");
   await contactUs.typeSubject("Help");
   await contactUs.typeMsg("John Doe needs email help");
   await contactUs.clickSubmit();  
   await contactUs.clickAlertOk();
 
 });  
  
test('Delete Account', async () => {

  const homeScreen = new HomeScreenPage(page);  
  await homeScreen.goto();    
  await homeScreen.clickDelete();

  const confirmation = new ConfirmationPage(page);  
  await confirmation.checkAccountDeleted();
  await confirmation.clickContinue();

});