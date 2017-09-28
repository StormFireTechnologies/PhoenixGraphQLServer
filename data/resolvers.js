export default {
  Gamer: {
    async activities(parent, args, { datastore }) {
      const response = await datastore.getAll('Activity', 'creator', parent.id);
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
      console.log('Activity Comment: ' + response[0]);
      return response[0];
    },
  },
  Challenge: {
    async game(parent, args, { datastore }) {
      const response = await datastore.getItem('Game', parent.game);
      return response[0];
    },
    async participants(parent, args, { datastore }) {
      const response = await datastore.getAll('Gamer', 'challenges', parent.id);
      return response[0];
    },
    async reward(parent, args, { datastore }) {
      const response = await datastore.getAll('Reward', 'challenge', parent.id);
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
    async updateActivity(parent, { activityId, activity }, { datastore }) {
      const response = await datastore.updateItem('Activity', activityId, activity);
      return response[0].activity;
    }
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
      return response[0].comment;
    },
    async createChallenge(parent, args, { datastore }) {
      const response = await datastore.putItem('Challenge', args.challenge.id, args.challenge);
      console.log(response[0]);
      console.log(response[0].challenge);
      return response[0].challenge;
    },
    async deleteChallenge(parent, args, { datastore }) {
      const response = await datastore.deleteItem('Challenge', args.id);
    },
    async updateChallenge(parent, { id, challenge }, { datastore }) {
      const response = await datastore.updateItem('Challenge', id, challenge);
      return response[0].challenge;
    },
  },
};
