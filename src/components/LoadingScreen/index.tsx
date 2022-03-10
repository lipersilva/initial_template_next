
import { Container, SpinnerContainer } from './styles';

function LoadingScreen() {
  return (
    <Container>
      <SpinnerContainer>
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
      </SpinnerContainer>
    </Container>
  );
};

export default LoadingScreen;
