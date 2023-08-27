import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Services from './pages/Services'
// import Founder from './pages/Founder';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          {/* <Route path="founder" element={<Founder />} /> */}
          <Route path="services" element={<Services />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
