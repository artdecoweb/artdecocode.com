/**
 * @type {Object.<string, import('splendid').Page>}
 */
const conf = {
  documentary: {
    title: 'Documentary',
    file: 'redirect.md',
    url: 'documentary',
    redirect: 'https://github.com/artdecocode/documentary',
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