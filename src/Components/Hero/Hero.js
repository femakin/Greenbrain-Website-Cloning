import React from "react";
import hero_image from "../assets/hero_image.png";
import books from "../assets/books.png";
import calendar from "../assets/calendar.png";
import collection_box from "../assets/collection_box.png";
import moneybag from "../assets/money-bag.png";
import network from "../assets/network.png";
import facebookk from '../assets/facebookk.svg';
import twitter from '../assets/twitter.svg';
import linkedin from '../assets/linkedin.svg';
export default function Hero() {
  return (
    <div id="app">
      <main data-v-59817640="">
        <div data-v-59817640="" id="nav-bar">
          <nav className="navbar nav-container navbar-light navbar-expand-lg">
            <a
              href="/"
              aria-current="page"
              className="navbar-brand router-link-exact-active router-link-active"
              target="_self"
            >
              greenbrain
            </a>
            <div
              id="nav-collapse"
              className="navbar-collapse collapse"
              style={{ display: "none" }}
            ></div>
            <a
              href="/auth"
              className="mr-3 border border-secondary rounded px-3 py-1 pointer"
            >
              Login
            </a>
          </nav>
        </div>

        <div data-v-59817640="" class="intro">
          <div data-v-59817640="" id="first" class="list-items">
            <div data-v-59817640="" class="heading">
              We connect University students with their most important needs.
            </div>
            <ul data-v-59817640="">
              <li data-v-59817640="">
                Lecture notes and handouts from all Nigerian Universities
              </li>
              <li data-v-59817640="">
                Exam past questions from any University in Nigeria
              </li>
              <li data-v-59817640="">
                Project topics and materials in any course
              </li>
              <li data-v-59817640="">
                Grow your network: Connect with Students from other Univeristies
              </li>
            </ul>
            <a data-v-59817640="" href="/auth" class="">
              Start Here
            </a>
          </div>
          <div data-v-59817640="" id="second" class="online-education">
            <img data-v-59817640="" src={hero_image} alt="online education" />
          </div>
        </div>

        <div data-v-59817640="" class="productive">
          <h1 data-v-59817640="">Be more productive while in school...</h1>
          <div data-v-59817640="" class="productive-items">
            <div data-v-59817640="">
              <img data-v-59817640="" src={books} alt="book stack" />
              <h1 data-v-59817640="">
                Free access to quality learning materials
              </h1>
              <div data-v-59817640="">
                Our main priority is to make learning materials accessible for
                students in Nigerian Univeristies. This covers lecture notes/
                handouts and exam past question papers as well as project topics
                and materials.
              </div>
            </div>
            <div data-v-59817640="">
              <div data-v-59817640="">
                <img data-v-59817640="" src={calendar} alt="organizer" />
                <h1 data-v-59817640="">Stay organised while on campus</h1>
                <div data-v-59817640="">
                  Save your lecture and personal study timetables online for
                  convenient access. Safely store your academic results for
                  private access and automatically generate your GPA for the
                  semester.
                </div>
              </div>
            </div>

            <div data-v-59817640="">
              <div data-v-59817640="">
                <img data-v-59817640="" src={network} alt="network" />
                <h1 data-v-59817640="">
                  Create your network while still in school
                </h1>
                <div data-v-59817640="">
                  Connect, interact, and collaborate with people studying the
                  same course as you in other Universities in Nigeria.
                </div>
              </div>
            </div>

            <div data-v-59817640="">
              <div data-v-59817640="">
                <img data-v-59817640="" src={moneybag} alt="money bag" />
                <h1 data-v-59817640="">Make money while you’re at it</h1>
                <div data-v-59817640="">
                  Upload project materials and get 50% of the sum each time it
                  is downloaded. Uploading more projects increases your chance
                  of earning more money.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-v-59817640="" class="stats">
          <div data-v-59817640="" class="lecturenotes">
            <a data-v-59817640="" href="/lecturenotes" class="">
              <h1 data-v-59817640="">41</h1>
              <p data-v-59817640="">Lecture Notes</p>
            </a>
          </div>

          <div data-v-59817640="" class="lecturetopics">
            <a data-v-59817640="" href="/lecturenotes" class="">
              <h1 data-v-59817640="">279</h1>
              <p data-v-59817640="">Lecture Topics</p>
            </a>
          </div>
          <div data-v-59817640="" class="pastquestions">
            <a data-v-59817640="" href="/pastquestions" class="">
              <h1 data-v-59817640="">277</h1>
              <p data-v-59817640="">Question Papers</p>
            </a>
          </div>
          <div data-v-59817640="" class="projects">
            <a data-v-59817640="" href="/projects" class="">
              <h1 data-v-59817640="">214</h1>
              <p data-v-59817640="">Project Materials</p>
            </a>
          </div>
        </div>

        <div data-v-59817640="" class="upload-now">
          <div data-v-59817640="">
            <img data-v-59817640="" src={collection_box} alt="upload now" />
          </div>
          <div data-v-59817640="">
            Improve your school life, make money by uploading project materials
          </div>
          <div data-v-59817640="">
            <a data-v-59817640="" href="/project/upload" class="">
              Start Uploading
            </a>
          </div>
        </div>

        <footer data-v-6b483484="" data-v-59817640="">
          <section data-v-6b483484="" class="quick-links">
            <div data-v-6b483484="">
              <ul data-v-6b483484="">
                <li data-v-6b483484="">
                  <a data-v-6b483484="" href="/lecturenotes" class="">
                    Lecture Notes
                  </a>
                </li>
                <li data-v-6b483484="">
                  <a data-v-6b483484="" href="/pastquestions" class="">
                    Past Questions
                  </a>
                </li>
                <li data-v-6b483484="">
                  <a data-v-6b483484="" href="/projects" class="">
                    Project Topics
                  </a>
                </li>
              </ul>
            </div>
            <div data-v-6b483484="">
              <ul data-v-6b483484="">
                <li data-v-6b483484="">
                  <a data-v-6b483484="" href="/about-us" class="">
                    About Us
                  </a>
                </li>
                <li data-v-6b483484="">
                  <a data-v-6b483484="" href="/how-it-works" class="">
                    How it works
                  </a>
                </li>
                <li data-v-6b483484="">
                  <a data-v-6b483484="" href="/faqs" class="">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div data-v-6b483484="" class="social-connect">
              <h4 data-v-6b483484="">Connect with Us</h4>
              <a data-v-6b483484="" href="https://twitter.com/greenbrainng">
                <img
                  data-v-6b483484=""
                  src={twitter}
                  alt="twitter icon"
                />
              </a>
              <a data-v-6b483484="" href="/">
                <img
                  data-v-6b483484=""
                  src={facebookk}
                  alt="facebook icon"
                />
              </a>
              <a data-v-6b483484="" href="/">
                <img
                  data-v-6b483484=""
                  src={linkedin}
                  alt="linkedin icon"
                />
              </a>
            </div>
          </section>
          <section data-v-6b483484="" class="copyright">
            greenbrain 2019
          </section>
        </footer>
      </main>
    </div>
  );
}
