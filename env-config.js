const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.BACKEND_URL': prod ? 'https://anotherplanet-io.github.io/Next-React-Components' : 'test'
}
