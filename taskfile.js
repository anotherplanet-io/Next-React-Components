const notifier = require('node-notifier')
const childProcess = require('child_process')
const isWindows = /^win/.test(process.platform)

export async function lib (task, opts) {
  await task.source(opts.src || 'packages/**/*.js').babel().target('lib')
  notify('Compiled lib files')
}

export default async function (task) {
  await task.start('lib')
}

// notification helper
function notify (msg) {
  return notifier.notify({
    title: '☉ AnotherPlanet.io',
    message: msg,
    icon: false
  })
}
