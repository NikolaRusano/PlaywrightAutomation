import { test} from '@playwright/test';

test('First Playwright test', async ({browser})=>{
    //playwright code
    const context = await browser.newContext();
    const page = await context.newPage();
    page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});

test('First Playwright test', async ({page})=>{
    
    page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});