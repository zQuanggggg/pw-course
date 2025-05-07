import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Tài liệu học automation test/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com//');

  // Click the get started link.
  await page.getByRole('link', { name: 'Bài học 1: Register Page (có đủ các element)' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'User Registration' })).toBeVisible();
});
