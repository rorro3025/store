import Layout from "../components/Layout";
import UserInfo from "../components/UserInfo";
import Select from "../components/selectExists"
import { useUser } from "../context/shopContext"

function Account() {
  const { session, setSession } = useUser();
  return (
    <Layout>
      {session ? (
        <UserInfo setUserAccount={setSession} />
      ) : (
        <Select />
      )}
    </Layout>
  );
}

export default Account;
