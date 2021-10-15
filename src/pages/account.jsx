import SingUp from "../components/SingUp";
import Layout from "../components/Layout";
import UserInfo from "../components/UserInfo";
import { useState } from "react";

function account() {
  const [session, setSession] = useState(false);
  return (
    <Layout>
      {session ? (
        <UserInfo setUserAccount={setSession} />
      ) : (
        <SingUp setUserAccount={setSession} />
      )}
    </Layout>
  );
}

export default account;
