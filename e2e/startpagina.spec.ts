import { expect, test } from '@playwright/test'

test.describe('startpagina', () => {
  test('toont de titel Storydice', async ({ page }) => {
    await page.goto('./')
    await expect(page).toHaveTitle('Storydice')
    await expect(page.getByRole('heading', { level: 1, name: 'Storydice' })).toBeVisible()
  })

  test('toont de uitleg onder de titel', async ({ page }) => {
    await page.goto('./')
    await expect(page.getByText(/verzin samen een verhaal/i)).toBeVisible()
  })

  test('gebruikt het design system: Nederlandse taal, licht thema en ai-root', async ({ page }) => {
    await page.goto('./')
    await expect(page.locator('html')).toHaveAttribute('lang', 'nl')
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
    await expect(page.locator('body')).toHaveClass(/ai-root/)
  })

  test('de titel is groot en in de kopkleur van het design system', async ({ page }) => {
    await page.goto('./')
    const titel = page.getByRole('heading', { level: 1, name: 'Storydice' })
    const stijl = await titel.evaluate((el) => {
      const s = getComputedStyle(el)
      const forest = getComputedStyle(document.documentElement).getPropertyValue('--forest').trim()
      const proef = document.createElement('span')
      proef.style.color = forest
      document.body.appendChild(proef)
      const forestRgb = getComputedStyle(proef).color
      proef.remove()
      return { fontSize: parseFloat(s.fontSize), color: s.color, forestRgb, forest }
    })
    expect(stijl.forest).not.toBe('')
    expect(stijl.color).toBe(stijl.forestRgb)
    expect(stijl.fontSize).toBeGreaterThanOrEqual(56)
  })
})
