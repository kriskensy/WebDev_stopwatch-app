import './styles/normalize.scss';
import './styles/global.scss';
import Container from './components/Container/Container';
import FormattedTime from './components/FormattedTime/FormattedTime';
import Button from './components/Button/Button';

const App = () => {
  return (
    <Container>
      <FormattedTime/>
      <Button>Start</Button>
      <Button>Stop</Button>
      <Button>Reset</Button>
    </Container>
  );
};

export default App;
