'use strict';

document.addEventListener('DOMContentLoaded', function() {
	var hide = document.getElementsByClassName('hideGshit');
	var show = document.getElementsByClassName('showGshit');
	hide[0].addEventListener('click',function() {
		esconderGshow();
	});
	show[0].addEventListener('click',function() {
		mostrarGshow();
	});
});

function mostrarGshow () {
	salvarConfiguracao("show");
	recarregarTab();
}

function esconderGshow () {
	salvarConfiguracao("hide");
	recarregarTab();
}

function recarregarTab () {
	chrome.tabs.getSelected(null, function(tab) {
	  var code = 'window.location.reload();';
	  chrome.tabs.executeScript(tab.id, {code: code});
	  window.close();
	});
}

function salvarConfiguracao (config) {
	chrome.storage.sync.set({ "gshow": config });
}