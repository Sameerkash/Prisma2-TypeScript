import { Context } from "graphql-yoga/dist/types";

const User = {
  posts(parent: any, _: any, ctx: Context) {
    return ctx.prisma.user
      .findOne({
        where: {
          id: parent.id,
        },
      })
      .posts();
  },

  profile(parent: any, _: any, ctx: Context) {
    return ctx.prisma.user
      .findOne({
        where: { id: parent.id },
      })
      .profile();
  },
};

export default { User };
