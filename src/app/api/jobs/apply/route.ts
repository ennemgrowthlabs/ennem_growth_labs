import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  jobSlug: z.string(),
  name: z.string().min(2),
  email: z.string().email(),
  portfolio: z.string().optional(),
  message: z.string().min(8),
});

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid application" }, { status: 400 });
  }
  try {
    await prisma.application.create({ data: parsed.data });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Database offline. Email info@ennemmarketings.com instead." },
      { status: 503 },
    );
  }
}
