/*
Coded by James Paik
Story by Shivani Patel
*/

//document.onLoad = setUp();	
	var gameOn = 0;  // Not playing yet
	var storyLine   = ''; // Description of the room you're in (for repeats)	
	
	function setUp(){
		if (document.getElementById) {
			//Start capturing keys.
			//document.onkeyup = keyCaps;			
			// Send the "intro" command to start the game.
			sendMessage("intro");
			
		}
		else {
			// getElementById is pretty important for this game.
			window.alert("This game requires a browser that supports GetElementById.");
		}
	}
	
	function sendMessage(msg){
		// Ignore blank messages.
		if (msg.length == 0) {
			return;
		}
		
		
		// Separate the story (first word) from args.
		var args = msg.split(" ");
		var command = args[0];

		// Handle aliases to the storys (Shortcuts if Typed)
		//command = storyAliases(command);

		// Handle the stories (commands).
		if (command == "intro") {
			if (gameOn) {
				dispfd("Game is on. Intro Screen Fail.<br><br>");
			}
			else {
				dispfd("Welcome to <span id=\"ethic-color\">Decisions and Destiny</span>, a Game of Life.<br><br>"
					+ "If you need help, there is a help page located at the top right. <br><br>"
					+ "<input id=\"buttonSize\" class=\"btn btn-default\" onclick=\"sendMessage('start')\" type=\"button\" value=\"Continue\" /> &nbsp"
					+ "<input id=\"buttonSize\" class=\"btn btn-default\" onclick=\"sendMessage('leave')\" type=\"button\" value=\"Go Back\" />");
			}
		}
			
		else if (command == "start") {
			// Starting a new game.
			
			if (gameOn == 0) {
				gameOn = 1;
				disp("Initializing Game...");
				setTimeout(function() {disp("Please Wait...");}, 2000);
				storyLine = "5:30pm on July 28th, 2014 at TrueBeauty Makeup Headquarters, located in San Francisco, CA";
				setTimeout(function(){dispfd(storyLine);}, 5500);
				setTimeout(function(){storyScript('scene1');}, 13500); 
				
			}
			else {
				disp("Error... James did something wrong.<br><br>");
			}
		}
		
		else if(command == "leave"){
			disp("Really? You didn't even try out the game yet... <br> But if you did, then hopefully it was ok :)");
		}
		
		else if (command == "exit"){
			if(gameOn == 1){
				disp("Exiting Game.");
				gameOn = 0;
				
			}
			else{
				disp("Game is not even running...");
			}
		}
		
		else {
			disp("Error... James did something wrong");
		}
	}
	
	//Actual Story Display and Things like that
	function storyScript(msg){
		// Ignore blank messages.
		if (msg.length == 0) {
			return;
		}
		
		// Separate the story (first word) from args.
		var args = msg.split(" ");
		var scr = args[0];
		
		if(scr == "scene1"){
			setTimeout(function() {
			document.getElementById("bgcolor").style.backgroundColor = "#FFFFFF";
			document.getElementById("bgcolor").style.color = "#000000";
			document.body.style.backgroundImage = 'url("img/story/SceneOne.jpg")';
			}, 900);
			dispfd("Eva, a chemist at TrueBeauty Makeup, was just about done with her shift when her boss, Mr. Dempsey, came in.");
			setTimeout(function(){dispfd("\'Hello Eva, I see you're ready to go. Before you do so though, can you fill me in on what's going on with the current foundation testing?\'")}, 8000);
			setTimeout(function(){dispfd("\'Mr. Dempsey, I actually was just about to head over to your office to talk about that\...\'")}, 18500);
			setTimeout(function(){dispfd("\'Go on.\'")}, 27000);
			setTimeout(function(){dispfd("\'Well... while doing the physical testing, we found that the foundation would burn the skin of the subjects and not only that but blisters would form and the skin would be hot to the touch...\'")}, 30500);
			setTimeout(function(){disp("\'Well... while doing the physical testing, we found that the foundation would burn the skin of the subjects and not only that but blisters would form and the skin would be hot to the touch...<br>A few of the test subjects even died.\'")}, 40000);
			setTimeout(function(){dispfd("\'Oh well, that's nothing to get upset about. Eva, you've worked in this industry long enough to know that animals can get killed, and it's nothing a little modification can't fix\'")}, 49000);
			setTimeout(function(){dispfd("\'Yes sir, but you see, we've already tried modifying the foundation countless times, and I'm afraid this just won't work. I was going to suggest you reject this project completely.\'")}, 59000);
			setTimeout(function(){storyScript('scene2')}, 67000);
			
		}
		else if(scr == "scene2"){
			setTimeout(function() { document.body.style.backgroundImage = 'url("img/story/SceneTwo.jpg")'}, 900);
			setTimeout(function(){dispfd("\'Mr. Dempsey began to get a little upset. How was it that his employee would talk back to a superior?\'")}, 100);
			setTimeout(function(){dispfd("\'Eva, do you have any idea how many people have invested in this? It would be a total loss, not to them but to this company as well. We've already had so many pre-orders that the containers and labels have already been made, by the thousands. To stop this project would be economic suicide.\'")}, 11000);
			setTimeout(function(){dispfd("\'Sir I understand, but do you know how much harm will happen if we allow this product to be sold?\'")}, 30000);
			setTimeout(function(){dispfd("\'Well, that's simply not my concern. I'm sorry, but you must go through with it. I expect all the required paperwork and evaluation forms on my desk in the morning.\'")}, 38000);
			setTimeout(function(){dispfd("\'Yes sir\' Eva replied. When Mr. Dempsey left, she let out a deep sigh.")}, 48000);
			setTimeout(function(){disp("\'Yes sir\' Eva replied. When Mr. Dempsey left, she let out a deep sigh.<br>She had no idea what to do next.")}, 55000);
			setTimeout(function(){storyScript('scene3')}, 62000);
		}
		else if(scr == "scene3"){
			setTimeout(function() { document.body.style.backgroundImage = 'url("img/story/SceneThree.jpg")'}, 900);
			setTimeout(function(){dispfd("Her mind was telling her to go ahead with the project, so she wouldn't loose her job, but her heart was telling her otherwise.")}, 100);
			setTimeout(function(){dispfd("It would cause substantial harm to so many people nationwide, and she couldn't let that onto her conscience.")}, 13000);
			setTimeout(function(){dispfd("When Eva went home that night, she couldn't go to sleep at all.")}, 25000);
			setTimeout(function(){disp("When Eva went home that night, she couldn't go to sleep at all. <br> She was nervous about what she was going to tell Mr. Dempsey the following morning.")}, 34000);
			setTimeout(function(){storyScript('scene4')}, 43000);
		}
		else if(scr == "scene4"){
			setTimeout(function() { document.body.style.backgroundImage = 'url("img/story/SceneFour.jpg")'}, 900);
			setTimeout(function(){dispfd("Eva got up extra early to get ready and do a run through of what she was going to say, before she actually said it.")}, 100);
			setTimeout(function(){dispfd("She grabbed a bagel and headed out the door.")}, 10000);
			setTimeout(function(){dispfd("The whole way to work, she couldn't stop shaking her legs, and the lady next to her on the bus gave her a weird look.")}, 17000);
			setTimeout(function(){dispfd("She all but ran into Mr. Dempsey's office.")}, 25000);
			setTimeout(function(){dispfd("\'Sir...\'")}, 33000);
			setTimeout(function(){storyScript('choice1')}, 38000);
			
		}
		
		else if(scr == "choice1"){
			setTimeout(function() {
			document.body.style.backgroundImage = 'url("")';
			document.getElementById("bgcolor").style.backgroundColor = "#FAFAFA";
			document.getElementById("bgcolor").style.color = "#000000";
			}, 900);
			setTimeout(function(){dispfd("(Now, as Eva, you have 2 options. You can either go along with Mr. Dempsey, or speak up and follow your heart.)")}, 100);
			setTimeout(function(){disp("(Now, as Eva, you have 2 options. You can either go along with Mr. Dempsey, or speak up and follow your heart.)<br>What do you want to do?")}, 5000);
			setTimeout(function(){disp("(Now, as Eva, you have 2 options. You can either go along with Mr. Dempsey, or speak up and follow your heart.)<br>What do you want to do?<br><br>"
									   + "<input id=\"buttonSize\" class=\"btn btn-primary\" onclick=\"storyScript('obey')\" type=\"button\" value=\"Obey and Follow Mr. Dempsey\" /> &nbsp &nbsp"
									   + "<input id=\"buttonSize\" class=\"btn btn-danger\" onclick=\"storyScript('disobey')\" type=\"button\" value=\"Disobey and Speak Up\" />")}, 6000);
									   
		}
		
		else if(scr == "obey"){
			setTimeout(function() { 
			document.getElementById("bgcolor").style.backgroundColor = "#FFFFFF";
			document.getElementById("bgcolor").style.color = "#000000";
			document.body.style.backgroundImage = 'url("img/story/Obey.jpg")';
			}, 900);
			setTimeout(function(){dispfd("\'I didn't get a chance to do the reports last night, but I'll have them on your desk before lunch.\'")}, 100);
			setTimeout(function(){dispfd("\'Okay Eva, glad to hear that you're on board!\'")}, 9000);
			setTimeout(function() { document.body.style.backgroundImage = 'url("img/story/LastScene.jpg")'}, 17000);
			setTimeout(function(){dispfd("Now, because Eva went along with the fake evaluations and gave the foundation the 'okay' for production, she was promoted to head chemist at the company a few years down the line.")}, 17000);
			setTimeout(function(){dispfd("She was the one in charge for deciding what to do in situations like these, and as upper management, she was given the power to follow her heart as well.")}, 29000);
			
			setTimeout(function(){storyScript('endScreen')}, 38000);
		}
		
		else if(scr == "disobey"){
			
			setTimeout(function() {
			document.body.style.backgroundImage = 'url("img/story/Disobey.jpg")';
			document.getElementById("bgcolor").style.backgroundColor = "#FFFFFF";
			document.getElementById("bgcolor").style.color = "#000000";
			}, 900);
			setTimeout(function(){dispfd("\'Sir, I'm sorry but I can't lie, and I won't lie. I won't let a harmful foundation be sold to the public. It would cause so much damage and pain and suffering to the women who used it, and I'm sorry but that's just not something I want on my conscience.\'")}, 100);
			setTimeout(function(){dispfd("\'Okay...\' Mr. Dempsey rubbed his temples.")}, 19000);
			setTimeout(function(){dispfd("\'I didn't want to have to do this, but Eva I have to fire you for insubordination.\'")}, 27000);
			setTimeout(function() { document.body.style.backgroundImage = 'url("img/story/LastScene.jpg")'}, 35000);
			setTimeout(function(){dispfd("Eva was fired from TrueBeauty Makeup, but within a few months, she was hired by their top competitor Venus Cosmetics.")}, 35000);
			setTimeout(function(){dispfd("She was one of the most experienced members of the company, and within a few years, she was working her way up to management.")}, 43000);
			setTimeout(function(){storyScript('endScreen')}, 55000);
		}
		
		else if(scr == "endScreen"){
			setTimeout(function() {
			document.body.style.backgroundImage = 'url()';
			document.getElementById("bgcolor").style.backgroundColor = "#FAFAFA";
			document.getElementById("bgcolor").style.color = "#000000";
			}, 900);
			setTimeout(function(){dispfd("So you see, life goes on regardless of what you decide to do, and either way you play the game, you\'ll end up where you\'re supposed to be...")}, 100);
			setTimeout(function(){storyScript('creditScreen')}, 15000);
			//
		}
		
		else if(scr =="creditScreen"){
			
			//setTimeout(function(){dispfd("\'  \'")}, 2000);
			setTimeout(function(){dispfd("Thank you for playing!")}, 100);
			setTimeout(function(){dispfd("Coded by James Paik<br>Story and Images by Shivani Patel<br><br>For Mr. Pellicane's English Project")}, 4000);
			
			
		}
		
		else{
			dispfd("Error... James did something wrong.");
		}
	
	}
	
	
	
	//Display the message with fade
	function dispfd(msg){
		fadeEffect.init('bgcolor', 0);
		setTimeout(function() {fadeEffect.init('bgcolor', 1);}, 1500);
		setTimeout(function() {document.getElementById("bgcolor").innerHTML = msg;}, 1500);
	}
	//Display message without fade
	function disp(msg){
		document.getElementById("bgcolor").innerHTML = msg;
	}
	
	//Fade Effect
	var fadeEffect=function(){
		return{
			init:function(id, flag, target){
				this.elem = document.getElementById(id);
				clearInterval(this.elem.si);
				this.target = target ? target : flag ? 100 : 0;
				this.flag = flag || -1;
				this.alpha = this.elem.style.opacity ? parseFloat(this.elem.style.opacity) * 100 : 0;
				this.elem.si = setInterval(function(){fadeEffect.tween()}, 20);
			},
			tween:function(){
				if(this.alpha == this.target){
					clearInterval(this.elem.si);
				}else{
					var value = Math.round(this.alpha + ((this.target - this.alpha) * .025)) + (1 * this.flag);
					this.elem.style.opacity = value / 100;
					this.elem.style.filter = 'alpha(opacity=' + value + ')';
					this.alpha = value
				}
			}
		}
	}();
	
	
						