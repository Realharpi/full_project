import './App.css';
import { About, Footer, Header, Skills, Testimonial, Work } from './container'
import { Navbar } from './components'

const App = () => {
  return (
    <div className="App">
      <h1>It's working!</h1>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
