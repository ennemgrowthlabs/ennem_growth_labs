import { PrismaClient } from "@prisma/client";
import { JOBS, MEMBERS, POSTS, PROJECTS, TEAMS } from "../src/lib/data";

const prisma = new PrismaClient();

async function main() {
  await prisma.application.deleteMany();
  await prisma.lead.deleteMany();
  await prisma.projectMember.deleteMany();
  await prisma.project.deleteMany();
  await prisma.member.deleteMany();
  await prisma.job.deleteMany();
  await prisma.post.deleteMany();
  await prisma.team.deleteMany();

  const teams = [];
  for (const t of TEAMS) {
    teams.push(
      await prisma.team.create({
        data: {
          name: t.name,
          slug: t.slug,
          tagline: t.tagline,
          description: t.description,
        },
      }),
    );
  }

  const teamBySlug = Object.fromEntries(teams.map((t) => [t.slug, t]));

  for (const m of MEMBERS) {
    await prisma.member.create({
      data: {
        name: m.name,
        role: m.role,
        bio: m.bio,
        skills: m.skills,
        years: m.years,
        isLead: m.isLead,
        replaceMe: true,
        teamId: teamBySlug[m.teamSlug].id,
        github: m.github ?? null,
        linkedin: m.linkedin ?? null,
      },
    });
  }

  for (const p of PROJECTS) {
    await prisma.project.create({
      data: {
        title: p.title,
        slug: p.slug,
        summary: p.summary,
        content: p.content,
        problem: p.problem,
        solution: p.solution,
        liveUrl: p.liveUrl ?? null,
        appUrl: p.appUrl ?? null,
        status: p.status,
        kind: p.kind,
        industry: p.industry,
        year: p.year,
        stack: p.stack,
        results: p.results,
        featured: p.featured,
        sortOrder: p.sortOrder,
        teamId: (teamBySlug[p.teamSlug] ?? teamBySlug["full-stack"]).id,
      },
    });
  }

  for (const post of POSTS) {
    await prisma.post.create({
      data: {
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        tags: post.tags,
        readingMins: post.readingMins,
        published: true,
      },
    });
  }

  for (const job of JOBS) {
    await prisma.job.create({
      data: job,
    });
  }

  console.log(`Seeded ${TEAMS.length} teams, ${PROJECTS.length} projects, ${POSTS.length} posts.`);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
