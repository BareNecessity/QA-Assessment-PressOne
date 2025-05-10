import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  timeout: 60 * 1000,
  use: {
    baseURL: 'http://localhost:5173',
    headless: false,
    viewport: { width: 1440, height: 900 },
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: 'npm run dev',
    port: 5173,
    reuseExistingServer: !process.env.CI,
    timeout: 60 * 1000,
  },
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]]
})
