import Layout from "../components/Layout";
import Popular from "../components/PopularProducts";
import Head from "next/head"

function Home() {
    return (
        <Layout>
            <Head>
                <title>Home</title>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                        crossOrigin="anonymous"></script>
            </Head>
            <div className="container">
                <Popular/>
            </div>
        </Layout>
    );
}

export default Home;
