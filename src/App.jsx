import Amy from "./Containers/Amy";
import Footer from "./Containers/Footer";
import Header from "./Containers/Header";

import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <h1>
        Design solutions made easy
      </h1>
      <p>
        With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.
      </p>
      <Amy />
      <Footer />
    </div>
  );
}

export default App
