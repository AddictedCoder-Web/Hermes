import IndexPage from "./pages/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
//使用normalize.css库来标准化css
import "normalize.css";
import { useEffect } from "react";
import { http } from "./utils/http.js";
import { env } from "./env.js";
function App() {
  return (
    <>
      <IndexPage></IndexPage>
    </>
  );
}

export default App;
