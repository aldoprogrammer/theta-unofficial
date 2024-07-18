import React, { useState } from 'react';
import axios from '../config/axiosConfig';
import { toast } from 'react-toastify';
import { HashLoader } from 'react-spinners';
import 'react-toastify/dist/ReactToastify.css';


const SignInSignUpModal = ({ isOpen, onClose }) => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [formData, setFormData] = useState({
        address: '',
        passphrase: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // State for loading indicator

    if (!isOpen) return null;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSignIn = async () => {
        setLoading(true); // Start loading indicator
        try {
            const response = await axios.post('/login', {
                address: formData.address,
                passphrase: formData.passphrase,
            });
            console.log('Login success:', response.data);
            toast.success('Login successful');
            onClose();
        } catch (error) {
            console.error('Login error:', error);
            setError('Login failed. Please check your credentials.');
            toast.error('Login failed. Please check your credentials.');
        } finally {
            setLoading(false); // Stop loading indicator
        }
    };

    const handleSignUp = async () => {
        setLoading(true); // Start loading indicator
        try {
            const response = await axios.post('/meta', {
                address: formData.address,
                user: formData.address,  // Using address as username
                passphrase: formData.passphrase,
            });
            console.log('Registration success:', response.data);
            toast.success('Registration successful');
            onClose();
        } catch (error) {
            console.error('Registration error:', error);
            setError('Registration failed. Please try again.');
            toast.error('Registration failed. Please try again.');
        } finally {
            setLoading(false); // Stop loading indicator
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
                <button
                    className="absolute top-[5%] right-[5%]
                     text-black font-bold hover:bg-gray-200 py-2 px-4 rounded-full transition-all duration-300 ease-in"
                    onClick={onClose}
                >
                    X
                </button>
                <h2 className="text-2xl font-bold mb-4">{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
                <div className="flex justify-center mb-4">
                    <button
                        className={`px-4 py-2 font-bold ${isSignIn ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
                        onClick={() => setIsSignIn(true)}
                    >
                        Sign In
                    </button>
                    <button
                        className={`px-4 py-2 font-bold ${!isSignIn ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
                        onClick={() => setIsSignIn(false)}
                    >
                        Sign Up
                    </button>
                </div>
                <div className="flex flex-col space-y-4">
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="border rounded py-2 px-3"
                    />
                    <input
                        type="password"
                        name="passphrase"
                        placeholder="Passphrase"
                        value={formData.passphrase}
                        onChange={handleInputChange}
                        className="border rounded py-2 px-3"
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button
                        className={`bg-${isSignIn ? 'blue' : 'green'}-500 hover:bg-${isSignIn ? 'blue' : 'green'}-700 text-white font-bold py-2 px-4 rounded`}
                        onClick={isSignIn ? handleSignIn : handleSignUp}
                        disabled={loading} // Disable button when loading
                    >
                        {loading ? (
                            <div className='mx-auto flex justify-center items-center'>
                            <HashLoader color={'#FFFFFF'} size={20} /> 
                            </div>
                        ) : (
                            isSignIn ? 'Sign In' : 'Sign Up'
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignInSignUpModal;
