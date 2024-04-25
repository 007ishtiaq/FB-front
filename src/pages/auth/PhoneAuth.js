import React, { useState } from "react";
import { useDispatch } from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { createOrUpdatePhoneUser } from "../../functions/auth";

// Initialize Firebase if not already initialized
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyDQcOG9w-uARiuGNvdpuPtstIn-IN3-GOM",
    authDomain: "mastermerm.firebaseapp.com",
    projectId: "mastermerm",
    storageBucket: "mastermerm.appspot.com",
    messagingSenderId: "271459179906",
    appId: "1:271459179906:web:8b559e4f6970bff083039b",
    measurementId: "G-EDCPWXQB8N",
  };
  firebase.initializeApp(firebaseConfig);
}

export default function PhoneAuth() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [optCode, setOtpCode] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  let dispatch = useDispatch();

  const sendOTP = async () => {
    try {
      const recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container",
        {
          // size: "invisible",
          callback: (response) => {
            // signInWithPhoneNumber();
          },
          "expired-callback": () => {
            console.log("opt has expired");
            // Handle expired verification
          },
        }
      );

      // Send OTP to the provided phone number
      const confirmationResult = await firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, recaptchaVerifier);

      // Store the confirmation result for later use
      setConfirmationResult(confirmationResult);
    } catch (error) {
      console.log("Error sending OTP:", error);
    }
  };

  const verifyOTP = async () => {
    try {
      // Confirm the OTP entered by the user
      const userCredential = await confirmationResult.confirm(optCode);
      const { user } = userCredential;

      console.log("user", user);

      if (user) {
        try {
          let currentUser = firebase.auth().currentUser;
          await currentUser.updatePassword(password);

          // Get user's ID token
          const idTokenResult = await user.getIdTokenResult();

          createOrUpdatePhoneUser(name, phoneNumber, idTokenResult.token)
            .then((res) => {
              dispatch({
                type: "LOGGED_IN_USER",
                payload: {
                  name: res.data.name,
                  email: res.data.email,
                  token: idTokenResult.token,
                  role: res.data.role,
                  _id: res.data._id,
                },
              });
              console.log("createOrUpdatePhoneUser res.data", res.data);
            })
            .catch((err) => console.log(err));
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log("Error verifying OTP:", error);
    }
  };

  return (
    <div>
      <PhoneInput
        country={"pk"}
        value={phoneNumber}
        onChange={(value) => setPhoneNumber("+" + value)}
      />
      <button onClick={sendOTP}>Send OTP</button>
      <div id="recaptcha-container"></div>
      <input
        type="text"
        label="Enter OTP"
        value={optCode}
        onChange={(e) => setOtpCode(e.target.value)}
      />
      <button onClick={verifyOTP}>Verify OTP</button>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
}
