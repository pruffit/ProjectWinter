import { test, expect } from "@playwright/test";

test('create delete course list', async ({ page }) => {
  await page.goto("/");
  await page.getByPlaceholder('название').click();
  await page.getByPlaceholder('название').fill('Test');
  await page.getByPlaceholder('описание').click();
  await page.getByPlaceholder('описание').fill('Test');
  await page.getByRole('button', { name: 'Добавить' }).click();
  await expect(page.getByText('TestTestDelete')).toBeVisible();
  await page.getByRole('button', { name: 'Delete' }).click();
  await expect(page.getByText('CoursesНазвание ОписаниеTest')).toBeVisible();

	await expect(
    page.getByText("TestTestDelete"),
  ).not.toBeVisible();
});