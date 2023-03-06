import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

async function page() {
  const data = await getServerSession(authOptions)
  console.log(data)
  return (
    <div>{data}</div>
  )
}

export default page