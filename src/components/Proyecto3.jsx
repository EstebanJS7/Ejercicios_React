import React from 'react'
import { useState } from 'react';
import './Proyecto3.css'

const datos = [
    { titulo: 'Título 1', descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
    { titulo: 'Título 2', descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
    { titulo: 'Título 3', descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' },
  ];
  
  const Proyecto3 = () => {
    const [expandedIndices, setExpandedIndices] = useState([]);
  
    const toggleAccordion = (index) => {
      if (expandedIndices.includes(index)) {
        setExpandedIndices(expandedIndices.filter((i) => i !== index));
      } else {
        setExpandedIndices([...expandedIndices, index]);
      }
    };
  
    const renderTitulo = (index, titulo) => {
      const isExpanded = expandedIndices.includes(index);
      const icono = isExpanded ? '-' : '+';
      return (
        <div className="titulo">
          {titulo} 
          <span>{icono}</span>
        </div>
      );
    };
  
    return (
      <div className="acordeon2">
        {datos.map((elemento, index) => (
          <div
            key={index}
            className={`elemento ${expandedIndices.includes(index) ? 'activo' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            {renderTitulo(index, elemento.titulo)}
            {expandedIndices.includes(index) && (
              <div className="descripcion">
                <p>{elemento.descripcion}</p>
                <img className='image' src='https://cdn0.bioenciclopedia.com/es/posts/2/3/0/leon_32_600.webp' alt="Imagen" />
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  export default Proyecto3;