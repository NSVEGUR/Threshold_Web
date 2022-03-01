import React from "react";
import RoleCard from "../components/cards/RoleCard";
import IntroPageStyles from "./IntroPage.module.css";
import logo from "../assests/images/logo.png";
import intropagepic from "../assests/images/intropagepic.png";

const user: User[] = [
  {
    role: "Student",
  },
  {
    role: "Teacher",
  },
  {
    role: "Administration",
  },
];

const IntroPage = () => {
  return (
    <div className={IntroPageStyles.flex_container}>
      <div className={IntroPageStyles.flex_left}>
        <div>
          <img alt="logo" src={logo.src} className={IntroPageStyles.logo} />
        </div>
        <img
          src={intropagepic.src}
          alt="intro page pic"
          className={IntroPageStyles.introPic}
        ></img>
      </div>
      <div className={IntroPageStyles.flex_right}>
        <div>
          <h4>
            Welcome to <strong>Threshold</strong>
          </h4>
          <p>Please select your Role</p>
        </div>
        <RoleCard user={user[0]}></RoleCard>
        <RoleCard user={user[1]}></RoleCard>
        <RoleCard user={user[2]}></RoleCard>
      </div>
    </div>
  );
};

export default IntroPage;
