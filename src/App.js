import React from 'react';
// import { Container, Row, Col } from 'reactstrap';
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

		<p>My name is Khush. I'm a high-school student by day and developer by night. I was born in Malaysia, lived in Hong Kong for a few years, and now live in Singapore. I'm love programming, philosophy, and reading!</p>

	      
		<h2>Who am I? (~2min)</h2>
			<p>I was born in Malaysia, where I spent my formative years. I moved to Hong Kong when I was nine years old. Between adjusting to a new school and trying out Hong Kong’s food, I developed an interest in programming after reading Stealing the Network.</p>
			<p>Then I moved to Singapore. In Grade 9, I met two people who would come to be very important to my journey: Taichi and Arya. We hit it off immediately and ended up winning a hackathon together with Questo: an app that generated simple fill-in-the-blank questions from pictures of a textbook page.</p>
			<p>Around that time I met a senior whom I really respect, who was about to graduate in my high-school. In many senses, he was a role-model for all three of us and he encouraged us to pursue our interests. Between that and reading Cal Newport’s High-School Superstar, I decided to start treating HS as a day job and maximise the amount of free time I have to do my own thing. </p>
			<p>And it worked! I’ve managed to get decent grades with a ton of free time, and I’ve used that time to win hackathons, build cool stuff with Taichi and Arya, hang out with my girlfriend, gym, read. Along the way, my friends have ruined my music taste with Anderson .Paak and older Kendrick, damn them. (Seriously though, <a href="https://open.spotify.com/album/0YF8PfcGbsKg5IaFyPnlyY?si=sI0oG1kNQ8-neJMpOxnYhQ">Ventura</a> is sexy.)</p>
			<p>So yeah, that’s me. I’m graduating high-school in just under a year and I can’t wait to see what comes next. I love meeting cool people so if you wanna do anything from geek out over a book to chat about a cool project HIT ME UP.</p>
			<p>✌️</p>


		<div className="social">
			<p><a href="https://twitter.com/khushjammu">Twitter</a></p>
			<p><a href="https://news.ycombinator.com/item?id=16637415">LinkedIn</a></p>
			<p><a href="https://news.ycombinator.com/item?id=16637415">Stackoverflow </a></p>
		</div>
	        




		<h2>What I’m doing now ({"<1min"})</h2>
			<ul>
			<li>Working on Questo (see below for info)! 📚</li>
			<li>Reading <i>Range</i> by <i>David Epstein</i> 📖</li>
			<li>Getting into development consulting 🤓</li>
			<li>Preparing to release a new flight app (stay tuned 😉) 🛫</li>
			<li>Thinking about how I’m going to spend my years in NS (Singapore’s mandatory two-year national service) and beyond 👮‍♂️</li>
			</ul>

		<h2>My Favourite Books ({"<1min"})</h2>
			<ul>
			<li>Crime and Punishment by Fyodor Doteyevsky 🔪 (my review <a href="https://www.goodreads.com/review/show/2806596992">here</a>)</li>
			<li>The Master and Margarita by Mikhail Bulgakov 👺</li>
			<li>God Bless You, Mr. Rosewater by Kurt Vonnegut 💸 (my review <a href="https://www.goodreads.com/review/show/2793644728">here</a>)</li>
			<li>Principles by Ray Dalio 📏</li>
			<li>Thinking in Systems: A Primer by Donella H. Meadows 🧬 (my review <a href="https://www.goodreads.com/review/show/2790440019">here</a>)</li>
			<li>How to be a High-School Superstar by Cal Newport 🌟</li>
			<li>Sapiens by Yuval Noah Harrari 🐒</li>
			<li>How to Win Friends and Influence People (way better than the title, I promise) by Dale Carnegie 👫</li>
			<li>The Belgariad and Mallorean series by David Eddings 🧙‍♂️</li>
			</ul>

		<h2>Stuff I've Done</h2>
	    <div className="stuffdone"><ul>
	        <li><b><a href="https://questo.ai/">Questo</a></b>
	          <ul><li>
	            A way for me to effect change in what I see is a broken aspect of education — an emphasis on retention of facts and the such. Received $120,000 in subsidised cloud funding from Google Cloud and IBM. 140+ upvotes on <a href="https://news.ycombinator.com/item?id=16637415">HackerNews</a> and front-page of <a href="https://questo.ai/">ProductHunt</a> with 500+ upvotes! Currently running a beta. Have spent 3yrs++ working on it (since I was in Grade 9). 
	          </li></ul>
	        </li>
	        <li><b>Hack & Roll 2019</b> (~230 participants)
	          <ul><li>
	            Won Best Pre-U Hack for <a href="https://devpost.com/software/bookworm-aye8z5">Bookworm</a>: an app that uses AR to augment the experience of reading a book. In our demo, we hung a DSLR over a book and made it such that you could tap any word and a definition would appear on the iPad. Our hardware setup drew the largest crowd there.
	          </li></ul>
	        </li>
	        <li><b>Saturn</b>
	          <ul><li>
	            A moonshot attempt at creating something which could automatically generate courses to learn anything. Ultimately didn’t work out :(
	          </li></ul>
	        </li>
	        <li><b>#codeathon 2017: Technopreneurship for Gender Equality</b> (~80 participants)
	          <ul><li>
	            Won Pre-University Overall Winning Team for $5000 cash. Made <a href="https://devpost.com/software/hequals-h"><i>h=</i></a> (pronouned “h” + equals) — an AI powered human resource manager without bias. It assigns tasks to people in a team based on pure meritocratic skill, thus avoiding bias.
	            (Press: <a href="https://perspectives.uwcsea.edu.sg/community-news/uwcsea-teams-win-technopreneurship-gender-equality-codeathon">1</a>)
	          </li></ul>
	        </li>
	        <li><b>SWSG Mega 2017</b> (~250 participants)
	          <ul><li>
	            Won Most Creative Prize w/ $40k in prizes! Made Photonify: a photography assistant that helps you take better photos by guiding your composition. Got literal wows when demo-ing on stage. Even cooler, a photo of me making history notes on stage became a meme.
	            (Press: <a href="https://www.gic.com.sg/news-and-resources/startup-weekend-singapore-swsg-mega-2017-winners-announced/">1</a> <a href="https://perspectives.uwcsea.edu.sg/community-news/hacking-their-way-top-grade-10s-win-startup-weekend-singapore-2017">2</a> <a href="http://communities.techstars.com/singapore/singapore/startup-weekend/11281">3</a> <a href="https://www.straitstimes.com/business/companies-markets/startup-weekend-singapore-hackathon-gets-over-100-ideas">4</a> <a href="https://www.sgsme.sg/news/localised-travel-chatbot-wins-two-prizes-startup-weekend-singapore-hackathon">5</a>)
	          </li></ul>
	        </li>
	        <li><b>IBM PitchIT: “Battle of the Hackathon Winners”</b> (~160 participants)
	          <ul><li>
	            Won Overall Winner Student Category! First hackathon win :) This is where Questo was born and I found my team for the next four years (Taichi & Arya). Received a $12k grant and got the chance to meet the CTO of IBM too. Catalyst for my developer journey.
	            (Press: <a href="https://twitter.com/FionnieG/status/799134321789399040">1</a> <a href="https://www.facebook.com/IBM.SG/photos/a.321756900869/10153833365265870/?type=1&theater">2</a>)
	          </li></ul>
	        </li>
	        <li><b>Sublist</b>
	          <ul><li>
	            My first real programming project! Simple DNS subdomain bruteforcer based off a tool I read about in a book. Worked surprisingly well and the code was beautifully clean. 
	          </li></ul>
	        </li>
		</ul></div>
	    </div>
    </div>
  );
}

export default App;
