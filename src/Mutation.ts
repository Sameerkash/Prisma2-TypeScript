import { Context } from "graphql-yoga/dist/types";

const Mutation = {
  createDraft(_: any, args: any, ctx: Context) {
    return ctx.prisma.post.create({
      data: {
        title: args.title,
        content: args.content,
        published: false,
        author: {
          connect: { email: args.authorEmail },
        },
      },
    });
  },
  signupUser(_: any, args: any, ctx: Context) {
    return ctx.prisma.user.create(args);
  },

  publish(_: any, args: any, ctx: Context) {
    return ctx.prisma.post.update({
      where: { id: Number(args.id) },
      data: {
        published: true,
      },
    });
  },

  updatProfile(_: any, args: any, ctx: Context) {
    return ctx.prisma.profile.update({
      data: {
        bio: args.data.bio,
      },
      where: {
        userId: args.data.id,
        
      },
    });
  },
};

export default { Mutation };
