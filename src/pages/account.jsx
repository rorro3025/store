import Layout from "../components/Layout";
import UserInfo from "../components/userInfo";
import Select from "../components/selectExists";
import { useUser } from "../context/shopContext";

function Account() {
  const { session } = useUser();
  return <Layout>{session ? <UserInfo /> : <Select />}</Layout>;
}

export default Account;
