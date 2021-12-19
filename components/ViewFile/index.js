import axios from 'axios'
import { useEffect, useState } from 'react'
import { useAuth } from '../Auth'
import { DocumentIcon } from "@heroicons/react/solid"
import PropagateLoader from "react-spinners/PropagateLoader";

export default function ViewFile ({ file }) {
    const [decrypted, setDecrypted] = useState(null)
    const [loading, setLoading] = useState(false)
    const { token } = useAuth()

    const downloadFile = async () => {
        setLoading(true)
        try {
            const { data } = await axios.post(`https://z7b9gr1x12.execute-api.us-east-1.amazonaws.com/dev/files/${file.fileId}/get`, {}, {
                responseType: 'arraybuffer',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('data', data)
            setDecrypted(data);
            setLoading(false)
        } catch (error) {
            console.log(JSON.stringify(error))
            console.log(JSON.stringify(error.response))
            console.log(JSON.stringify(error.response && error.response.data))
            setLoading(false)
        }
    }

    useEffect(() => {
        if (token && !decrypted)
            downloadFile()
    }, [token])

    if (loading) {
        return (
            <PropagateLoader loading={loading} color='#3730a3' />
        )
    }

    if (decrypted && file.contentType.includes('image')) {
        return (
            <div className='flex flex-col justify-center items-center h-4/5 w-4/5 relative'>
                <div className='absolute right-0' style={{ top: '-30px' }}>
                    <button className='border border-indigo-900 bg-indigo-900 text-white text-md font-medium rounded shadow-md py-2 px-8'>Share</button>
                </div>
                <img className='z-10' src={`data:${file.contentType};base64,${Buffer.from(decrypted).toString('utf8')}`} alt={file.originalName || file.title} />
            </div>
        )
    }

    if (decrypted && file.contentType.includes('video')) {
        return (
            <video className='z-10' controls src={`https://ipfs.infura.io:5001/api/v0/cat?arg=${file.fileId}`} alt={file.originalName || file.title} />
        )
    }

    if (decrypted && file.contentType.includes('audio')) {
        return (
            <audio className='z-10' controls src={`https://ipfs.infura.io:5001/api/v0/cat?arg=${file.fileId}`} alt={file.originalName || file.title} />
        )
    }

    return (
        <DocumentIcon />
    )
}