import Link from 'next/link';
import { ProjectContainer } from './styles'
import { AiOutlineRightCircle } from  'react-icons/ai';

interface ProjetoProps{
  title: string;
  type: string;
  slug: string;
  img: string;
}
export default function ProjectItens({title, type, slug, img}:ProjetoProps) {
  return(
    <ProjectContainer imgUrl={img}>
      <section>
        <div className="overlay"></div>
        <div className="text">
          <h1>{title}</h1>
          <h2>{type}</h2>
        </div>
      </section>

      <button type="button">
        <Link href={`/projetos/${slug}`}>
          <a>
            Ver Mais <AiOutlineRightCircle/>
          </a>
        </Link>
      </button>
    </ProjectContainer>
  );
}