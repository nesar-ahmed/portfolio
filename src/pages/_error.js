import Layout from '../components/Layout';

const ErrorPage = ({ statusCode }) => (
    <Layout title="Error!!!">
    { 
        statusCode ? 
        `${statusCode} | Couldn't Load User Data` : 
        `404 | Page Not Found!` 
    }
    </Layout>
)

export default ErrorPage;