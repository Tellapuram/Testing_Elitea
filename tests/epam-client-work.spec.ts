import { test, expect } from '@playwright/test';

test('EPAM client work link is visible and navigates correctly', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  const acceptAll = page.getByRole('button', { name: /Accept All/i });
  if (await acceptAll.isVisible().catch(() => false)) {
    await acceptAll.click();
  }

  await page.locator('a[href="/services"]').click();
  await page.getByRole('link', { name: 'Explore Our Client Work', exact: true }).click();

  await expect(page.getByText('Client Work', { exact: true })).toBeVisible();
});
