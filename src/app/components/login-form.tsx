'use client'

import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation';

export default function LoginForm(){
  const searchParams = useSearchParams();
  const error = searchParams.get('error')

  async function login(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      email: formData.get("email"),
      password: formData.get("password")
    }

    signIn("credentials", {
      ...data,
      callbackUrl: "/home",
    }) 
  };

  return (
    <form onSubmit={login} className="bg-blue-200 p-12 rounded-lg w-96 max-w-full flex items-center px-5 flex-col gap-2">
      <h2 className="font-bold text-l mb-6">Login</h2>
      <input 
        name="email"
        type="email" 
        className="input input-primary w-full"
        placeholder="E-mail"
      />
      <input
        name="password" 
        type="password" 
        className="input input-primary w-full"
        placeholder="E-mail"
      />
      <button className="btn btn-primary w-full" type="submit" >aa</button>  
    {error === 'CredentialsSignin' && <div className='text-red-500'> Erro no Login</div>}
    </form>
  )
}