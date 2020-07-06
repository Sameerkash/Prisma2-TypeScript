import { Context } from "graphql-yoga/dist/types";

const Profile = {
  user(parent: any, _: any, ctx: Context) {
    return ctx.prisma.profile
      .findOne({
        where: {
          id: parent.id,
        },
      })
      .user();
  },
};

export default { Profile };
