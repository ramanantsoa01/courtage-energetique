(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _js_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/index */ "./assets/js/index.js");
/* harmony import */ var _js_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/blog */ "./assets/js/blog.js");
/* harmony import */ var _js_blog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_blog__WEBPACK_IMPORTED_MODULE_2__);
// import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
// import './styles/app.css';



console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

/***/ }),

/***/ "./assets/js/blog.js":
/*!***************************!*\
  !*** ./assets/js/blog.js ***!
  \***************************/
/***/ (() => {

$(document).ready(function () {
  // Animate post cards on scroll
  $(window).scroll(function () {
    $('.post-card').each(function () {
      var postPosition = $(this).offset().top;
      var scrollPosition = $(window).scrollTop() + $(window).height();
      if (scrollPosition > postPosition) {
        $(this).css('opacity', '1');
      }
    });
  });

  // Smooth scroll
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
  });
});

/***/ }),

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/***/ (() => {

var toggleButton = document.querySelector('.menu-toggle');
var navLinks = document.querySelector('.nav-links');
toggleButton.addEventListener('click', function () {
  navLinks.classList.toggle('active');
});

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/app.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMkI7QUFDUDtBQUNEO0FBRW5CQSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxnRUFBZ0UsQ0FBQzs7Ozs7Ozs7OztBQ1o3RUMsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLFlBQVc7RUFDekI7RUFDQUYsQ0FBQyxDQUFDRyxNQUFNLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLFlBQVc7SUFDeEJKLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQ0ssSUFBSSxDQUFDLFlBQVc7TUFDNUIsSUFBTUMsWUFBWSxHQUFHTixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNPLE1BQU0sQ0FBQyxDQUFDLENBQUNDLEdBQUc7TUFDekMsSUFBTUMsY0FBYyxHQUFHVCxDQUFDLENBQUNHLE1BQU0sQ0FBQyxDQUFDTyxTQUFTLENBQUMsQ0FBQyxHQUFHVixDQUFDLENBQUNHLE1BQU0sQ0FBQyxDQUFDUSxNQUFNLENBQUMsQ0FBQztNQUVqRSxJQUFJRixjQUFjLEdBQUdILFlBQVksRUFBRTtRQUMvQk4sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDWSxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQztNQUMvQjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQzs7RUFFRjtFQUNBWixDQUFDLENBQUMsY0FBYyxDQUFDLENBQUNhLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBU0MsQ0FBQyxFQUFFO0lBQ3RDQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCZixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUNnQixPQUFPLENBQUM7TUFDcEJOLFNBQVMsRUFBRVYsQ0FBQyxDQUFDQSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNpQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQ1YsTUFBTSxDQUFDLENBQUMsQ0FBQ0M7SUFDaEQsQ0FBQyxFQUFFLEdBQUcsQ0FBQztFQUNYLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQzs7Ozs7Ozs7OztBQ3BCRixJQUFNVSxZQUFZLEdBQUdqQixRQUFRLENBQUNrQixhQUFhLENBQUMsY0FBYyxDQUFDO0FBQzNELElBQU1DLFFBQVEsR0FBR25CLFFBQVEsQ0FBQ2tCLGFBQWEsQ0FBQyxZQUFZLENBQUM7QUFFckRELFlBQVksQ0FBQ0csZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDekNELFFBQVEsQ0FBQ0UsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO0FBQ3ZDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDTEYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9ibG9nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzPzhmNTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICcuL2Jvb3RzdHJhcC5qcyc7XG4vKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cbiAqL1xuLy8gaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuaW1wb3J0ICcuL2pzL2luZGV4JztcbmltcG9ydCAnLi9qcy9ibG9nJztcblxuY29uc29sZS5sb2coJ1RoaXMgbG9nIGNvbWVzIGZyb20gYXNzZXRzL2FwcC5qcyAtIHdlbGNvbWUgdG8gQXNzZXRNYXBwZXIhIPCfjoknKTtcbiIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIC8vIEFuaW1hdGUgcG9zdCBjYXJkcyBvbiBzY3JvbGxcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcucG9zdC1jYXJkJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3RQb3NpdGlvbiA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsUG9zaXRpb24gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChzY3JvbGxQb3NpdGlvbiA+IHBvc3RQb3NpdGlvbikge1xuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBTbW9vdGggc2Nyb2xsXG4gICAgJCgnYVtocmVmKj1cIiNcIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKCQodGhpcykuYXR0cignaHJlZicpKS5vZmZzZXQoKS50b3BcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9KTtcbn0pOyIsImNvbnN0IHRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXRvZ2dsZScpO1xuY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWxpbmtzJyk7XG5cbnRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBuYXZMaW5rcy5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJ3aW5kb3ciLCJzY3JvbGwiLCJlYWNoIiwicG9zdFBvc2l0aW9uIiwib2Zmc2V0IiwidG9wIiwic2Nyb2xsUG9zaXRpb24iLCJzY3JvbGxUb3AiLCJoZWlnaHQiLCJjc3MiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFuaW1hdGUiLCJhdHRyIiwidG9nZ2xlQnV0dG9uIiwicXVlcnlTZWxlY3RvciIsIm5hdkxpbmtzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSJdLCJzb3VyY2VSb290IjoiIn0=