import { gql } from "@apollo/client";

export const GET_ALL_POST = gql`
  query MyQuery {
    getPostList {
      body
      id
      image
      title
      subreddit_id
      username
      comments {
        id
        text
        post_id
        username
      }
      subreddit {
        id
        topic
      }
      votes {
        id
        post_id
        upvote
        username
      }
    }
  }
`;

export const GET_SUBREDDIT_BY_TOPIC = gql`
query MyQuery($topic: String!) {
  getSubredditListByTopic(topic: $topic) {
    id
    topic
  }
}
`
