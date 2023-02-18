import { useRouter } from 'next/router'
import { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [error, setError] = useState(false)
  const router = useRouter()

  const handleClick = async () => {
    try {
      await fetch(`http://localhost:3000/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
      router.push('/admin')
    } catch (err) {
      setError(true)
    }
  }

  return (
    <div className="-container h-[calc(100vh_-_100px)] flex justify-center items-center">
      <div className="flex flex-col -wrapper">
        <h1 className="my-5 text-3xl font-bold ">Admin Dashboard</h1>
        <input
          placeholder="username"
          className="h-10 px-3 mb-5 border border-gray-400 -input"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          className="h-10 px-3 mb-5 border border-gray-400 -input"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleClick}
          className="p-2 text-white bg-green-600 rounded -button"
        >
          Sign In
        </button>
        {error && (
          <span className="text-sm text-red-500 -error">
            Wrong Credentials!
          </span>
        )}
      </div>
    </div>
  )
}

export default Login
