import React, { useState } from "react";
import "./css/DraggableList.css"; // Make sure to create this CSS file

import { SlOptionsVertical } from "react-icons/sl";
import { MdOutlineDragIndicator } from "react-icons/md";

const dragableList = () => {
    const [items, setItems] = useState([
        { id: 1, image: './public/dragableAssets/image_2.png', name: 'Interview preparation with JavaScript 2.0', price: 'Rs. 9000/-', type: 'Course' },
        { id: 2, image: './public/dragableAssets/image_3.png', name: 'Aptitude - Averages, Mixtures & Allegation', price: 'Free', type: 'Mock Test' },
        { id: 3, image: './public/dragableAssets/image_4.png', name: 'Aptitude - Simple & Compound Interest', price: 'Free', type: 'Mock Test' },
        { id: 4, image: './public/dragableAssets/image_5.png', name: 'Aptitude - Partnership', price: 'Free', type: 'Mock Test' },
        { id: 5, image: './public/dragableAssets/image_6.png', name: 'Aptitude - Time & Work', price: 'Free', type: 'Mock Test' },
      ]);
    
      const [draggingIndex, setDraggingIndex] = useState(null);

      const onDragStart = (index) => {
        setDraggingIndex(index);
      };
    
      const onDragOver = (index) => {
        const draggedOverItem = items[index];
    
        // If the item is dragged over itself, ignore
        if (draggingIndex === index) {
          return;
        }
    
        // Filter out the currently dragged item
        let itemsCopy = items.filter((_, idx) => idx !== draggingIndex);
        console.log(itemsCopy)
    
        // Add the dragged item after the dragged over item
        itemsCopy.splice(index, 0, items[draggingIndex]);
        console.log(itemsCopy)

    
        setDraggingIndex(index);
        setItems(itemsCopy);
      };
    
      const onDragEnd = () => {
        setDraggingIndex(null);
      };
      const moveToTop = (index) => {
        const product = items[index];
        const newProducts = items.filter((_, idx) => idx !== index);
        newProducts.unshift(product);
        setItems(newProducts);
      };
    
      const moveToBottom = (index) => {
        const product = items[index];
        const newProducts = items.filter((_, idx) => idx !== index);
        newProducts.push(product);
        setItems(newProducts);
      };
    
      const removeItem = (index) => {
        const newProducts = items.filter((_, idx) => idx !== index);
        setItems(newProducts);
      };
    
      return (
        <div className="mainContainer"> 
            <h1>Chai aur Code</h1>
            <div className="container">
            <div className="headerContainer">
                <h2>Manage Bundle</h2>
                <p>Change orders of the products based on priority</p>
            </div>
            <div className="listContainer">
            <ul className="draggable-list">
          {items.map((product, index) => (
            <li
              key={product.id}
              draggable
              onDragStart={() => onDragStart(index)}
              onDragOver={() => onDragOver(index)}
              onDragEnd={onDragEnd}
              className="draggable-item"
            >
              <span className="drag-icon"><MdOutlineDragIndicator /></span>
              <img src={product.image} alt={product.name} className="product-image" />
              <span className="product-name">{product.name}</span>
              <span className="product-price">{product.price}</span>
              <span className="product-type">{product.type}</span>
              <span className="options-icon"><SlOptionsVertical /></span>
              <div className="actions">
            <button onClick={() => moveToTop(index)}>Move to Top</button>
            <button onClick={() => moveToBottom(index)}>Move to Bottom</button>
            <button onClick={() => removeItem(index)}>Remove</button>
          </div>
            </li>
          ))}
        </ul>
            </div>
            </div>
          
        </div>
      );
};

export default dragableList;