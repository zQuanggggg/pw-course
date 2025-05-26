import { test } from '@playwright/test'

test("Verify button Register", async ({page}) => {
    await test.step("Truy cập vào https://material.playwrightvn.com/", async () => { 
        await page.goto("https://material.playwrightvn.com/");
    });
    await test.step("Click vào Bài học 1", async () => { 
        await page.locator("//a[contains(text(),'Bài học 1: Re')]").click();
    });
    await test.step("Điền thông tin vào field Username", async () => { 
        await page.locator("//input[@id ='username']").fill("Nguyen Duy Quang");
    });
    await test.step("Điền thông tin vào field Email", async () => { 
        await page.locator("//input[@id ='email']").pressSequentially("ab@gmail.com");
    });
    await test.step("Chọn checkbox Male", async () => { 
        await page.locator("//input[@id ='male']").check();
    });
    await test.step("Chọn checkbox Traveling", async () => { 
        await page.locator("//input[@id ='traveling']").check();
    });
    await test.step("Chọn Music trong list Interests", async () => { 
        await page.locator("//option[@value='music']").click();
    });
    await test.step("Chọn canada trong field Country", async () => { 
        await page.locator("//select[@id='country']").selectOption("Canada");
    });
    await test.step("Nhập DoB", async () => { 
        await page.locator("//input[@id ='dob']").pressSequentially("05121997");
    });
    await test.step("Gửi file data", async () => { 
        await page.locator("//input[@type ='file']").setInputFiles("data/text.txt");
    });
    await test.step("Tick xanh cho enable feature", async () => {
        await page.locator("//*[@id='registrationForm']/div[13]/label[2]/span").hover();
        await page.locator("//*[@id='registrationForm']/div[13]/label[2]/span").click();
        const isChecked = await page.locator("//*[@id='registrationForm']/div[13]/label[2]/span").isChecked();
        console.log(isChecked);
    await test.step("click Register button", async () => { 
        await page.locator("//button[@type='submit']").click();
    });
    });
})
