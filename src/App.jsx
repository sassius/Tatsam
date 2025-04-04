
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import { Routes,Route } from 'react-router';
import { useState } from 'react';

function App() {
const [language, setLanguage] = useState('en');
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navbar language={language} setLanguage={setLanguage} />
        <Routes>
          <Route path="/" element={<HomePage language={language} />} />
          <Route path="/blog" element={<BlogPage language={language} />} />
        </Routes>
      </div>
    </>
  );
}

export default App
