import React , { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
const TaskTwo = () => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(false);
    const [listItems, setListItems] = useState([]);
    const handleInputChange = (e) => {
      const input = e.target.value;
      if (input.length < 5 || input === input.toLowerCase()) {
        setError(true);
      } else {
        setError(false);
      }
      setInputValue(input);
    }; 
    const handleAddClick = () => {
      if (!error) {
        setListItems([...listItems, inputValue]);
        setInputValue('');
      }
    }; 
    return (
      <div>
        <TextField type="text" value={inputValue} onChange={handleInputChange} /><br />
        <Button variant="contained" onClick={handleAddClick} disabled={error}>Add</Button>
        {error && <p style={{ color: 'red' }}>Uzunluğu 5-dən boyuk və ya beraber ve input-da böyük hərf simvolu olmalidir!</p>}
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

export default TaskTwo