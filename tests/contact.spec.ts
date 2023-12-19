import { test, expect } from "@playwright/test";

test("has correct title", async ({ page }) => {
  await page.goto("/contact");
  await expect(page).toHaveTitle(/#contact/);
});
