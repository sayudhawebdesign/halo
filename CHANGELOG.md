# CHANGELOG

## 2019-05-19, Version 1.3.2

- **changes**:
  - Add HMR integration for development

### Commits

- [[`0a06f80b777`]](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/0a06f80b777c91aa8c57352f282874626f44e3b0) - (HMR) Add Hot Module Replacement integration on webpack dev (SCSS hot reload) (HTML, JS, IMG hard reload)

## 2018-09-19, Version 1.3.1

- **changes**:
  - Add workbook for PWA capabilities
  - Update webpack and other packages
  - Update production build config

### Commits

- [[`74ffbec7593`]](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/74ffbec759357ec414d0a1870f3c6498aa8a26cd) - update build, project structure section inside readme & offline capabilities using workbox

- [[`c0f710a80b6`]](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/c0f710a80b6ee86b7d755db1e3011368cf6e9560) - Update webpack to 4.19.0 which cause other packages need to be updated too. This update break the way we require image asset in pug template, please make changes accordingly and refer to header.pu as an example.

- [[`6684e7e2984`]](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/6684e7e2984f10d985c216a6ccf4824c8292c81d) - remove js dependency of bootstrap to reduce bundle size since it's not being used mostly in project.

- [[`91cc3e34af8`]](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/91cc3e34af8aaa732d1d6b7185bda5bc86085ef4) - update production config by adding source map and removing redundant dependencies (uglify and minify already built-in in production mode)

## 2018-08-31, Version 1.2.1

- **changes**:
  - Add development script for bundling images into dist folder
  - Update uglifyjs webpack plugin
  - Add lazy loading images

### Commits

- [[`d2ccea9ea18`]](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/d2ccea9ea18ecaed789488711f28b4675da9ebb2) - add section for manual image import in dev index

- [[`05bee1d9e36`]](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/05bee1d9e36ed714a782a3c7340ae9cf1a38d6b2) - update uglify webpack plugin to latest release

- [[`403e4993390`]](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/403e49933908dedaa4526391949d8a5efa72762e) - implement lazyload functionality

## 2018-07-16, Version 1.2.0

- **changes**:
  - Add jest as a javascript testing framework
  - Add flow as a static type checker for javascript

### Commits

- [[`8ee99ac5065`]](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/8ee99ac506551921c72f319b511cb76bbdc84a07) - add jest as testing framework to the boilerplate

- [[`444b746daf1`]](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/444b746daf1f61ba373e5332a4db1b9a9479d076) - add flow as static type checker to boilerplate

## 2018-05-27, Version 1.1.8

- **changes**:
  - Add puglint for pug template linting
  - Implement git pre-commit hooks for puglint
  - Handle removed file in git staging in git pre-commit script

### Commits

- [[`3dd38694411`]](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/3dd3869441123c8b75c696f4a010586989ceb25f) - test git pre-commit hooks for removed file

- [[`eb2d46f50f2`]](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/eb2d46f50f2fd72ad6a05a0fde6f3593af78f38c) - add pug-lint and it rules then implement in git pre-commit hooks

## 2018-05-17, Version 1.1.7

- **changes**:
  - Git pre-commit hooks to validate style and script using eslint&stylelint

### Commits

- [[`c514b804a6f`]](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/c514b804a6f3708e5092957338975e8899ac92a7) - implement git pre-commit hook with eslint & stylelint

## 2018-04-13, Version 1.1.6

- **changes**:
  - Expose jQuery
  - Add descriptive comments to guide user/developer
  - Versioning of bundle script and style

### Commits

- [[`3f0981e41a8`]](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/3f0981e41a88ceda44fa46502d8aff18bce983aa) - expose jquery using expose loader
- [[`384a978adc1`]](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/384a978adc1a19ebfa92193daebca069837697ae) - descriptive entry and script notes to guide user/developer
- [[`a2f6bd965b5`]](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/a2f6bd965b54909a71087499af6f2b5a37612060) - update build config with supported version variables

## 2018-04-10, Version 1.1.5

- **changes**:
  - Extract print.css from styles.css

### Commits

- [[`353a430e6ff`]](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/6dd94e9e10dcbf1f392732a70ebb2b36e2a7bd2b) - extract print.css from styles.css

## 2018-04-3, Version 1.1.4

- **changes**:
  - Support fontawesome icon

## 2018-03-23, Version 1.1.3

- **changes**:
  - Support favicon.ico
  - Better documentation

## 2018-02-13, Version 1.1.2

- **changes**:
  - Add purify css webpack plugin

## 2018-01-25, Version 1.1.1

- **changes**:
  - Replace embeded iframe script code with node module @xtremax/embeded-iframe

## 2017-12-28, Version 1.1.0

- **changes**:
  - Implement stylelint

## 2017-12-22, Version 1.0.3

- **changes**:
  - Fix image relative path issue.

## 2017-11-23, Version 1.0.2

### Notable Changes

- **changes**:
  - Automatically open in chrome when development and production.
  - Add NPM script for linting watch on development mode.
  - Fix relative image path on build.
  - Fix broken JPG issue on firefox & safari.

### Commits

- [[`828e12ca9c9`]](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/828e12ca9c9) -
  Update webpack common config to handle relative font path in css
- [[`513962cd2ca`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/513962cd2ca)] -
  change built images output to relative path on dist folder, fix broken JPG
  issue on firefox/safari
- [[`9613219f03f`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/9613219f03f)] -
  update README
- [[`25ed1f66905`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/25ed1f66905)] -
  automatically open in chrome when development and production
- [[`70024aa4b2a`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/70024aa4b2a)] -
  Add npm scripts for:continuous javascript linting on dev node & npm version
  check

## 2017-11-13, Version 1.0.1

### Notable Changes

- **changes**:
  - Update to use browsersync for pug template hot reload.
  - Change webpack dev server to browsersync.
  - Remove unused variable declarations.

### Commits

- [[`9b59b761f5b`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/9b59b761f5b)] -
  update webpack production config to handle relative image path in css
- [[`f587cbebbcf`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/f587cbebbcf)] -
  remove unused variable declarations
- [[`a0d236ba600`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/a0d236ba600)] -
  refactor required modules out from module export
- [[`848a3902b6e`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/848a3902b6e)] -
  uninstall webpack dev server since it being replaced by browsersync
- [[`eae31f51688`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/eae31f51688)] -
  update readme
- [[`47b803fbced`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/47b803fbced)] -
  update README files
- [[`ad04a044aae`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/ad04a044aae)] -
  update to use browsersync for pug template hot reload
- [[`69c2eef9aca`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/69c2eef9aca)] -
  update build for bundle.js

## 2017-11-30, Version 1.0.0

### Notable Changes

- **changes**:
  - Project boilerplate scaffolding.
  - Implement postcss loader, sass loader, css loader, style loader and
    configure webpack for development.
  - Fix linking stylesheet not script for production bundle.
  - Install code formater (prettier) and javascript linting (eslint).
  - Add resolve property to enable local image url, add babel-loader, and code
    format using prettier.

### Commits

- [[`d2b03968504`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/d2b03968504)] -
  exclude included pug files when build for production
- [[`0f0feb7e564`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/0f0feb7e564)] -
  format webpack config for development and production
- [[`3ad4ae4a7f1`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/3ad4ae4a7f1)] -
  add resolve property to enable local image url, add babel-loader, and code
  format using prettier
- [[`2621e429ece`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/2621e429ece)] -
  moving image assets under source directory
- [[`6a8600a9923`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/6a8600a9923)] -
  build for production
- [[`e3e89ce18a7`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/e3e89ce18a7)] -
  rename boilerplate.pug to index.pug
- [[`0dae488b225`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/0dae488b225)] -
  implement code formatting and linting in js codes
- [[`bae64dea692`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/bae64dea692)] -
  install code formater (prettier) and javascript linting (eslint)
- [[`fc8512188cb`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/fc8512188cb)] -
  fix unhandled jquery selection
- [[`e60cdf48eb0`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/e60cdf48eb0)] -
  test for automatic image compression
- [[`a47deede6e1`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/a47deede6e1)] -
  add automatic image compression capability
- [[`cc58ec32c10`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/cc58ec32c10)] -
  remove unnecessary file and assets
- [[`1b301f89743`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/1b301f89743)] -
  setup webpack config for production
- [[`1cd9e31ab6a`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/1cd9e31ab6a)] -
  refactor common and development webpack config
- [[`619a10427f4`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/619a10427f4)] -
  fix linking stylesheet not script for production bundle
- [[`372b5a59086`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/372b5a59086)] -
  refactor webpack dev config into common and dev
- [[`b2bf7728b65`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/b2bf7728b65)] -
  fix styling and add missing script based on previous boilerplate
- [[`2931a6cdb66`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/2931a6cdb66)] -
  add variable template
- [[`4f06a06be6c`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/4f06a06be6c)] -
  fromat mixin file
- [[`b86eacce2f3`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/b86eacce2f3)] -
  remove jade templates and update with pugs
- [[`ad4e2cea511`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/ad4e2cea511)] -
  migrate previous boilerplate files to this new boilerplate
- [[`175f2be212b`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/175f2be212b)] -
  install bootstrap (and it's dependencies), import it and configure webpack to
  handle it
- [[`7fc656a47ba`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/7fc656a47ba)] -
  testing file loader for image assets
- [[`ed25124a85c`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/ed25124a85c)] -
  update readme after pug loader implementation
- [[`03946d511c7`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/03946d511c7)] -
  removing unused html file
- [[`52b8678c907`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/52b8678c907)] -
  functional loading html template file (pug)
- [[`ca8d18d4a83`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/ca8d18d4a83)] -
  implement postcss loader, sass loader, css loader, style loader and configure
  webpack for development
- [[`a3a141b75d2`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/a3a141b75d2)] -
  scaffolding css files structure
- [[`44bb295c2cb`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/44bb295c2cb)] -
  update gitignore to ignoring npm-debug.log files
- [[`4f490535230`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/4f490535230)] -
  adding gitignore and ignoring all node_module files
- [[`bbadc823bab`](https://stash.xtremax.com/projects/XSLIC/repos/xboilerplate/commits/bbadc823bab)] -
  Project boilerplate scaffolding
