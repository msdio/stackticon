import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router';
// @import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Lato');

const whiteColor = '#EDEDED';
const grayColor = '#BFC0C0';
const darkColor = '#585959';
const lightColor = '#D3DEEA';

// $big: 'Abril Fatface', serif;
// $body: 'Lato', sans-serif;

const Container = styled.div`
  position: absolute;
  background: ${lightColor};
  height: 100vh;
  width: 100vw;
  /*text styling*/
  h1 {
    font-family: $big;
    color: ${whiteColor};
    text-align: center;
    font-size: 9em;
    margin: 0;
    text-shadow: -1px 0 ${grayColor}, 0 1px ${grayColor}, 1px 0 ${grayColor}, 0 -1px ${grayColor};
  }
  h3 {
    font-family: $body;
    font-size: 2em;
    text-transform: uppercase;
    text-align: center;
    color: ${grayColor};
    margin-top: -20px;
    font-weight: 900;
  }
  p {
    text-align: center;
    font-family: $body;
    color: ${darkColor};
    font-size: 0.6em;
    margin-top: -20px;
    text-transform: uppercase;
  }
`;

const scale = keyframes`
   0% {
     transform: scale(1);
   }
   50% {
     transform: scale(1.1);
   }
   100% {
     transform: scale(1);
   }
  
`;

const float = keyframes`
   50% {
        transform: translateY(15px);
     }`;

const Top = styled.div`
  margin-top: 30px;
`;

const GhostContainer = styled.div`
  margin: 0 auto;
  position: relative;
  width: 250px;
  height: 250px;
  margin-top: -40px;
`;
const Ghost = styled.div`
  width: 50%;
  height: 53%;
  left: 25%;
  top: 10%;
  position: absolute;
  border-radius: 50% 50% 0 0;
  background: ${whiteColor};
  border: 1px solid ${grayColor};
  border-bottom: none;
  animation: ${float} 2s ease-out infinite;
`;

const GhostCopy = styled.div`
  width: 50%;
  height: 53%;
  left: 25%;
  top: 10%;
  position: absolute;
  border-radius: 50% 50% 0 0;
  background: ${whiteColor};
  border: 1px solid ${grayColor};
  border-bottom: none;
  animation: ${float} 2s ease-out infinite;
  z-index: 0;
`;

const Face = styled.div`
  position: absolute;
  width: 100%;
  height: 60%;
  top: 20%;
`;
const Eye = styled.div`
  position: absolute;
  background: ${darkColor};
  width: 13px;
  height: 13px;
  border-radius: 50%;
  top: 40%;
  left: 25%;
`;
const EyeRight = styled.div`
  position: absolute;
  background: ${darkColor};
  width: 13px;
  height: 13px;
  border-radius: 50%;
  top: 40%;
  right: 25%;
`;
const Mouth = styled.div`
  position: absolute;
  top: 50%;
  left: 45%;
  width: 10px;
  height: 10px;
  border: 3px solid;
  border-radius: 50%;
  border-color: transparent ${darkColor} ${darkColor} transparent;
  transform: rotate(45deg);
`;

const One = styled.div`
  position: absolute;
  background: ${whiteColor};
  top: 85%;
  width: 25%;
  height: 23%;
  border: 1px solid ${grayColor};
  z-index: 0;

  border-radius: 0 0 100% 30%;
  left: -1px;
`;

const Two = styled.div`
  position: absolute;
  background: ${whiteColor};
  top: 85%;
  width: 25%;
  height: 23%;
  border: 1px solid ${grayColor};
  z-index: 0;

  left: 23%;
  border-radius: 0 0 50% 50%;
`;

const Three = styled.div`
  position: absolute;
  background: ${whiteColor};
  top: 85%;
  width: 25%;
  height: 23%;
  border: 1px solid ${grayColor};
  z-index: 0;

  left: 50%;
  border-radius: 0 0 50% 50%;
`;
const Four = styled.div`
  position: absolute;
  background: ${whiteColor};
  top: 85%;
  width: 25%;
  height: 23%;
  border: 1px solid ${grayColor};
  z-index: 0;

  left: 74.5%;
  border-radius: 0 0 30% 100%;
`;

const Shadow = styled.div`
  position: absolute;
  width: 30%;
  height: 7%;
  background: ${grayColor};
  left: 35%;
  top: 80%;
  border-radius: 50%;
  animation: ${scale} 2s infinite;
`;

const Bottom = styled.div`
  margin-top: 10px;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

/*search style*/

const Btn = styled.button`
  background: ${whiteColor};
  padding: 15px 20px;
  margin: 5px;
  color: ${darkColor};
  font-family: $body;
  text-transform: uppercase;
  font-size: 0.6em;
  letter-spacing: 1px;
  border: 0;
  &:hover {
    background: ${grayColor};
    transition: all 0.4s ease-out;
  }
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: center;
  font-size: 0.8em;
  text-transform: uppercase;
  padding: 10px;
  color: #ea7996;
  letter-spacing: 3px;
  font-family: $body;
  a {
    color: #ffffff;
    text-decoration: none;
    &:hover {
      color: #7d7d7d;
    }
  }
`;

const Cute404 = () => {
  const navigate = useNavigate();

  const goBackPage = () => {
    navigate(-1);
  };

  const goToHomePage = () => {
    navigate('/');
  };

  return (
    <Container>
      <div id='background'></div>
      <Top>
        <h1>404</h1>
        <h3>page not found</h3>
      </Top>
      <GhostContainer>
        <GhostCopy>
          <One></One>
          <Two></Two>
          <Three></Three>
          <Four></Four>
        </GhostCopy>
        <Ghost>
          <Face>
            <Eye></Eye>
            <EyeRight></EyeRight>
            <Mouth></Mouth>
          </Face>
        </Ghost>
        <Shadow></Shadow>
      </GhostContainer>
      <Bottom>
        <p>Boo, looks like a ghost stole this page!</p>
        <Buttons>
          <Btn onClick={goBackPage}>Back</Btn>
          <Btn onClick={goToHomePage}>Home</Btn>
        </Buttons>
      </Bottom>

      <Footer>
        <p>
          made by <a href='https://codepen.io/juliepark'> julie</a> ♡
        </p>
      </Footer>
    </Container>
  );
};

export default Cute404;
