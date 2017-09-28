const activityResolver = {
  Activity: {
    activityId(obj, { id }, context) {
      console.log("Author called with context " + context + " to find " + id);
      return Activity.find({ id });
    },
  },
};

export default activityResolver;
