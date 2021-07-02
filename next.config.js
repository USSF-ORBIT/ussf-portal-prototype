module.exports = {
  sassOptions: {
    includePaths: [
      'node_modules/uswds/dist/',
      'node_modules/uswds/dist/scss/',
      'node_modules/uswds/dist/scss/theme/',
      // what's the best way to handle referencing a library in scss?
      // #TODO: look up this.addDependency and see if relevant
    ],
  },
}
