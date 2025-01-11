'use client'

import { signOut } from "next-auth/react"

export function LogoutButton() {
  return (
    <button 
      className="btn btn-outline"
      onClick={() => signOut()}
    >
      Logout
    </button>
  )
}