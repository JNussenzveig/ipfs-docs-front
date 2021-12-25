import axios from 'axios'
import { DocumentAddIcon, DocumentIcon, PhotographIcon } from '@heroicons/react/solid'
import { useState, useEffect } from 'react'
import DashboardPage from '../../components/DashboardPage'
import FileDropzone from '../../components/FileDropzone'
import { useAuth } from '../../components/Auth'
import PropagateLoader from "react-spinners/PropagateLoader";
import FileLightbox from '../../components/ViewFile/components/FileLightbox'

export default function DashboardIndex() {
    const { token } = useAuth()
    const [items, setItems] = useState([]);
    const [sharedItems, setSharedItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentModal, setCurrentModal] = useState(null);

    const fetchSharedItems = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get('https://z7b9gr1x12.execute-api.us-east-1.amazonaws.com/dev/files/shared', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Accept': 'application/json'
                }
            })
            setSharedItems(data.files ? data.files : []);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    const fetchItems = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get('https://z7b9gr1x12.execute-api.us-east-1.amazonaws.com/dev/files', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Accept': 'application/json'
                }
            })
            setItems(data.items);
            setLoading(false);
            fetchSharedItems()
        } catch (error) {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (token && !items.length) {
            fetchItems()
        }
    }, [token])

    return (
       <DashboardPage pageTitle='Seus Arquivos'>
           <FileDropzone />

           {!loading && sharedItems.length > 0 && <div className='flex flex-col w-full'>
               <h1 className='font-medium text-xl text-gray-800 py-4'>Compartilhados com você</h1>
                <div className='grid grid-cols-3 auto-rows-max gap-5 w-full'>
                    {sharedItems.map(item => (
                        <>
                            <div class="flex items-center p-4 bg-white rounded-lg border border-gray-300 shadow-md hover:shadow-lg transition duration-200 hover:cursor-pointer" onClick={e => setCurrentModal(item.fileId)}>
                                <div class="flex flex-shrink-0 items-center justify-center h-16 w-16 rounded text-indigo-800">
                                    {['image/png', 'image/jpg', 'image/jpeg', 'image/gif'].includes(item.contentType) ? <PhotographIcon /> : <DocumentIcon />}
                                </div>
                                <div class="flex-grow flex flex-col ml-4">
                                    <span class="text-xl font-bold">{item.title.length >= 21 ? `${item.title.substring(0, 21)}...` : item.title}</span>
                                    <div class="flex items-center justify-between">
                                        <span class="text-gray-500">{item.description}</span>
                                        <span class="text-gray-400 text-sm font-semibold ml-2">{item.contentType.split("/")[1].toUpperCase()}</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>}

            <hr className='my-6' />

            {!loading && sharedItems.length > 0 && <div className='flex flex-col w-full'>
               <h1 className='font-medium text-xl text-gray-800 py-4'>Seus arquivos</h1>
                <div className='grid grid-cols-3 auto-rows-max gap-5 w-full'>
                    {items.map(item => (
                        <>
                            <div class="flex items-center p-4 bg-white rounded-lg border border-gray-300 shadow-md hover:shadow-lg transition duration-200 hover:cursor-pointer" onClick={e => setCurrentModal(item.fileId)}>
                                <div class="flex flex-shrink-0 items-center justify-center h-16 w-16 rounded text-indigo-800">
                                    {['image/png', 'image/jpg', 'image/jpeg', 'image/gif'].includes(item.contentType) ? <PhotographIcon /> : <DocumentIcon />}
                                </div>
                                <div class="flex-grow flex flex-col ml-4">
                                    <span class="text-xl font-bold">{item.title.length >= 21 ? `${item.title.substring(0, 21)}...` : item.title}</span>
                                    <div class="flex items-center justify-between">
                                        <span class="text-gray-500">{item.description}</span>
                                        <span class="text-gray-400 text-sm font-semibold ml-2">{item.contentType.split("/")[1].toUpperCase()}</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>}
            {loading && <div className='flex justify-center items-center'>
                <PropagateLoader loading={loading} color='#3730a3' />
            </div>}
            {!loading && <>
                {items.map(item => (
                    <FileLightbox onClose={e => setCurrentModal(null)} file={item} currentModal={currentModal} />
                ))}
                {sharedItems.map(item => (
                    <FileLightbox onClose={e => setCurrentModal(null)} file={item} currentModal={currentModal} />
                ))}
            </>}
       </DashboardPage>
    )
}