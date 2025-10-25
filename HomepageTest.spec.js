import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.snipeitapp.com/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Login' }).click();
  // ✅ Validation: Confirm successful login by checking dashboard heading
  await expect(page).toHaveURL(/snipeitapp/);
  await page.getByText('× Success: You have').click();
  await expect(page.getByRole('link', { name: 'Assets' })).toBeVisible();
  await page.getByRole('link', { name: 'Assets view all' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('combobox', { name: 'Select a Model' }).locator('b').click();
  await page.getByText('Laptops - Macbook Pro 13" (#').click();
await page.getByRole('combobox', { name: 'Select Status' }).locator('b').click();
  await page.getByRole('option', { name: 'Ready to Deploy' }).click();
  await page.getByRole('combobox', { name: 'Select a User' }).locator('b').click();
  await page.getByText('Judson Adams (malinda.').click();
  await page.locator('#submit_button').click();
  await page.getByText('× Success: Asset with tag N-').click();

  await page.getByRole('link', { name: '76f45ca2-879b-38c7-88d8-' }).click();
  await page.getByRole('link', { name: 'History' }).click();
  await page.getByText('(383907905) - Macbook Pro 13"').click();
  await page.getByRole('heading').getByRole('link', { name: 'Assets' }).click();
  await page.locator('td:nth-child(3) > a').first().click();
    button: 'right'
  
  await page.getByRole('link', { name: '383907905' }).click();
  await page.getByRole('link', { name: 'Macbook Pro 13"', exact: true }).click();
});