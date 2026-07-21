import { test, expect } from '@playwright/test';

test.describe('Generated Playwright scenarios', () => {
  test('loads the application home page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/.*/);
  });

  test('verifies page body is visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('body')).toBeVisible();
  });
});
