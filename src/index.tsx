import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'core-js';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <Router>
      <Routes>
        <Route path='*' element={< App />} />
      </Routes>
    </Router>
  </>
);
reportWebVitals();
