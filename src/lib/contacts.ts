import { prisma } from "@/lib/db";
import type { ContactInput } from "@/lib/validation";
import type { ContactMessage } from "@/types";

/*
  Data-access layer for contact submissions. All database access goes through
  here so route handlers and pages never touch Prisma directly, and the mapping
  to the serializable ContactMessage DTO lives in one place.
*/

export async function createContactMessage(data: ContactInput) {
  return prisma.contactMessage.create({
    data: {
      name: data.name,
      email: data.email,
      phone: data.phone,
      interest: data.interest ?? "",
      message: data.message,
    },
  });
}

// Newest submissions first.
export async function getContactMessages(): Promise<ContactMessage[]> {
  const rows = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  });

  return rows.map((row) => ({
    id: row.id,
    name: row.name,
    email: row.email,
    phone: row.phone,
    interest: row.interest,
    message: row.message,
    createdAt: row.createdAt.toISOString(),
  }));
}

export async function deleteContactMessage(id: string) {
  return prisma.contactMessage.delete({ where: { id } });
}
