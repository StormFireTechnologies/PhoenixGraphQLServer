export default {
  Gamer: {
    async activities(parent, args, { datastore }) {
      const response = await datastore.getAll('Activity', 'creator', parent.id);
      console.log(response[0]);
      return response[0];
    },
  },
  Activity: {
    async likes(parent, args, { datastore }) {
      const response = await datastore.getAll('Like', 'activityId', parent.activityId);
      return response[0];
    },
    async dislikes(parent, args, { datastore }) {
      const response = await datastore.getAll('Dislike', 'activityId', parent.activityId);
      return response[0];
    },
    async comments(parent, args, { datastore }) {
      const response = await datastore.getAll('Comment', 'activityId', parent.activityId);
      return response[0];
    },
  },
  ActivityComment: {
    async commentor(parent, args, { datastore }) {
      const response = await datastore.getItem('Gamer', parent.commentor);
      console.log(response[0]);
      return response[0];
    },
  },

  RootQuery: {
    async activity(parent, { activityId }, { datastore }) {
      const response = await datastore.getItem('Activity', activityId);
      return response[0];
    },
    async gamer(parent, { id }, { datastore }) {
      const response = await datastore.getItem('Gamer', id);
      return response[0].gamer;
    }
  },
  RootMutation: {
    async createGamer(parent, args, { datastore }) {
      const response = await datastore.putItem('Gamer', args.gamer.id, args);
      return response[0].gamer;
    },
    async submitActivity(parent, args, { datastore }) {
      const response = await datastore.putItem('Activity', args.activity.id, args.activity);
      console.log(response[0]);
      return response[0].activity;
    },
    async deleteActivity(parent, args, { datastore }) {
      const response = await datastore.deleteItem('Activity', args.activityId);
      if (args == nul) {
        console.log('delete successful')
      } else {
        console.log('Something went wrong');
        console.log(args);
        console.log(args.id);
      }
    },
    async likeActivity(parent, args, { datastore }) {
      const response = await datastore.putItem('Like', args.like.id, args);
      return response[0].like;
    },
    async dislikeActivity(parent, args, { datastore }) {
      const response = await datastore.putItem('Dislike', args.dislike.id, args);
      return response[0].dislike;
    },
    async commentActivity(parent, args, { datastore }) {
      const response = await datastore.putItem('Comment', args.comment.id, args.comment);
      console.log(response[0].comment);
      return response[0].comment;
    },
  },
};
