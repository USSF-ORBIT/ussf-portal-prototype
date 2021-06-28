// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: '14.15.0' } }],
    '@babel/preset-typescript',
  ],
}
