/*
  path:    not starts with '/' and not ends with '/'
  subdir:  starts with '/' and ends with '/'
  home:    home icon character
  sep:     separator character
  aliases: breadcrumb alias [{path, alias}, ..]
 */
const createBreadCrumbs = (path, subdir, home, sep, aliases = []) => {
  let breadcrumbs = '<nav>'

  breadcrumbs += `<a href="${subdir}">${home}</a> ${sep}`
  
  const dirs = path.split('/').slice(0, -1)
  let url = subdir
  for (const dir of dirs) {
    url += dir + '/'
    dirname = aliases.find(a => a.path === dir)?.alias || dir
    breadcrumbs += ` <a href="${url}">${dirname}</a> ${sep}`
  }
  
  breadcrumbs += '</nav>'
  return breadcrumbs
}

const normalizePath = (path) => {
  return path.replace(/[\/]+/g, '/').replace(/^\//, '').replace(/\/$/, '')
}

const normalizeSubdir = (subdir) => {
  const midpath = subdir.replace(/[\/]+/g, '/').replace(/^\//, '').replace(/\/$/, '')
  return midpath === '' ? '/' : '/' + midpath + '/'
}

module.exports = {
  hooks: {
    'page': function(page) {
      const config = this.config.get('pluginsConfig.breadcrumbs', {})
      
      const path = normalizePath(page.path)
      const subdir = normalizeSubdir(config.subdir || '')

      const home = config.home || '🏠'
      const sep = config.sep || '/'
      const aliases = config.aliases || []

      page.content =  createBreadCrumbs(path, subdir, home, sep, aliases) + page.content;
      return page;
    }
  },
};
