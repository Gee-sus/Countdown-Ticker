const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const { resolve: metroResolve } = require('metro-resolver');

const config = getDefaultConfig(__dirname);

// Some packages (like tslib) expose ESM-only entry points via the "exports"
// field that Metro currently treats as default modules, which can break when
// they expect a CommonJS default export. Disabling package exports forces Metro
// to fall back to the traditional "main" field so tslib resolves correctly.
config.resolver.unstable_enablePackageExports = false;

const defaultResolveRequest =
  config.resolver.resolveRequest ?? metroResolve;

config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName === 'tslib') {
    // Force Metro to use the ESM build which provides a proper default export.
    return {
      type: 'sourceFile',
      filePath: path.join(
        __dirname,
        'node_modules',
        'tslib',
        'tslib.es6.js',
      ),
    };
  }

  return defaultResolveRequest(context, moduleName, platform);
};

module.exports = config;
