import Header from "./Header";
import About from "./About";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import FadeIn from "react-fade-in";
import "../styles/App.scss";

export default function App() {
  return (
    <div className="App">
      <FadeIn delay={300}>
        <Header />
      </FadeIn>
      <div className="content-container">
        <FadeIn delay={600}>
          <About />
          <Portfolio />
          <Footer/>
        </FadeIn>
      </div>
    </div>
  );
}
