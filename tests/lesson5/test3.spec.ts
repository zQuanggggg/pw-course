import { test } from '@playwright/test'

test("Add product with specific number", async ({ page }) => {
    await test.step("Truy cập vào https://material.playwrightvn.com/", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });
    await test.step("Click vào Bài học 3: Todo page", async () => {
        await page.locator("//a[contains(text(),'Bài học 3: Todo')]").click();
    });
    await test.step("Thêm 100 Todo <i> and click Add task", async () => {
        for (let i = 0; i < 100; i++) {
            await page.locator("//input[@type='text']").pressSequentially(`Todo ${i}`);
            await page.locator("//button[@id='add-task']").click();
        }
    });
    await test.step("Xóa các todo có số lẻ", async () => {
        page.on ('dialog', async dialog => dialog.accept());
        for (let i = 0; i <100; i++) {
            if (i % 2 === 0) 
                {continue;} // gap so chan bo vong lap
            await page.locator(`//button[@id = 'todo-${i}-delete']`).click();
        }
    });
})