import { test, expect } from '@playwright/test';

test('extract all Amazon India hamburger menu options', async ({ page }) => {
  await page.goto('https://amazon.in', { waitUntil: 'domcontentloaded' });

  const menuButton = page.locator('a#nav-hamburger-menu, button#nav-hamburger-menu').first();
  await expect(menuButton).toBeVisible({ timeout: 15000 });
  await menuButton.click();

  const menuPanel = page.locator('div#hmenu-content');
  await expect(menuPanel).toBeVisible({ timeout: 15000 });

  const menuItems = await menuPanel
    .locator('a.hmenu-item, button.hmenu-item, span.hmenu-item')
    .evaluateAll((elements) =>
      elements
        .map((el) => (el.textContent || '').replace(/\s+/g, ' ').trim())
        .filter((text) => text.length > 0)
    );

  console.log('Amazon hamburger menu items:', menuItems);

  expect(menuItems.length).toBeGreaterThan(0);
});
