// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";

// export async function GET() {
//   const articles = await prisma.article.findMany({
//     orderBy: { createdAt: "desc" },
//   });

//   return NextResponse.json(articles);
// }

// export async function POST(req: Request) {
//   const body = await req.json();

//   const article = await prisma.article.create({
//     data: {
//       title: body.title,
//       content: body.content,
//       userId: body.userId,
//     },
//   });

//   return NextResponse.json(article);
// }
