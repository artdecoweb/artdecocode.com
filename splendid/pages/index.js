/**
 * @type {Object.<string, import('splendid').Page>}
 */
const conf = {
  documentary: {
    title: 'Documentary @ Art Deco Code',
    file: 'redirect.md',
    url: 'documentary/index.html',
    redirect: 'https://github.com/artdecocode/documentary',
    layout: 'layout/redirect.html',
  }
}

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