import { nexusPrismaPlugin } from "nexus-prisma";
import { intArg, makeSchema } from "@nexus/schema";

export const schema = makeSchema({
  shouldGenerateArtifacts: true,
  types: [],

  plugins: [nexusPrismaPlugin()],
  // Tells nexus where to look for types when generating the graphql schema
  typegenAutoConfig: {
    sources: [
      {
        source: "@prisma/client",
        alias: "prisma",
      },
    ],
  },
  // Tells nexus where to output the generated graphql schema and types
  outputs: {
    schema: __dirname + "../generated/schema.graphql",
    typegen: __dirname + "../generated/nexus.ts",
  },
});
