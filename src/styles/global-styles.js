import { injectGlobal } from "styled-components";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

injectGlobal`
  @font-face {
    font-family: Nunito;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
    background: #FDFDFD;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Lato', sans-serif;
  }
  h1 {
    font-size: 52px;
    font-weight: 500;
  }
  h2 {
    font-size: 44px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 3px;
  }
  h3 {
    font-size: 28px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
  h4 {
    font-size: 20px;
    font-weight: 400;
  }
  h5 {
    font-size: 22px;
    font-weight: 300;
    letter-spacing: 1px;
  }
  h6 {
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  p {
    font-size: 18px;
    line-height: 30px;
    font-weight: 300;
  }
  a {
    color: #171717;
    :hover, :focus, :active {
      color: #e87761;
    }
  }
  caption {
    font-size: 16px;
  }

  button {
    font-size: 18px;
    font-weight: 300;
    line-height: 30px;
    letter-spacing: 0.5px;
  }

  section {
    padding: 0;
    margin: 0;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }
  ol {
  }
  li {
    list-style: none;
    font-size: 18px;
    line-height: 30px;
    font-weight: 300;
  }

  button {
    outline: none;
  }
`;
