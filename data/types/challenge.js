const Challenge =`
  type Challenge {
    id: String!
    creator: String
    game: Game
    timeCreated: String
    timeStart: String
    timeEnd: String
    objective: String
    goal: Int
    participants: [Gamer]
    placements: [String]
    rewards: [Reward]
  }
`;
