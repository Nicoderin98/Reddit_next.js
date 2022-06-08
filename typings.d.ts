type Comments = {
  id: number
  post_id: number
  text: string
  username: string
}

type Vote = {
  id: number
  username: string
  post_id: number
  upvote: boolean
}

type subreddit = {
  id: number
  topic: string
}

type Post = {
  username: string
  body: string
  id: number
  image: string
  subreddit_id: number
  title: string
  vote: Vote[]
  comments: COmments[]
  subreddit: Subreddit[]
}
