import { GetStaticProps } from 'next';
import Conhecimentos from '../components/Conhecimentos';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import FormContato from '../components/FormContato';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Projetos from '../components/Projetos';
import { getPrismicClient } from '../services/prismic';
import { HomeContainer } from '../styles/HomeStyles';
import Prismic from '@prismicio/client'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
interface IProjeto{
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface HomeProps{
  projetos: IProjeto[];
}

export default function Home({ projetos }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1500}); // 1.5s
  })

  return (
    <HomeContainer>
      <Head>
        <title>Home | Meu portfólio</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
      </Head>
      <Header/>
      <main className="container">
        <HomeHero/>
        <Experience/>
        <Projetos projetos={projetos}/>
        <Conhecimentos/>
        <FormContato />
      </main>

      <Footer/>
    </HomeContainer>
    
    
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type','projeto')],
    {orderings: '[document.first_publication_date desc]'}
  );

  //console.log(projectResponse.results);
  const projetos = projectResponse.results.map(projeto => ({
    slug: projeto.uid,
    title: projeto.data.title,
    type: projeto.data.type,
    description: projeto.data.description,
    link: projeto.data.link.url,
    thumbnail:projeto.data.thumbnail.url
  }))

  return { 
    props: {
      projetos
    },
    revalidate:  60 * 60 * 24, // 24 hours
  }
}