import { test, expect } from "@playwright/test";

// Helper to dismiss cookie banner if present (has 500ms show delay)
async function dismissCookieBanner(page: import("@playwright/test").Page) {
  const btn = page.getByRole("button", {
    name: "Akceptuj wszystkie pliki cookies",
  });
  if (await btn.isVisible({ timeout: 2000 }).catch(() => false)) {
    await btn.click();
    await page
      .getByRole("dialog", { name: "Pliki cookies" })
      .waitFor({ state: "hidden" });
  }
}

test.describe("Homepage", () => {
  test("displays the main heading and service cards", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Usługi minikoparką, wiertnicą i minitraktorem"
    );
    await expect(
      page.getByRole("heading", { name: "Usługi minikoparką", exact: true })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Konstrukcje sadownicze", exact: true })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Usługi minitraktorem", exact: true })
    ).toBeVisible();
  });

  test("has correct page title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Dys-kop/);
  });

  test("phone number link is visible", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("link", { name: "506 502 709" })
    ).toBeVisible();
  });
});

test.describe("Navigation", () => {
  test("navbar links navigate to correct pages", async ({ page }) => {
    await page.goto("/");
    await dismissCookieBanner(page);

    await page.getByRole("link", { name: "O Nas" }).click();
    await expect(page).toHaveURL("/o-nas");
    await expect(page).toHaveTitle(/O nas/);

    await page.goto("/uslugi-minikoparka-lubelskie");
    await expect(page).toHaveURL("/uslugi-minikoparka-lubelskie");

    await dismissCookieBanner(page);
    await page.getByRole("link", { name: "Realizacje" }).click();
    await expect(page).toHaveURL("/realizacje");
    await expect(page).toHaveTitle(/Realizacje/);
  });

  test("logo is visible on every page", async ({ page }) => {
    const logo = page.getByAltText("Dys-kop - Usługi minikoparką Lublin");

    await page.goto("/");
    await expect(logo).toBeVisible();

    await page.goto("/o-nas");
    await expect(logo).toBeVisible();

    await page.goto("/realizacje");
    await expect(logo).toBeVisible();
  });
});

test.describe("About page", () => {
  test("displays company description", async ({ page }) => {
    await page.goto("/o-nas");
    await expect(
      page.getByText("Dys-Kop to firma specjalizująca się")
    ).toBeVisible();
  });

  test("has equipment image", async ({ page }) => {
    await page.goto("/o-nas");
    await expect(
      page.getByAltText(/Minikoparka Caterpillar 301.8/)
    ).toBeVisible();
  });
});

test.describe("Gallery page", () => {
  test("displays gallery images", async ({ page }) => {
    await page.goto("/realizacje");
    const images = page.getByAltText(/Zdjęcie z galerii/);
    await expect(images.first()).toBeVisible();
    expect(await images.count()).toBeGreaterThan(0);
  });

  test("has pagination", async ({ page }) => {
    await page.goto("/realizacje");
    await expect(
      page.getByRole("button", { name: "Następna strona" })
    ).toBeVisible();
  });
});

test.describe("Cookie banner", () => {
  test("shows cookie consent dialog and can accept", async ({ page }) => {
    await page.goto("/");
    const dialog = page.getByRole("dialog", { name: "Pliki cookies" });
    // Banner has a 500ms delay before showing
    await expect(dialog).toBeVisible({ timeout: 5000 });

    await page
      .getByRole("button", { name: "Akceptuj wszystkie pliki cookies" })
      .click();
    await expect(dialog).not.toBeVisible();
  });

  test("can reject optional cookies", async ({ page }) => {
    await page.goto("/");
    const dialog = page.getByRole("dialog", { name: "Pliki cookies" });
    await expect(dialog).toBeVisible({ timeout: 5000 });

    await page
      .getByRole("button", { name: "Odrzuć opcjonalne pliki cookies" })
      .click();
    await expect(dialog).not.toBeVisible();
  });
});

test.describe("Footer", () => {
  test("displays company info", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("NIP 7133124621")).toBeVisible();
    await expect(page.getByText("kontakt@dys-kop.pl")).toBeVisible();
  });
});

test.describe("Usługi minikoparką page", () => {
  test("displays heading and has correct title", async ({ page }) => {
    await page.goto("/uslugi-minikoparka-lubelskie");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Usługi minikoparką"
    );
    await expect(page).toHaveTitle(/Usługi minikoparką/);
  });
});

test.describe("Usługi minitraktorem page", () => {
  test("displays heading and has correct title", async ({ page }) => {
    await page.goto("/uslugi-minitraktorem-lubelskie");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Usługi minitraktorem"
    );
    await expect(page).toHaveTitle(/Usługi minitraktorem/);
  });
});

test.describe("Konstrukcje sadownicze page", () => {
  test("displays heading and has correct title", async ({ page }) => {
    await page.goto("/konstrukcje-sadownicze-lubelskie");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Konstrukcje sadownicze"
    );
    await expect(page).toHaveTitle(/Konstrukcje sadownicze/);
  });
});

test.describe("Glebogryzarka separacyjna page", () => {
  test("displays heading and has correct title", async ({ page }) => {
    await page.goto("/glebogryzarka-separacyjna-lubelskie");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Glebogryzarka separacyjna"
    );
    await expect(page).toHaveTitle(/Glebogryzarka separacyjna/);
  });
});

test.describe("Koszenie działek page", () => {
  test("displays heading and has correct title", async ({ page }) => {
    await page.goto("/koszenie-dzialek-lubelskie");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Koszenie działek"
    );
    await expect(page).toHaveTitle(/Koszenie działek/);
  });
});

test.describe("Orka działek page", () => {
  test("displays heading and has correct title", async ({ page }) => {
    await page.goto("/orka-dzialek-lubelskie");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Orka działek"
    );
    await expect(page).toHaveTitle(/Orka działek/);
  });
});
