// import { schema } from './schema';
import { GraphQLServer } from "graphql-yoga";
import { PrismaClient } from "@prisma/client";
import Query  from "./Query";

const prisma = new PrismaClient();

const server = new GraphQLServer({
  typeDefs: "src/schemas/schema.graphql",
  resolvers: [Query],
  context: {
    prisma,
  },
});

server.start(() => {
  console.log("🚀 Server has started at http://localhost:4000");
});
