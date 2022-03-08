
import { AiFillHtml5 } from 'react-icons/ai';
import { Container } from './styles';
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoReact } from 'react-icons/io5';
import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';


function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos"/>
      <section>
        <ConhecimentoItem title="HTML" icon={<AiFillHtml5/>} />
        <ConhecimentoItem title="CSS" icon={<FaCss3Alt/>} />
        <ConhecimentoItem title="JAVASCRIPT" icon={<IoLogoJavascript/>} />
        <ConhecimentoItem title="REACT" icon={<IoLogoReact/>} />
      </section>

    </Container>
  );
};

export default Conhecimentos;
