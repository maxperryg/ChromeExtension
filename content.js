
//var $player = document.querySelector('div.player');

//var box = document.createElement("div");
//box.setAttribute("class", "box");
//
//var label = document.createElement("label");
//label.setAttribute("class", "rounded-box collections-label invisible hidden");
//label.setAttribute("role", "presentation");
//label.setAttribute("hidden", "");
//label.innerHTML="<span>Change Speed</span>";
//
//var button = document.createElement("button");
//button.setAttribute("type", "button");
//button.setAttribute("class", "collections-button rounded-box");
//button.setAttribute("aria-label", "Add to collections");
//
//var svg = document.createElement("svg");
//svg.setAttribute("class", "collections-icon");
//svg.setAttribute("viewBox", "0 0 24 24");
//svg.setAttribute("tabindex", "-1");
//
//var path = document.createElement("path");
//path.setAttribute("class", "fill");
//path.setAttribute("d", "M24 12c0-.3-.1-.6-.4-.8l-2.7-2.3 2.4-1c.4-.1.7-.5.7-.9 0-.3-.1-.6-.4-.8l-7-6c-.1-.1-.4-.2-.6-.2-.1 0-.3 0-.4.1l-15 6c-.3.1-.6.5-.6.9 0 .3.1.6.4.8l2.7 2.3-2.4 1c-.4.1-.7.5-.7.9 0 .3.1.6.4.8l2.7 2.3-2.4 1c-.4.1-.7.5-.7.9 0 .3.1.6.4.8l7 6c.1.1.4.2.6.2.1 0 .3 0 .4-.1l15-6c.4-.1.6-.5.6-.9 0-.3-.1-.6-.4-.8l-2.7-2.3 2.4-1c.4-.1.7-.5.7-.9zm-8.2-9.8l5.3 4.5-12.9 5.1-5.3-4.5 12.9-5.1zm5.3 14.5L8.2 21.8l-5.3-4.5 1.9-.8 2.6 2.2c.1.2.4.3.6.3.1 0 .3 0 .4-.1l10.5-4.2 2.2 2zm-12.9.1l-5.3-4.5 1.9-.8 2.6 2.2c.1.2.4.3.6.3.1 0 .3 0 .4-.1l10.5-4.2 2.3 1.9-13 5.2z");
//
//svg.appendChild(path);
//button.appendChild(svg);
//box.appendChild(label);
//box.appendChild(button);

var video = document.querySelector('div.player');
var buttons = document.getElementsByClassName('vp-sidedock')[0];
addButton(buttons);
function addButton(sideDock){
    var box = document.createElement('div');
	box.className = 'box';

	var html = '';
	html += '<style>';
	html += 'html .player .speed-button { color: white; font-weight: bold; } \n';
	html += 'html .player .speed-button.on { background-color: rgb(0, 173, 239); } \n';
	html += 'html .player .speed-button.on:active { background-color: rgb(0, 147, 203); } \n';
	html += '</style>';
	html += '<label class="rounded-box speed-label invisible hidden" role="presentation"><span>Playback rate</span></label>';
	html += '<button title="Mouse scroll to change speed. Click to enter custom speed." tabindex="50" class="speed-button rounded-box" aria-label="Speed">' + video.playbackRate + 'x</button>';
	box.innerHTML = html;

    buttons.appendChild(box);
}
