import { DocumentIcon } from "@heroicons/react/solid"

export default function ViewFile ({ file }) {
    if (file.contentType.includes('image')) {
        return (
            <img className='z-10' src={`https://ipfs.infura.io:5001/api/v0/cat?arg=${file.fileId}`} alt={file.originalName || file.title} />
        )
    }

    if (file.contentType.includes('video')) {
        return (
            <video className='z-10' controls src={`https://ipfs.infura.io:5001/api/v0/cat?arg=${file.fileId}`} alt={file.originalName || file.title} />
        )
    }

    if (file.contentType.includes('audio')) {
        return (
            <audio className='z-10' controls src={`https://ipfs.infura.io:5001/api/v0/cat?arg=${file.fileId}`} alt={file.originalName || file.title} />
        )
    }

    return (
        <DocumentIcon />
    )
}