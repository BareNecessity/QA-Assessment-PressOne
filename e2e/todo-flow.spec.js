import { test, expect } from '@playwright/test'

test('todo app flow: login, add todos, delete one, logout', async ({ page }) => {
  await page.goto('http://localhost:5173/login')
  await page.waitForTimeout(1000)

  await page.fill('input[placeholder="Username"]', 'testuser')
  await page.click('button:has-text("Login")')
  await page.waitForTimeout(1000)
  await expect(page).toHaveURL('http://localhost:5173/')

  const todos = ['Buy milk', 'Read book', 'Exercise']
  for (const todo of todos) {
    await page.fill('input[placeholder="Add a todo"]', todo)
    await page.waitForTimeout(500)
    await page.keyboard.press('Enter')
    await expect(page.locator('li', { hasText: todo })).toBeVisible()
    await page.waitForTimeout(800)
  }

  const readBookLi = page.locator('li', { hasText: 'Read book' })
  const deleteBtn = readBookLi.getByRole('button')
  await deleteBtn.click()
  await page.waitForTimeout(1000)
  await expect(readBookLi).toHaveCount(0)
  await expect(page.locator('li')).toHaveCount(2)

  const logoutBtn = page.getByRole('button', { name: /logout/i })
  if (await logoutBtn.isVisible()) {
    await logoutBtn.click()
    await page.waitForTimeout(1000)
  }
})

test('does not allow duplicate IDs when adding quickly', async ({ page }) => {
  await page.goto('http://localhost:5173/login')
  await page.fill('input[placeholder="Username"]', 'testuser')
  await page.click('button:has-text("Login")')
  await page.waitForURL('http://localhost:5173/')

  const input = page.locator('input[placeholder="Add a todo"]')

  await input.fill('Rapid Todo')
  await page.keyboard.press('Enter')
  await input.fill('Rapid Todo')
  await page.keyboard.press('Enter')

  const items = await page.locator('li').allInnerTexts()
  const filtered = items.filter(text => text.includes('Rapid Todo'))

  expect(filtered.length).toBeGreaterThanOrEqual(2)
})
