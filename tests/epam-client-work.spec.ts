import { test, expect } from '@playwright/test';

test('EPAM services navigation shows Client Work text', async ({ page }) => {
  await page.goto('https://www.epam.com/', { waitUntil: 'domcontentloaded' });

  const acceptCookies = page.getByRole('button', { name: 'Accept All' });
  if (await acceptCookies.isVisible().catch(() => false)) {
    await acceptCookies.click();
  }

  await page.getByRole('link', { name: 'Services', exact: true }).click();
  await page.waitForLoadState('domcontentloaded');

  await page.getByRole('link', { name: 'Explore Our Client Work', exact: true }).click();
  await page.waitForLoadState('domcontentloaded');

  await expect(page.getByText('Client Work', { exact: false })).toBeVisible();
});
