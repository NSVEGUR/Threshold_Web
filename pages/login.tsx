import styles from "../styles/Home.module.scss";
//import PhoneInput from "react-phone-input-2";
import React, { useState } from "react";
// import "react-phone-input-2/lib/style.css";
import Home from ".";

export default function login() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <a href="/">Home</a>
        <div className={styles.signin}>
          <h2>sign in to account</h2>
          <br />
          <div>
            {/* <PhoneInput
              country={"us"}
              value={"phone"}
              onChange={(phone) => "set state"}
            /> */}
          </div>

          <div>
            <input type={"password"} placeholder="password"></input>
          </div>

          <div className={styles.forgot}>
            <input type="checkbox"></input>
            remember me
          </div>
          <br />
          <div>
            <a href="r" className={styles.login}>
              login
            </a>
          </div>
          <br />
          <div>
            <div>
              <a href="T">forgot password</a>
            </div>
          </div>
        </div>

        <div className={styles.signup}>
          <p>if account dosen't exists , create an account</p>
          <br />
          <a href="/register" className={styles.signup}>
            register
          </a>
        </div>
      </div>
    </main>
  );
}
