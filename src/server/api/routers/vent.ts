import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const ventRouter = createTRPCRouter({
  createOne: publicProcedure
    .input(
      z.object({
        title: z.string(),
        paragraph: z.string(),
        password: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.vent.create({
        data: {
          title: input.title,
          paragraph: input.paragraph,
          password: input.paragraph,
        },
      });
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.vent.findMany();
  }),
  deleteOne: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.vent.delete({
      where: {
        id: input,
      },
    });
  }),
});
