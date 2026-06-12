import {
    Given,
    When,
    Then,
} from "@cucumber/cucumber";
import { Page, Browser, chromium, expect } from "@playwright/test";
import { PageManager } from '../../pages/pageManager';

let page: Page;
let browser: Browser;
let pm: PageManager;

Given('A web browser is at the automationexercise login page', { timeout: 10 * 1000 }, async function () {
    // Add this to the launch options to run the tests in headless mode: {headless: false}
    browser = await chromium.launch();
    page = await browser.newPage();
    await page.goto('https://www.automationexercise.com/');
    expect(await page.locator('//img[@alt="Website for automation practice"]').isVisible());
});

When('A user enters the username {string}, the password {string} and the email {string}, and clicks on the login button',
    async function (username: string, password: string, email: string) {
        pm = new PageManager(page);
        await pm.navigateTo().signUpLoginPage()
        expect(await page.locator(':text-is("New User Sign")').isVisible());
        await pm.onSignUpLoginPage().signUp(username, email)
        expect(await page.locator(':text-is("Enter Account Information")').isVisible());
        await pm.onSignUpLoginPage().createRandomAccount(username, password)
        expect(await page.locator(':text-is("Account Created!")').isVisible());
        await pm.onSignUpLoginPage().clickContinueButton()
        expect(await page.locator(`:text-is("Logged in as ${username}")`).isVisible());
        await pm.onHomePage().clickLogOutAccountButton()
        await pm.navigateTo().signUpLoginPage()
    });

Then('The user should be logged in successfully with the username {string} with email {string} and password {string}',
    async function (username: string, email: string, password: string) {
        expect(await page.locator(':text-is("Login to your account")').isVisible());
        await pm.onSignUpLoginPage().loginToYourAccount(email, password)
        expect(await page.locator(`:text-is("Logged in as ${username}")`).isVisible());
        await pm.onHomePage().clickDeleteAccountButton()
        expect(await page.locator(':text-is("Account Deleted!")').isVisible());
    });

When('A user enters the invalid email {string}, the password {string}, and clicks on the login button',
    async function (email: string, password: string) {
        pm = new PageManager(page);
        await pm.navigateTo().signUpLoginPage()
        expect(await page.locator(':text-is("Login to your account")').isVisible());
        await pm.onSignUpLoginPage().loginToYourAccount(email, password)
    });

Then('An error message with {string} message should be displayed indicating incorrect email {string} or password {string}', async function (errormessage: string, email: string, password: string) {
    await pm.onSignUpLoginPage().loginToYourAccount(email, password)
    expect(await page.locator(`:text-is("${errormessage}")`).isVisible());
});