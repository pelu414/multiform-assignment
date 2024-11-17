import { useState } from 'react';

function FormComponent() { 
    const [inputValue, setInputValue] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const [formData, setFormData] = useState('');
    const handleSubmit = (e) => {

    }

return ( 
        <div class="flex item-center justify-center">
            <div>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} class="border-4 border-red-800 outline border-solid" /> 
            <p>Input Value: {inputValue}</p>
            <select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            <p>Selected Value: {selectedValue}</p>
            <input type="text" value={formData} onChange={(e) => setFormData(e.target.value)}/>
            <button className='big-blue-500 '></button>
            </div>
        </div>
); 
}

export default FormComponent;

useState