import { ToastContainer } from 'react-toastify';
import AppProvider from '../context/AppContext';
import '../styles/index.scss';
import MySeo from '../components/MySeo';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MySeo font={'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;900&family=Rubik:wght@300;400;500;600;700;900&display=swap'} />
      <AppProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </AppProvider>
    </>
  );
}

export default MyApp;
