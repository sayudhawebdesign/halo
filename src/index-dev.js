// ---------------------------------------------------------------------------------
// Note:
//   This entry point index is only used for development purpose and
//   the corresponding bundled file is also useful ONLY in development.
//   So make sure that Backend Developer only include bundle related to production
//   since index-dev.js will be bundled as node script that browser don't understand.
// ---------------------------------------------------------------------------------
// This is the entry point of webpack buildchain
// Please import all necessary module here otherwise it won't get bundled by webpack
// Also make sure that you remove unnecessay imports to prevent big bundled files
// ref: https://webpack.js.org/concepts/entry-points/
// ---------------------------------------------------------------------------------

// Pug Template Import
function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context('./template', true, /^((?![\\/]includes[\\/]).)*\.pug$/));

// Manual Image Import
//  Below 'require' function is needed for several use cases like:
//  1. Your image is not included in image tag src attribute but you want it to be
//     available in dist folder,
//  2. You want to inject image using js into html img tag,
//  3. You want to implement Lazy Load Image (LLI) since all LLI library out there
//     are using data attribute as their src attribute replacement for image source.
//  ... etc
//
// Remark:
//  Loaded images in dist are already optimised, so no worries about optimization
//  unless you have use case that requires otherwise

require('./img/full.jpg');
require('./img/music.jpg');
