// Absolute imports
// -- Node modules import
import $ from 'jquery';

// onMobile function //
function initHeader() {
  if ($('.xb-header').length !== 0) {
    $('.xb-header').click(function click() {
      $(this).toggleClass('header-open');
    });
  }
}

export default initHeader;
