import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import ErrorPage from './_error';

class About extends React.Component {

    static async getInitialProps() {
        const res = await fetch('https://api.github.com/users/nesar-ahmed');
        const statusCode = res.status > 200 ? res.status : false;
        const data = await res.json();

        return { user: data, statusCode }
    }

    render() {
        const { user, statusCode } = this.props

        if(statusCode) {
            return <ErrorPage statusCode={statusCode} />
        }
        // const { user } = this.state
        return (
            <Layout title="About">
                <h3> { user.name } </h3>
                <p> A Javascript Programmer </p>
                <img src={user.avatar_url} height="120px" alt="profile picture"/>
            </Layout>
        )
    }
}

export default About;