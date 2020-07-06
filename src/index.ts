// import { schema } from './schema';
import { GraphQLServer } from "graphql-yoga";
import { PrismaClient } from "@prisma/client";
import Query from "./Query";
import Mutation from "./Mutation";
import User from "./User";
import Post from "./Post";
import Profile from "./Profile";

const prisma = new PrismaClient();

const server = new GraphQLServer({
  typeDefs: "src/schemas/schema.graphql",
  resolvers: [Query, Mutation, User, Post, Profile],
  context: {
    prisma,
  },
});

server.start(() => {
  console.log("🚀 Server has started at http://localhost:4000");
});
