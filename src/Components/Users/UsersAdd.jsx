// src/components/OpenModalButton.js
import React, { useState } from 'react';
import { ListPlus } from 'lucide-react';

import Modal from '../Modal';

const OpenModalButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none flex items-center"
        onClick={handleOpenModal}
      >
        <ListPlus className="mr-2" /> {/* Icono con margen derecho */}
        Crear
      </button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-2xl font-bold text-center">Crear Usuario</h2>
        <p className="mt-2 text-gray-600">This is the content of the modal.</p>
      </Modal>
    </div>
  );
};

export default OpenModalButton;