

import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjectItens from './ProjectItens';
import { Container } from './styles';


function Projetos() {
  return (
    <Container>
      <SectionTitle title="Últimos Projetos"/>
        <section>
          <ProjectItens
            img=""
            title="Projeto 01"
            type="Website"
            slug="teste"
          />
          <ProjectItens
            img=""
            title="Projeto 02"
            type="Website"
            slug="teste"
          />
          <ProjectItens
            img=""
            title="Projeto 03"
            type="Website"
            slug="teste"
          />
        </section>

        <button type="button">
          <Link href= "/projetos">
            <a>Ver todos os projetos</a>  
          </Link>  
        </button>
    </Container>
  );
};

export default Projetos;
