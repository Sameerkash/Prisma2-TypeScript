import { Context } from "graphql-yoga/dist/types";
import { PostArgs } from "@prisma/client";
const Query = {
  feed(_: any, args: PostArgs, ctx: Context) {
    return ctx.prisma.post.findMany({
      where: { published: true },
    });
  },
};

export default { Query };
