import { Context } from "graphql-yoga/dist/types";

const Post = {
  author(parent: any, _: any, ctx: Context) {
    return ctx.prisma.post
      .findOne({
        where: { id: parent.id },
      })
      .author();
  },
};

export default { Post };
