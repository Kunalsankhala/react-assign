import React from 'react';

function listview() {
  const items = ['BMW', 'AUDI', 'KIA' , 'MERCIDISE' , 'AMBESEDER'];

  return (
    <ul>
      {/* Use map function to iterate over the items array */}
      {items.map((item, index) => (
        <li key={index}> {/* Avoid using index as key */}
                    {item.id || item} 
        </li>
      ))}
    </ul>
  );
}

export default listview;
