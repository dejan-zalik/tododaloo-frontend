import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast';
import { AuthContext } from './context/Contexts.js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    if (localStorage.getItem('userInfo')) {
      const user = JSON.parse(localStorage.getItem('userInfo'));
      setCurrentUser(user._id);
      navigate('/');
    } else {
      navigate('/loginpage');
    }
  }, []);
  return (
    <div className="w-full p-6">
      <AuthContext.Provider value={[currentUser, setCurrentUser]}>
        <Navbar />
        <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
        <Outlet />
      </AuthContext.Provider>
    </div>
  );
};
export default App;
