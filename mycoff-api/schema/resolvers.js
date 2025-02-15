module.exports = resolvers = {
  Query: {
    games() {
      return db.games;
    },
    reviews() {
      return db.reviews;
    },
    authors() {
      return db.authors;
    },
    game(_, { id }) {
      return db.games.find((g) => g.id === id);
    },
    review(_, { id }) {
      return db.reviews.find((r) => r.id === id);
    },
    author(_, { id }) {
      return db.authors.find((a) => a.id === id);
    },
  },
  Game: {
    reviews(parent) {
      return db.reviews.filter((r) => r.game_id === parent - id);
    },
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((r) => r.author_id === parent.id);
    },
  },
  Review: {
    author(parent) {
      return db.authors.find((a) => a.id === parent.author_id);
    },
    game(parent) {
      return db.games.find((g) => g.id === parent.game_id);
    },
  },
  Mutation: {
    deleteGame(_, { id }) {
      db.games = db.games.filter((g) => Number(g.id) !== Number(id));
      return db.games;
    },
    addGame(_, { game }) {
      const newGame = {
        id: Math.floor(Math.random() * 10000),
        ...game,
      };
      db.games.unshift(newGame);
      return newGame;
    },
    editGame(_, { id, game }) {
      db.games = db.games.map((g) => {
        if (g.id === id) {
          return {
            ...g,
            ...game,
          };
        }
        return g;
      });

      return db.games.find((g) => g.id === id);
    },
  },
};
