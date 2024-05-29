// src/components/Modal.js
import React from 'react';
import { X } from 'lucide-react';
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-800 opacity-75"></div>
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:max-w-lg">
        <div className="p-4">
            <button
                className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={onClose}
            >
                <X />
            </button>
            <div className="mt-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;