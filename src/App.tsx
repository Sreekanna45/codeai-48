import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Exam from './pages/Exam';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/exam" element={<Exam />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;