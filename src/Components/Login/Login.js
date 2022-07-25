import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import {useNavigate} from "react-router-dom"
import axios from "axios";
import { useDispatch/*, useSelector*/ } from "react-redux";
import { useState } from "react";
//import { IoArrowRedoCircleOutline } from "react-icons/io5";
import { loggedInData } from "../../Redux/Action";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

export default function Login(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [passwordHelperText, setPasswordHelperText] = useState("");
  const [emailHelperText, setEmailHelperText] = useState("");

  // const history = useHistory();

 

  const handleSubmit = async (e) => {
     console.log("step1")
    e.preventDefault();

    if (email.length === 0) {
      setEmailError(true);
      setEmailHelperText("email can't be blank");
      // return;
    }
    if (password.length === 0) {
      setPasswordError(true);
      setPasswordHelperText("password can't be blank");
      // return;
    }

    // alert("we are good to go");

    try {
      const res = await axios(`http://localhost:5000/users?email=${email.toLowerCase().trim()}&password=${password}`)
      if (res.data.length > 0) {
          
        console.log("redirecting....");
          localStorage.setItem("loginSucced", "success");

        // dispatch(loggedInData(res.data));
        props.history.push("/");
            
      } else {
        alert("login failed");
      }
    } catch (err) {
      console.log('error', err);
    }

  };
  // const registeredData =  useSelector((state)=> state)
  // console.log(registeredData,"haha")
  return (
    <div
      style={{
        width: "300px",
        margin: "auto",
        marginTop: "30px",
        border: "1px solid lightgray",
        paddingTop: "70px",
        paddingBottom: "80px",
        borderRadius: "20px",
      }}
    >
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="outlined-basic"
        type="email"
        label={t("Email")}
        variant="outlined"
        error={emailError}
        helperText={emailError ? emailHelperText : ""}
      />
      <br />
      <br />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="outlined-basic"
        label={t("Password")}
        type="password"
        variant="outlined"
        error={passwordError}
        helperText={passwordError ? passwordHelperText : ""}
      />

      <br />
      <br />
      <Button
        onClick={handleSubmit}
        variant="contained"
        color="success"
        type="submit"
        style={{ width: "210px" }}
      >
        {t("Submit")}
      </Button>
    </div>
  );
}
