import { prisma } from "@/lib/db";

export type ResourceInput = {
  title: string;
  description: string;
  category: string;
  link: string;
  slug: string;
};

export function getResources() {
  return prisma.resource.findMany({ orderBy: { createdAt: "desc" } });
}

export function getResource(id: number) {
  return prisma.resource.findUnique({ where: { id } });
}

export function getResourceBySlug(slug: string) {
  return prisma.resource.findUnique({ where: { slug } });
}

export function createResource(data: ResourceInput) {
  return prisma.resource.create({ data });
}

export function updateResource(id: number, data: Partial<ResourceInput>) {
  return prisma.resource.update({ where: { id }, data });
}

export function deleteResource(id: number) {
  return prisma.resource.delete({ where: { id } });
}
