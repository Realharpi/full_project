import './App.scss';
import { About, Contact, Header, Skills, Testimonial, Work, Footer } from './container'
import { Navbar } from './components'

const App = () => {
  return (
    <div className="App">
    {/* Copywrite is in "AppWrap" inside "wrapper" */}
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;