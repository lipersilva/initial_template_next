
import { Container, TextContainer, InfosContainer, CodeItem} from './styles';
import picture from '../../assets/pessoa.webp'



function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="Minha Foto" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Filipe</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Filipe,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Rodrigues da Silva</span>
            </div>
            {'\u007D'}
          </CodeItem>

          <CodeItem>
            <span className="purple">Cargo</span> {'\u007B'}
            <div>
              Desenvolvedor <span className="blue">front-end</span>
            </div>
            {/* <div>
              Empresa: <span className="blue">Rodrigues da Silva</span>
            </div> */}
            {'\u007D'}
          </CodeItem>

          
        </InfosContainer>



      </div>
    </Container>
  );
};

export default HomeHero;
