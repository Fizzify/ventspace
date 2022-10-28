// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import NextCors from "nextjs-cors";
const prisma = new PrismaClient();

interface Vent {
  title: string;
  paragraph: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "https://ventspace.vercel.app/*/*",
    optionsSuccessStatus: 200,
  });

  const method = req.method;

  switch (method) {
    case "GET":
      const vents: Vent[] = await prisma.vent.findMany();
      res.status(200).json(vents);
      break;
    case "POST":
      const { title, paragraph } = req.body;
      const postedVent: Vent = await prisma.vent.create({
        data: {
          title,
          paragraph,
        },
      });

      res.status(200).json(postedVent);
      break;

    default:
      break;
  }
}
