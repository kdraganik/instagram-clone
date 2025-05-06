'use client'

import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ email, password })
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-bgLight">
      <div className="w-full max-w-sm bg-white p-8 border border-border rounded-xl shadow-sm">
        <h1 className="text-3xl font-bold text-center text-primary mb-6">InstaClone</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="w-full py-2 border border-border rounded-lg bg-primary text-primar font-semibold hover:bg-accent transition-colors"
          >
            Log In
          </button>
        </form>

        <div className="text-sm text-center mt-6 text-gray-500">
          Don't have an account?{' '}
          <a href="/signup" className="text-primary hover:underline">
            Sign up
          </a>
        </div>
      </div>
    </main>
  )
}