import { useEffect, useState } from "react";
import axios from 'axios';
import { useAuth } from '../Auth'
import { UserGroup } from '@heroicons/react/solid'

// Dependencies
const InviteModal = ({ fileId, onClose }) => {
    const [loading, setLoading] = useState(false)
    const [userEmail, setUserEmail] = useState('')
    const [invites, setInvites] = useState([])
    const [permissions, setPermissions] = useState([])
    const { token } = useAuth()

    const fetchPermissions = async () => {
        setLoading(true)
        try {
            const { data: allPerms } = await axios.get(`https://z7b9gr1x12.execute-api.us-east-1.amazonaws.com/dev/files/${fileId}/permissions`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log('file permissions', allPerms)
            setInvites(allPerms.permissions)
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    const inviteUser = async () => {
        setLoading(true)
        try {
            const { data: newInvite } = await axios.post(`https://z7b9gr1x12.execute-api.us-east-1.amazonaws.com/dev/files/${fileId}/permissions/invite`, {
                guestEmail: userEmail, 
                permissionType: 'READ'
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log('invited', invite)
            setInvites(invs => [...invs, newInvite]);
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (token && !invites.length)
            fetchPermissions()
    }, [token])

    return (
        <div className="min-h-screen flex justify-center items-center flex-col fixed z-20 w-full">
            <div className='w-full h-full bg-black bg-opacity-50 fixed' onClick={e => onClose()}></div>
            <div className="bg-white p-6 w-2/4 rounded shadow-lg z-10">
                {/* <UserGroup className='w-8 h-8' /> */}
                <h1 className="font-bold text-2xl">Convidar pessoas</h1>
                <div className="border-t border-gray-300 w-full mt-5 relative">
                    <input
                        className="border border-gray-500 w-full rounded p-2 focus:border-gray-900"
                        type="email"
                        placeholder="Digite um email"
                        value={userEmail}
                        onChange={e => setUserEmail(e.target.value)}
                    />
                    <button className="font-medium absolute top-0 right-0 p-2 bg-green-600 border border-green-600 shadow-md rounded text-white" onClick={e => inviteUser()}>
                        Convidar
                    </button>
                </div>
                <div className="border-t border-gray-400 mt-5 overflow-y-auto">
                   {invites.map(invite => (<div className="w-full border-b border-gray-400 p-2 flex items-center justify-between">
                        <div className="font-medium">{invite.guestId}</div>
                        <div className={`font-medium flex flex-col relative ${invite.active ? 'bg-green-500' : 'bg-indigo-500'} text-white shadow-md py-2 px-4 rounded`}>
                            {invite.active ? 'ALLOWED' : 'INVITED'}
                        </div>
                    </div>))}
                </div>
            </div>
        </div>
    );
};

export default InviteModal;
