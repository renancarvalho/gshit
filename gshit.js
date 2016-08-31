document.addEventListener('DOMContentLoaded', function() {
	var hide = document.getElementsByClassName('hideGshit');
	hide[0].addEventListener('click',function() {
		chrome.tabs.insertCSS(null, {file: "gshit.css"});
	});
});