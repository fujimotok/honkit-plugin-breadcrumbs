const rewire = require('rewire')
const myModule = rewire('./')

const createBreadCrumbs = myModule.__get__('createBreadCrumbs')

test('root page.', () => {
  const home = '🏠'
  const sep = '/'
  const path = 'README.md'
  const subdir = '/'
  const aliases = []
  const breadCrumbs = '<nav><a href="/">🏠</a> /</nav>'
  
  expect(createBreadCrumbs(path, subdir, home, sep, aliases)).toStrictEqual(breadCrumbs)
})

test('some page under root.', () => {
  const home = '🏠'
  const sep = '/'
  const path = 'test.md'
  const subdir = '/'
  const aliases = []
  const breadCrumbs = '<nav><a href="/">🏠</a> /</nav>'
  
  expect(createBreadCrumbs(path, subdir, home, sep, aliases)).toStrictEqual(breadCrumbs)
})

test('some directory.', () => {
  const home = '🏠'
  const sep = '/'
  const path = 'test/README.md'
  const subdir = '/'
  const aliases = []
  const breadCrumbs = '<nav><a href="/">🏠</a> / <a href="/test/">test</a> /</nav>'
  
  expect(createBreadCrumbs(path, subdir, home, sep, aliases)).toStrictEqual(breadCrumbs)
})

test('some page under some directory.', () => {
  const home = '🏠'
  const sep = '/'
  const path = 'test/test.md'
  const subdir = '/'
  const aliases = []
  const breadCrumbs = '<nav><a href="/">🏠</a> / <a href="/test/">test</a> /</nav>'
  
  expect(createBreadCrumbs(path, subdir, home, sep, aliases)).toStrictEqual(breadCrumbs)
})

test('deep directory.', () => {
  const home = '🏠'
  const sep = '/'
  const path = 'test1/test2/test3/README.md'
  const subdir = '/'
  const aliases = []
  const breadCrumbs = '<nav><a href="/">🏠</a> / <a href="/test1/">test1</a> / <a href="/test1/test2/">test2</a> / <a href="/test1/test2/test3/">test3</a> /</nav>'
  
  expect(createBreadCrumbs(path, subdir, home, sep, aliases)).toStrictEqual(breadCrumbs)
})

test('deep page under some directory.', () => {
  const home = '🏠'
  const sep = '/'
  const path = 'test1/test2/test3/test.md'
  const subdir = '/'
  const aliases = []
  const breadCrumbs = '<nav><a href="/">🏠</a> / <a href="/test1/">test1</a> / <a href="/test1/test2/">test2</a> / <a href="/test1/test2/test3/">test3</a> /</nav>'
  
  expect(createBreadCrumbs(path, subdir, home, sep, aliases)).toStrictEqual(breadCrumbs)
})

test('root page when subdir specified.', () => {
  const home = '🏠'
  const sep = '/'
  const path = 'README.md'
  const subdir = '/subdir/'
  const aliases = []
  const breadCrumbs = '<nav><a href="/subdir/">🏠</a> /</nav>'
  
  expect(createBreadCrumbs(path, subdir, home, sep, aliases)).toStrictEqual(breadCrumbs)
})

test('some page under root when subdir specified.', () => {
  const home = '🏠'
  const sep = '/'
  const path = 'test.md'
  const subdir = '/subdir/'
  const aliases = []
  const breadCrumbs = '<nav><a href="/subdir/">🏠</a> /</nav>'
  
  expect(createBreadCrumbs(path, subdir, home, sep, aliases)).toStrictEqual(breadCrumbs)
})

test('some directory when subdir specified.', () => {
  const home = '🏠'
  const sep = '/'
  const path = 'test/README.md'
  const subdir = '/subdir/'
  const aliases = []
  const breadCrumbs = '<nav><a href="/subdir/">🏠</a> / <a href="/subdir/test/">test</a> /</nav>'
  
  expect(createBreadCrumbs(path, subdir, home, sep, aliases)).toStrictEqual(breadCrumbs)
})

test('some page under some directory when subdir specified.', () => {
  const home = '🏠'
  const sep = '/'
  const path = 'test/test.md'
  const subdir = '/subdir/'
  const aliases = []
  const breadCrumbs = '<nav><a href="/subdir/">🏠</a> / <a href="/subdir/test/">test</a> /</nav>'
  
  expect(createBreadCrumbs(path, subdir, home, sep, aliases)).toStrictEqual(breadCrumbs)
})

test('deep directory when subdir specified.', () => {
  const home = '🏠'
  const sep = '/'
  const path = 'test1/test2/test3/README.md'
  const subdir = '/subdir/'
  const aliases = []
  const breadCrumbs = '<nav><a href="/subdir/">🏠</a> / <a href="/subdir/test1/">test1</a> / <a href="/subdir/test1/test2/">test2</a> / <a href="/subdir/test1/test2/test3/">test3</a> /</nav>'
  
  expect(createBreadCrumbs(path, subdir, home, sep, aliases)).toStrictEqual(breadCrumbs)
})

test('deep page under some directory when subdir specified.', () => {
  const home = '🏠'
  const sep = '/'
  const path = 'test1/test2/test3/test.md'
  const subdir = '/subdir/'
  const aliases = []
  const breadCrumbs = '<nav><a href="/subdir/">🏠</a> / <a href="/subdir/test1/">test1</a> / <a href="/subdir/test1/test2/">test2</a> / <a href="/subdir/test1/test2/test3/">test3</a> /</nav>'
  
  expect(createBreadCrumbs(path, subdir, home, sep, aliases)).toStrictEqual(breadCrumbs)
})

test('separator specified.', () => {
  const home = '🏠'
  const sep = '▶'
  const path = 'test1/test2/test3/test.md'
  const subdir = '/subdir/'
  const aliases = []
  const breadCrumbs = '<nav><a href="/subdir/">🏠</a> ▶ <a href="/subdir/test1/">test1</a> ▶ <a href="/subdir/test1/test2/">test2</a> ▶ <a href="/subdir/test1/test2/test3/">test3</a> ▶</nav>'
  
  expect(createBreadCrumbs(path, subdir, home, sep, aliases)).toStrictEqual(breadCrumbs)
})

test('alias specified.', () => {
  const home = '🏠'
  const sep = '▶'
  const path = 'test1/test2/test3/test.md'
  const subdir = '/subdir/'
  const aliases = [{path: 'test1', alias: 'alice'}, {path: 'test2', alias: 'bob'}]
  const breadCrumbs = '<nav><a href="/subdir/">🏠</a> ▶ <a href="/subdir/test1/">alice</a> ▶ <a href="/subdir/test1/test2/">bob</a> ▶ <a href="/subdir/test1/test2/test3/">test3</a> ▶</nav>'
  
  expect(createBreadCrumbs(path, subdir, home, sep, aliases)).toStrictEqual(breadCrumbs)
})
