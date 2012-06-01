var lastTweetSeen = localStorage.getItem("last-tweet-seen");
var styleModified = false;
var childrenNodes;
window.onbeforeunload = handleOnUnload;
setTimeout(function(){
	launch();
}, 6000);


function handleOnUnload()
{
	localStorage.setItem("last-tweet-seen",document.getElementById("stream-items-id").firstChild.getAttribute("data-item-id"));
}


function launch()
{
	if(lastTweetSeen != null && !styleModified)
	{

		var childrenNodes = document.getElementById("stream-items-id").childNodes;
		for(var i =0; i< childrenNodes.length; i++)
		{
			if(!(childrenNodes[i].nodeName == "#text"))
			{
				if(childrenNodes[i].getAttribute("data-item-id") == lastTweetSeen)
				{
					modifyStyleOfLastTweeSeen(childrenNodes[i]);
					styleModified = true;
					break;
				}
			}
		}
	}
}

function modifyStyleOfLastTweeSeen(lastTweet)
{
	lastTweet.style.backgroundColor = "#CBE2EE";
}

if(!styleModified)
{
	document.getElementById("stream-items-id").addEventListener("DOMNodeInserted", function(e) {
		launch();
	 }, false);	
}







