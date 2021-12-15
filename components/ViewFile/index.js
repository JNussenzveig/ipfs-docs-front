import axios from 'axios'
import { useEffect, useState } from 'react'
import { useAuth } from '../Auth'
import { DocumentIcon } from "@heroicons/react/solid"

export default function ViewFile ({ file }) {
    const [decrypted, setDecrypted] = useState(null)
    const { token } = useAuth()

    const downloadFile = async () => {
        try {
            const { data } = await axios.get(`https://z7b9gr1x12.execute-api.us-east-1.amazonaws.com/dev/files/${file.fileId}/get`, {
                responseType: 'arraybuffer',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('data', data)
            setDecrypted(data);
        } catch (error) {
            
        }
    }

    useEffect(() => {
        if (token && !decrypted)
            downloadFile()
    }, [token])

    if (decrypted && file.contentType.includes('image')) {
        return (
            <img className='z-10' src={`data:${file.contentType};base64,${Buffer.from(decrypted).toString('utf8')}`} alt={file.originalName || file.title} />
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