import { chromium, Browser, Page, test, expect } from '@playwright/test';

test.describe('Tests Vertrical', async () => {
  let browser: Browser;
  let page: Page;

  test.beforeEach(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
  });
  test('Test 1', async () => {
    await test.step('Given the user goes to dynamic loading page', async() => {
        //await page.goto('1');
        await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
    });
    await test.step('When user clicks on start button', async() => {
        await page.getByRole('button', { name: 'Start' }).click();
    });
    await test.step('Then Hello world! should be visible', async() => {
        await page.getByRole('heading', { name: 'Hello World!' }).isVisible();
    });
  });
  test('Test 2', async () => {
    await test.step('Given the user goes to Challenging DOM page', async() => {
        await page.goto('https://the-internet.herokuapp.com/challenging_dom');
    });
    await test.step('When user clicks on the first button', async() => {
        const firstButton = page.locator('a[class="button"]');
        await firstButton.click();
    });
    await test.step('When user clicks on the second button', async() => {
        const firstButton = page.locator('a[class="button alert"]');
        await firstButton.click();
    });
    await test.step('When user clicks on the third button', async() => {
        const firstButton = page.locator('a[class="button success"]');
        await firstButton.click();
    });
    await test.step('User should be able to click on any edit or delete button on screen', async() => {
        await page.getByRole('row', { name: 'Iuvaret0 Apeirian0 Adipisci0 Definiebas0 Consequuntur0 Phaedrum0 edit delete' }).getByRole('link', { name: 'edit' }).click();
        await page.getByRole('row', { name: 'Iuvaret0 Apeirian0 Adipisci0 Definiebas0 Consequuntur0 Phaedrum0 edit delete' }).getByRole('link', { name: 'delete' }).click();
        await page.getByRole('row', { name: 'Iuvaret1 Apeirian1 Adipisci1 Definiebas1 Consequuntur1 Phaedrum1 edit delete' }).getByRole('link', { name: 'edit' }).click();
        await page.getByRole('row', { name: 'Iuvaret1 Apeirian1 Adipisci1 Definiebas1 Consequuntur1 Phaedrum1 edit delete' }).getByRole('link', { name: 'delete' }).click();
        await page.getByRole('row', { name: 'Iuvaret2 Apeirian2 Adipisci2 Definiebas2 Consequuntur2 Phaedrum2 edit delete' }).getByRole('link', { name: 'edit' }).click();
        await page.getByRole('row', { name: 'Iuvaret2 Apeirian2 Adipisci2 Definiebas2 Consequuntur2 Phaedrum2 edit delete' }).getByRole('link', { name: 'delete' }).click();
        await page.getByRole('row', { name: 'Iuvaret3 Apeirian3 Adipisci3 Definiebas3 Consequuntur3 Phaedrum3 edit delete' }).getByRole('link', { name: 'edit' }).click();
        await page.getByRole('row', { name: 'Iuvaret3 Apeirian3 Adipisci3 Definiebas3 Consequuntur3 Phaedrum3 edit delete' }).getByRole('link', { name: 'delete' }).click();
        await page.getByRole('row', { name: 'Iuvaret4 Apeirian4 Adipisci4 Definiebas4 Consequuntur4 Phaedrum4 edit delete' }).getByRole('link', { name: 'edit' }).click();
        await page.getByRole('row', { name: 'Iuvaret4 Apeirian4 Adipisci4 Definiebas4 Consequuntur4 Phaedrum4 edit delete' }).getByRole('link', { name: 'delete' }).click();
        await page.getByRole('row', { name: 'Iuvaret5 Apeirian5 Adipisci5 Definiebas5 Consequuntur5 Phaedrum5 edit delete' }).getByRole('link', { name: 'edit' }).click();
        await page.getByRole('row', { name: 'Iuvaret5 Apeirian5 Adipisci5 Definiebas5 Consequuntur5 Phaedrum5 edit delete' }).getByRole('link', { name: 'delete' }).click();
        await page.getByRole('row', { name: 'Iuvaret6 Apeirian6 Adipisci6 Definiebas6 Consequuntur6 Phaedrum6 edit delete' }).getByRole('link', { name: 'edit' }).click();
        await page.getByRole('row', { name: 'Iuvaret6 Apeirian6 Adipisci6 Definiebas6 Consequuntur6 Phaedrum6 edit delete' }).getByRole('link', { name: 'delete' }).click();
        await page.getByRole('row', { name: 'Iuvaret7 Apeirian7 Adipisci7 Definiebas7 Consequuntur7 Phaedrum7 edit delete' }).getByRole('link', { name: 'edit' }).click();
        await page.getByRole('row', { name: 'Iuvaret7 Apeirian7 Adipisci7 Definiebas7 Consequuntur7 Phaedrum7 edit delete' }).getByRole('link', { name: 'delete' }).click();
        await page.getByRole('row', { name: 'Iuvaret8 Apeirian8 Adipisci8 Definiebas8 Consequuntur8 Phaedrum8 edit delete' }).getByRole('link', { name: 'edit' }).click();
        await page.getByRole('row', { name: 'Iuvaret8 Apeirian8 Adipisci8 Definiebas8 Consequuntur8 Phaedrum8 edit delete' }).getByRole('link', { name: 'delete' }).click();
        await page.getByRole('row', { name: 'Iuvaret9 Apeirian9 Adipisci9 Definiebas9 Consequuntur9 Phaedrum9 edit delete' }).getByRole('link', { name: 'edit' }).click();
        await page.getByRole('row', { name: 'Iuvaret9 Apeirian9 Adipisci9 Definiebas9 Consequuntur9 Phaedrum9 edit delete' }).getByRole('link', { name: 'delete' }).click();
    });
  });
});