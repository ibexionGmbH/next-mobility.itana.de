import {
  DaciaSpringPrice,
  Model3,
  Model3LongRange,
  Model3Performance,
  ModelXLR,
  ModelYLongRange,
  ModelYPerformance,
} from 'lib/car-prices';
import Image from 'next/image';
import Link from 'next/link';

import {pagesPath} from '@/lib/$path';

import CTAFahrbereit from './CTAFahrbereit';

export default function FahrzeugKacheln() {
  return (
    <div className="relative px-4 pt-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-2">
          <Link href={pagesPath.tesla.model_3srmieten.$url()}>
            <div className="Kachel flex flex-col overflow-hidden rounded-lg shadow-2xl bg-white">
              <div className="flex-shrink-0">
                <Image
                  src="/images/cards/tesla-3.png"
                  height="300"
                  width="600"
                  className="h-72 w-full object-cover"
                  alt="Tesla Model 3"
                />

                <h2
                  data-cy="KachelModel3"
                  className="static box-border rounded-b bg-itana-red px-1 text-center text-lg text-white"
                >
                  Tesla Model 3 mieten ab {Model3['Verlängerungstag 100 km']} /
                  Tag
                </h2>
              </div>
            </div>
          </Link>

          <Link href={pagesPath.tesla.model_3_long_range_mieten.$url()}>
            <div className="Kachelflex flex-col overflow-hidden rounded-lg shadow-2xl bg-white">
              <div className="flex-shrink-0">
                <Image
                  src="/images/cards/tesla-3-lr.png"
                  height="300"
                  width="600"
                  className="h-72 w-full object-cover"
                  alt="Tesla Model 3 Long Range Plus"
                />

                <h2
                  data-cy="KachelModel3LR"
                  className="static box-border rounded-b bg-itana-red px-1 text-center text-lg text-white"
                >
                  Tesla Model 3 Long Range mieten ab{' '}
                  {Model3LongRange['Verlängerungstag 100 km']} / Tag
                </h2>
              </div>
            </div>
          </Link>

          <Link href={pagesPath.tesla.model_3_mieten.$url()}>
            <div className="flex Kachel flex-col overflow-hidden rounded-lg shadow-2xl bg-white">
              <div className="flex-shrink-0">
                <Image
                  src="/images/cards/tesla-3-performance.png"
                  height="300"
                  width="600"
                  className="h-72 w-full object-cover"
                  alt="Tesla Model 3 Performance mieten"
                />

                <h2
                  data-cy="KachelModel3Performance"
                  className="static box-border rounded-b bg-itana-red px-1 text-center text-lg text-white"
                >
                  Tesla Model 3 Performance mieten ab{' '}
                  {Model3Performance['Verlängerungstag 100 km']} / Tag
                </h2>
              </div>
            </div>
          </Link>

          <Link href={pagesPath.tesla.model_y_mieten.$url()}>
            <div className="flex Kachel flex-col overflow-hidden rounded-lg shadow-2xl bg-white">
              <div className="flex-shrink-0">
                <Image
                  className="h-72 w-full object-cover"
                  height="300"
                  width="600"
                  src="/images/cards/tesla-model-y.png"
                  alt="Tesla Model Y mieten"
                />

                <h2
                  data-cy="KachelModelYLongRange"
                  className="static box-border rounded-b bg-itana-red px-1 text-center text-lg text-white"
                >
                  Tesla Model Y Long Range mieten ab{' '}
                  {ModelYLongRange['Verlängerungstag 100 km']} / Tag
                </h2>
              </div>
            </div>
          </Link>

          <Link href={pagesPath.tesla.model_y_mieten.$url()}>
            <div className="flex Kachel flex-col overflow-hidden rounded-lg shadow-2xl bg-white">
              <div className="flex-shrink-0">
                <Image
                  className="h-72 w-full object-cover"
                  height="300"
                  width="600"
                  src="/images/cards/tesla-model-y-performance.png"
                  alt="Tesla Model Y mieten"
                />

                <h2
                  data-cy="KachelModelYPerformance"
                  className="static box-border rounded-b bg-itana-red px-1 text-center text-lg text-white"
                >
                  Tesla Model Y Performance mieten ab{' '}
                  {ModelYPerformance['Verlängerungstag 100 km']} / Tag
                </h2>
              </div>
            </div>
          </Link>

          <Link href={pagesPath.tesla.model_x_mieten.$url()}>
            <div className="flex Kachel flex-col overflow-hidden rounded-lg shadow-2xl bg-white">
              <div className="flex-shrink-0">
                <Image
                  className="h-72 w-full object-cover"
                  height="300"
                  width="600"
                  src="/images/cards/tesla-model-x.png"
                  alt="Tesla Model X mieten"
                />

                <h2
                  data-cy="KachelModelX"
                  className="static box-border rounded-b bg-itana-red px-1 text-center text-lg text-white"
                >
                  Tesla Model X mieten ab {ModelXLR['Verlängerungstag 100 km']}{' '}
                  / Tag
                </h2>
              </div>
            </div>
          </Link>

          <Link href={pagesPath.tesla_langzeitmiete.$url()}>
            <div className="flex Kachel flex-col overflow-hidden rounded-lg shadow-2xl bg-white">
              <div className="flex-shrink-0">
                <Image
                  className="h-72 w-full object-cover"
                  height="300"
                  width="600"
                  src="/images/cards/rental.jpg"
                  alt="Tesla Langzeitmiete"
                />

                <h2
                  data-cy="KachelLangzeit"
                  className="static box-border rounded-b bg-itana-red px-1 text-center text-lg text-white"
                >
                  Tesla Langzeitmiete vs. Leasing
                </h2>
              </div>
            </div>
          </Link>

          <Link href={pagesPath.dacia.spring_mieten.$url()}>
            <div className="flex Kachel flex-col overflow-hidden rounded-lg shadow-2xl bg-white">
              <div className="flex-shrink-0">
                <Image
                  className="h-72 w-full object-cover"
                  height="300"
                  width="600"
                  src="/images/cards/dacia-spring.png"
                  alt="Dacia Spring mieten"
                />

                <h2
                  data-cy="DaciaSpring"
                  className="static box-border rounded-b bg-itana-red px-1 text-center text-lg text-white"
                >
                  Dacia Spring mieten ab{' '}
                  {DaciaSpringPrice['Verlängerungstag 100 km']} / Tag
                </h2>
              </div>
            </div>
          </Link>

          <CTAFahrbereit />
          <Link href={pagesPath.faq.$url()}>
            <div className="flex Kachel flex-col overflow-hidden rounded-lg shadow-2xl bg-white">
              <div className="flex-shrink-0">
                <Image
                  className="h-72 object-cover"
                  height="300"
                  width="600"
                  src="/images/cards/faq.png"
                  alt="FAQ Elektroautos"
                />

                <h2 className="static box-border rounded-b bg-itana-red px-1 text-center text-lg text-white">
                  Häufig gestellte Fragen (FAQ)
                </h2>
              </div>
            </div>
          </Link>

          <Link href={pagesPath.faq.$url()}>
            <div className="flex Kachel flex-col overflow-hidden rounded-lg shadow-2xl bg-white">
              <div className="flex-shrink-0">
                <Image
                  className="h-72 w-full object-cover"
                  height="300"
                  width="600"
                  src="/images/cards/tesla-ladestation.jpg"
                  alt="Tesla aufladen"
                />

                <h2 className="static box-border rounded-b bg-itana-red px-1 text-center text-lg text-white">
                  Wo kann ich meinen Tesla laden?
                </h2>
              </div>
            </div>
          </Link>
          <Link href={pagesPath.schulung_elektromobilitaet.$url()}>
            <div className="flex Kachel flex-col overflow-hidden rounded-lg shadow-2xl bg-white">
              <div className="flex-shrink-0">
                <Image
                  className="h-72 w-full object-cover"
                  height="300"
                  width="600"
                  src="/images/cards/schulung.jpg"
                  alt="Schulung über Elektromobilität"
                />

                <h2 className="static box-border rounded-b bg-itana-red px-1 text-center text-lg text-white">
                  Schulung Elektromobilität
                </h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
