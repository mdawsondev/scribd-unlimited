// ==UserScript==
// @name         Scribd Unlimited
// @namespace    https://github.com/mdawsondev/scribd-unlimited
// @version      1.0.4
// @description  Removes advertisements and unblurs pages.
// @author       Matt Dawson | https://mdawsondev.com
// @icon         https://pbs.twimg.com/profile_images/864156483881123840/wFgIx3RN_400x400.jpg
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.18.2/babel.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.16.0/polyfill.js
// @include      *.scribd.com/document/*
// ==/UserScript==

/* jshint ignore:start */
var inline_src = (<><![CDATA[
    /* jshint ignore:end */
    /* jshint esnext: false */
    /* jshint esversion: 6 */

    (function() {
        const adEles   = document.querySelectorAll('.page_missing_explanation'),
              blurEles = document.querySelectorAll('.blurred_page');

        blurEles.forEach(node => node.classList.remove('blurred_page'));
        adEles.forEach(e => e.parentNode.removeChild(e));
    })();

    /* jshint ignore:start */
]]></>).toString();
                  var c = Babel.transform(inline_src, { presets: [ 'es2015', 'es2016' ] });
eval(c.code);
/* jshint ignore:end */