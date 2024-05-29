// src/components/OpenModalButton.js
import React, { useEffect, useState, useCallback } from 'react';
import { ListPlus, Trash } from 'lucide-react';
import { rutes } from '../urls';
import Cookies from 'js-cookie';
import Swal from "sweetalert2";
import Modal from '../Modal';
import { Info } from 'phosphor-react';
import { Upload } from 'keep-react';

const AddProducts = () => {
  let token = Cookies.get("102365");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groups, setGroups] = useState([]);

  const [files, setFiles] = useState([]);
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles);
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(rutes.groups.url, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log(result);
        setGroups(result);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: JSON.stringify(error),
        });
      }
    };

    fetchData();
  }, [token]); // El token en las dependencias para asegurar que se actualice si cambia

  const createProduct = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('price', price);
    formData.append('description', description);
    formData.append('name', name);
    if (files.length > 0) {
      formData.append('image', files[0]);
    }

    try {
      const response = await fetch(rutes.products.url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        Swal.fire('Success', 'Producto creado', 'Revisa el apartado de órdenes');
        handleCloseModal();
      } else {
        const errorData = await response.json();
        Swal.fire('Error', errorData.message || 'Error al crear el producto', '');
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: JSON.stringify(error),
      });
    }
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
        <h2 className="text-2xl font-bold text-center">Crear Producto</h2>
        <form className="mt-4" onSubmit={createProduct}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Nombre del producto"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Descripción
            </label>
            <input
              id="description"
              name="description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Descripción del producto"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              Precio
            </label>
            <input
              id="price"
              name="price"
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Precio del producto"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
              Imagen
            </label>
            <Upload horizontal options={{ onDrop }}>
              <Upload.Body>
                <Upload.Icon>
                  <img src="/images/icon/folder.svg" alt="folder" />
                </Upload.Icon>
                <Upload.Text>
                  <p className="text-body-3 font-medium text-metal-600">Elija archivo para cargar</p>
                  <p className="text-body-4 font-normal text-metal-400">Formatos PDF y JPG</p>
                </Upload.Text>
              </Upload.Body>
              <Upload.Footer isFileExists={files.length > 0}>
                <p className="my-2 flex items-center gap-1 text-body-4 font-normal text-metal-600">
                  <Info size={16} />
                  Archivos cargados
                </p>
                <ul className="space-y-1">
                {files?.map((file) => (
            <li
              key={file?.name}
              className="flex items-center justify-between border-l-4 border-l-metal-100 bg-metal-25 px-4 py-2.5 text-left text-body-4 font-normal capitalize text-metal-600">
              {file?.name}
              <Trash size={16} color="red" />
            </li>
          ))}
                </ul>
              </Upload.Footer>
            </Upload>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Crear Producto
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddProducts;