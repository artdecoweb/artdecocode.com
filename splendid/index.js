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
  // to generate sitemaps:
  /* url: https://website.github.io/splendid */
}

export default config