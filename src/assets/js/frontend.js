(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _Quicklinks = require('./frontend/quicklinks/Quicklinks');

var _Quicklinks2 = _interopRequireDefault(_Quicklinks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The MultilingualPress front end namespace object.
 * @namespace
 * @alias MultilingualPress
 */
var MLP = {};

/**
 * The MultilingualPress Quicklinks instance.
 * @type {Quicklinks}
 */
MLP.quicklinks = new _Quicklinks2.default('#mlp-quicklink-form');
MLP.quicklinks.initialize();

// Externalize the MultilingualPress namespace object.
window.MultilingualPress = MLP;

},{"./frontend/quicklinks/Quicklinks":3}],2:[function(require,module,exports){
'use strict';

exports.__esModule = true;
/**
 * The MultilingualPress Util namespace object.
 */
var Util = {
	/**
  * Attaches the given listener to the given DOM element for the event with the given type.
  * @param {Element} $element - The DOM element.
  * @param {string} type - The type of the event.
  * @param {Function} listener - The event listener callback.
  */
	addEventListener: function addEventListener($element, type, listener) {
		if ($element.addEventListener) {
			$element.addEventListener(type, listener);
		} else {
			$element.attachEvent('on' + type, function () {
				listener.call($element);
			});
		}
	},

	/**
  * Redirects the user to the given URL.
  * @param {string} url - The URL.
  */
	setLocation: function setLocation(url) {
		window.location.href = url;
	}
};

exports.default = Util;

},{}],3:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _Util = require('../Util');

var _Util2 = _interopRequireDefault(_Util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The MultilingualPress Quicklinks module.
 */

var Quicklinks = function () {
	/**
  * Constructor. Sets up the properties.
  * @param {string} selector - The form element selector.
  * @param {Object} [util=null] - Optional. The set of utility methods. Defaults to the MultilingualPress Util object.
  */

	function Quicklinks(selector) {
		var util = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

		_classCallCheck(this, Quicklinks);

		/**
   * The form element selector.
   * @type {string}
   */
		this.selector = selector;

		/**
   * The set of utility methods.
   * @type {Object}
   */
		this.Util = util || _Util2.default;
	}

	/**
  * Initializes the module.
  */


	Quicklinks.prototype.initialize = function initialize() {
		this.attachSubmitHandler();
	};

	/**
  * Attaches the according handler to the form submit event.
  * @returns {boolean} - Whether or not the event handler has been attached.
  */


	Quicklinks.prototype.attachSubmitHandler = function attachSubmitHandler() {
		var $form = document.querySelector(this.selector);
		if (null === $form) {
			return false;
		}

		this.Util.addEventListener($form, 'submit', this.submitForm.bind(this));

		return true;
	};

	/**
  * Triggers a redirect on form submission.
  * @param {Event} event - The submit event of the form.
  * @returns {boolean} - Whether or not redirect has been triggered.
  */


	Quicklinks.prototype.submitForm = function submitForm(event) {
		var $select = event.target.querySelector('select');
		if (null === $select) {
			return false;
		}

		event.preventDefault();

		this.Util.setLocation($select.value);

		// For testing only.
		return true;
	};

	return Quicklinks;
}();

exports.default = Quicklinks;

},{"../Util":2}]},{},[1]);
