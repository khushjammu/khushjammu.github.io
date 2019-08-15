import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
	    <div className="Text">
	    <h1>Khush Jammu 🚀</h1>

		<div className="warning">
			<p>total time {"<4min"}</p>
		</div>

		<center><img src={require('./assets/profile.png')} className="Profile-image"/></center>

		<p>My name is Khush. I'm a high-school student by day and developer by night. I was born in Malaysia, lived in Hong Kong for a few years, and now live in Singapore. I'm love programming, philosophy, and reading! I'm doing some development consulting work on the side too, and I'm excited to see how that goes.</p>

	      
		<h2>Who am I? (~2min)</h2>
			<p>I was born in Malaysia, where I spent my formative years. I moved to Hong Kong when I was nine years old. Between adjusting to a new school and trying out Hong Kong’s food, I developed an interest in programming after reading <i>Stealing the Network</i>.</p>
			<p>Then I moved to Singapore. In Grade 9, I met two people who would come to be very important to my journey: <a href="https://taichikato.com">Taichi</a> and <a href="https://www.aryavohra.com/">Arya</a>. We hit it off immediately and ended up winning a hackathon together with Questo: an app that generated simple fill-in-the-blank questions from pictures of a textbook page.</p>
			<p>Around that time I met a senior whom I really respect, who was about to graduate in my high-school. In many senses, he was a role-model for all three of us and he encouraged us to pursue our interests. Between that and reading Cal Newport’s <i>How to Be a High School Superstar</i>, I decided to start treating HS as a day job and maximise the amount of free time I have to do my own thing. </p>
			<p>I've used that time to win hackathons, build cool stuff with Taichi and Arya, gym, and read. Along the way, my friends have got me into Anderson .Paak and older Kendrick. (<a href="https://open.spotify.com/album/0YF8PfcGbsKg5IaFyPnlyY?si=sI0oG1kNQ8-neJMpOxnYhQ">Ventura</a> and <a href="https://open.spotify.com/album/748dZDqSZy6aPXKcI9H80u?si=e5N8wF-LTrCouFrOt1wVYg">good kid, m.A.A.d city</a> are my favourites.)</p>
			<p>So yeah, that’s me. I’m graduating high-school in just under a year and I can’t wait to see what comes next. I love meeting cool people so if you wanna do anything from geek out over a book to chat about a cool project, hit me up!</p>
			<p>✌️</p>


		<div className="social">
			<p><a href="mailto:khushjammu@gmail.com" target="_top">Email</a>&ensp;<a href="https://twitter.com/khushjammu">Twitter</a>&ensp;<a href="https://www.linkedin.com/in/khush-jammu-1aa422132/">LinkedIn</a></p>
		</div>


		<h2>What I’m doing now ({"<1min"})</h2>
			<ul>
			<li>Working on Questo (see below for info)! 📚</li>
			<li>Reading <i>Range</i> by David Epstein 📖</li>
			<li>Getting into development consulting 🤓</li>
			<li>Preparing to release a new flight app (stay tuned 😉) 🛫</li>
			<li>Thinking about how I’m going to spend my years in NS (Singapore’s two-year national service) and beyond 👮‍♂️</li>
			</ul>

		<h2>My Favourite Books ({"<1min"})</h2>
			<ul>
			<li><i>Crime and Punishment</i> by Fyodor Doteyevsky 🔪 (my review <a href="https://www.goodreads.com/review/show/2806596992">here</a>)</li>
			<li><i>The Master and Margarita</i> by Mikhail Bulgakov 👺</li>
			<li><i>God Bless You, Mr. Rosewater</i> by Kurt Vonnegut 💸 (my review <a href="https://www.goodreads.com/review/show/2793644728">here</a>)</li>
			<li><i>Principles</i> by Ray Dalio 📏</li>
			<li><i>Thinking in Systems: A Primer</i> by Donella H. Meadows 🧬 (my review <a href="https://www.goodreads.com/review/show/2790440019">here</a>)</li>
			<li><i>How to be a High-School Superstar</i> by Cal Newport 🌟</li>
			<li><i>Sapiens</i> by Yuval Noah Harrari 🐒</li>
			<li><i>How to Win Friends and Influence People</i> (way better than the title, I promise) by Dale Carnegie 👫</li>
			<li><i>The Belgariad</i> and <i>Mallorean</i> series by David Eddings 🧙‍♂️</li>
			</ul>

		<h2>Stuff I've Done</h2>
	    <div className="stuffdone"><ul>
	        <li><b><a href="https://questo.ai/">Questo</a></b>
	          <ul><li>
	            A way for me to effect change in what I see is a broken aspect of education — an emphasis on retention of facts and the such. Received $120k in subsidised cloud funding from Google and IBM. 140+ upvotes on <a href="https://news.ycombinator.com/item?id=16637415">HackerNews</a> and front-page of <a href="https://www.producthunt.com/posts/questo">ProductHunt</a> with 500+ upvotes! Currently running a beta. Have spent 3yrs++ working on it (since I was in Grade 9). 
	          </li></ul>
	        </li>
	        <li><b>Hack & Roll 2019</b> (~230 participants)
	          <ul><li>
	            Won Best Pre-U Hack for <a href="https://devpost.com/software/bookworm-aye8z5">Bookworm</a>: an app that uses AR to augment the experience of reading a book. In our demo, we hung a camera over a book and made it such that you could tap any word and a definition would appear on an iPad. It used OpenCV for the finger detection and React-Native for the iPad app. We drew the largest crowd there.
	          </li></ul>
	        </li>
	        <li><b>Saturn</b>
	          <ul><li>
	            A moonshot attempt at creating a web app which could automatically generate courses to learn anything. Ultimately didn’t work out :(
	          </li></ul>
	        </li>
	        <li><b>#codeathon 2017: Technopreneurship for Gender Equality</b> (~80 participants)
	          <ul><li>
	            Won Pre-University Overall Winning Team for $500 cash. Made <a href="https://devpost.com/software/hequals-h"><i>h=</i></a> (pronouned “h” + equals) — an AI powered human resource manager without bias. It assigns tasks to people in a team based on pure meritocratic skill, thus avoiding bias.
	            (Press: <a href="https://perspectives.uwcsea.edu.sg/community-news/uwcsea-teams-win-technopreneurship-gender-equality-codeathon">1</a>)
	          </li></ul>
	        </li>
	        <li><b>SWSG Mega 2017</b> (~250 participants)
	          <ul><li>
	            Won Most Creative Prize w/ $40k in prizes! Made <a href="http://getphotonify.mystrikingly.com/">Photonify</a>: a photography assistant that helps you take better photos by guiding your composition. Got literal wows when demo-ing on stage, which was awesome. Even cooler, a photo of me making history notes on stage became a <a href="https://imgur.com/CJ8bYjg">meme</a>.
	            (Press: <a href="https://www.gic.com.sg/news-and-resources/startup-weekend-singapore-swsg-mega-2017-winners-announced/">1</a> <a href="https://perspectives.uwcsea.edu.sg/community-news/hacking-their-way-top-grade-10s-win-startup-weekend-singapore-2017">2</a> <a href="http://communities.techstars.com/singapore/singapore/startup-weekend/11281">3</a> <a href="https://www.straitstimes.com/business/companies-markets/startup-weekend-singapore-hackathon-gets-over-100-ideas">4</a> <a href="https://www.sgsme.sg/news/localised-travel-chatbot-wins-two-prizes-startup-weekend-singapore-hackathon">5</a>)
	          </li></ul>
	        </li>
	        <li><b>IBM PitchIT: “Battle of the Hackathon Winners”</b> (~160 participants)
	          <ul><li>
	            Won Overall Winner Student Category! First hackathon win 🎉 This is where Questo was born and I found my team for the next four years (Taichi & Arya). Received a $12k grant and got the chance to meet the CTO of IBM too. Catalyst for my developer journey.
	            (Press: <a href="https://twitter.com/FionnieG/status/799134321789399040">1</a> <a href="https://www.facebook.com/IBM.SG/photos/a.321756900869/10153833365265870/?type=1&theater">2</a>)
	          </li></ul>
	        </li>
	        <li><b>Sublist</b>
	          <ul><li>
	            My first real programming project! Simple DNS subdomain bruteforcer written in Python based on a tool I read about in a book. Worked surprisingly well and the code was beautifully clean. 
	          </li></ul>
	        </li>
		</ul></div>
	    </div>
    </div>
  );
}

export default App;
