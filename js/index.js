'use strict';

carregarConfiguracao();

function carregarConfiguracao () {
	chrome.storage.sync.get("gshow", function (data) {
		if(data.gshow === 'hide') esconderGshow();
		if(data.gshow === 'show') mostrarGshow();
	});
}

function mostrarGshow () {
	var file = chrome.extension.getURL('style/gshitback.css');
	addCss(file);
}

function esconderGshow () {
	var file = chrome.extension.getURL('style/gshit.css')
	addCss(file);
}

function addCss (url) {
	var cssId = 'myCss';
	if (!document.getElementById(cssId)) {
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    link.media = 'all';
    head.appendChild(link);
	}
}

