import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // import your i18n instance
import { Suspense, lazy } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
const AuthRoutes = lazy(() => import('./routes/AuthRoutes'));
const AppRoutes = lazy(() => import('./routes/AppRoutes'));
// const AUTH = true;
const AUTH = false;

const Spinner = () => {
  return(
    <p>{`Spinner`}</p>
  )
}

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route
              path='/*'
              element={ AUTH ? <AppRoutes /> : <AuthRoutes />}
            >
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </I18nextProvider>
  );
}

export default App;
