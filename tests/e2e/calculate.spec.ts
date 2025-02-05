import { test, expect } from "@playwright/test";

test("clicking on button increases count", async ({ page }) => {
  await page.goto("/");
  console.log(process.env.DEPLOY_URL);

  // Click the button
  await page.getByRole("button", { name: "Increase" }).click();
  const countElement = page.getByLabel("count");
  await expect(countElement).toHaveText(/Count: 1/);

  // Click the button again
  await page.getByRole("button", { name: "Increase" }).click();
  await expect(countElement).toHaveText(/Count: 2/);
});
