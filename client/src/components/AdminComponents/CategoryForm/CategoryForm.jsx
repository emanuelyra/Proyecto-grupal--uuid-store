import React, { useState } from 'react';
import axios from 'axios';

const CreateCategoryForm = ({ onCategoryCreated }) => {
  const [categoryName, setCategoryName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/createCategory', { name: categoryName });
      if (response.status === 201) {
        setCategoryName('');
        setError('');
        onCategoryCreated(); // actualiza la lista de categorías
        alert('Categoría creada exitosamente');
      } else {
        throw new Error('No se pudo crear la categoría');
      }
    } catch (error) {
      console.error('Error al crear la categoría:', error);
      alert('Error al crear la categoría.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Crear Nueva Categoría</h2>
      <form className='flex-wrap' onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="categoryName" className="block text-sm text-gray-600">
            Nombre de la Categoría:
          </label>
          <input
            type="text"
            id="categoryName"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Crear Categoría
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default CreateCategoryForm;
