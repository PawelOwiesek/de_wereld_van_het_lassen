import Footer from "../../footer";
import { Header, Image, Section, TopImage } from "./styled";

const MainPage = () => {
  return (
    <div>
      <Header>De wereld van het lassen</Header>
      <TopImage />
      <main>
        <Section>
          <p
            style={{
              gridColumn: "1/4",
              padding: "20px",
              fontSize: "20px",
            }}
          >
            Lassen, een ambacht dat diep geworteld is in de wereld van
            metaalbewerking, heeft de tand des tijds doorstaan als een
            essentiële techniek in de fabricage-industrie. Van het verbinden van
            metalen componenten tot het creëren van complexe structuren, lassen
            is een kunst die precisie en vakmanschap vereist. In dit artikel
            zullen we duiken in de intrigerende wereld van het lassen, de
            verschillende technieken verkennen en de cruciale rol begrijpen die
            het speelt in de hedendaagse productieprocessen. Bereid je voor op
            een reis door de vonkende rijken van het lassen!
          </p>
        </Section>
        <Section>
          <h2
            style={{
              gridColumn: "1/4",
              textAlign: "center",
            }}
          >
            De Oorsprong van Lassen:Een Reis door de Tijd{" "}
          </h2>
          <p
            style={{
              gridColumn: "1/4",
              padding: "20px",
              lineHeight: "1.4",
            }}
          >
            Lassen, als ambacht dat de fundamenten van de metaalbewerking heeft
            gevormd, kent zijn oorsprong ver terug in de geschiedenis van de
            menselijke technologische vooruitgang. De vroege stappen van het
            lassen kunnen worden getraceerd naar de bronstijd, waar
            ambachtslieden de kunst ontdekten om metalen voorwerpen aan elkaar
            te hechten. De oude Egyptenaren stonden bekend om hun beheersing van
            de kunst van het solderen, waarbij metalen werden verbonden met
            behulp van tinlegeringen. Het was echter pas in de 19e eeuw dat de
            moderne technieken voor booglassen begonnen te ontstaan, met de
            ontdekking van elektriciteit en de ontwikkeling van nieuwe
            lastechnologieën. De industriële revolutie bracht aanzienlijke
            vooruitgang in het lassen met zich mee, waarbij nieuwe materialen en
            technieken werden geïntroduceerd. De introductie van de elektrische
            boog en later het lassen met beschermgas opende de deur naar meer
            geavanceerde toepassingen. De wereld van het lassen evolueerde
            verder met de opkomst van de 20e eeuw, waarin lasprocessen verder
            werden verfijnd en geautomatiseerd. Vandaag de dag is lassen een
            integraal onderdeel van de moderne industrie, met toepassingen
            variërend van constructie tot de fabricage van complexe
            technologische componenten. De reis door de geschiedenis van het
            spawalnictwa weerspiegelt de voortdurende zoektocht van de mensheid
            naar het verbinden van materialen, waardoor een cruciale pijler is
            ontstaan in de wereld van de metaalbewerking.
          </p>
          <Image src="https://i.postimg.cc/7ZpxZwKR/1.jpg" alt="" />
          <Image src="https://i.postimg.cc/kMz9cnmg/images-2.jpg" alt="" />
          <Image src="https://i.postimg.cc/jdnfgdng/images-1.jpg" alt="" />
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;
