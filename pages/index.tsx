import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import IntroPage from "./IntroPage";

export default function Home() {
  return (
    <div>
      <IntroPage></IntroPage>
    </div>
  );
}
