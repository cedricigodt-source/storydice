import { expect, test } from '@playwright/test'

// Deze tests openen de gebouwde site onder /storydice/, net zoals op GitHub Pages.

test.describe('gebouwde site', () => {
  test('toont de startpagina met de titel Storydice', async ({ page }) => {
    await page.goto('./')
    await expect(page).toHaveTitle('Storydice')
    await expect(page.getByRole('heading', { level: 1, name: 'Storydice' })).toBeVisible()
  })

  test('laadt alle bestanden zonder fouten', async ({ page }) => {
    // Alleen de eigen bestanden tellen mee. Lettertypes van Google hangen af van het netwerk.
    const mislukt: string[] = []
    page.on('response', (antwoord) => {
      const url = antwoord.url()
      if (url.startsWith('http://localhost') && antwoord.status() >= 400) mislukt.push(`${antwoord.status()} ${url}`)
    })
    page.on('requestfailed', (verzoek) => {
      const url = verzoek.url()
      if (url.startsWith('http://localhost')) mislukt.push(`mislukt ${url}`)
    })
    await page.goto('./')
    await page.waitForLoadState('networkidle')
    expect(mislukt).toEqual([])
  })

  test('scripts en stijlen staan onder /storydice/', async ({ page }) => {
    await page.goto('./')
    const adressen = await page.evaluate(() => [
      ...Array.from(document.querySelectorAll('script[src]'), (el) => el.getAttribute('src') ?? ''),
      ...Array.from(document.querySelectorAll('link[rel="stylesheet"][href]'), (el) => el.getAttribute('href') ?? ''),
    ])
    const eigen = adressen.filter((adres) => adres.startsWith('/'))
    expect(eigen.length).toBeGreaterThan(0)
    for (const adres of eigen) expect(adres).toMatch(/^\/storydice\//)
  })

  test('gebruikt de stijl van het design system', async ({ page }) => {
    await page.goto('./')
    await expect(page.locator('body')).toHaveClass(/ai-root/)
    const forest = await page.evaluate(() =>
      getComputedStyle(document.documentElement).getPropertyValue('--forest').trim(),
    )
    expect(forest).not.toBe('')
  })
})
