export const typeDefs = `#graphql
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
    author: Author!
    game: Game!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
  }
  type Query {
    games: [Game]
    game(id: ID!): Game
    reviews: [Review]
    review(id: ID!): Review
    authors: [Author]
    author(id: ID!): Author
  }
  type Mutation {
    addgame(game:AddGame!):Game
    deletegame(id:ID!): [Game]
    updategame(id: ID!, edits: EditGame): Game
  }
  input AddGame {
    title:String!, 
    platform:[String!]!,
  }
  input EditGame {
    title: String,
    platform: [String!]
  }
`;
