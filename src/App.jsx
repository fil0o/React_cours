import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
function App() {
  // Императивный подход
  const [count, setCount] = useState(0);
  const getY = new Date().getFullYear();

  // Декларативный подход
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx("a", {
        href: "https://vite.dev",
        target: "_blank",
        children: /*#__PURE__*/_jsx("img", {
          src: viteLogo,
          className: "logo",
          alt: "Vite logo"
        })
      }), /*#__PURE__*/_jsx("a", {
        href: "https://react.dev",
        target: "_blank",
        children: /*#__PURE__*/_jsx("img", {
          src: reactLogo,
          className: "logo react",
          alt: "React logo"
        })
      })]
    }), /*#__PURE__*/_jsx("h1", {
      children: "Vite + React"
    }), /*#__PURE__*/_jsxs("div", {
      className: "card",
      children: [/*#__PURE__*/_jsxs("button", {
        onClick: () => setCount(count => count + 1),
        children: ["count is ", count]
      }), /*#__PURE__*/_jsxs("p", {
        children: ["Edit ", /*#__PURE__*/_jsx("code", {
          children: "src/App.jsx"
        }), " and save to test HMR"]
      })]
    }), /*#__PURE__*/_jsxs("p", {
      className: "read-the-docs",
      children: ["Click on the Vite and React logos to learn more ", /*#__PURE__*/_jsx("br", {}), " \u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0433\u043E\u0434 ", getY]
    })]
  });
}
export default App;