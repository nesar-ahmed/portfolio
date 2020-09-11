import Layout from '../components/Layout';
import { withRouter } from 'next/router';

 const Post = ({ router }) => (
    <Layout title={router.query.title}>
        <p style={{ width: '80vw' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro doloribus distinctio ipsum soluta officiis dolore culpa quae ullam eius qui officia fuga dignissimos, nesciunt deserunt, non vel! Eius, ut velit. </p>
    </Layout>
)

export default withRouter(Post);