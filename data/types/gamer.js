const Gamer = `
  type Gamer {
    id: String!
    username: String
    domainPic: String
    isNewGamer: Boolean
    activities: [Activity]
  }
`;

export default Gamer;
