const notifier = require('node-notifier')
const childProcess = require('child_process')
const isWindows = /^win/.test(process.platform)

export async function bin (task, opts) {
  await task.source(opts.src || 'bin/*').babel().target('dist/bin', {mode: '0755'})
  notify('Compiled binaries')
}

export default async function (task) {
  await task.start('bin')
}

// notification helper
function notify (msg) {
  return notifier.notify({
    title: '☉ AnotherPlanet.io',
    message: msg,
    icon: false
  })
}
