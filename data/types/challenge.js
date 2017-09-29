const Challenge =`
  type Challenge {
    id: String!
    creator: String
    title: String
    game: Game
    createdAt: String
    timeStart: String
    timeEnd: String
    objective: String
    goal: Int
    participants: [Gamer]
    placements: [String]
    rewards: [Reward]
  }
`;

export default Challenge;
