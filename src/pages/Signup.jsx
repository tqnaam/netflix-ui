import React from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Container from '@material-ui/core/Container';
import Header from "../components/Header";
export default function Signup() {
  return (
    <Container>
      <BackgroundImage/>
      <Header/>
      <div className="body flex column a-center j-center">
        <div className="text flex column">
          <h1>Unlimited movies, TV shows and more</h1>
          <h4>Watch anywhere, cancel anytime</h4>
          <h6>Ready to watch? Enter your email or restart membership</h6>
        </div>
        <div className="form">
          <input type="email" placeholder="Email Address" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Get Started</button>
        </div>
        <button>Log In</button>
      </div>
      Signup
    </Container>
  );
}
