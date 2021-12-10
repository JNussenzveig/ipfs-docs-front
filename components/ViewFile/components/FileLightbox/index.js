import ViewFile from "../..";

export default function FileLightbox ({ file, onClose, currentModal }) {

    if (file.fileId !== currentModal) return null;

    return (
        <div className='w-full h-screen flex justify-center items-center fixed top-0 left-0 z-10'>
            <div className='bg-black/75 absolute top-0 left-0 w-full h-screen z-8' onClick={e => onClose()}>&nbsp;</div>
            <ViewFile file={file} />
        </div>
    )
}