const { test, expect } = require('@playwright/test');

// Definimos o teste com 'async' para permitir a espera das ações [4, 5]
test('deve validar o título da página inicial', async ({ page }) => {

  // 1. Navegar para uma URL real [6]
  await page.goto('https://playwright.dev');

  // 2. Usar uma asserção (Assertion) para validar o que é esperado [2, 7]
  // O Playwright aguarda automaticamente até que o título seja o correto [1]
  await expect(page).toHaveTitle(/Playwright/);

  // 3. Interagir com um elemento (como um link ou botão) [2]
  // O 'getByRole' é um seletor estável que simula a visão do usuário [6, 8]
  const getStarted = page.getByRole('link', { name: 'Get started' });
  await getStarted.click();

  // 4. Validar se a URL mudou após o clique (Evidência de sucesso) [2, 9]
  await expect(page).toHaveURL(/.*intro/);
});