import { useState } from 'react';
import { useMetamask, useAddress } from '@thirdweb-dev/react';
import SignInSignUpModal from './modal/SignInSignUpModal';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Swap from './pages/swap';
import User from './pages/User';
import UploadWithoutURL from './components/FormWithOutURL';


function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const address = useAddress();
    const connectWithMetamask = useMetamask();

    const handleConnect = async () => {
        try {
            await connectWithMetamask();
            if (address) {
                setIsModalOpen(true);
            }
        } catch (error) {
            console.error('MetaMask connection failed:', error);
        }
    };

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/swap" element={<Swap />} />
                    <Route path="/User" element={<User />} />
                    <Route path="/Form" element={<UploadWithoutURL />} />
                </Routes>
                <button onClick={handleConnect}>
                {address ? 'Connected' : 'Connect with MetaMask'}
            </button>
            <SignInSignUpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </Router>
            
            </>
    );
}

export default App;
