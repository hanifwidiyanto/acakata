"use client";

import Footer from "./footer";
import Header from "./header";
import Play from "./play";
import AuthCheck from "./AuthCheck";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import validateEmail from "@/utils/validateEmail";
import Loading from "./loading";

export default function Page() {
  const { data: session } = useSession();
  const email = session?.user?.email;
  const data = validateEmail(email);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (
      data &&
      typeof data.msg === "object" &&
      Object.keys(data.msg).length === 0
    ) {
      setIsLoading(true);
      router.push(
        `/daftar?email=${email}&name=${session?.user?.name}&avatar=${session.user.image}`
      );
    }
  }, [data]);
  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <AuthCheck>
        <div className="bg-home h-screen w-full bg-center bg-cover bg-no-repeat flex flex-col justify-between">
          {data ? (
            <Header
              timeSpend={data.timeSpend}
              level={data.level}
              stars={data.totalStar}
              name={data.name}
              email={data.email}
              avatar={data.avatar}
              usia={data.usia}
              uuid={data.uuid}
            />
          ) : (
            <div className="flex justify-center w-full bg-transparent">
              <div className="w-6 h-6 bg-bingu rotate-90 animate-spin"></div>
            </div>
          )}
          {data ? (
            <Play level={data.level} uuid={data.uuid} />
          ) : (
            <div className="flex justify-center w-full bg-transparent">
              <div className="w-6 h-6 bg-bingu rotate-90 animate-spin"></div>
            </div>
          )}
          <Footer />
        </div>
      </AuthCheck>
    );
  }
}
