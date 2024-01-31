let page; 

beforeAll(async () => {
  page = await browser.newPage(); 
});

afterAll(async () => {
  await page.close(); 
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team"); 
  });

  test("The h1 header content", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  }, 5000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href'));
    expect(actual).toEqual("#start-of-content");
  }, 3000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  }, 2000);
});

describe("GitHub Homepage Tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com"); 
  });

  test("The h1 header", async () => {
    const h1Title = await page.$eval('.h0-mktg.mb-3.position-relative.z-2', header => header.textContent);
    expect(h1Title).toBeTruthy();
  }, 5000);

  test("The 'Start a free enterprise trial' button should contain the text 'Start a free enterprise trial'", async () => {
    const startTrialButton = await page.$("[data-test-selector='start-trial-button']");
    const buttonText = await startTrialButton.evaluate(button => button.textContent);
    expect(buttonText).toContain('Start a free enterprise trial');
  }, 5000);
});

describe("GitHub Actions Page Tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/features/actions"); 
  });

  test("The h1 element with specified classes should exist", async () => {
    await page.waitForSelector('h1.h2-mktg.mb-3.mx-auto', { visible: true });
    const h1Element = await page.$('h1.h2-mktg.mb-3.mx-auto');
    expect(h1Element).toBeTruthy();
  }, 10000);
});

describe("GitHub Signup Page Tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/signup?user_email=&source=form-home-signup"); // Переходим на страницу перед каждым тестом в этом describe
  });

  test("The h1 header content should be 'Welcome to GitHub! Let's begin the adventure'", async () => {
    await page.waitForSelector('h1', { visible: true });
    const h1Content = await page.$eval('h1', header => header.textContent);
    expect(h1Content).toEqual("Welcome to GitHub! Let's begin the adventure");
  }, 5000);
});
