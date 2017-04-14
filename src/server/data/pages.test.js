const pages = require('./pages')

test('page with id 1 exists', () => {
  const pageOne = pages.getById(1)
  expect(pageOne).not.toBeNull()
})

test('pages contains page-three', () => {
  const res = pages.contains('page-three')
  expect(res).toBe(true)
})

test('change body to page-three', () => {
  const res = pages.getBySlug('page-three')
  expect(res).not.toBeNull()
  res.body = 'changed on test'
  const newBody = pages.getBySlug('page-three').body
  expect(newBody).not.toBe(res.body)
})

test('change body to page-three and save chages', () => {
  const res = pages.getBySlug('page-three')
  expect(res).not.toBeNull()
  res.body = 'changed on test'
  const modifiedPages = pages.save(res)
  const newBody = pages.getBySlug('page-three').body
  expect(newBody).toBe(res.body)

})