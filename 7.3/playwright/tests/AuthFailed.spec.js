const { test, expect } = require("@playwright/test");
const user = require("./user");

test("Не успешная авторизация", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.fill('input[name="email"]', user.email);
  await page.fill('input[name="password"]', "123");
  await page.click('button[data-testid="login-submit-btn"]');
  await expect(page).toHaveURL("https://netology.ru/?modal=sign_in");
  await expect(page).toHaveSelector('[data-testid="login-error-hint"]', { text: "Вы ввели неправильно логин или пароль" });

});
