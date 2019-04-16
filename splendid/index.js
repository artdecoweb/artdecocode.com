import { join } from 'path'

const APP_DIR = 'splendid'
const BUILD_DIR = 'docs'

/** @type {import('splendid').Config} */
const config = {
  appDir: APP_DIR,
  layout: join(APP_DIR, 'layout/main.html'),
  replacements: [
    {
      re: /{{ company }}/g,
      replacement: '[Art Deco](https://artd.eco)',
    },
  ],
  output: BUILD_DIR,
  ajax: false,
  pretty: 100,
  // to generate sitemaps:
  url: 'https://artdecocode.com',
}

export default config