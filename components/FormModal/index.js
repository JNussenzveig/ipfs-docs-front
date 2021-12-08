import { useState } from "react";
import ItemsForm from "./components/ItemsForm";

export default function FormModal({ closeModal, fields, formSubmit, title, items, setItems }) {
  const [formData, setForm] = useState({})

  return (
    <div className='w-full flex h-full fixed top-0 left-0 z-50'>
      <div className='w-3/4 h-full bg-black bg-opacity-75' onClick={e => closeModal()}>&nbsp;</div>
      <div className='w-1/4 h-full bg-white px-4 py-8 shadow-lg'>
        <span className='text-xl'>{title}</span>
        <div class='grid grid-cols-2 gap-4 mt-4'>
          {fields.map(field => (<div class='col-span-2'>
            {field.label && <label class='text-xs font-semibold' for='cardNumber'>
              {field.label}
            </label>}
            {field.type === 'array' && <ItemsForm onUpdate={setItems} />}
            {field.type === 'text' && <input
              class='flex items-center h-10 border mt-1 rounded px-4 w-full text-sm'
              type='text'
              placeholder={field.placeholder}
              name={field.name}
              onChange={e => setForm(old => ({ ...old, [field.name]: e.target.value }))}
            />}
            {field.type === 'checkbox' && <input
              class='flex items-center border mt-1 rounded px-4 text-sm'
              type='checkbox'
              placeholder={field.placeholder}
              name={field.name}
              checked={formData[field.name]}
              onChange={e => setForm(old => ({ ...old, [field.name]: formData[field.name] ? false : !formData[field.name] }))}
            />}
            {field.type === 'number' && <input
              class='flex items-center h-10 border mt-1 rounded px-4 w-full text-sm'
              type='number'
              placeholder={field.placeholder}
              name={field.name}
              onChange={e => setForm(old => ({ ...old, [field.name]: e.target.value }))}
            />}
            {field.type === 'textarea' && <textarea
              class='flex items-center h-10 border mt-1 rounded px-4 w-full text-sm'
              placeholder={field.placeholder}
              name={field.name}
              onChange={e => setForm(old => ({ ...old, [field.name]: e.target.value }))}
            >
              </textarea>}
          </div>))}
        </div>
        <button 
          className='w-full bg-indigo-600 hover:bg-indigo-700 border-1 transition duration-300 ease-in-out px-8 py-2 block text-white rounded shadow-md mt-4'
          onClick={e => formSubmit(formData)}
        >
          Save
        </button>
      </div>
    </div>
  );
}
