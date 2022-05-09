import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

function Experience() {
  return (
    <Container>
      <SectionTitle title="02 Anos" description="de experiência"/>
      <section>
        <ExperienceItem 
          year="2019"
          title="Analista de Suporte Técnico"
          description="Principais atividades: Banco de dados Oracle (PL/SQL), correção de erros e auxílio no desenvolvimento e programação do sistema, suporte técnico aos usuários do sistema de gestão de operadoras de plano de saúde, realização de update em clientes ( versão do sistema).
          Stacks utilizadas: Delphi, php, html/css , Pl/sql."/>
      </section>
    </Container>
  );
};

export default Experience;
