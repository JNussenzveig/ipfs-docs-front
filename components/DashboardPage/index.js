import { DocumentAddIcon } from '@heroicons/react/solid'
import Sidebar from '../Sidebar'

export default function DashboardPage ({ children, pageTitle }) {
    return (
        <div className='w-full h-screen flex bg-gray-100'>
            <div className='h-full'>
                <Sidebar />
            </div>
            <div className='h-full overflow-y-auto px-8 py-3 w-full bg-gray-100'>
                <strong className='text-3xl font-bold block text-gray-700 py-6 mb-5'>{pageTitle || 'Dashboard'}</strong>
                {children}
            </div>
        </div>
    )
}