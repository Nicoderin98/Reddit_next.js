import React from 'react'
import {
  ArrowDownIcon,
  ArrowUpIcon,
  BookmarkIcon,
  ChatAltIcon,
  DotsHorizontalIcon,
  GiftIcon,
  ShareIcon,
  } from "@heroicons/react/outline";
type Props = {
  post: Post
}

function Post({post}: Props) {
  return (
    <div>
      <ArrowUpIcon className='voteButtons hover:test-red-400'/>
      <p>0</p>
      <ArrowDownIcon className='voteButtons hover:test-blue-400'/>
      <div>

      </div>

      <div>
        <div>

        </div>











      </div>




    </div>
  )
}

export default Post
