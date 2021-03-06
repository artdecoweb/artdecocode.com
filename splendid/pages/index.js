const redirects = {
  documentary: {
    title: 'Documentary',
    redirect: 'https://github.com/artdecocode/documentary',
  },
  usually: {
    title: 'Usually',
    redirect: 'https://github.com/artdecocode/usually',
  },
  argufy: {
    title: 'Argufy',
    redirect: 'https://github.com/artdecocode/argufy',
  },
  depack: {
    title: 'Depack',
    redirect: 'https://github.com/dpck/depack',
  },
  typal: {
    title: 'Typal',
    redirect: 'https://github.com/artdecocode/typal',
  },
  goa: {
    title: 'Goa',
    redirect: 'https://github.com/idiocc/koa',
  },
}

/**
 * @type {Object.<string, import('splendid').Page>}
 */
const conf = Object.keys(redirects).reduce((acc, key) => {
  const val = redirects[key]
  acc[key] = { ...val, file: 'redirect.md', url: `${key}/index.html`,
    layout: 'layout/redirect.html' }
  return acc
}, {})

export default conf
/**
 * @type {import('splendid').Page}
 */
export const main = {
  title: 'Art Deco Code',
  url: 'index.html',
  file: 'index',
  menuUrl: '/',
}