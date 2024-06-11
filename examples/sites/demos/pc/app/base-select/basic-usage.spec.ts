import { test, expect } from '@playwright/test'

test('基础用法标签式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('base-select#basic-usage')
  const wrap = page.locator('#basic-usage')
  const select = wrap.locator('.tiny-base-select').nth(0)
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')

  await input.click()
  await option.filter({ hasText: '天津' }).click()
  await expect(input).toHaveValue('天津')
  await select.locator('.tiny-input__suffix svg').click()
  await expect(page.getByRole('listitem').filter({ hasText: '天津' })).toHaveClass(/selected/)
  await option.filter({ hasText: '深圳' }).click()
  await expect(input).toHaveValue('深圳')
  await input.click()
  await expect(option.filter({ hasText: '深圳' })).toHaveClass(/selected/)
  await expect(option.locator('.tiny-option__icon')).toHaveCount(5)
  await option.nth(0).click()
  await expect(dropdown).toBeHidden()
})

test('基础用法配置式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('base-select#basic-usage')
  const wrap = page.locator('#basic-usage')
  const select = wrap.locator('.tiny-base-select').nth(1)
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')

  await input.click()
  await option.filter({ hasText: '天津' }).click()
  await expect(input).toHaveValue('天津')
  await select.locator('.tiny-input__suffix svg').click()
  await expect(page.getByRole('listitem').filter({ hasText: '天津' })).toHaveClass(/selected/)
  await option.filter({ hasText: '深圳' }).click()
  await expect(input).toHaveValue('深圳')
  await input.click()
  await expect(option.filter({ hasText: '深圳' })).toHaveClass(/selected/)
  await expect(option.locator('.tiny-option__icon')).toHaveCount(5)
  await option.nth(0).click()
  await expect(dropdown).toBeHidden()
})
