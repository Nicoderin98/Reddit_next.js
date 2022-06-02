import { useSession } from 'next-auth/react'
import React from 'react'

function Postbox() {
  const {data: session}= useSession()
  return (
    <div className='flex items-center space-x-3'>

      <input
      disabled={!session}
      className='flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none'
      type="text"
      placeholder={session ? "Create a post by entering a title!" : "Sign in to post"
      }
      />
    </div>
  )
}

export default Postbox
