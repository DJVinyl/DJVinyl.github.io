import Header from './Header'
import About from './About'
import Portfolio from './Portfolio'
import '../styles/App.scss'

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-container">
        <About />
        <Portfolio />
      </div>
    </div>
  );
}
