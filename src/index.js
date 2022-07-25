import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./Redux/Store";
import { Provider } from "react-redux";
import { BrowserRouter,Route } from "react-router-dom";
import history  from "./history";
// import "./i18n/i18n"

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    // <React.StrictMode>
        <BrowserRouter history={history}>
        
       
      <Provider store={store}>
        <Route component={App}/>
      
      </Provider>
 
      </BrowserRouter>
      // </React.StrictMode> 
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
