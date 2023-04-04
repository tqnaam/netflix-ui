import React from 'react'
import background from "../assets/login.jpg";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
export default function BackgroundImage() {
  return (
    <Container>
        <img src="{ background }" alt="background" />
    </Container>
  )
}

