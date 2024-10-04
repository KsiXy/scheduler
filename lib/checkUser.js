import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  try {
    const loggedInUser = await db?.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (loggedInUser) {
      return loggedInUser;
    }

    function updateName() {
      let name;
      if (user.lastName === null) {
        return (name = `${user.firstName}`);
      }
      return (name = `${user.firstName} ${user.lastName}`);
    }

    // this is the step to update the user in Clerk
    await clerkClient().users.updateUser(user.id, {
      username: updateName().split(" ").join("-") + user.id.slice(-4),
    });

    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
        username: updateName().split(" ").join("-") + user.id.slice(-4),
      },
    });

    return newUser;
  } catch (error) {
    console.error(error);
  }
};
