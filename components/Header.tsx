import React from 'react'
import Image from "next/image"
import { BeakerIcon, GlobeIcon,PlusIcon,SparklesIcon,SpeakerphoneIcon,VideoCameraIcon ,ChevronDownIcon, HomeIcon, SearchIcon, ChatIcon, BellIcon, UsersIcon } from "@heroicons/react/solid";
import { StarIcon,MenuIcon,UserIcon } from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";

function Header() {
  const {data: session} = useSession();
  return (
    <div className='sticky top-0 z-50 flex bg-white px-4 py-4 shadow-sm'>
      <div className='relative h-15 w-40 flex-shrink-0
      cursor-pointer'>
        <Image src="data:image/png;base64,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"
         layout="fill" />
      </div>




      <div className='mx-7 flex items-center xl:min-w-[300px]'>
        <HomeIcon className='h-5 w-5'/>
        <p className='ml-2 hidden flex-1 lg:inline'>Home</p>
        <ChevronDownIcon className='h-5 w-5'/>
      </div>

      <form className='flex flex-1 items-center space-x-2 rounded-sm border-gray-200 bg-gray-100 px-3 py-1'>
        <SearchIcon className='h-6 w-6 text-greay-400' />
        <input
          className='flex-1 bg-transparent outline-none'
          type="text"
          placeholder="Search Reddit"
         />
        <button type='submit' hidden />
      </form>

      <div className='flex items-center space-x-2
      text-gray-500 lg:inline-flex'>
        <SparklesIcon className='icon'/>
        <GlobeIcon className='icon' />
        <VideoCameraIcon className='icon'/>
        <hr className='h-10 border border-gray-100'/>
        <ChatIcon className='icon' />
        <BellIcon className='icon' />
        <PlusIcon className='icon' />
        <SpeakerphoneIcon className='icon' />
      </div>

      <div className='ml-5 flex items-center lg_hidden'>
        <MenuIcon className='icon' />
      </div>


    {session ? (

    <div onClick={() => signOut()} className='hidden cursor-pointer items-center space-x-2
    border border-gray-100 p-2 lg:flex '>
      <div className='relative h-10 w-10 flex-shrink-0'>
        <UserIcon className='contatiner icon'/>
      </div>
    <div className='flex-1 text-sm'>
      <p className='truncate'>{session?.user?.name}</p>
    <p className= 'h-9 w-9 text-gray-400'>Sign Out</p>
    </div>
    <ChevronDownIcon className='h-5 flex-shrink-0
    text-gray-400' />
    </div>
    ):  (


      <div onClick={() => signIn()} className='hidden cursor-pointer items-center space-x-2
      border border-gray-100 p-2 lg:flex '>
        <div className='relative h-9 w-9 flex-shrink-0'>
          <UserIcon className='contatiner icon'/>
        </div>

      <p className= 'h-9 w-9 text-gray-400'>Sing In</p>
      </div>
)}
  </div>


  )
}

export default Header
