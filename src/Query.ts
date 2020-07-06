import { Context } from "graphql-yoga/dist/types";
import { PostArgs } from "@prisma/client";
const Query = {
  feed(_: any, __: PostArgs, ctx: Context) {
    return ctx.prisma.post.findMany({
      where: { published: true },
    });
  },

  filterPosts(_: any, args: any, ctx: Context) {
    return ctx.prisma.post.findMany({
      where: {
        OR: [
          {
            title: { contains: args.searchString },
          },
          {
            content: { contains: args.searchString },
          },
        ],
      },
    });
  },
  post(_: any, args: any, ctx: Context) {
    return ctx.prisma.post.findOne({
      where: { id: Number(args.where.id) },
    });
  },

  users(_: any, args: any, ctx: Context) {
    return ctx.prisma.user.findMany({
      where: {
        email: { contains: args.searchString },
      },
    });
  },
};





export default { Query };
