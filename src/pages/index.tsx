import Conhecimentos from '../components/Conhecimentos';
import Experience from '../components/Experience';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Projects from '../components/Projects';
import { HomeContainer } from '../styles/HomeStyles';

export default function Home() {
  return (
    <HomeContainer>
      <Header/>
        <main className="container">
          <HomeHero/>
          <Experience/>
          <Projects/>
          <Conhecimentos/>
        </main>
    </HomeContainer>
    
  );
}
