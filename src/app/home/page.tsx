import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { LogoutButton } from "../components/logout-button";

export default async function Page() {
  const session = await getServerSession();

  if(!session){
    redirect("/");
  };
  
  return (
    <main>
      <div>
        <h1>{session?.user?.email}</h1>
        <LogoutButton/>
      </div>
    </main>
  );
}
