import styled from "styled-components";
export const Wrapper = styled.div`
  /* Animated Wave Background Style  */
  html,
  body {
    width: 100%;
    height: 100%;
  }
  section {
    height: 100vh;
    width: 100%;
    background-color: #f1f5fd;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
  }

  body {
    background: radial-gradient(
      ellipse at center,
      rgba(255, 254, 234, 1) 0%,
      rgba(255, 254, 234, 1) 35%,
      #b7e8eb 100%
    );
    overflow: hidden;
  }

  .ocean {
    height: 5%;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #015871;
  }

  .wave {
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg)
      repeat-x;
    position: fixed;

    bottom: 0px;
    width: 6400px;
    height: 198px;
    animation: wave 5s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);
  }

  .wave:nth-of-type(2) {
    top: -175px;
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
      swell 7s ease -1.25s infinite;
    opacity: 1;
  }

  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  }

  @keyframes swell {
    0%,
    100% {
      transform: translate3d(0, -25px, 0);
    }
    50% {
      transform: translate3d(0, 5px, 0);
    }
  }

  /* Login Section Style */
  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Montserrat", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: -20px 0 50px;
    margin-top: 20px;
  }

  h1 {
    font-weight: bold;
    margin: 0;
  }

  p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
  }

  span {
    font-size: 12px;
  }

  a {
    color: #0e263d;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
  }

  .container {
    background: #fff;
    border-radius: 90px;
    box-shadow: 30px 14px 28px rgba(0, 0, 5, 0.2),
      0 10px 10px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;
    opacity: 85%;
    width: 768px;
    height: 80%;
    max-width: 100%;
    min-height: 480px;
    transition: 333ms;
  }

  .form-container form {
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .social-container {
    margin: 20px 0;
    display: block;
  }

  .social-container a {
    border: 1px solid #008ecf;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;
    transition: 333ms;
  }
  .social-container img {
    border: 1px solid #008ecf;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    /* height: 80px; */
    width: 110px;
    transition: 333ms;
  }
  .social-container a:hover {
    transform: rotateZ(13deg);
    border: 1px solid #0e263d;
  }

  .form-container Input {
    background: #eee;
    border: none;
    border-radius: 50px;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
  }
  .form-container input:hover {
    transform: scale(101%);
  }

  button {
    border-radius: 50px;
    box-shadow: 0 1px 1px;
    border: 1px solid #008ecf;
    background: #008ecf;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    /* padding: 12px 45px; */
    letter-spacing: 1px;
    text-transform: uppercase;
    height: 49px;
    cursor: pointer;
    width: 50%;
    transition: transform 80ms ease-in;
    span {
      text-decoration: none;
    }
  }
  .button:hover {
    color: #ffffff;
    border-color: #40a9ff;
    background: #fff;
    cursor: pointer;
  }
  .ant-btn:hover {
    color: #008ecf;
    background-color: #fff;
  }
  button:active {
    transform: scale(0.95);
    color: #40a9ff;
    border-color: #40a9ff;
    background: #fff;
  }

  button:focus {
    outline: none;
  }

  button.ghost {
    background: transparent;
    border-color: #fff;
  }

  .form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
  }

  .sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
  }

  .sign-up-container {
    left: 0;
    width: 50%;
    z-index: 1;
    opacity: 0;
  }

  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
  }

  .overlay {
    background: #ff416c;
    background: linear-gradient(to right, #008ecf, #008ecf) no-repeat 0 0 /
      cover;
    color: #fff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateY(0);
    transition: transform 0.6s ease-in-out;
  }

  .overlay-panel {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
    height: 100%;
    width: 50%;
    text-align: center;
    transform: translateY(0);
    transition: transform 0.6s ease-in-out;
  }

  .overlay-right {
    right: 0;
    transform: translateY(0);
  }

  .overlay-left {
    transform: translateY(-20%);
  }

  /* Move signin to right */
  .container.right-panel-active .sign-in-container {
    transform: translateY(100%);
  }

  /* Move overlay to left */
  .container.right-panel-active .overlay-container {
    transform: translateX(-100%);
  }

  /* Bring signup over signin */
  .container.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  }

  /* Move overlay back to right */
  .container.right-panel-active .overlay {
    transform: translateX(50%);
  }

  /* Bring back the text to center */
  .container.right-panel-active .overlay-left {
    transform: translateY(0);
  }

  /* Same effect for right */
  .container.right-panel-active .overlay-right {
    transform: translateY(20%);
  }

  .ant-input-affix-wrapper {
    border: none;
    text-decoration: none;
  }
  .ant-form-item {
    margin: 0px 0px 10px;
  }
  .ant-input:focus {
    border-color: #40a9ff;
    box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
    border-right-width: 1px;
    outline: 0;
  }
  /* .ant-select-selector {
    border: none !important;
    outline: none !important;

    span {
      text-decoration: none;
    }
  }
  .ant-select-selector:focus-visible {
    border: none !important;
    outline: none !important;
  } */
  .ant-form-item {
    width: 100%;
  }
  .ant-checkbox-inner {
    padding-left: 10px;
  }
`;
