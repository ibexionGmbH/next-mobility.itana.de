import {JsonLD} from 'components/JsonLD';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import {pagesPath} from '@/lib/$path';
import Breadcrum from '@/ui/Breadcrum';
import CTA from '@/ui/CTA';
import SEO from '@/ui/seo';

const InfoBanner = () => (
  <div className="border-l-4 border-itana-red bg-gray-50">
    <div className="flex">
      <div className="my-auto ml-2 h-6 w-6 text-itana-red">
        <svg
          aria-label="Info Icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <p className="ml-2">Unsere Preise beinhalten keine versteckten Kosten</p>
    </div>
  </div>
);

export default function langzeitmeitePage({t3pPrice, txlPrice, t3srPrice}) {
  const jsonLD1 = {
    legalName: 'Itana GmbH',
    founders: [
      {
        name: 'Jörg Weißleder',
        '@type': 'Person',
      },
    ],
    name: 'Itana GmbH',
    url: 'https://mobility.itana.de/',
    '@context': 'http://schema.org',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'mobility@itana.de',
      telephone: '[+4971149066450]',
      contactType: 'customer support',
    },
    address: {
      '@type': 'PostalAddress',
      postalCode: '71706',
      addressRegion: 'Baden-Württemberg',
      streetAddress: 'Maulbronner Weg 33',
      addressCountry: 'Germany',
      addressLocality: 'Markgröningen',
    },
    sameAs: ['https://twitter.com/mobility_gmbh'],
    '@type': 'Organization',
  };
  return (
    <div>
      <SEO
        title="Tesla Langzeitmiete | ab 32,73€/Tag/Monat | Flexibel | Schnell"
        description="Elektroauto | Tesla Langzeitmiete | Bester Preis | Super Service | Du musst Dich um nichts kümmern | Jetzt hier klicken + buchen | Anruf: +4971149066450"
      />
      <Head>
        <link
          rel="canonical"
          href="https://mobility.itana.de/tesla-langzeitmiete/"
        />
      </Head>

      <JsonLD jsonld={jsonLD1} />

      <Breadcrum />
      <div className="lg:prose-md prose max-w-7xl sm:px-6 lg:px-8">
        {/* <p className='text-sm leading-5 text-gray-500'>
          <time dateTime='2020-04-17'>August 03, 2020</time>
        </p> */}
        <h1>Tesla Langzeitmiete</h1>
        <p>
          Brauchst Du geschäftlich ein zukunftsweisendes, besonderes Auto? Wir
          empfehlen die Tesla Langzeitmiete.
        </p>

        <Image
          className="mx-auto h-56 bg-white rounded"
          alt="Tesla Model X"
          src="/images/cards/rental.jpg"
          height="600"
          width="1000"
        />

        <div className="grid grid-cols-1 gap-x-8 lg:grid-cols-2">
          <div>
            <h2>Vorteile der Tesla Langzeitmiete gegenüber dem Leasing</h2>

            <ul>
              <li>viel mehr Flexibilität</li>
              <li>kürzere Vertragsbindung</li>
              <li>kurzfristigere Verfügbarkeit</li>
              <li>fairer Preis und gute Leistung</li>
              <li>vergünstigte Konditionen</li>
            </ul>
            <p>
              Das <b>klassische Leasing</b> fordert einen Mietzeitraum von
              <b> mindestens zwei Jahren!</b> Bei der Tesla Langzeitmiete ist
              der Mietzeitraum flexibel. <br />
              <Link
                className="font-semibold text-itana-red"
                href={pagesPath.kontakt.$url()}
              >
                Kontaktiere uns jetzt,
              </Link>{' '}
              gerne gehen wir auf Deine persönlichen Wünsche und Bedürfnisse
              ein.
            </p>
            <p>
              Vorab kannst Du in unseren{' '}
              <Link
                className="font-semibold text-itana-red"
                href={pagesPath.faq.$url()}
              >
                FAQs
              </Link>{' '}
              stöbern.
            </p>
          </div>
          <div>
            <h2>Empfehlungen bei der Tesla Langzeitmiete</h2>
            <InfoBanner />
            <p>Jetzt einen Tesla mieten!</p>
            <Link href={pagesPath.buchungs_anfrage.$url()}>
              <a className="anfrage">
                <CTA
                  title="Tesla Model 3 mieten"
                  fillBG={true}
                  fullWidth={false}
                />
              </a>
            </Link>
            <p>
              Langzeitmiete für das Model 3
              <br />
              ca. 250 km Reichweite in der Praxis
            </p>
            <Link href={pagesPath.buchungs_anfrage.$url()}>
              <a className="anfrage">
                <CTA
                  title="Tesla Model 3 Long Range mieten"
                  fillBG={true}
                  fullWidth={false}
                />
              </a>
            </Link>
            <p>
              Langzeitmiete für das Tesla Model 3 Long Range:
              <br />
              ca. 350 km Reichweite in der Praxis
            </p>
            <Link href={pagesPath.buchungs_anfrage.$url()}>
              <a className="anfrage">
                <CTA
                  title="Tesla Model 3 Performance mieten"
                  fillBG={true}
                  fullWidth={false}
                />
              </a>
            </Link>
            <p>
              Langzeitmiete für das Model 3 Performance:
              <br />
              ca. 300 km Reichweite in der Praxis
            </p>
            <Link href={pagesPath.buchungs_anfrage.$url()}>
              <a className="anfrage">
                <CTA
                  title="Tesla Model X mieten"
                  fillBG={true}
                  fullWidth={false}
                />
              </a>
            </Link>
            <p>
              Langzeitmiete für das Model X:
              <br />
              ca. 270 km Reichweite in der Praxis
            </p>
          </div>
        </div>
      </div>

      <div className="lg:prose-md prose mx-auto mt-12">
        <h2>Was bedeutet die Tesla Langzeitmiete für Dein Unternehmen?</h2>
        <p>
          Unsere Tesla Langzeitmiete als Alternative zum eigenen Fuhrpark birgt
          den Vorteil, die <b>Kapitalbindung</b> zu umgehen. Wird ein Auto
          geleast oder gekauft, ist das Geld gebunden, das an anderer Stelle
          kurzfristig gebraucht werden könnte und dann fehlt. In den letzten
          Jahren
          <b> mieten Unternehmen</b> ihre <b> Firmenautos</b> mit der Tesla
          Langzeitmiete. So kannst Du Deinen
          <b> Bedarf</b> an Fahrzeugen Deiner <b> Auftragslage anpassen</b>.
        </p>
        <ul className="list-inside">
          <li>monatlicher Fixpreis</li>
          <li>alle Kosten sind inklusive</li>
          <li>flexibel kündbar</li>
          <li>Kosten evt. als betriebliche Ausgaben abrechenbar</li>
          <li>keine Restwertbegleichung</li>
          <li>einfache Aufstockung Deines Fuhrparks</li>
        </ul>
        <p>
          Bei der Tesla Langzeitmiete bekommst Du das Elektroauto zum{' '}
          <b>vereinbarten Preis</b>. Beim <b>Leasing</b> oder auch der{' '}
          <b>Fahrzeugfinanzierung</b> würden noch <b>zusätzliche Kosten</b> wie
          Inspektion, KFZ-Steuer etc. dazukommen. Daher prüfe, wer weitere
          Kosten übernimmt, bevor Du einen Vertrag schließt:
        </p>
        <ul className="list-inside">
          <li>Haftpflichtversicherung </li>
          <li>Vollkaskoversicherung </li>
          <li>KFZ-Steuer </li>
          <li>Wartung </li>
          <li>Hauptuntersuchung (HU)</li>
          <li>Reparaturen </li>
          <li>Reifen</li>
          <li>Steuer</li>
          <li>Zulassung </li>
        </ul>
        <p>
          Wir von mobility empfehlen die Tesla Langzeitmiete!
          <br />
          <Link
            className="font-semibold text-itana-red"
            href={pagesPath.kontakt.$url()}
          >
            Kontaktiere uns jetzt,
          </Link>{' '}
          und genieße die volle Kostenkontrolle.
        </p>
      </div>
    </div>
  );
}
