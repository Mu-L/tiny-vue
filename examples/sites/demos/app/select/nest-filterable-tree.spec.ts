import { expect, test } from '@playwright/test'

test('filterable-tree', async ({ page }) => {
  await page.goto('http://localhost:7130/pc/select/nest-filterable-tree')
  const input = page.locator('#preview .tiny-input__inner')
  const selectDropdown = page.locator('.tiny-select-dropdown')

  await expect(input).toHaveValue('')
  await expect(selectDropdown).toBeHidden()
  await input.click()
  await page.waitForTimeout(500)
  const treeNodes = selectDropdown.getByRole('treeitem')
  await expect(treeNodes).toHaveCount(7)
  await input.fill('2-')
  await input.press('Enter')
  await page.waitForTimeout(500)
  const hiddenTreeNodes = selectDropdown.locator('.tiny-tree-node.is-hidden')
  await expect(hiddenTreeNodes).toHaveCount(4)
  const checkedTreeNodes = selectDropdown.locator('.tiny-tree-node.is-checked')
  await expect(checkedTreeNodes).toHaveCount(0)
  await page.getByRole('treeitem', { name: '一级 2' }).locator('div').filter({ hasText: '一级 2' }).click()
  await page.waitForTimeout(500)
  await expect(selectDropdown).toBeHidden()
  await page.waitForTimeout(1000)
  await expect(input).toHaveValue('一级 2')
  await input.click()
  await page.waitForTimeout(1000)
  await expect(checkedTreeNodes).toHaveCount(3)
  await expect(page.locator('.is-current .tiny-tree-node__content')).toHaveText('二级 2-2')
})