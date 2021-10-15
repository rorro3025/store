import Layout from "../components/Layout";
import Popular from "../components/PopularProducts";

function Home() {
    return (
        <Layout>
            <div className="container">
              <Popular />
            </div>
        </Layout>
    );
}

export default Home;
