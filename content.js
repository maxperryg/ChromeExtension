var video = document.querySelector('div.player');

var videoLoad = new MutationObserver(function(mutation){
    addButton();
});

videoLoad.observe(video,{ childList: true });


function addButton(){
    var videoContent = document.querySelector('div.player video');
    var rate = videoContent.playbackRate;
    var buttons = document.getElementsByClassName('vp-sidedock')[0];
    var box = document.createElement('div');
	box.className = 'box';

	var html = '';
	html += '<label class="rounded-box speed-label invisible hidden" role="presentation"><span>Playback Rate</span></label>';

    html += '<button type="button" class="speed-button rounded-box" aria-label="Speed">' + rate + 'x</button>';
	box.innerHTML = html;


    buttons.appendChild(box);

    document.getElementsByClassName("speed-button")[0].setAttribute("onmouseover", 'document.getElementsByClassName("speed-label")[0].classList.remove("invisible","hidden")');

    document.getElementsByClassName("speed-button")[0].setAttribute("onmouseout", 'document.getElementsByClassName("speed-label")[0].classList.add("invisible","hidden")');

    document.getElementsByClassName("speed-label")[0].setAttribute("style", "margin-right:10");

}
function test(){
    console.log('hi');
}

