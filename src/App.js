import "./App.css";
import styled from "styled-components";
// import styled, { StyleSheetManager } from "styled-components";
import { useEffect } from "react";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// The Button from the last section without the interpolations
const Button = styled.button`
  color: #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const useScript = (url) => {
  useEffect(() => {
    window._uxa = window._uxa || [];
    if (typeof CS_CONF === "undefined") {
      window._uxa.push([
        "setPath",
        window.location.pathname + window.location.hash.replace("#", "?__"),
      ]);
      var mt = document.createElement("script");
      mt.type = "text/javascript";
      mt.async = true;
      mt.src = url;
      document.getElementsByTagName("head")[0].appendChild(mt);
    } else {
      window._uxa.push([
        "trackPageview",
        window.location.pathname + window.location.hash.replace("#", "?__"),
      ]);
    }
  }, [url]);
};

const trackScreen = () => {
  console.log("click on button");
  window._uxa = window._uxa || [];
  window._uxa.push(["trackPageview", "styled-component: home page"]);
}

function App() {
  useScript("https://t.contentsquare.net/uxa/8debe904a8da2.js");
  return (
    <div className="App">
      {/* <StyleSheetManager disableCSSOMInjection> */}
      <Wrapper>
        <Title>Hello World!</Title>
        <Button onClick={trackScreen}>Normal Button</Button>
        <TomatoButton>Tomato Button</TomatoButton>
      </Wrapper>
      {/* </StyleSheetManager> */}
    </div>
  );
}

export default App;

/**
 * insertRule: https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/insertRule
 * deleteRule: https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/deleteRule
 */
