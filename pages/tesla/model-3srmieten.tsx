import {Model3} from 'lib/car-prices';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import {CarPrices} from '@/ui/CarPrices';
import CTA from '@/ui/CTA';
import SEO from '@/ui/seo';
import TeslaQuickLinks from '@/ui/TeslaQuickLinks';

function TeslaModel3SRPage() {
  return (
    <div>
      <SEO
        title={`Tesla Model 3 mieten in Stuttgart | ab ${Model3['Verlängerungstag 100 km']} / Tag`}
        description="Bestes Preis-Leistungs-Verhältnis ✓ E-Auto leihen | agiler Sportwagen ✓ Stuttgarter Autovermietung ► Mo-Fr von 8-18 Uhr | Jetzt anfragen ☎ +49 711 49066 450"
      />
      <Head>
        <link
          rel="canonical"
          href="https://mobility.itana.de/tesla/model-3srmieten/"
        />
      </Head>
      <section>
        <h1 className="text-xl font-bold leading-6 tracking-tight text-gray-900 sm:text-2xl sm:leading-8">
          Tesla Model 3 mieten - Leichten und agilen Sportwagen fahren
        </h1>

        <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <div className="mx-auto">
            <div className="relative">
              <Link href="#tesla-model-3" aria-label="Tesla Model 3">
                <a title="Tesla Model 3">
                  <Image
                    src="/images/cards/tesla-3.png"
                    className="mx-auto mt-4 h-96 rounded"
                    alt="Tesla Model 3 mieten"
                    height="600"
                    width="1000"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <CTA
            data_cy="TeslaModel3StandardRangePlusMieten"
            fillBG={true}
            fullWidth={true}
            title="Tesla Model 3 mieten"
          />
        </div>
      </section>
      <TeslaQuickLinks />
      <section>
        <CarPrices data={Model3} />
      </section>
      <div className="my-24 mx-auto">
        <div className="lg:prose-md prose mx-auto">
          <h2>
            Was sind die Unterschiede zwischen dem Model 3 Performance und dem
            Model 3?
          </h2>
          <p>
            Auf den ersten Blick kann man die Modelle durch die Felgen
            unterscheiden. Beim Model 3 sind die Räder mit den Felgen mehr
            verdeckt und dunkler.
            <br />
            Das Model 3 braucht laut Herstellerangaben von 0 auf 100 km/h 5,6
            Sekunden, im Vergleich dazu braucht der Performance 3,4 Sekunden.{' '}
            <br />
            Wir als Autovermietung in Stuttgart empfehlen Dir, das Model 3
            länger zu mieten, dadurch ist der Preis geringer und Du kannst alles
            in Ruhe ausprobieren. Der Fahrspaß wird Dir nicht entgehen, das
            Model 3 hat nicht so viel Leistung wie der Performance, ist aber
            leichter und agiler. Wir sind auf Deine Meinung gespannt.
          </p>
        </div>
      </div>

      <div className="lg:prose-md prose mx-auto mt-8">
        <h2> Du möchtest günstig einen Tesla mieten?</h2>
        <p>
          Dann bist Du bei uns richtig. Vergleiche die Preise und prüfe
          eventuelle Zusatzkosten bei anderen Anbietern. Unsere Preise sind
          transparent, d.h. es kommen keine Zusatzkosten dazu, außer Du fährst
          mehr Kilometer als vereinbart. Du kannst uns anrufen oder über die
          Website einen Buchungszeitraum aussuchen und verbindlich buchen.
        </p>
      </div>
    </div>
  );
}

export default TeslaModel3SRPage;
