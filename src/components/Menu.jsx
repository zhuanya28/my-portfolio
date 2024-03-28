
import React from "react";
import { Link, useLocation } from 'react-router-dom';

function Menu() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <nav class="navbar navbar-expand-sm navbar-dark sticky-top">
      <div class="container">
        <a class="navbar-brand" href="/">zhuanya28</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="menuList navbar-nav mx-auto">
            <li class="nav-item nav-link"><Link class={`menu-items ${isActive("/") ? "active" : ""}`} to="/">Home</Link></li>
            <li class="nav-item nav-link"><Link class={`menu-items ${isActive("/digitalart") ? "active" : ""}`} to="/digitalart">Digital Art</Link></li>
            <li class="nav-item nav-link"><Link class={`menu-items ${isActive("/webdesign&development") ? "active" : ""}`} to="/webdesign&development">Web Des & Dev</Link></li>
            <li class="nav-item nav-link"><Link class={`menu-items ${isActive("/visualart") ? "active" : ""}`} to="/visualart">Visual Art</Link></li>
            <li class="nav-item nav-link"><Link class={`menu-items ${isActive("/cv") ? "active" : ""}`} to="/cv">CV</Link></li>
   
          </ul>

          <ul class="navbar-nav justify-content-end">
            <li class="nav-item">
              <a class="nav-link" href="https://www.linkedin.com/in/zhuanya/" target="_blank"
                rel="noopener noreferrer"><i class="fa-brands fa-linkedin fa-xl contactIcons" /></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" target="_blank"
                rel="noopener noreferrer"
                href="mailto:zhuanya@nyu.edu"> <i class="fa-solid fa-envelope fa-xl contactIcons" ></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" target="_blank"
                rel="noopener noreferrer" href="https://t.me/zhuanya14">
                <i class="fa-solid fa-paper-plane fa-xl contactIcons" />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" target="_blank"
                rel="noopener noreferrer" href="https://drive.google.com/file/d/11S9MyukDqzKQrzuQyfdxfIB1ePn0wm1s/view?usp=sharing">
                <i class="fa-brands fa-weixin fa-xl contactIcons" ></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
