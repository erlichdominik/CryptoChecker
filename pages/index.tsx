import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Dashboard from "../components/dashboard/dashboard";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Dashboard />
    </>
  );
};

export default Home;
