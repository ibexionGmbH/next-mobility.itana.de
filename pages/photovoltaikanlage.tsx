import {JsonLD} from 'components/JsonLD';
import Head from 'next/head';
import Image from 'next/image';

import Breadcrum from '@/ui/Breadcrum';
import SEO from '@/ui/seo';

function photovoltaikanlagePage({data}) {
  const jsonld1 = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    url: 'https://mobility.itana.de/photovoltaikanlage',
    author: {
      name: 'Jörg Weißleder',
      summary: 'Itana',
      url: 'https://mobility.itana.de',
    },
    inLanguage: 'de-DE',
    image: 'https://mobility.itana.de/news/solar.jpg',
    isFamilyFriendly: 'true',
    copyrightYear: '2020',
    headline: 'Photovoltaikanlage',
    articleBody:
      'CO2 Fußabdruck. Um unseren CO2 Fußabdruck zu verringern, laden wir unsere Teslas mit der hauseigenen 24 kW Photovoltaikanlage (PV) auf. In diesem Beispiel war der Tesla Model 3 komplett leer. Der Tesla wurde um ca. 07:15 Uhr an die Wallbox angeschlossen, dort startet die dunkelblaue Linie senkrecht nach oben, sie repräsentiert den Tesla. Ladesicherheit. Kurz nach Sonnenaufgang, um ca. 05:45 Uhr, fängt die grüne Ladekurve der Photovoltaikanlage an zu steigen und lädt den Speicher so lange auf (orange Linie), bis der Tesla angeschlossen wird. Da um 7 Uhr nur wenig Sonne vorhanden ist, kann die PV-Anlage nur ca. 3 kW leisten. Der Tesla braucht aber eine minimale Leistung von 4 kW. Deshalb muss in den nächsten Minuten Strom außerhalb der PV-Anlage gezogen werden. Unsere Wallbox steuert das vollautomatisch und trägt so zur Ladesicherheit bei. Der Bezug außerhalb der PV-Anlage relativiert sich schnell, wenn die Sonne mehr scheint. Nachhaltiges Laden. Der Zeitraum von ca. 8 Uhr - 10 Uhr zeigt, dass der Tesla nur so viel Strom eingespeist bekommt, wie Sonnenenergie vorhanden ist. Die blaue Linie des Teslas ist immer unterhalb der grünen von der PV-Anlage. Nur so ist das Laden nachhaltig und sinnvoll. Ab ca. 10 Uhr ist die Leistung der PV-Anlage bei 11 kW, mehr kann der Tesla Model 3 über diesen Anschluss nicht aufnehmen. Somit verläuft die Ladekurve waagerecht, der restliche Strom steht zur freien Verfügung. An einem sonnigen Tag können wir so 1000 km Reichweite laden!Tipp: Richtig nachhaltig wird das erst, wenn nur so viel Strom in die Tesla-Batterie geladen wird, wie Strom zu Verfügung steht. Unsere "Open WB Wallbox" managed das sehr gut und trägt noch zur Ladesicherheit bei. Somit verbrauchen wir fast keine unnötigen fossilen Brennstoffe. Steuerung der Wallbox. In der Konfiguration der Wallbox gibt man die Präferenz des Lademodi an. Ist die Präferenz auf "PV" gesetzt, wird der Tesla nur mit so viel Strom geladen, wie Sonnenenergie vorhanden ist. In diesem Beispiel kann man noch wählen, ob man das Elektroauto oder den Speicher bevorzugt laden möchte. Alles andere wäre ökologisch nicht sinnvoll! Achten Sie beim Kauf einer Photovoltaikanlage und Wallbox auf diese Funktion! ',
    contentLocation: {
      '@type': 'Place',
      name: 'Maulbronner Weg 33, 71706 Markgröningen, Germany',
    },
  };
  return (
    <div>
      <SEO
        title="Photovoltaikanlage | Nachhaltiges Laden eines Teslas - Itana GmbH"
        description="CO2 Fußabdruck verringern | Ökologie"
      />
      <Head>
        <link
          rel="canonical"
          href="https://mobility.itana.de/photovoltaikanlage/"
        />
      </Head>

      <JsonLD jsonld={jsonld1} />

      <Breadcrum />
      <div className="lg:prose-md prose max-w-7xl sm:px-6 lg:px-8">
        {/*  <p className='text-sm leading-5 text-gray-500'>
          <time dateTime='2020-06-12'>Juni 12, 2020</time>
        </p> */}
        <h1>Photovoltaikanlage</h1>
        <Image
          className="h-56 rounded"
          src="/images/news/solar.jpg"
          height="200"
          width="1000"
          alt="Solar Panel"
        />

        <h2>Wie vereint man Spaß und Ökologie sinnvoll?</h2>

        <Image
          className="rounded"
          src="/images/news/Ladezustand-Tesla.png"
          height="300"
          width="800"
          alt="Photovoltaikanlage"
        />

        <p>
          Ladebeispiel an einem komplett leeren Tesla Model 3 Performance mit
          einer hauseigenen Photovoltaikanlage
        </p>
        <h3>CO2 Fußabdruck</h3>
        <p>
          Um unseren <b>CO2 Fußabdruck</b> zu <b>verringern</b>, laden wir
          unsere Teslas mit der <b>hauseigenen</b> 24 kW{' '}
          <b>Photovoltaikanlage</b> (PV) auf. In diesem Beispiel war der Tesla
          Model 3 komplett leer. Der Tesla wurde um ca. 07:15 Uhr an die Wallbox
          angeschlossen, dort startet die dunkelblaue Linie senkrecht nach oben,
          sie repräsentiert den Tesla.
        </p>

        <h3>Ladesicherheit</h3>
        <p>
          Kurz nach Sonnenaufgang, um ca. 05:45 Uhr, fängt die grüne Ladekurve
          der Photovoltaikanlage an zu steigen und lädt den Speicher so lange
          auf (orange Linie), bis der Tesla angeschlossen wird.
          <br />
          <br />
          Da um 7 Uhr nur wenig Sonne vorhanden ist, kann die PV-Anlage nur ca.
          3 kW leisten. Der Tesla braucht aber eine minimale Leistung von 4 kW.
          Deshalb muss in den nächsten Minuten Strom außerhalb der PV-Anlage
          gezogen werden. Unsere Wallbox steuert das vollautomatisch und trägt
          so zur Ladesicherheit bei.
          <br />
          Der Bezug außerhalb der PV-Anlage relativiert sich schnell, wenn die
          Sonne mehr scheint.
        </p>

        <h3>Nachhaltiges Laden</h3>
        <p>
          Der Zeitraum von ca. 8 Uhr - 10 Uhr zeigt, dass der Tesla nur so viel
          Strom eingespeist bekommt, <b>wie Sonnenenergie vorhanden</b> ist. Die
          blaue Linie des Teslas ist immer unterhalb der grünen von der
          PV-Anlage. Nur so ist das <b>Laden nachhaltig</b> und sinnvoll.
        </p>

        <p>
          Ab ca. 10 Uhr ist die Leistung der PV-Anlage bei 11 kW, mehr kann der
          Tesla Model 3 über diesen Anschluss nicht aufnehmen. Somit verläuft
          die Ladekurve waagerecht, der restliche Strom steht zur freien
          Verfügung.
          <br />
          An einem sonnigen Tag können wir so 1000 km Reichweite laden!
          <br />
          Tipp:
          <br />
          Richtig nachhaltig wird das erst, wenn nur so viel Strom in die
          Tesla-Batterie geladen wird, wie Strom zu Verfügung steht. Unsere
          &quot;Open WB Wallbox&quot; managed das sehr gut und trägt noch zur
          Ladesicherheit bei. Somit verbrauchen wir fast keine unnötigen
          fossilen Brennstoffe.
        </p>
        <h3>Steuerung der Wallbox</h3>
        <p>
          In der Konfiguration der Wallbox gibt man die Präferenz des Lademodi
          an. Ist die Präferenz auf &quot;PV&quot; gesetzt, wird der Tesla nur
          mit so viel Strom geladen, wie Sonnenenergie vorhanden ist. In diesem
          Beispiel kann man noch wählen, ob man das Elektroauto oder den
          Speicher bevorzugt laden möchte.
        </p>

        <p>
          Alles andere wäre ökologisch nicht sinnvoll!{' '}
          <b>
            Achten Sie beim Kauf einer Photovoltaikanlage und Wallbox auf diese
            Funktion!{' '}
          </b>
        </p>

        <Image
          className="mx-auto mt-4 h-72 w-72"
          src="/images/news/lademodus.png"
          height="300"
          width="400"
          alt="Ladeanzeige"
        />
      </div>
    </div>
  );
}

export default photovoltaikanlagePage;
