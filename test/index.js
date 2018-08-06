/* global describe, before, it */

const path = require('path')
const assert = require('yeoman-assert')
const helpers = require('yeoman-test')
const permissions = require('../app/permissions.json')

describe('generator-web-extension:app', () => {
  before(() => {
    return helpers.run(path.join(__dirname, '../app'))
      .withOptions({
        'skip-install': true
      })
      .withPrompts({
        name: 'test-extension',
        shortName: 'test ext',
        description: 'Lorem Ipsum',
        author: 'WebExtension Generator',
        action: 'Browser',
        overridePage: 'Newtab Page',
        uifeatures: [
          'options',
          'devtoolsPage',
          'contentscript',
          'omnibox'
        ],
        permissions,
        promo: true,
        usesYarn: false
      })
      .toPromise()
  })

  it('creates base files', () => {
    assert.file([
      'package.json',
      '.gitignore',
      'README.md'
    ])
  })

  it('creates promo', () => {
    assert.file([
      'promo/Chrome-Webstore-Icon_128x128.png',
      'promo/Promo-Image-Large_920x680.png',
      'promo/Promo-Image-Marquee_1400x560.png',
      'promo/Promo-Image-Small_440x280.png',
      'promo/Screenshot_1280x800.png',
      'promo/Screenshot_640x400.png'
    ])
  })

  it('creates locales', () => {
    assert.file([
      'app/_locales/en/messages.json'
    ])

    assert.fileContent([
      ['app/manifest.json', /"default_locale":\s"en",/]
    ])
  })

  it('creates devtools page', () => {
    assert.file([
      'app/pages/devtools.html',
      'app/scripts/devtools.js',
      'app/styles/devtools.css'
    ])
    assert.fileContent([
      ['app/manifest.json', /"minimum_chrome_version":\s"10\.0"/],
      ['app/manifest.json', /"devtools_page":\s"pages\/devtools\.html"/]
    ])
  })

  it('creates newtab files', () => {
    assert.file([
      'app/pages/newtab.html',
      'app/scripts/newtab.js',
      'app/styles/newtab.css'
    ])
    assert.fileContent([
      ['app/manifest.json', /"newtab":\s"pages\/newtab\.html"/]
    ])
  })

  it('creates all popup files', () => {
    assert.file([
      'app/pages/popup.html',
      'app/scripts/popup.js',
      'app/styles/popup.css'
    ])
    assert.fileContent([
      ['app/manifest.json', /"default_popup":\s"pages\/popup\.html"/]
    ])
  })

  it('creates options', () => {
    assert.file([
      'app/pages/options.html',
      'app/scripts/options.js',
      'app/styles/options.css'
    ])
    assert.fileContent([
      ['app/manifest.json', /"options_page":\s"pages\/options\.html"/],
      ['app/manifest.json', /"options_ui": {\s+"page": "pages\/options.html",\s+"chrome_style": true\s+}/]
    ])
  })

  it('creates contentscripts', () => {
    assert.file([
      'app/scripts/contentscript.js',
      'app/styles/contentscript.css'
    ])
    assert.fileContent([
      ['app/manifest.json', /"content_scripts":\s\[/]
    ])
  })

  it('creates a background page', () => {
    assert.file([
      'app/scripts/background.js'
    ])
    assert.fileContent([
      ['app/manifest.json', /"background":\s\{/]
    ])
  })

  it('sets permissions to manifest', () => {
    const filePath = 'app/manifest.json'
    assert.fileContent([
      ...permissions.map(permission => ([
        filePath, new RegExp(`"${permission}"`)
      ])),
      [filePath, /\s+"http:\/\/\*\/\*",\s+"https:\/\/\*\/\*"/]
    ])
  })

  it('correctly sluggifies the omnibox keyword', () => {
    const filePath = 'app/manifest.json'
    assert.fileContent([
      [filePath, /"keyword": "test-ext"/]
    ])
  })
})
