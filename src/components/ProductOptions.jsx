import React, { useState } from 'react';

export default function ProductOptions({
  options = [],
  radius = '4px',
  shape = 'square',
  type = 'text',
  onSelect
}) {
  const [selected, setSelected] = useState(null);

  const handleClick = (option) => {
    setSelected(option.nome); // Agora usamos o nome
    onSelect && onSelect(option.nome); // Retornamos apenas o nome
  };

  const getStyle = (option) => {
    const isSelected = selected === option.nome;

    const baseStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      border: isSelected ? '2px solid #C92071' : '1px solid #CCCCCC',
      backgroundColor: isSelected ? '#C92071' : 'white',
      margin: '4px',
      transition: 'border 0.3s ease',
    };

    if (shape === 'square') {
      baseStyle.width = '46px';
      baseStyle.height = '46px';
      baseStyle.borderRadius = radius;
      baseStyle.padding = '0 12px';
    } else if (shape === 'circle') {
      baseStyle.width = '31px';
      baseStyle.height = '31px';
      baseStyle.borderRadius = '50%';
      baseStyle.border = isSelected ? '2px solid #C92071' : '2px solid white';
    }

    if (type === 'text') {
      baseStyle.fontSize = '16px';
      baseStyle.color = isSelected ? 'white' : '#474747';
      baseStyle.fontWeight = '700';
      baseStyle.fontFamily = 'Inter';
    } else if (type === 'color') {
      baseStyle.backgroundColor = option.valor; // ainda usamos o valor como cor
    }

    return baseStyle;
  };

  return (
    <div className="flex flex-wrap">
      {options.map((option, index) => (
        <div
          key={index}
          style={getStyle(option)}
          onClick={() => handleClick(option)}
        >
          {type === 'text' ? option.nome : null}
        </div>
      ))}
    </div>
  );
}
