import { GetStaticPaths, GetStaticProps } from "next";
import BannerProjeto from "../../../components/BannerProjeto";
import Header from "../../../components/Header";
import { getPrismicClient } from "../../../services/prismic";
import { ProjetoContainer } from "../../../styles/ProjetoStyles";
import Prismic from '@prismicio/client'
import LoadingScreen from "../../../components/LoadingScreen";
import { useRouter } from "next/router";
import { RichText } from "prismic-dom";


interface IProjeto{
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjetoProps{
  projeto: IProjeto
}

export default function Projeto({ projeto }: ProjetoProps) {

  const router = useRouter();

  if(router.isFallback) {
    return <LoadingScreen/>
  }
  
  return(
    <ProjetoContainer>
      <Header/>
      <BannerProjeto
        title={projeto.title}
        type={projeto.type}
        imgUrl={projeto.thumbnail}
      />

      <main>
        <p>{projeto.description}</p>
        <button type="button">
          <a href={projeto.link} target="_blank">Ver Projeto Online</a>  
        </button>
      </main>
    </ProjetoContainer>
  );
}

export const getStaticPaths : GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const projetos = await prismic.query([
    Prismic.predicates.at('document.type', 'projeto')
  ]);

  const paths = projetos.results.map(projeto => ({
    params: {
      slug: projeto.uid,
    }
  }));
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;

  const response = await prismic.getByUID('projeto', String(slug), {});

  console.log(response); //verificar depois a thumbnail
  const projeto = {
    slug: response.uid,
    title: response.data.title,
    type: response.data.type,
    description: response.data.description,
    link: response.data.link.url,
    thumbnail:response.data.thumbnail.url,
  };

  return { 
    props: {
      projeto      
    },
    revalidate:  60 * 60 * 24, // 24 hours
  }
}
//description_alternative