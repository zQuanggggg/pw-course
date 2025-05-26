import { test } from '@playwright/test'

test("Add product with specific number", async ({ page }) => {
    await test.step("Truy cập vào https://material.playwrightvn.com/", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });
    await test.step("Click vào Bài học 2: Product page", async () => {
        await page.locator("//a[contains(text(),'Bài học 2: Pro')]").click();
    });
    await test.step("Thêm 2 sp1 vào cart", async () => {
        await page.locator("//button[@data-product-id='1']").click({clickCount:2});
    });
    await test.step("Thêm 3 sp2 vào cart", async () => {
        await page.locator("//button[@data-product-id='2']").click({clickCount:3});
    });
    await test.step("thêm 1 sp3 vào cart", async () => {
        await page.locator("//button[@data-product-id='3']").click();
    });
});
