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
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, soluta!"/>
        <ExperienceItem 
          year="2019"
          title="Analista de Suporte Técnico"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, soluta!"/>
        <ExperienceItem 
          year="2019"
          title="Analista de Suporte Técnico"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, soluta!"/>
        <ExperienceItem 
          year="2019"
          title="Analista de Suporte Técnico"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, soluta!"/>
      </section>
    </Container>
  );
};

export default Experience;
