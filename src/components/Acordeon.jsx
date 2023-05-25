import { useState } from 'react';
import './Acordeon.css'

const date = [
  { title: 'Título 1', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 1' },
  { title: 'Título 2', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 2' },
  { title: 'Título 3', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 3' },
  { title: 'Título 4', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 4' },
  { title: 'Título 5', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 5' },
  { title: 'Título 6', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 6' },
  { title: 'Título 7', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 7' },
  { title: 'Título 8', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 8' },
];

const Acordeon = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleAccordion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1); 
    } else {
      setExpandedIndex(index); 
    }
  };

  return (
    <div className="acordeon">
      <div className="column">
        {date.slice(0, 4).map((element, index) => (
          <div
            key={index}
            className={`element ${expandedIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="title">{element.title}
                <span>{expandedIndex === index ? <i class="bi bi-chevron-compact-down"></i> : <i class="bi bi-chevron-compact-right"></i>}</span>
            </div>
           
            {expandedIndex === index && (
               <div className="description"><p>{element.description}</p></div>
            )}
          </div>
        ))}
      </div>
      <div className="column">
        {date.slice(4, 8).map((element, index) => (
          <div
            key={index + 4} 
            className={`element ${expandedIndex === index + 4 ? 'active' : ''}`}
            onClick={() => toggleAccordion(index + 4)}
          >
            <div className="title">{element.title}
                <span>{expandedIndex === index  + 4 ? <i class="bi bi-chevron-compact-down"></i> : <i class="bi bi-chevron-compact-right"></i>}</span>
            </div>
            {expandedIndex === index + 4 && (
              <div className="description"><p>{element.description}</p></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Acordeon;
