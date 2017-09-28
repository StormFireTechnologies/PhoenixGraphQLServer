import { makeExecutableSchema } from'graphql-tools';

import Activity from './types/activity';
import Gamer from './types/gamer';
import Like from './types/like';
import Dislike from './types/dislike';
import ActivityComment from './types/comment';
import Challenge from './types/challenge';

import resolvers from './resolvers'

const RootQuery = `
  type RootQuery {
    activity(activityId: String!): Activity
    gamer(id: String!): Gamer
  }

  type RootMutation {
    createGamer(gamer: GamerInput!): Gamer
    submitActivity(activity: ActivityInput!): Activity
    deleteActivity(activityId: String!): Activity
    updateActivity(activityId: String!, activity: ActivityUpdateInput!): Activity
    likeActivity(like: LikeInput!, activityId: String!): Like
    dislikeActivity(dislike: DislikeInput!, activityId: String!): Dislike
    commentActivity(comment: CommentInput!, activityId: String!): ActivityComment
    createChallenge(challenge: ChallengeInput!): Challenge
    deleteChallenge(id: String!): Challenge
  }
`;

const SchemaDef = `
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;

const InputDef = `
  input GamerInput {
    id: String!
    username: String!
    domainPic: String!
    isNewGamer: Boolean!
  }

  input ActivityInput {
    activityId: String!
    content: String!
    createdAt: String!
    activityType: String!
    creator: String!
  }

  input ActivityUpdateInput {
    content: String!
  }

  input LikeInput {
    id: String!
    activityId: String!
    response: Int!
    voter: String!
    timeVoted: String!
  }

  input DislikeInput {
    id: String!
    activityId: String!
    response: Int!
    voter: String!
    timeVoted: String!
  }

  input CommentInput {
    id: String!
    activityId: String!
    content: String!
    commentor: String!
    timeCommented: String!
  }

  input ChallengeInput {
    id: String!
    creator: String!
    timeCreated: String!
    participants: [String!]
    game: String!
    objective: String!
    goal: Int
    timeStart: String!
    timeEnd: String!
    placements: [String]
    rewards: [String!]
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [SchemaDef, RootQuery, Activity, Gamer, InputDef, Like, Dislike, ActivityComment, Challenge],
  resolvers,
});

export default schema;
