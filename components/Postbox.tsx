import { LinkIcon, PhotographIcon } from '@heroicons/react/solid'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import Avatar from './Avatar'
import { useForm } from "react-hook-form"

type FormData = {
  postTitle: string
  postBody: string
  postImage: string
  subreddit: string
}

function Postbox() {
  const {data: session}= useSession()
  const [imageBoxOpen, setImageBoxOpen] = useState<boolean>(false)
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<FormData>()

  return (
    <form className='sticky top-16 z-50 rounded-md border border-gray-300 bg-white p-2'>
      <div className='flex items-center space-x-3'>
        <Avatar />

        <input
        {...register('postTitle',{required: true})}
        disabled={!session}
        className='flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none'
        type="text"
        placeholder={session ? "Create a post by entering a title!" : "Sign in to post"
        }
        />
        <PhotographIcon
        onClick={() => setImageBoxOpen(!imageBoxOpen)}
        className={`h-6 text-gray-300 ${imageBoxOpen && 'text-blue-300'}`}/>
        <LinkIcon className='h-6 text-gray-300'/>
      </div>

      {!watch('postTitle') && (
        <div className='flex flex-col py-2'>

          <div className='flex item-center px-2'>
            <p className='min-w-[90px]'>Body:</p>
            <input
            className="m-2 flex-1 bg-blue-50 p-2 outline-none"
            {...register("postBody")}
            type="text"
            placeholder="Text(optional)"
            />
          </div>

          <div className='flex item-center px-2'>
            <p className='min-w-[90px]'>Subreddit:</p>
            <input
            className="m-2 flex-1 bg-blue-50 p-2 outline-none"
            {...register("subreddit", {required: true})}
            type="text"
            placeholder="i.e. reactjs"
            />
          </div>

          {imageBoxOpen && (
            <div className='flex item-center px-2'>
              <p className='min-w-[90px]'>Image URL:</p>
              <input
                className="m-2 flex-1 bg-blue-50 p-2 outline-none"
                {...register("postImage")}
                type="text"
                placeholder="Optional..."
              />
          </div>
          )}

          {Object.keys(errors).length > 0 && (
            <div className='space-y-2 p-2 text-red-500'>
              {errors.postTitle?.type === 'required' && (
                <p> A Post Title is required</p>
              )}

              {errors.subreddit?.type === 'required' && (
                <p> A Subreddit is required</p>
              )}
            </div>
          )}

          {!!watch("postTitle") && (
            <button type="submit"
            className="w-full rounded-full bg-blue-400 p-2
            text-white">
              Create Post
            </button>
          )}

        </div>
      )}
    </form>
  )
}

export default Postbox
