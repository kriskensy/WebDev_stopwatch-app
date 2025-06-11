import './styles/normalize.scss';
import './styles/global.scss';
import Container from './components/Container/Container';
import Layout from './components/Layout/Layout';
import MainSection from './components/MainSection/MainSection';

const App = () => {
  return (
    <Container>
      <Layout>
        <MainSection />
      </Layout>
    </Container>
  );
};

export default App;
