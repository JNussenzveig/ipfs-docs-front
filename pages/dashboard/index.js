import { DocumentAddIcon } from '@heroicons/react/solid'
import DashboardPage from '../../components/DashboardPage'
import Sidebar from '../../components/Sidebar'

export default function DashboardIndex() {
    return (
       <DashboardPage pageTitle='Dashboard'>
            <div className='grid grid-cols-3 auto-rows-max gap-5 w-full'>
                <div class="transition duration-200 ease-in shadow-sm hover:shadow-lg relative flex items-start justify-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100 border border-gray-300 bg-gradient-to-r from-indigo-400 via-blue-400 to-blue-500" draggable="true">
                    <div className=''>
                        <DocumentAddIcon style={{ width: 80, height: 80 }} />
                    </div>
                    <div className='flex justify-items-end w-full items-end text-white flex-col'>
                        <div className='font-medium text-2xl'>Documentos</div>
                        <div className='font-medium text-2xl'>17</div>
                    </div>
                </div>
                <div class="transition duration-200 ease-in shadow-sm hover:shadow-lg relative flex items-start justify-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100 border border-gray-300 bg-gradient-to-r from-green-400 via-green-500 to-green-600" draggable="true">
                    <div className=''>
                        <DocumentAddIcon style={{ width: 80, height: 80 }} />
                    </div>
                    <div className='flex justify-items-end w-full items-end text-white flex-col'>
                        <div className='font-medium text-2xl'>Documentos</div>
                        <div className='font-medium text-2xl'>17</div>
                    </div>
                </div>
                <div class="transition duration-200 ease-in shadow-sm hover:shadow-lg relative flex items-start justify-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100 border border-gray-300 bg-gradient-to-r from-pink-400 via-orange-400 to-red-500" draggable="true">
                    <div className=''>
                        <DocumentAddIcon style={{ width: 80, height: 80 }} />
                    </div>
                    <div className='flex justify-items-end w-full items-end text-white flex-col'>
                        <div className='font-medium text-2xl'>Documentos</div>
                        <div className='font-medium text-2xl'>17</div>
                    </div>
                </div>
            </div>
       </DashboardPage>
    )
}