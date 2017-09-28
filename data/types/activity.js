const Activity = `
  type Activity {
    activityId: String!
    content: String
    createdAt: String
    activityType: String
    creator: String
    likes: [Like]
    dislikes: [Dislike]
    comments: [ActivityComment]
  }
`;

export default Activity;
