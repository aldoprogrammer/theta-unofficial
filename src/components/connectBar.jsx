import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ConnectButton } from "thirdweb/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import { createThirdwebClient, defineChain } from "thirdweb";
import DeCPLMax from "../assets/DeCPLMax.png";
import PinModal from "../modal/PinModal";
import SignInSignUpModal from "../modal/SignInSignUpModal";

const client = createThirdwebClient({
  clientId: "379ff66a369f3e12df6535c7008603a5",
});

const myChain = defineChain({
  id: 2442,
  rpc: "https://polygon-zkevm-cardona.blockpi.network/v1/rpc/public",
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18,
  },
});

const wallets = [
  inAppWallet(),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
];

const ConnectBar = () => {
  const navigate = useNavigate();
  const [showPinModal, setShowPinModal] = useState(false);
  const [showSignInSignUpModal, setShowSignInSignUpModal] = useState(false);
  const [pinExists, setPinExists] = useState(false);
  const [isPinChecked, setIsPinChecked] = useState(false);

  const handleDashboardClick = () => {
    setShowSignInSignUpModal(true);
  };


  return (
    <div>
      <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
        <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
          <nav className="sticky top-0 z-10 block w-full max-w-full px-4 py-2 text-white bg-white border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
            <div className="flex items-center justify-between text-blue-gray-900">
              <a
                href="#"
                className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased"
              >
                <img
                  src={DeCPLMax}
                  alt="DeCPLmax Logo"
                  className="h-20 w-32 object-cover object-center"
                />
              </a>
              <div className="flex items-center gap-4">
                <button
                  className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleDashboardClick}
                >
                  Dashboard
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* PinModal component */}
      <PinModal
        isOpen={showPinModal}
        onClose={() => setShowPinModal(false)}
      />
      {/* SignInSignUpModal component */}
      <SignInSignUpModal
        isOpen={showSignInSignUpModal}
        onClose={() => setShowSignInSignUpModal(false)}
      />
    </div>
  );
};

export default ConnectBar;
