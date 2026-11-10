import { defineConfig, devices } from '@playwright/test'

// De tests openen de echte app.
// - "chromium" gebruikt de ontwikkelserver van Vite.
// - "gebouwde-site" gebruikt de gebouwde site uit dist/, net zoals die op GitHub Pages komt.
export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      testIgnore: /gebouwde-site\.spec\.ts/,
      use: { ...devices['Desktop Chrome'], baseURL: 'http://localhost:5173/storydice/' },
    },
    {
      name: 'gebouwde-site',
      testMatch: /gebouwde-site\.spec\.ts/,
      use: { ...devices['Desktop Chrome'], baseURL: 'http://localhost:4173/storydice/' },
    },
  ],
  webServer: [
    {
      command: 'npm run dev -- --port 5173 --strictPort',
      url: 'http://localhost:5173/storydice/',
      reuseExistingServer: !process.env.CI,
      timeout: 120_000,
    },
    {
      command: 'npm run build && npm run preview -- --port 4173 --strictPort',
      url: 'http://localhost:4173/storydice/',
      reuseExistingServer: !process.env.CI,
      timeout: 180_000,
    },
  ],
})
