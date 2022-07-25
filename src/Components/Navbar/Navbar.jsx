import React, { useEffect, useState } from "react";
//import { Link, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loggedInData } from "../../Redux/Action";
import { useTranslation } from "react-i18next";
import "../../i18n/i18n";
import "./Navbar.css";


export default function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
  };

  
  const dispatch = useDispatch();
  const [loggedIn, setloggedIn] = useState(false);

  const { loggedUser } = useSelector((state) => state);
  
  useEffect(() => {
   
    // state in logged user was showing array and sometime object so im checking whether the user is logged or not
    // console.log('loggedUser', loggedUser);
    // if (loggedUser.constructor === Array) {
    //   if (loggedUser.length !== 0) setloggedIn(true);
    //   else setloggedIn(false);
    // } else {
    //   if (loggedUser.Name) setloggedIn(true);
    //   else setloggedIn(false);
    // }
    if (localStorage.getItem("loginSucced") === "success") {
      setloggedIn(true);
    } else {
      setloggedIn(false);
    }
  }, [loggedUser]);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light ml-6"
      id="navbarTags"
    >
      <a
        className="navbar-brand"
        href="/"
        style={{ marginLeft: "5%", fontWeight: "bold" }}
      >
        <img
          src="https://see.fontimg.com/api/renderfont4/dE0g/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/cGV0IGd1aWRl/beautiful-people-personal-use.png"
          width="70%"
          alt='nav'
        />
      </a>

      <div
        className="ml-7 float-right"
        id="navbarSupportedContent "
        style={{ marginLeft: "35%" }}
      >
        <ul className="navbar-nav">
          <li className="nav-item active">
          <a  href="/"  className="nav-link">
                  {t("Home")}
                </a>
           
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/write" id="hover-underline-animation">
              {t("Write")}
            </a>
          </li>
          {localStorage.getItem("loginSucced") === "success" ? (
            <li className="nav-item active">
              <a
             
                className="nav-link"
                href='/login'
                onClick={() => {
                  localStorage.setItem("loginSucced", "false");
                  dispatch(loggedInData({}));
                }}
              >
                {t("Logout")}
              </a>
            </li>
          ) : (
            <>
              <li className="nav-item active">
                <a
                  className="nav-link"
                  href="/register"
                  id="hover-underline-animation"
                >
                  {t("Register")}
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link"
                  href="/login"
                  id="hover-underline-animation"
                >
                  {t("Login")}
                </a>
              </li>
            </>
          )}

          <li className="nav-item active">
            <a className="nav-link" href="/collection" id="underline-animation">
              {t("Collection")}
            </a>
          </li>
          <li>
            <select
              className="custom-select"
              style={{
                width: "100%",
                height: "25px",
                marginTop: "8px",
                backgroundColor: "whitesmoke",
                border: "none",
                outline: "none",
              }}
              onChange={changeLanguageHandler}
            >
              <option value="en">English</option>
              <option value="ar">Arabic</option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
}
