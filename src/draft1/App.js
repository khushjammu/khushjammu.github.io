import React from 'react';
// import { Container, Row, Col } from 'reactstrap';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    {/*
            <div className="Profile">
              <img src={require('./assets/profile.jpg')} className="Profile-image"/>
            </div>
    */}
            <div className="Text">
              <h1>Khush Jammu</h1>
              <p>My name is Khush. I'm a high-school student by day and developer by night. I was born in Malaysia, lived in Hong Kong for a few years, and now live in Singapore. I'm interesting in programming, philosophy, and reading!</p>

              
              <h2>Who am I?</h2>
                <p>I was born in Malaysia, where I spent my formative years. I moved to Hong Kong when I was nine years old. Between adjusting to a new school and trying out Hong Kong’s food, I developed an interest in programming after reading Stealing the Network.</p>
                <p>Then I moved to Singapore. In Grade 9, I met two people who would come to be very important to my journey: Taichi and Arya. We hit it off immediately and ended up winning a hackathon — IBM’s PitchIT — together with Questo: an app that generated simple fill-in-the-blank questions from pictures of a textbook page.</p>
                <p>Around that time I met a senior whom I really respect, who was about to graduate in my high-school. In many senses, he was a role-model for all three of us and he encouraged us to pursue our interests. Between that and reading Cal Newport’s High-School Superstar, I decided to start treating HS as a day job and maximise the amount of free time I have to do my own thing. </p>
                <p>And it worked! I’ve managed to get decent grades with a ton of free time, and I’ve used that time to win hackathons, build cool stuff with Taichi and Arya, hang out with my girlfriend, gym, read. Along the way, my friends have ruined my music taste with Anderson .Paak and older Kendrick, damn them. (Seriously though, Ventura is sexy.)</p>
                <p>So yeah, that’s me. I’m graduating high-school in just under a year and I can’t wait to see what comes next. I’m trying out development consulting so let’s see how that goes. I love meeting cool people so if you wanna do anything from geek out over a book to chat about a cool project HIT ME UP.</p>
                <p>✌️</p>


              <h2>What I’m doing now</h2>
                <ul>Working on Questo!</ul>
                <ul>Reading Range by David Epstein</ul>
                <ul>Getting into development consulting</ul>
                <ul>Preparing to release a new flight app (stay tuned 😉)</ul>
                <ul>Thinking about how I’m going to spend my years in NS (Singapore’s mandatory two-year national service) and beyond</ul>

              <h2>My Favourite Books</h2>
                <ul>Crime and Punishment by Fyodor Doteyevsky</ul>
                <ul>The Master and Margarita by Micheal Bulgarov</ul>
                <ul>Principles by Ray Dalio</ul>
                <ul>How to be a High-School Superstar by Cal Newport</ul>
                <ul>Sapiens by Yuval Noah Harrari</ul>
                <ul>How to Win Friends and Influence People (way better than the title I promise) by Dale Carnegie</ul>
                <ul>The Belgariad and Mallorean series by David Eddings</ul>

              <h2>Stuff I've Done</h2>
                <ul>Questo 
                  <ul>
                  → a way for me to effect change in what I see is a broken aspect of education — an emphasis on retention of facts and the such. received $120,000 in subsidised cloud funding from Google Cloud and IBM. currently running a beta. have spent 3yrs++ working on it (since I was in Grade 9).
                  </ul>
                </ul>
                <ul>Saturn 
                  <ul>
                  → a moonshot attempt at creating something which could automatically generate courses to learn anything. ultimately didn’t work out :(
                  </ul>
                </ul>
                <ul>Sublist 
                  <ul>
                  → my first real programming project! simple dns subdomain bruteforcer based off a tool I read about in a book. worked surprisingly well and the code was beautifully clean.
                  </ul>
                </ul>

                <ul>Hackathons! 
                  <ul>Hack & Roll 2019 (~230 participants)
                    <ul>
                      → Best Pre-U Hack for Bookworm: an app that uses AR to augment the experience of reading a book. In our demo, we hung a DSLR over a book and made it such that you could tap any word and a definition would appear on the iPad. Our hardware setup drew the largest crowd there.
                    </ul>
                  </ul>
                  <ul>#codeathon 2017: Technopreneurship for Gender Equality (~80 participants)
                    <ul>
                      → Pre-University Overall Winning Team for $*x* cash. Made h= (pronouned “h” + equals) — an AI powered human resource manager without bias. It assigns tasks to people in a team based on pure meritocratic skill, thus avoiding bias.
                    </ul>
                  </ul>
                  <ul>SWSG Mega 2017 (~250 participants)
                    <ul>
                      → Most Creative Prize w/ $40k in prizes! Made Photonify: a photography assistant that helps you take better photos by guiding your composition. Got literal wows when demo-ing on stage. Even cooler, a photo of me making history notes on stage became a meme.
                    </ul>
                  </ul>
                  <ul>IBM PitchIT: “Battle of the Hackathon Winners” (~160 participants)
                    <ul>
                      Overall Winner Student Category! First hackathon win :) This is where Questo was born and I found my team for the next four years (Taichi & Arya). Received a $12k grant and got the chance to meet the CTO of IBM too. Catalyst for my developer journey
                    </ul>
                  </ul>
                </ul>

            </div>
    </div>
  );
}

export default App;
