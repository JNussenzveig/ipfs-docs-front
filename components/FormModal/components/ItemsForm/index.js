import { useState, useEffect } from 'react'
import { XCircleIcon, PaperClipIcon, PencilIcon, PlusCircleIcon, PlusIcon, CheckIcon } from '@heroicons/react/outline'

export default function ItemsForm ({ onUpdate }) {
    const [items, setItems] = useState([])

    const addItem = (item) => {
        setItems(oldItems => [...oldItems, item])
    }

    const removeItem = (item) => {
        const itemIndex = items.findIndex(i => i.id === item.id)
        setItems(oldItems => oldItems.splice(itemIndex, 1))
    }

    const toggleEditing = (id) => {
        const itemIndex = items.findIndex(i => i.id === id)
        let newState = [...items]
        newState[itemIndex].isEditing = !newState[itemIndex].isEditing
        setItems(newState)
    }

    const saveItem = (item, field, value) => {
        const itemIndex = items.findIndex(i => i.id === item.id)
        let newState = [...items]
        newState[itemIndex][field] = value;
        setItems(newState)
    }

    const newItem = () => {
        setItems(oldItems => [...oldItems, {
            text: 'Untitled item',
            attachments: [],
            status: 'Backlog',
            id: oldItems.length+1,
            isEditing: false
        }])
    }

    useEffect(() => {
        onUpdate(items)
        console.log('called onUpdate', items)
    }, [items])

    return (
        <div className='flex flex-col'>
            {items.map(item => (
                item.isEditing ? 
                <div key={item.id} className='border border-gray-300 rounded shadow-md px-4 py-2 mt-2 flex flex-row justify-between'>
                    <div className='flex flex-col'>
                        <textarea className='resize-none focus:border-light-indigo-500 focus:ring-1 focus:ring-light-indigo-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-300 px-2 py-2 rounded' value={item.text} onChange={e => saveItem(item, 'text', e.target.value)}></textarea>
                    </div>
                    <div className='flex items-center'>
                        <CheckIcon onClick={e => toggleEditing(item.id)} className='text-green-500 cursor-pointer' style={{ width: 20, height: 20 }} />
                    </div>
                </div>
                : 
                <div key={item.id} className='border border-gray-300 rounded shadow-md px-4 py-2 mt-2 flex flex-row justify-between'>
                    <div className='flex flex-col'>
                        <strong className='text-sm'>{item.text}</strong>
                        <span className='text-sm text-gray-500 flex flex-row items-center mt-2 cursor-pointer rounded-full border-gray-500 border px-2'>
                            <PaperClipIcon style={{ width: 16, height: 16 }} />
                            <span className='ml-1'>{(item.attachments || []).length} attachments</span>
                        </span>
                    </div>
                    <div className='flex items-center'>
                        <PaperClipIcon className='text-green-500 cursor-pointer' style={{ width: 20, height: 20 }} />
                        <PencilIcon onClick={e => toggleEditing(item.id)} className='text-blue-500 ml-2 cursor-pointer' style={{ width: 20, height: 20 }} />
                        <XCircleIcon className='text-red-400 ml-2 cursor-pointer' style={{ width: 20, height: 20 }} />
                    </div>
                </div>
            ))}
            <div className='border border-indigo-600 rounded shadow-md px-4 py-2 mt-2 border-dashed cursor-pointer flex items-center justify-center' onClick={e => newItem()}>
                <PlusIcon className='text-indigo-600' style={{ width: 20, height: 20 }} />
            </div>
        </div>
    )
}