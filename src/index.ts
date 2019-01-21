import "reflect-metadata";
import { GraphQLModule } from "@graphql-modules/core";
import { ApolloServer, gql } from "apollo-server";

const PORT = process.env.PORT || 3000;

const { schema, context } = new GraphQLModule({
  typeDefs: gql`
    type Query {
      message: String
    }
  `
});

const server = new ApolloServer({
  schema,
  context
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at URL ${url}`);
});
