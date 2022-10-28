import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import NextCors from "nextjs-cors";

const prisma = new PrismaClient();

interface IVent {
  id: string;
  title: string;
  paragraph: string;
  password: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  const method = req.method;

  switch (method) {
    case "GET":
      const vents: IVent[] = await prisma.vent.findMany();
      res.status(200).json(vents);
      break;
    case "POST":
      const { title, paragraph, password } = req.body;
      const postedVent: IVent = await prisma.vent.create({
        data: {
          title,
          paragraph,
          password,
        },
      });

      res.status(200).json(postedVent);
      break;
    case "DELETE":
      const id: string | undefined = req.query.id?.toString();
      const deletedVent: IVent = await prisma.vent.delete({
        where: {
          id,
        },
      });

      res.status(200).json(deletedVent);
      break;

    default:
      break;
  }
}
