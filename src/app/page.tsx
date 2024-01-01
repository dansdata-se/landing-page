import AudienceCard from "@/app/audience_card";
import FaqEntry from "@/app/faq_entry";
import Footer from "@/app/footer";
import Header from "@/app/header";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="container grow py-8 [&>section:last-child]:mb-16 [&>section:not(:first-child)]:mt-16">
        <section className="prose">
          <h2 className="font-brand">Välkommen!</h2>
          <p>
            Vi jobbar för att göra det enklare för dansare att hitta{" "}
            {"social\u00ADdanser"}, kurser och andra {"dans\u00ADevenemang."}
          </p>
          <p>
            Genom att underlätta för branschen och göra data fritt tillgänglig
            för utvecklare vill vi uppmuntra fler att ta del av detta underbara
            intresse: <strong>DANS</strong>!
          </p>
          <p>
            <i>Vi vet (snart!) när Sverige dansar!</i>
          </p>
        </section>
        <section>
          <span className="prose">
            <h2 className="font-brand">Hur vi vill hjälpa...</h2>
          </span>
          <div className="mt-[1em] grid gap-2 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-12">
            <AudienceCard
              imgSrc="/images/organizer.webp"
              imgAlt="Programblad för dans"
              portalBtn
              embedsBtn
            >
              <h3>Arrangörer</h3>
              <p>
                När du berättar om dina evenemang för oss delar vi med oss till
                alla hemsidor och appar som använder sig av Dansdata som{" "}
                {"informations\u00ADkälla."} Dansdata gör det helt enkelt
                lättare för dig att marknadsföra dina {"dans\u00ADevenemang!"}
              </p>
              <p>
                Du kan också använda våra{" "}
                <dfn title="Plugin som visar data från dansdata direkt på din hemsida">
                  embeds
                </dfn>{" "}
                för att automatiskt visa alla evenemang du planerar, direkt på
                din hemsida!.
              </p>
            </AudienceCard>
            <AudienceCard
              imgSrc="/images/pexels-kindel-media-7688159.jpg"
              imgAlt="Föreningar"
              portalBtn
              embedsBtn
            >
              <h3>Föreningar</h3>
              <p>
                Förutom {"social\u00ADdanser"} går det också att hitta kurser -
                eller evenemang som både innehåller sociala och kursmoment -
                genom Dansdata.
              </p>
              <p>
                Genom att registrera din förening och era kurser hos oss blir ni
                synliga för alla hemsidor och appar som använder Dansdata som{" "}
                {"informations\u00ADkälla."}
              </p>
              <p>
                Ni kan också använda våra{" "}
                <dfn title="Plugin som visar data från dansdata direkt på din hemsida">
                  embeds
                </dfn>{" "}
                för att automatiskt visa information om kurs{"\u00AD"}
                tillfällen, arrangemang m.m. direkt på er hemsida!
              </p>
            </AudienceCard>
            <AudienceCard
              imgSrc="/images/pexels-markus-spiske-1089440.jpg"
              imgAlt="Datorkod"
              apiBtn
              embedsBtn
            >
              <h3>Utvecklare</h3>
              <p>
                Vår {"dans\u00ADinformation"} distribueras genom ett fritt
                tillgängligt{" "}
                <dfn title="Application Programming Interface">
                  <abbr>API</abbr>
                </dfn>
                . Med vårt öppna API kan du enkelt bygga hemsidor, appar och
                annan programvara som använder {"dans\u00ADinformation."}
              </p>
              <p>
                Du kan också använda våra{" "}
                <dfn title="Plugin som visar data från dansdata direkt på din hemsida">
                  embeds
                </dfn>{" "}
                för att automatiskt visa {"dans\u00ADinformation"} direkt på
                webben utan att behöva skriva en egen manuell integration.
              </p>
            </AudienceCard>
            <AudienceCard
              imgSrc="/images/pexels-josh-sorenson-995301.jpg"
              imgAlt="Trumset"
              portalBtn
              embedsBtn
            >
              <h3>Dansband</h3>
              <p>
                Förutom att Dansdata gör det lättare att hitta er och era
                spelningar är Dansdata också en {"informations\u00ADplattform"}.
              </p>
              <p>
                Genom att registrera både band och medlemmar hos oss har ni
                möjlighet att styra den informationen, liksom att länka till och
                marknadsföra sociala medier, {"spotify\u00ADsidor"},{" "}
                {"webb\u00ADshoppar"} m.m..
              </p>
              <p>
                Ni kan också använda våra{" "}
                <dfn title="Plugin som visar data från dansdata direkt på din hemsida">
                  embeds
                </dfn>{" "}
                för att enkelt visa {"turné\u00ADplan"} och annat, direkt på er
                hemsida!
              </p>
            </AudienceCard>
            <AudienceCard
              imgSrc="/images/pexels-andre-furtado-1264210.jpg"
              imgAlt="Fotograf"
              portalBtn
              embedsBtn
            >
              <h3>Fotografer</h3>
              <p>
                När du berättar vilka evenemang du fotograferat vid - eller
                kanske kommer fotografera vid - så delar vi med oss till alla
                hemsidor och appar som använder sig av Dansdata som{" "}
                {"informations\u00ADkälla."} Dansdata gör det helt enkelt
                lättare att hitta dig och dina dansbilder!
              </p>
              <p>
                Du kan också använda våra{" "}
                <dfn title="Plugin som visar data från dansdata direkt på din hemsida">
                  embeds
                </dfn>{" "}
                för att automatiskt visa alla evenemang du planerar fotografera
                vid, direkt på din hemsida!
              </p>
            </AudienceCard>
            <AudienceCard
              imgSrc="/images/dancers.webp"
              imgAlt="Två personer som dansar"
              socialdansBtn
            >
              <h3>Dansare</h3>
              <p>
                Dansdata är en {"informations\u00ADkälla"} för{" "}
                {"social\u00ADdans"}; skapad av dansare, för dansare!
              </p>
              <p>
                Genom att {"under\u00ADlätta"} för den svenska{" "}
                {"dans\u00ADbranschen"} med enkla, lättillgängliga och
                kraftfulla verktyg möjliggör vi appar, hemsidor och mycket mer
                som gör det både lättare och roligare att gå på dans!
              </p>
            </AudienceCard>
          </div>
        </section>
        <section className="prose mx-auto">
          <h2 className="text-center">Tidslinje</h2>
          <p className="text-sm italic">
            Dansdata utvecklas av ideella krafter, på frivillig basis under våra
            utvecklares fritid. Tidslinjen kan därför växa sig både kortare och
            längre beroende på vad livet i övrigt har att bjuda på för våra
            utvecklare.
          </p>
          <article>
            <h3 className="text-center text-primary line-through">2020</h3>
            <p>
              Första prototyp och inledande koncept för en app för att visa{" "}
              {"social\u00ADdanser"} i närheten.
            </p>
          </article>
          <article>
            <h3 className="text-center text-primary line-through">2021</h3>
            <p>
              Fortsatt {"koncept\u00ADualisering"} av en app för{" "}
              {"social\u00ADdanser"} och uppgradering av designspråk till
              Material Design 3.
            </p>
            <p>
              Kontakter med {"bransch\u00ADfolk"} och sökande efter bra{" "}
              {"data\u00ADkällor"} för dans.
            </p>
          </article>
          <article>
            <h3 className="text-center text-primary line-through">2022</h3>
            <p>
              Efter fruktlöst sökande insåg{" "}
              <a
                href="https://fzy.se"
                target="_blank"
                className="link-hover link whitespace-pre"
              >
                Felix
              </a>{" "}
              att det saknas bra {"data\u00ADkällor"} för {"social\u00ADdans"} i
              Sverige. Han bestämde sig därför för att utveckla en egen sådan
              källa - <i>Dansdata</i>.
            </p>
            <p>
              {"Koncept\u00ADualisering"} och planering av Dansdata. Utforskande
              av nödvändiga tjänster och tekniker så som{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover link"
              >
                Vercel
              </a>
              ,{" "}
              <a
                href="https://supabase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover link"
              >
                Supabase
              </a>{" "}
              och{" "}
              <a
                href="https://flutter.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover link"
              >
                Flutter
              </a>
              .
            </p>
            <p>
              Start av{" "}
              <a
                href="https://www.facebook.com/DansdataSE"
                target="_blank"
                className="link-hover link"
              >
                Facebooksida
              </a>{" "}
              för att berätta om {"utvecklings\u00ADarbetet"}.
            </p>
          </article>
          <article>
            <h3 className="text-center text-primary line-through">2023</h3>
            <p>
              Skarp {"utvecklings\u00ADstart"} av{" "}
              <a
                href="https://vercel.com/docs/functions/serverless-functions"
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover link"
              >
                Next.js
              </a>
              -baserat API. Under året färdigställdes ändpunkter för{" "}
              <abbr title="Create, Read, Update och Delete">CRUD</abbr> av{" "}
              <dfn title="En profil i Dansdata-systemet är en fullständig beskrivning av t.ex. ett dansband eller en förening">
                profiler
              </dfn>
              .
            </p>
            <p>
              Förtydligande av Dansdatas grafiska profil. Framtagande av
              skarpare och mer realistiska mockups i{" "}
              <a
                href="https://www.figma.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover link"
              >
                Figma
              </a>
              .
            </p>
          </article>
          <article>
            <h3 className="text-center text-accent">2024</h3>
            <p className="text-center italic">Planering</p>
            <p>
              <strong>Q1:</strong> {"Utvecklings\u00ADstart"} för{" "}
              {"Dansdata\u00ADportalen"} - ett {"gräns\u00ADsnitt"} för att
              administrera data i systemet.
            </p>
            <p>
              <strong>Q3:</strong> {"Alfa\u00ADtestning"} av{" "}
              {"Dansdata\u00ADportalen"} med utvalda {"test\u00ADanvändare"}.
            </p>
            <p>
              <strong>H2:</strong> Utökning av APIet med stöd för evenemang.
            </p>
          </article>
          <article>
            <h3 className="text-center text-accent">2025</h3>
            <p className="text-center italic">Planering</p>
            <p>Utökad {"Marknads\u00ADföring"}.</p>
            <p>
              <strong>H1:</strong> {"Beta\u00ADtestning"} och slutligen
              färdigställande av {"Dansdata\u00ADportalen"}. Enklare hemsida för
              dansbesökare att hitta {"social\u00ADdanser"} - mer fokus på
              leverans än fullt nyttjande av systemet.
            </p>
            <p>
              <strong>H2:</strong> {"Utvecklings\u00ADstart"} för &quot;
              {"Social\u00ADdans"}&quot; - en {"mobil\u00ADapp"} och bättre
              hemsida för dansbesökare att hitta {"social\u00ADdanser"}, kurser
              och annat.
            </p>
          </article>
          <article>
            <h3 className="text-center text-accent">2026</h3>
            <p className="text-center italic">Planering</p>
            <p>
              Färdigställande av appen &quot;{"Social\u00ADdans"}&quot;.
              Utveckling av{" "}
              <dfn title="Plugin som visar data från dansdata direkt på din hemsida">
                embeds
              </dfn>
              .
            </p>
          </article>
        </section>
        <section>
          <span className="prose">
            <h2 className="mb-[1em] text-center">Vanliga frågor</h2>
          </span>
          <FaqEntry title="Hur kan jag bidra?">
            <p>
              Dansdata är ett projekt av dansare, för dansare - jättekul att du
              vill hjälpa oss!
            </p>
            <p>
              <strong>Utvecklare</strong> kan bidra, exempelvis genom pull
              requests på{" "}
              <a
                href="https://github.com/dansdata-se"
                target="_blank"
                className="link-hover link"
              >
                GitHub
              </a>{" "}
              . Öppna buggar finns i vårt {"ärende\u00ADhanterings\u00ADsystem"}{" "}
              -{" "}
              <a
                href="https://dansdata.youtrack.cloud/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover link"
              >
                YouTrack
              </a>{" "}
              - och där kan du även delta i diskussioner kring utvecklingen. Du
              får också gärna höra av dig genom{" "}
              <a
                href="https://dansdata.youtrack.cloud/form/caecd941-5281-47fd-a647-d3832838e922"
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover link"
              >
                {"kontakt\u00ADformuläret"}
              </a>{" "}
              för att diskutera djupare samarbeten, rapportera buggar eller
              önska nya funktioner!
            </p>
            <p>
              <strong>Andra</strong> kan också bidra! Kanske kan du berätta för
              oss om evenemang i din närhet, hjälpa oss marknadsföra Dansdata på
              din lokala dansbana eller komma med förbättringsidéer och förslag
              som en del av vår testgrupp? Hör gärna av dig genom{" "}
              <a
                href="https://dansdata.youtrack.cloud/form/caecd941-5281-47fd-a647-d3832838e922"
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover link"
              >
                {"kontakt\u00ADformuläret"}
              </a>
              , även med egna idéer!
            </p>
          </FaqEntry>
          <FaqEntry title="Hur tjänar ni pengar?">
            <p>Kort sagt: det gör vi inte - och det är inte heller vårt mål.</p>
            <p>
              För tillfället finansieras Dansdata primärt ur egen ficka av
              projektets frivillige maintainer,{" "}
              <a
                href="https://fzy.se"
                target="_blank"
                className="link-hover link whitespace-pre"
              >
                Felix Zedén Yverås
              </a>
              , även om planer finns på att ta emot frivilliga donationer i
              framtiden.
            </p>
            <p>
              Målsättningen för Dansdata är att erbjuda en så bra och fri tjänst
              för {"dans\u00ADinformation"} som möjligt. Vi tror detta är
              möjligt med öppenhet och ideella krafter - och den{" "}
              <a
                href="https://opensource.org/osd/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover link"
              >
                filosofin
              </a>{" "}
              är vi inte ensamma om.
            </p>
          </FaqEntry>
          <FaqEntry title="Hur får jag mitt evenemang listat hos Dansdata?">
            <p>
              <strong>Nya användare</strong> kan skicka in evenemang genom{" "}
              <a
                href="https://dansdata.youtrack.cloud/form/caecd941-5281-47fd-a647-d3832838e922"
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover link"
              >
                {"kontakt\u00ADformuläret"}
              </a>{" "}
              med {"ärende\u00ADtypen"} &quot;Event Submission&quot;. Vi
              återkommer då till dig så snart som möjligt för verifiering och
              möjlighet att bli {"portal\u00ADanvändare."}
            </p>
            <p>
              <strong>{"Portal\u00ADanvändare"}</strong> kan skicka in evenemang
              direkt i{" "}
              <a
                href="https://portal.dansdata.se"
                target="_blank"
                className="link-hover link"
              >
                {"Dansdata\u00ADportalen"}
              </a>
              .
            </p>
          </FaqEntry>
          <FaqEntry title="Hur får jag mitt företag/min förening/mig själv listad hos Dansdata?">
            <p>
              Kontakta oss genom{" "}
              <a
                href="https://dansdata.youtrack.cloud/form/caecd941-5281-47fd-a647-d3832838e922"
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover link"
              >
                {"kontakt\u00ADformuläret"}
              </a>
              , med {"ärende\u00ADtypen"} &quot;Account&quot;, för att ansöka om
              listning och möjlighet att bli {"portal\u00ADanvändare."} Vi
              återkommer så snart som möjligt för verifiering!
            </p>
            <p>
              <strong>{"Portal\u00ADanvändare"}</strong> kan skapa och ändra
              profiler direkt i{" "}
              <a
                href="https://portal.dansdata.se"
                target="_blank"
                className="link-hover link"
              >
                {"Dansdata\u00ADportalen"}
              </a>
              .
            </p>
          </FaqEntry>
          <FaqEntry title="Varför använder ni licensen CC BY-SA 4.0 i stället för MIT för data och bilder hämtade genom APIet?">
            <p>
              Dansdata som plattform bygger på principer om frihet och
              samarbete. Vi försöker därför använda den fria licensen MIT så
              mycket som möjligt.
            </p>
            <p>
              När det gäller den information vi distribuerar är det extra
              viktigt för oss att den förmedlas på lika villkor - annars faller
              vi snabbt tillbaka i ett läge där innovation hämmas, där det är
              svårt för {"dans\u00ADpubliken"} att hitta evenemang och där det
              är svårt för arrangörer att nå ut. Inlåsning och segregering
              förlorar vi helt enkelt alla på.
            </p>
            <p>
              Därför har vi, för vår {"dans\u00ADinformation,"} valt att
              tillämpa en fri licens som ställer högre krav på en länk tillbaka
              till oss. Licensen CC BY-SA 4.0 hindrar andra från att göra
              avtramp i vår tjänst för att skapa det vi en gång byggde Dansdata
              för att komma ifrån, samtidigt som den gör det möjligt för andra
              att använda och bygga vidare på vår dans{"\u00AD"}
              information i en positiv riktning med minimala restriktioner.
              Länken tillbaka till oss gör det lättare för arrangörer m.fl. att
              hitta oss och kunna bidra till att göra Dansdata en mer komplett{" "}
              {"informations\u00ADkälla"} - vilket bidrar till att förbättra
              alla tjänster som ursprungligen bygger på data från oss.
            </p>
          </FaqEntry>
          <FaqEntry title="Hur rapporterar jag felaktig information?">
            <p>
              Använd{" "}
              <a
                href="https://dansdata.youtrack.cloud/form/caecd941-5281-47fd-a647-d3832838e922"
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover link"
              >
                {"kontakt\u00ADformuläret"}
              </a>{" "}
              och {"ärende\u00ADtypen"} &quot;Incorrect Information&quot;.
            </p>
          </FaqEntry>
          <FaqEntry title={"Hur rapporterar jag säkerhets\u00ADproblem?"}>
            <p>
              Använd{" "}
              <a
                href="https://dansdata.youtrack.cloud/form/caecd941-5281-47fd-a647-d3832838e922"
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover link"
              >
                {"kontakt\u00ADformuläret"}
              </a>{" "}
              och {"ärende\u00ADtypen"} &quot;Security&quot;.
            </p>
          </FaqEntry>
        </section>
      </main>
      <Footer />
    </div>
  );
}
