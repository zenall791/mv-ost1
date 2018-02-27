(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["AudioPlayer"] = factory(require("react"), require("prop-types"));
	else
		root["AudioPlayer"] = factory(root["React"], root["PropTypes"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _arrayFindIndex = __webpack_require__(3);

	var _arrayFindIndex2 = _interopRequireDefault(_arrayFindIndex);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	__webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var deprecatedProps = [{
	  name: 'hideBackSkip',
	  alternativeMessage: 'Exclude "backskip" from `controls` to hide the back skip button.'
	}, {
	  name: 'hideForwardSkip',
	  alternativeMessage: 'Exclude "forwardskip" from `controls` to hide the back skip button.'
	}, {
	  name: 'disableSeek',
	  alternativeMessage: 'Pass "progressdisplay" to `controls` (instead of "progress") ' + 'for a non-seekable progress bar.'
	}, {
	  name: 'playlist[?].displayText',
	  alternativeMessage: 'Use `title` and `artist` to provide track information, and override ' + ' the `getDisplayText` function prop for custom display if needed.'
	}];

	var log = console.log.bind(console);
	var logError = console.error ? console.error.bind(console) : log;
	var logWarning = console.warn ? console.warn.bind(console) : log;

	function getTokensForPropName(name) {
	  // simple (imperfect) regex for splitting name into keys
	  return name.split(/\.|\[|\]/).filter(function (token) {
	    return token;
	  });
	}

	function doTokensMatchObject(tokens, object) {
	  if (tokens.length === 0) {
	    // for our purposes we can assume if we've exhausted the list,
	    // then we were able to match the whole way down.
	    return true;
	  }
	  var t = tokens[0];
	  var nextTokens = tokens.slice(1);
	  if (t === '?') {
	    // wildcard - search all keys for a match
	    return Object.keys(object).some(function (key) {
	      return doTokensMatchObject(nextTokens, object[key]);
	    });
	  }
	  return t in object && doTokensMatchObject(nextTokens, object[t]);
	}

	function findDeprecatedProps(props) {
	  return deprecatedProps.filter(function (deprecated) {
	    return doTokensMatchObject(getTokensForPropName(deprecated.name), props);
	  });
	}

	var loggedDeprecations = [];
	function logDeprecationWarnings(props) {
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = findDeprecatedProps(props)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var deprecated = _step.value;

	      if (loggedDeprecations.indexOf(deprecated.name) === -1) {
	        logWarning('\n        The `' + deprecated.name + '` prop is deprecated. It will be removed\n        in react-responsive-audio-player v2.0.0.\n        ' + deprecated.alternativeMessage);
	        loggedDeprecations.push(deprecated.name);
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	}

	var nextControlKey = 0;
	function getNextControlKey() {
	  return (nextControlKey++).toString();
	}

	/* converts given number of seconds to standard time display format
	 * http://goo.gl/kEvnKn
	 */
	function convertToTime(number) {
	  var mins = Math.floor(number / 60);
	  var secs = (number % 60).toFixed();
	  return '' + (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
	}

	// Existing Media Session API implementations have default handlers
	// for play/pause, and may yield unexpected behavior if custom
	// play/pause handlers are defined - so let's leave them be.
	var supportableMediaSessionActions = ['previoustrack', 'nexttrack', 'seekbackward', 'seekforward'];

	// BEGIN PRIVATE CONTROL COMPONENTS

	var SkipButton = function SkipButton(_ref) {
	  var hidden = _ref.hidden,
	      back = _ref.back,
	      onClick = _ref.onClick;
	  return _react2.default.createElement(
	    'div',
	    {
	      id: 'skip_button',
	      className: (0, _classnames2.default)('skip_button audio_button', { hidden: hidden, back: back }),
	      onClick: onClick
	    },
	    _react2.default.createElement(
	      'div',
	      { className: 'skip_button_inner' },
	      _react2.default.createElement('div', { className: 'right_facing_triangle' }),
	      _react2.default.createElement('div', { className: 'right_facing_triangle' })
	    )
	  );
	};

	var BackSkipButton = function BackSkipButton(_ref2) {
	  var audioPlayer = _ref2.audioPlayer;
	  return _react2.default.createElement(SkipButton, {
	    audioPlayer: audioPlayer,
	    hidden: audioPlayer.props.hideBackSkip,
	    back: true,
	    onClick: audioPlayer.backSkip
	  });
	};

	var ForwardSkipButton = function ForwardSkipButton(_ref3) {
	  var audioPlayer = _ref3.audioPlayer;
	  return _react2.default.createElement(SkipButton, {
	    audioPlayer: audioPlayer,
	    hidden: audioPlayer.props.hideForwardSkip,
	    back: false,
	    onClick: audioPlayer.skipToNextTrack
	  });
	};

	var PlayPauseButton = function PlayPauseButton(_ref4) {
	  var audioPlayer = _ref4.audioPlayer;
	  return _react2.default.createElement(
	    'div',
	    {
	      id: 'play_pause_button',
	      className: (0, _classnames2.default)('play_pause_button audio_button', {
	        paused: audioPlayer.state.paused
	      }),
	      onClick: audioPlayer.togglePause
	    },
	    _react2.default.createElement(
	      'div',
	      { className: 'play_pause_inner' },
	      _react2.default.createElement('div', { className: 'left' }),
	      _react2.default.createElement('div', { className: 'right' }),
	      _react2.default.createElement('div', { className: 'triangle_1' }),
	      _react2.default.createElement('div', { className: 'triangle_2' })
	    )
	  );
	};

	var Spacer = function Spacer() {
	  return _react2.default.createElement('div', { className: 'spacer' });
	};

	var AudioProgressDisplay = function AudioProgressDisplay(props) {
	  return _react2.default.createElement(
	    'div',
	    {
	      id: 'audio_progress_container',
	      className: 'audio_progress_container',
	      ref: props.onRef,
	      onMouseDown: props.onMouseTouchStart,
	      onTouchStart: props.onMouseTouchStart
	    },
	    _react2.default.createElement('div', {
	      id: 'audio_progress',
	      className: 'audio_progress',
	      style: { width: props.progressBarWidth } }),
	    _react2.default.createElement(
	      'div',
	      { id: 'audio_progress_overlay', className: 'audio_progress_overlay' },
	      _react2.default.createElement(
	        'div',
	        { className: 'audio_info_marquee' },
	        _react2.default.createElement(
	          'div',
	          {
	            id: 'audio_info',
	            className: 'audio_info noselect',
	            draggable: 'false'
	          },
	          props.displayText
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        {
	          id: 'audio_time_progress',
	          className: 'audio_time_progress noselect',
	          draggable: 'false'
	        },
	        props.timeRatio
	      )
	    )
	  );
	};

	var AudioProgress = function AudioProgress(props) {
	  return _react2.default.createElement(AudioProgressDisplay, _extends({}, props, {
	    onMouseTouchStart: props.audioPlayer.adjustDisplayedTime,
	    onRef: function onRef(ref) {
	      return props.audioPlayer.audioProgressContainer = ref;
	    }
	  }));
	};

	var keywordToControlComponent = {
	  backskip: BackSkipButton,
	  forwardskip: ForwardSkipButton,
	  playpause: PlayPauseButton,
	  spacer: Spacer,
	  progressdisplay: AudioProgressDisplay,
	  progress: AudioProgress
	};

	// END PRIVATE CONTROL COMPONENTS

	var AudioPlayer = function (_React$Component) {
	  _inherits(AudioPlayer, _React$Component);

	  function AudioPlayer(props) {
	    _classCallCheck(this, AudioPlayer);

	    /* true if the user is currently dragging the mouse
	     * to seek a new track position
	     */
	    var _this = _possibleConstructorReturn(this, (AudioPlayer.__proto__ || Object.getPrototypeOf(AudioPlayer)).call(this, props));

	    _this.seekInProgress = false;
	    // index matching requested track (whether track has loaded or not)
	    _this.currentTrackIndex = 0;

	    _this.defaultState = {
	      /* activeTrackIndex will change to match
	       * this.currentTrackIndex once metadata has loaded
	       */
	      activeTrackIndex: -1,
	      // indicates whether audio player should be paused
	      paused: true,
	      /* elapsed time for current track, in seconds -
	       * DISPLAY ONLY! the actual elapsed time may
	       * not match up if we're currently seeking, since
	       * the new time is visually previewed before the
	       * audio seeks.
	       */
	      displayedTime: 0
	    };

	    _this.state = _this.defaultState;

	    // set of keys to use in controls render
	    _this.controlKeys = props.controls.map(getNextControlKey);

	    // html audio element used for playback
	    _this.audio = null;
	    _this.audioProgressContainer = null;

	    // event listeners to add on mount and remove on unmount
	    _this.setAudioElementRef = _this.setAudioElementRef.bind(_this);
	    _this.backSkip = _this.backSkip.bind(_this);
	    _this.skipToNextTrack = _this.skipToNextTrack.bind(_this);
	    _this.togglePause = _this.togglePause.bind(_this);
	    _this.adjustDisplayedTime = _this.adjustDisplayedTime.bind(_this);
	    _this.seekReleaseListener = function (e) {
	      return _this.seek(e);
	    };
	    _this.audioPlayListener = function () {
	      _this.setState({ paused: false });
	      _this.stealMediaSession();
	    };
	    _this.audioPauseListener = function () {
	      return _this.setState({ paused: true });
	    };
	    _this.audioEndListener = function () {
	      var gapLengthInSeconds = _this.props.gapLengthInSeconds || 0;
	      clearTimeout(_this.gapLengthTimeout);
	      _this.gapLengthTimeout = setTimeout(function () {
	        return _this.skipToNextTrack();
	      }, gapLengthInSeconds * 1000);
	    };
	    _this.audioStallListener = function () {
	      return _this.togglePause(true);
	    };
	    _this.audioTimeUpdateListener = function () {
	      return _this.handleTimeUpdate();
	    };
	    _this.audioMetadataLoadedListener = function () {
	      return _this.setState({
	        activeTrackIndex: _this.currentTrackIndex
	      });
	    };
	    return _this;
	  }

	  _createClass(AudioPlayer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      logDeprecationWarnings(this.props);

	      // add event listeners bound outside the scope of our component
	      window.addEventListener('mousemove', this.adjustDisplayedTime);
	      document.addEventListener('touchmove', this.adjustDisplayedTime);
	      window.addEventListener('mouseup', this.seekReleaseListener);
	      document.addEventListener('touchend', this.seekReleaseListener);

	      var audio = this.audio;

	      // add event listeners on the audio element
	      audio.preload = 'metadata';
	      audio.addEventListener('play', this.audioPlayListener);
	      audio.addEventListener('pause', this.audioPauseListener);
	      audio.addEventListener('ended', this.audioEndListener);
	      audio.addEventListener('stalled', this.audioStallListener);
	      audio.addEventListener('timeupdate', this.audioTimeUpdateListener);
	      audio.addEventListener('loadedmetadata', this.audioMetadataLoadedListener);
	      this.addMediaEventListeners(this.props.onMediaEvent);

	      if (this.props.playlist && this.props.playlist.length) {
	        this.updateSource();
	        if (this.props.autoplay) {
	          var delay = this.props.autoplayDelayInSeconds || 0;
	          clearTimeout(this.delayTimeout);
	          this.delayTimeout = setTimeout(function () {
	            return _this2.togglePause(false);
	          }, delay * 1000);
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      // remove event listeners bound outside the scope of our component
	      window.removeEventListener('mousemove', this.adjustDisplayedTime);
	      document.removeEventListener('touchmove', this.adjustDisplayedTime);
	      window.removeEventListener('mouseup', this.seekReleaseListener);
	      document.removeEventListener('touchend', this.seekReleaseListener);

	      // remove event listeners on the audio element
	      this.audio.removeEventListener('play', this.audioPlayListener);
	      this.audio.removeEventListener('pause', this.audioPauseListener);
	      this.audio.removeEventListener('ended', this.audioEndListener);
	      this.audio.removeEventListener('stalled', this.audioStallListener);
	      this.audio.removeEventListener('timeupdate', this.audioTimeUpdateListener);
	      this.audio.removeEventListener('loadedmetadata', this.audioMetadataLoadedListener);
	      this.removeMediaEventListeners(this.props.onMediaEvent);
	      clearTimeout(this.gapLengthTimeout);
	      clearTimeout(this.delayTimeout);

	      // pause the audio element before we unmount
	      this.audio.pause();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _this3 = this;

	      logDeprecationWarnings(nextProps);

	      // Update media event listeners that may have changed
	      this.removeMediaEventListeners(this.props.onMediaEvent);
	      this.addMediaEventListeners(nextProps.onMediaEvent);

	      var oldControls = [].concat(_toConsumableArray(this.props.controls));
	      this.controlKeys = nextProps.controls.map(function (control) {
	        var matchingIndex = oldControls.indexOf(control);
	        if (matchingIndex !== -1 && oldControls[matchingIndex]) {
	          oldControls[matchingIndex] = null;
	          return _this3.controlKeys[matchingIndex];
	        }
	        return getNextControlKey();
	      });

	      var newPlaylist = nextProps.playlist;
	      if (!newPlaylist || !newPlaylist.length) {
	        if (this.audio) {
	          this.audio.src = '';
	        }
	        this.currentTrackIndex = 0;
	        return this.setState(this.defaultState);
	      }

	      var oldPlaylist = this.props.playlist;

	      var currentTrackUrl = ((oldPlaylist || [])[this.currentTrackIndex] || {}).url;
	      this.currentTrackIndex = (0, _arrayFindIndex2.default)(newPlaylist, function (track) {
	        return track.url && currentTrackUrl === track.url;
	      });
	      /* if the track we're already playing is in the new playlist, update the
	       * activeTrackIndex.
	       */
	      if (this.currentTrackIndex !== -1) {
	        this.setState({
	          activeTrackIndex: this.currentTrackIndex
	        });
	      }
	    }
	  }, {
	    key: 'addMediaEventListeners',
	    value: function addMediaEventListeners(mediaEvents) {
	      var _this4 = this;

	      if (!mediaEvents) {
	        return;
	      }
	      Object.keys(mediaEvents).forEach(function (type) {
	        if (typeof mediaEvents[type] !== 'function') {
	          return;
	        }
	        _this4.audio.addEventListener(type, mediaEvents[type]);
	      });
	    }
	  }, {
	    key: 'removeMediaEventListeners',
	    value: function removeMediaEventListeners(mediaEvents) {
	      var _this5 = this;

	      if (!mediaEvents) {
	        return;
	      }
	      Object.keys(mediaEvents).forEach(function (type) {
	        if (typeof mediaEvents[type] !== 'function') {
	          return;
	        }
	        _this5.audio.removeEventListener(type, mediaEvents[type]);
	      });
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      /* if we loaded a new playlist and reset the current track marker, we
	       * should load up the first one.
	       */
	      if (this.currentTrackIndex === -1) {
	        this.skipToNextTrack(false);
	      }
	      if (prevProps !== this.props && !this.audio.paused) {
	        // update running media session based on new props
	        this.stealMediaSession();
	      }
	    }
	  }, {
	    key: 'setAudioElementRef',
	    value: function setAudioElementRef(ref) {
	      this.audio = ref;
	      if (typeof this.props.audioElementRef === 'function') {
	        this.props.audioElementRef(this.audio);
	      }
	    }
	  }, {
	    key: 'stealMediaSession',
	    value: function stealMediaSession() {
	      var _this6 = this;

	      if (!(window.MediaSession && navigator.mediaSession instanceof MediaSession)) {
	        return;
	      }
	      navigator.mediaSession.metadata = new MediaMetadata(this.props.playlist[this.currentTrackIndex]);
	      supportableMediaSessionActions.map(function (action) {
	        if (_this6.props.supportedMediaSessionActions.indexOf(action) === -1) {
	          return null;
	        }
	        var seekLength = _this6.props.mediaSessionSeekLengthInSeconds;
	        switch (action) {
	          case 'play':
	            return _this6.togglePause.bind(_this6, false);
	          case 'pause':
	            return _this6.togglePause.bind(_this6, true);
	          case 'previoustrack':
	            return _this6.backSkip;
	          case 'nexttrack':
	            return _this6.skipToNextTrack;
	          case 'seekbackward':
	            return function () {
	              return _this6.audio.currentTime -= seekLength;
	            };
	          case 'seekforward':
	            return function () {
	              return _this6.audio.currentTime += seekLength;
	            };
	          default:
	            return undefined;
	        }
	      }).forEach(function (handler, i) {
	        navigator.mediaSession.setActionHandler(supportableMediaSessionActions[i], handler);
	      });
	    }
	  }, {
	    key: 'togglePause',
	    value: function togglePause(value) {
	      if (!this.audio) {
	        return;
	      }
	      var pause = typeof value === 'boolean' ? value : !this.state.paused;
	      if (pause) {
	        return this.audio.pause();
	      }
	      if (!this.props.playlist || !this.props.playlist.length) {
	        return;
	      }
	      try {
	        this.audio.play();
	      } catch (error) {
	        logError(error);
	        var warningMessage = 'Audio playback failed at ' + new Date().toLocaleTimeString() + '! (Perhaps autoplay is disabled in this browser.)';
	        logWarning(warningMessage);
	      }
	    }
	  }, {
	    key: 'skipToNextTrack',
	    value: function skipToNextTrack(shouldPlay) {
	      var _this7 = this;

	      if (!this.audio) {
	        return;
	      }
	      if (!this.props.playlist || !this.props.playlist.length) {
	        return;
	      }
	      var i = this.currentTrackIndex + 1;
	      if (i >= this.props.playlist.length) {
	        i = 0;
	      }
	      this.currentTrackIndex = i;
	      var shouldPauseOnCycle = !this.props.cycle && this.currentTrackIndex === 0;
	      var shouldPause = shouldPauseOnCycle || (typeof shouldPlay === 'boolean' ? !shouldPlay : false);
	      if (shouldPause) {
	        this.togglePause(true);
	      }
	      this.setState({
	        activeTrackIndex: -1,
	        displayedTime: 0
	      }, function () {
	        setTimeout(function () {
	          // run asynchronously so "pause" event has time to process
	          _this7.updateSource();
	          if (!shouldPause) {
	            _this7.togglePause(false);
	          }
	        });
	      });
	    }
	  }, {
	    key: 'backSkip',
	    value: function backSkip() {
	      if (!this.props.playlist || !this.props.playlist.length) {
	        return;
	      }
	      var audio = this.audio;
	      var stayOnBackSkipThreshold = this.props.stayOnBackSkipThreshold;
	      if (isNaN(stayOnBackSkipThreshold)) {
	        stayOnBackSkipThreshold = 5;
	      }
	      if (audio.currentTime >= stayOnBackSkipThreshold) {
	        return audio.currentTime = 0;
	      }
	      var i = this.currentTrackIndex - 1;
	      if (i < 0) {
	        i = this.props.playlist.length - 1;
	      }
	      this.currentTrackIndex = i - 1;
	      this.skipToNextTrack();
	    }
	  }, {
	    key: 'updateSource',
	    value: function updateSource() {
	      this.audio.src = this.props.playlist[this.currentTrackIndex].url;
	    }
	  }, {
	    key: 'handleTimeUpdate',
	    value: function handleTimeUpdate() {
	      if (!this.seekInProgress && this.audio) {
	        this.setState({
	          displayedTime: this.audio.currentTime
	        });
	      }
	    }
	  }, {
	    key: 'adjustDisplayedTime',
	    value: function adjustDisplayedTime(event) {
	      if (!this.props.playlist || !this.props.playlist.length || this.props.disableSeek) {
	        return;
	      }
	      // make sure we don't select stuff in the background while seeking
	      if (event.type === 'mousedown' || event.type === 'touchstart') {
	        this.seekInProgress = true;
	        document.body.classList.add('noselect');
	      } else if (!this.seekInProgress) {
	        return;
	      }
	      /* we don't want mouse handlers to receive the event
	       * after touch handlers if we're seeking.
	       */
	      event.preventDefault();
	      var boundingRect = this.audioProgressContainer.getBoundingClientRect();
	      var isTouch = event.type.slice(0, 5) === 'touch';
	      var pageX = isTouch ? event.targetTouches.item(0).pageX : event.pageX;
	      var position = pageX - boundingRect.left - document.body.scrollLeft;
	      var containerWidth = boundingRect.width;
	      var progressPercentage = Math.max(0, Math.min(1, position / containerWidth));
	      this.setState({
	        displayedTime: progressPercentage * this.audio.duration
	      });
	    }
	  }, {
	    key: 'seek',
	    value: function seek(event) {
	      /* this function is activated when the user lets
	       * go of the mouse, so if .noselect was applied
	       * to the document body, get rid of it.
	       */
	      document.body.classList.remove('noselect');
	      if (!this.seekInProgress) {
	        return;
	      }
	      /* we don't want mouse handlers to receive the event
	       * after touch handlers if we're seeking.
	       */
	      event.preventDefault();
	      this.seekInProgress = false;
	      var displayedTime = this.state.displayedTime;
	      if (isNaN(displayedTime)) {
	        return;
	      }
	      this.audio.currentTime = displayedTime;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this8 = this;

	      var activeIndex = this.state.activeTrackIndex;
	      var displayText = this.props.getDisplayText(this.props.playlist[activeIndex]);

	      var displayedTime = this.state.displayedTime;
	      var duration = this.audio && this.audio.duration || 0;

	      var elapsedTime = convertToTime(displayedTime);
	      var fullTime = convertToTime(duration);
	      var timeRatio = elapsedTime + ' / ' + fullTime;

	      var progressBarWidth = displayedTime / duration * 100 + '%';

	      return _react2.default.createElement(
	        'div',
	        {
	          id: 'audio_player',
	          className: 'audio_player',
	          title: displayText,
	          style: this.props.style
	        },
	        _react2.default.createElement('audio', { ref: this.setAudioElementRef }),
	        this.props.controls.map(function (controlKeyword, index) {
	          var controlProps = controlKeyword === 'progress' || controlKeyword === 'progressdisplay' ? { displayText: displayText, timeRatio: timeRatio, progressBarWidth: progressBarWidth, audioPlayer: _this8 } : { audioPlayer: _this8 };
	          var Control = keywordToControlComponent[controlKeyword] || null;
	          return _react2.default.createElement(Control, _extends({}, controlProps, { key: _this8.controlKeys[index] }));
	        })
	      );
	    }
	  }]);

	  return AudioPlayer;
	}(_react2.default.Component);

	AudioPlayer.propTypes = {
	  playlist: _propTypes2.default.array,
	  controls: _propTypes2.default.arrayOf(_propTypes2.default.oneOf(['playpause', 'backskip', 'forwardskip', 'progress', 'progressdisplay', 'spacer'])),
	  autoplay: _propTypes2.default.bool,
	  autoplayDelayInSeconds: _propTypes2.default.number,
	  gapLengthInSeconds: _propTypes2.default.number,
	  hideBackSkip: _propTypes2.default.bool,
	  hideForwardSkip: _propTypes2.default.bool,
	  cycle: _propTypes2.default.bool,
	  disableSeek: _propTypes2.default.bool,
	  stayOnBackSkipThreshold: _propTypes2.default.number,
	  supportedMediaSessionActions: _propTypes2.default.arrayOf(_propTypes2.default.oneOf(['play', 'pause', 'previoustrack', 'nexttrack', 'seekbackward', 'seekforward']).isRequired).isRequired,
	  mediaSessionSeekLengthInSeconds: _propTypes2.default.number.isRequired,
	  getDisplayText: _propTypes2.default.func.isRequired,
	  style: _propTypes2.default.object,
	  onMediaEvent: _propTypes2.default.object,
	  audioElementRef: _propTypes2.default.func
	};

	AudioPlayer.defaultProps = {
	  cycle: true,
	  controls: ['spacer', 'backskip', 'playpause', 'forwardskip', 'spacer', 'progress'],
	  supportedMediaSessionActions: ['play', 'pause', 'previoustrack', 'nexttrack'],
	  mediaSessionSeekLengthInSeconds: 10,
	  getDisplayText: function getDisplayText(track) {
	    if (!track) {
	      return '';
	    }
	    if (track.displayText) {
	      // TODO: Remove this check when support for the displayText prop is gone.
	      return track.displayText;
	    }
	    if (track.title && track.artist) {
	      return track.artist + ' - ' + track.title;
	    }
	    return track.title || track.artist || track.album || '';
	  }
	};

	module.exports = AudioPlayer;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	module.exports = function (arr, predicate, ctx) {
		if (typeof Array.prototype.findIndex === 'function') {
			return arr.findIndex(predicate, ctx);
		}

		if (typeof predicate !== 'function') {
			throw new TypeError('predicate must be a function');
		}

		var list = Object(arr);
		var len = list.length;

		if (len === 0) {
			return -1;
		}

		for (var i = 0; i < len; i++) {
			if (predicate.call(ctx, list[i], i, list)) {
				return i;
			}
		}

		return -1;
	};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
/******/ ])
});
;
