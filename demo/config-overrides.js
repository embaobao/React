const {override, addBabelPlugins,addDecoratorsLegacy } = require('customize-cra')



module.exports = override(
    ...addBabelPlugins(
        [
          "@babel/plugin-proposal-decorators",
          {
            "legacy": true
          }
        ]
    ))
    