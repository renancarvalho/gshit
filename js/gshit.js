document.addEventListener('DOMContentLoaded', function() {
	var hide = document.getElementsByClassName('hideGshit');
	var show = document.getElementsByClassName('showGshit');
	hide[0].addEventListener('click',function() {
		chrome.tabs.insertCSS(null, {file: "/style/gshit.css"});
		window.close();
	});
	show[0].addEventListener('click',function() {
		chrome.tabs.insertCSS(null, {file: "/style/gshitback.css"});
		window.close();
	});
});