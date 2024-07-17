import React, { useState } from "react";
import ConfirmationPinModal from "./ConfirmationPinModal"; // Import the Pin Modal component

export default function VideoUploadModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("file");
  const [pinModalOpen, setPinModalOpen] = useState(false); // State to manage Pin Modal

  if (!isOpen) return null;

  const handleUpload = () => {
    setPinModalOpen(true); // Open Pin Modal on Upload button click
  };

  const closePinModal = () => {
    setPinModalOpen(false); // Close Pin Modal
  };

  const handleConfirmPin = (password) => {
    console.log("Confirmed with PIN:", password);
    // Perform actions like uploading the video or other tasks here
    closePinModal(); // Close Pin Modal after confirmation
    onClose(); // Close Upload Modal if needed
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6">Upload Video</h2>
        <div className="border-b border-gray-200 mb-4">
          <nav className="-mb-px flex space-x-8">
            <button
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "file"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("file")}
            >
              Upload File
            </button>
            <button
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "url"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("url")}
            >
              Upload via URL
            </button>
          </nav>
        </div>
        {activeTab === "file" ? (
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Select a video file</label>
            <input type="file" accept="video/*" className="w-full border rounded px-3 py-2" />
          </div>
        ) : (
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Enter video URL</label>
            <input
              type="url"
              placeholder="https://example.com/video.mp4"
              className="w-full border rounded px-3 py-2"
            />
          </div>
        )}
        <div className="flex justify-end">
          <button
            className="mr-2 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleUpload} // Call handleUpload on Upload button click
          >
            Upload
          </button>
        </div>
      </div>
      {/* Render Pin Modal if pinModalOpen is true */}
      {pinModalOpen && (
        <ConfirmationPinModal
          onClose={closePinModal}
          onConfirm={handleConfirmPin}
        />
      )}
    </div>
  );
}
