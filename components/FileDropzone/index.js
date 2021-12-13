import { DocumentIcon } from '@heroicons/react/solid';
import axios from 'axios';
import { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { useAuth } from '../Auth';

export default function Dropzone(props) {
    const { token } = useAuth()
    const [loaders, setLoaders] = useState([]);

    const uploadFile = async (file) => {
        if (!file) return;
        console.log('file', file)

        const formData = new FormData()
        formData.append('file', file)

        const { data } = await axios.post('https://z7b9gr1x12.execute-api.us-east-1.amazonaws.com/dev/files/upload', formData, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            onUploadProgress: (event) => {
                const progress = Math.round(
                  (event.loaded * 100) / event.total
                );

                let allLoaders = loaders
                let loaderIndex = allLoaders.findIndex(l => l.id === file.name)
                console.log(allLoaders, loaderIndex, progress)
                if (loaderIndex > -1) {
                    allLoaders[loaderIndex].progress = progress;
                    setLoaders(allLoaders);
        
                    console.log(
                    `A imagem está ${progress}% carregada... `
                    );  
                }
              },
        })
        console.log('finished', data);
    }

    useEffect(() => {
        console.log('loaders', loaders)
        if (loaders.length)
            uploadFile(loaders[loaders.length-1].file)
    }, [loaders])

    const onDrop = async (acceptedFiles) => {
        for(const file of acceptedFiles) {
            console.log('onDrop', file)
            setLoaders(prev => [...prev, { id: file.name, progress: 0, file }])
        }
    }
    const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
        // Disable click and keydown behavior
        noClick: true,
        noKeyboard: true,
        onDrop
    });

    const files = acceptedFiles.map(file => (
        <div key={file.path} className='flex flex-row items-center justify-start mr-5 text-sm'>
            <DocumentIcon className='text-indigo-400' style={{ width: 16, height: 16 }} /> {file.path} - {loaders.find(loader => loader.id === file.name)?.progress}
        </div>
    ));

    return (
        <div className="w-full border border-indigo-800 rounded py-6 px-6 mb-10 border-dashed" onClick={open}>
            <div {...getRootProps({ className: 'dropzone flex justify-center items-center flex-col' })}>
                <input {...getInputProps()} />
                <p className='font-medium text-lg'>Drag 'n' drop some files here</p>
            </div>
            <aside className='flex flex-row justify-start items-center mt-4'>
                {files}
            </aside>
        </div>
    );
}