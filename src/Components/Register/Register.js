import  React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";
// import { useHistory} from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Register() {
  // const history = useHistory()
  const {t} = useTranslation()

   const {loggedUser} =  useSelector((state)=> state)
//  console.log(loggedUser,"HaHA")

// if(loggedUser.length != 0){
//   navigate("/")
// }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const [passwordHelperText, setPassworHelperText] = useState("");

   

   
  const handleSubmit = () => {
    if (name.length === 0) {
      setNameError(true);
      return;
    }
    if (email.length === 0 || (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))) {
      setEmailError(true);
      return;
    }
    if (password.length === 0) {
      setPasswordError(true);
      setPassworHelperText("password can't be blank");
      return;
    }
    if (confirmPassword.length === 0) {
      setConfirmPasswordError(true);
      setPassworHelperText("confirm password can't be blank");
      return;
    }
    if (confirmPassword !== password) {
      setPasswordError(true);
      setPassworHelperText("password and Confrim password are not same");
      return;
    }
    alert("Signed Successfully!!");

    axios
      .get(`http://localhost:5000/users?email=${email.toLowerCase()}`)
      .then((res) => {
        console.log(res);
        if (res.data.length > 0) {
          alert("Email already exists....!!!!");
          return;
        }
        axios
          .post("http://localhost:5000/users", {
            Name: name,
            email: email.toLowerCase(),
            password: password
          })
          .then(function (response) {
            console.log(response);
          });
      });
  };

  return (
    <div   style={{ width: "300px", margin: "auto", marginTop: "30px",border:"1px solid lightgray",paddingTop:"30px",paddingBottom:"30px",borderRadius:"20px"}}>
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        onInput={() => setNameError(false)}
        id="outlined-basic"
        label={t("Name")}
        variant="outlined"
        error={nameError}
        helperText={nameError ? "name can't be blank" : ""}
      />
      <br />
      <br />
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onInput={() => setEmailError(false)}
        id="outlined-basic"
        type="email"
        label={t("Email")}
        variant="outlined"
        error={emailError}
        helperText={emailError ? "Email is incorrect" : ""}
      />
      <br />
      <br />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onInput={() => setPasswordError(false)}
        id="outlined-basic"
        label={t("Password")}
        type="password"
        variant="outlined"
        error={passwordError}
        helperText={passwordError ? passwordHelperText : ""}
      />
      <br />
      <br />
      <TextField
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        onInput={() => setConfirmPasswordError(false)}
        id="outlined-basic"
        label={t("ConfirmPassword")}
        type="Password"
        variant="outlined"
        error={confirmPasswordError}
        helperText={confirmPasswordError ? passwordHelperText : ""}
      />

      <br />
      <br />
      <Button
        onClick={handleSubmit}
        variant="contained"
        color="success"
        style={{ width: "210px" }}
      >
        {t("Submit")}
      </Button>
    </div>
  );
}