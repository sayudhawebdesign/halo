// ---------------------------------------------------------------------------------
// This is the entry point of webpack buildchain
// Please import all necessary module here otherwise it won't get bundled by webpack
// Also make sure that you remove unnecessay imports to prevent big bundled files
// ref: https://webpack.js.org/concepts/entry-points/
// ---------------------------------------------------------------------------------

// Absolute imports
// -- Node modules import
import $ from 'jquery';
import EmbedIframe from '@xtremax/embeded-iframe';
// import 'bootstrap'; // Please refer to the link on how to import bootstrap (https://getbootstrap.com/docs/4.0/getting-started/webpack/)

// -- Styles import
import './style/main.scss';
import './style/page/page1.scss';
import './style/print/print.scss';

// Scripts Import
import initMakeImageCover from './script/image-cover';
import initLazyLoadImages from './script/lazyload-images';
import initD3 from './script/init-d3';
import initHeader from './script/components/initHeader';

// Favicon Import
import './img/favicon.ico';

// Required functions
const sum = require('./script/sum');

$(() => {
  // invoke all functions
  initMakeImageCover();
  initLazyLoadImages();
  EmbedIframe();
  initD3();

  sum('5', '1');
  initHeader();

  // Register service worker
  //   if ('serviceWorker' in navigator) {
  //     window.addEventListener('load', () => {
  //       navigator.serviceWorker
  //         .register('/sw.js')
  //         .then((registration) => {
  //           console.log('SW registered: ', registration);
  //         })
  //         .catch((registrationError) => {
  //           console.log('SW registration failed: ', registrationError);
  //         });
  //     });
  //   }
});
