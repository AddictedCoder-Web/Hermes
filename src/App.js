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
function App() {
  return (
    <>
      <IndexPage></IndexPage>
    </>
  );
}

export default App;
