import './styles/normalize.scss';
import './styles/global.scss';
import Container from './components/Container/Container';
import Layout from './components/Layout/Layout';
import StopperComponent from './components/StopperComponent/StopperComponent';

const App = () => {
  return (
    <Container>
      <Layout>
        <StopperComponent />
      </Layout>
    </Container>
  );
};

export default App;
