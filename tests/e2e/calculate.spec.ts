import { test, expect } from "@playwright/test";

test("clicking on button increases count", async ({ page }) => {
  await page.goto("/");

  // Click button to increase number to 1
  const button = page.getByRole("button", { name: "Increase" });
  await button.waitFor({ state: "visible" });
  await button.click();

  const countElement = page.getByLabel("count");
  await expect(countElement).toHaveText(/Count: 1/);

  // Click button again to increace number to 2
  await page.getByRole("button", { name: "Increase" }).click();
  await expect(countElement).toHaveText(/Count: 2/);
});
