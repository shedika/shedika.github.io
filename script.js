var ul = document.getElementById("tweetList");

function addTweet(event){
	var input = document.getElementById("tweetInput");
	var li = document.createElement("LI");
	var em = document.createElement("EM");

	em.innerText = "Mariam";
	li.innerText = event.target.value;
	//console.log();
	li.appendChild(em);
	ul.prepend(li);
	input.innerText="";

}