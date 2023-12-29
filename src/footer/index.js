import { Container, Email } from "./styled";

const Footer = () => {
  return (
    <Container>
      Auteur: Pawel Owiesek ©
      <p> [2024] Pawel Owiesek. Alle rechten voorbehouden.</p>
      <strong>
        De inhoud van deze website is beschermd door het auteursrecht en mag
        niet worden gereproduceerd, verspreid, verzonden, weergegeven of
        uitgezonden zonder schriftelijke toestemming van de auteur. Neem voor
        eventuele vragen of toestemming contact op met:
      </strong>
      <Email href="mailto:Owiesek.P@gmail.com" title="Opens a pop-out window">
        Pawel Owiesek
      </Email>
    </Container>
  );
};

export default Footer;
