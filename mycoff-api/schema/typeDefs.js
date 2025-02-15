module.exports = typeDefs = `#graphql
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    location: Location!
    favorites: [Coffee!]
    picture: String
    createdAt: String!
  }

  type Coffee {
    id: ID!
    title: String!
    subtitle: String!
    price: Float!
    category: CoffeeType!
    description: String!
    rating: Rating
    image: String!
  }

  type CoffeeType {
    id: ID!
    name: String!
    createdAt: String!
  }

  type Location {
    id: ID!
    name: String!
    city: String!
    subCity: String!
    latitude: Float
    longitude: Float
    createdAt: String!
  }

  type Order {
    id: ID!
    user: User!
    coffee: Coffee!
    quantity: Int!
    size: String!
    total: Float!
    status: String!
    createdAt: String!
  }

  type Rating {
    id: ID!
    user: User!
    coffee: Coffee!
    rating: Float!
    createdAt: String!
  }

  type Query {
    # Get a list of all users
    users: [User]!

    # Get a user by ID
    user(id: ID!): User

    # Get a list of all coffees
    coffees: [Coffee]!

    # Get a coffee by ID
    coffee(id: ID!): Coffee

    # Get a list of all locations
    locations: [Location]!

    # Get a location by ID
    location(id: ID!): Location
  }

  type Mutation {
    # Create a new user
    createUser(user: $CreateUserInput!): User!

    # Update an existing user
    # updateUser(id: ID!, name: String, email: String): User!

    # Delete a user
    # deleteUser(id: ID!): User!

    # Create a new coffee type
    createCoffeeType (coffee: $CreateCoffeeTypeInput): CoffeeType!

    # Update an existing coffee type
    # updateCoffeeType(id: ID!, name: String, description: String): CoffeeType!

    # Delete a coffee type
    # deleteCoffeeType(id: ID!): CoffeeType!

    # Create a new location
    createLocation(location: $CreateLocationInput): Location!

    # Update an existing location
    # updateLocation(id: ID!, name: String, city: String, state: String, country: String): Location!

    # Delete a location
    # deleteLocation(id: ID!): Location!
  }

  input CreateUserInput {
    username: String!
    email: String!
    password: String!
    location: ID!
    picture: String
  }

  # input UpdateUserInput {
  #   username: String
  #   email: String
  #   password: String
  #   picture: String
  # }

  input CreateCoffeeTypeInput {
    name: String!
  }

  input UpdateCoffeeTypeInput {
    name: String
  }

  input CreateLocationInput {
    name: String!
    city: String!
    subCity: String!
  }

  # input UpdateLocationInput {
  #   id: ID!
  #   name: String
  #   city: String
  #   state: String
  #   country: String
  # }
`;
