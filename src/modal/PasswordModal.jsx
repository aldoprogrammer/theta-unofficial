import React, { useState } from "react";
import { ethers } from "ethers"; // Import ethers.js

const PasswordModal = ({ onClose, onConfirm }) => {
  const [password, setPassword] = useState("");

  const handleConfirm = async () => {
    try {
      // Perform your password validation or additional logic here
      // For demonstration, just log the password
      console.log("Password provided:", password);

      // Proceed with your swap logic or any other action
      onConfirm();
    } catch (error) {
      console.error("Error while confirming password:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Enter MetaMask Password</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex justify-end">
          <button
            onClick={handleConfirm}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Confirm
          </button>
          <button
            onClick={onClose}
            className="ml-4 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordModal;
