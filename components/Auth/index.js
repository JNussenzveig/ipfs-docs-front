import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'

const defaultUserState = {
  id: null,
  email: '',
  username: ''
};
const AuthContext = createContext();

function AuthProvider ({ children }) {

  const [token, setToken] = useState(null);
  const [user, setUser] = useState(defaultUserState);
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState([])
  const authenticated = user.id && token;

  const listErrors = (messages) => {
    return (messages || errors).map(message => (
      <div className='flex w-full py-4 px-4 rounded border-red-400 border bg-red-200 mb-5'>{message.message}</div>
    ))
  }

  const fetchSession = () => {
    const session = localStorage.getItem('_session');
    const userSession = session ? JSON.parse(session) : null;
    if (userSession) {
      setToken(userSession.token)
      setUser(userSession.user)
    } else {
      setToken(null)
      setUser(defaultUserState)
    }
  }

  const saveSession = (data) => {
    const { user, jwt: token } = data
    localStorage.setItem('_session', JSON.stringify({ user, token }));
    fetchSession()
  }

  const signIn = async (email, password) => {
    setLoading(true)
    try {
      const { data } = await axios.post('https://z7b9gr1x12.execute-api.us-east-1.amazonaws.com/dev/auth/login', {
        email: email,
        password
      });
      saveSession(data)
      setLoading(false)
    } catch (error) {
      console.log('auth error', error);
      console.log(error.response.data.data[0])
      setErrors(error.response.data.data[0].messages)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSession()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        saveSession,
        signIn,
        listErrors,
        user,
        token,
        isAuthenticated: authenticated,
        errors,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth () {
  return useContext(AuthContext)
}

export {
  AuthContext,
  AuthProvider,
  useAuth
}