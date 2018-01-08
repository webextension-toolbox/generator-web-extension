browser.runtime.onInstalled.addListener((details) => {
  console.log('previousVersion', details.previousVersion)
})

browser.browserAction.setBadgeText({
  text: `'Allo`
})

console.log(`'Allo 'Allo! Event Page for Browser Action`)
