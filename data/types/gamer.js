const Gamer = `
  type Gamer {
    id: String!
    login: String
    username: String
    domainPic: String
    isNewGamer: Boolean
    activities: [Activity]
  }
`;

export default Gamer;
