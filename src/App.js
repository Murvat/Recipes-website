
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './layout/Header'
import Footer from './layout/Footer'
import About from './pages/About';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Contact from './pages/Contact';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <main className="container content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path='' element={<s />} />
            <Route path="/aotFound" element={<NotFound />} />
          </Routes>

        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
