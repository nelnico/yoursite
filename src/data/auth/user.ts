import db from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch {
    return null;
  }
};

export const getUserByName = async (name: string) => {
  try {
    const user = await db.user.findFirst({
      where: {
        name,
      },
    });
    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
      include: {
        membership: true, // Include the membership relation
      },
    });
    return user;
  } catch {
    return null;
  }
};
