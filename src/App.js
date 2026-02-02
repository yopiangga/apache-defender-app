import logo from "./logo.svg";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { LandingPage } from "./pages/landing";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Toaster />
    </div>
  );
}

export default App;
