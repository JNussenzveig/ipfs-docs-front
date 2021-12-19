import {useAuth} from '../Auth'
import PropagateLoader from "react-spinners/PropagateLoader";

export default function PrivateRoute ({ children }) {
    const { token, loading, isAuthenticated } = useAuth()

    if (loading) {
        return (
            <div className='flex items-center justify-center w-100 h-screen'>
                <PropagateLoader loading={loading} color='#3730a3' />
            </div>
        )
    }

    if (!loading & !token) {
        return (
            <div>Unauthorized</div>
        )
    }

    return (
        <>
            {children}
        </>
    )
}