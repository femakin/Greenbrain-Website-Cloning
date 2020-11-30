import React, { Component } from "react";
// import * as ReactBootstrap from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <main data-v-59817640>
        <div data-v-59817640 id="nav-bar">
          <nav class="navbar nav-container navbar-light navbar-expand-lg container-fluid">
            <a
              href="/"
              aria-current="page"
              class="navbar-brand router-link-exact-active router-link-active"
              target="_self"
            >
              greenbrain
            </a>
            <div
              id="nav-collapse"
              class="navbar-collapse collapse"
              style={{ display: "none" }}
            ></div>
            <a
              href="/auth"
              class="mr-3 border border-secondary rounded px-3 py-1 pointer"
            >
              Login
            </a>
          </nav>
        </div>
      </main>
    );
  }
}
