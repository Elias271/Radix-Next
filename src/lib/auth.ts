import { auth } from "@clerk/nextjs"

import { db } from "./db"

export const getUserByClerkId = async () => {
  const { userId } = auth()
  const user = await db.user.findUniqueOrThrow({
    where: {
      clerkId: userId as string,
    },
  })

  return user
}
