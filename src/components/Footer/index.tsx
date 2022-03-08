
import { Container } from './styles';
import { AiOutlineGithub, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai'


function Footer() {
  function handleRedirect(url: string) {
    window.open(url)
  }

  function handleScroolTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScroolTop}>
          Voltar ao topo
        </button>  

        <section>
          <AiOutlineGithub 
            onClick={() =>handleRedirect("https://github.com/lipersilva")}
          />

          <AiFillLinkedin 
            onClick={() =>handleRedirect("https://www.linkedin.com/in/filipe-rodrigues-da-silva-b582b062/")}
          />

          <AiOutlineInstagram 
            onClick={() =>handleRedirect("https://www.instagram.com/lipe_rsilva/")}
          />
        </section>
      </div>
    </Container>
  );
};

export default Footer;
