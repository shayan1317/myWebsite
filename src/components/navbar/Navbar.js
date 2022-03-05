import React from "react";
import "./navbar.css";
function Navbar() {
  return (
    <div className="app__navbar">
      <div className="app__navbar-content container1">
        <span className="app__logo">
          <a href="#">
            <img
              src="data:image/webp;base64,UklGRmQCAABXRUJQVlA4TFgCAAAvmUAGEOdgKpKN699HuIfzJYTatm0Y/b/nVjudTNom/g3vWxlGkpQIQjhCIP+o3N3ePwG6+x/1d/a0u6c6tqzpul3dkZ2izTsZh7rH7VjFMABAAXxAAQACiJFst22QGACQhCRnU/0Xav33A78LiOi/A7dtI0mewSC73Y7Te79wRNAeGM1gZQlavX+cf0q1B4vqSqzPdahMQbIH+sjERpPMMVTGyohG3n5Poj9jeQta0U/A/XCnMFa6jef3eTLEuKqshSNHXvlwRfA32/g5GfTXIDd/DT/EMJn4IGV/30N4wkjRVFG5tgJv1ZvCxBbutPydzTwNxpzQopX35k0cMGtMfJL7HVxMyo4YkAVvYncksakl6kPHkz5vQq+WoEx38MlujsykHDGyvyxMWh7k/iE2DB0RkmZKDkeWAs0LcQWUpb+CMZOwRO1C5kVlpnd5xbuWGVM1fnHAopIEQ/KkEmQKdgypgU3A0AKzwp68qmz+TLSLcHnpl7Gol44tMWmW7g+E8JZ+ObYNu+y+ZPqCBWtqVwc6VW5v3FyLZKgXq21XF9Fqr3jtPtzoBhzob7eJvqNqgbOeoSL91j15coLLBRqi2iZ7tq7wlWgXlofhCg0jVL+KKJpAaCBB4L8JG9HmyY3p8Zgsk53xI3yjnQRCsv1aTqiP4QAWEzs8bKevRu0cfO67Mxh2wwIpHEHHGtWlMx1crz7s1EMK3lRwb1y6S2Sk97ZHWdUZ5lBhZUyQq+kgsyW51byBfugKlOOXjpSudMaMMNr5LfwDKgxFBuu/a+s/cBiTtYXgxAk="
              alt=""
            />
          </a>
        </span>
        <ul className="app__navbar-menu-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">Pages</a>
          </li>
          <li>
            <a href="#home">About Us</a>
          </li>
          <li>
            <a href="#home">Services</a>
          </li>
          <li>
            <a href="#home">Portfolio</a>
          </li>
          <li>
            <a href="#home">Blog</a>
          </li>
          <li>
            <a href="#home">Contact</a>
          </li>
        </ul>
        <div className="app__navbar-login">
          <h5>Login/Register</h5>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
