import { useSession } from '@faststore/sdk'
import { graphql } from 'gatsby'
import { GatsbySeo, JsonLd } from 'gatsby-plugin-next-seo'
import React from 'react'
import { mark } from 'src/sdk/tests/mark'
import type { PageProps } from 'gatsby'
import type { ScannerPageQuery } from '@generated/graphql'
import ScannerPresenter from 'src/components/sections/ScannerPresenter'
import ScannerStep from 'src/components/sections/ScannerStep'
import ScannerResults from 'src/components/sections/ScannerResults'
import { StepperProvider } from 'src/contexts/StepperContext'
import { ScannerProvider } from 'src/contexts/ScannerContext'
import Stepper from 'src/components/common/Stepper'
import { Helmet } from 'react-helmet'

export type Props = PageProps<ScannerPageQuery>
function Page(props: Props) {
  const {
    data: { site },
    location: { pathname, host },
  } = props

  const { locale } = useSession()

  const title = site?.siteMetadata?.title ?? ''
  const siteUrl = `https://${host}${pathname}`
  const stepTipoDePele = [
    {
      title: 'Pele Seca',
      description:
        'Normalmente tem poros pouco visíveis, aspecto opaco com pouca luminosidade, costuma ser mais áspera ao toque e tem maior propensão a descamação e vermelhidão',
      imageSrc: '/pele/pele-seca.jpg',
      value: 'pela-seca',
    },
    {
      title: 'Pele Mista',
      description:
        'Apresenta caracterísitcas oleosas e poros dilatados na "Zona T" do rosto (testa, nariz e queixo) e, em contrapartida, textura aveludada, sem brilho excessivo ou até com toque seco, nas outras regiões',
      imageSrc: '/pele/pele-mista.jpg',
      value: 'pela-mista',
    },
    {
      title: 'Pele Oleosa',
      description:
        'A pele oleosa é aquela com um aspecto mais brilhoso e espesso, possui toque untoso e apresenta maior quantidade de poros dilatados por todo o rosto',
      imageSrc: '/pele/pele-oleosa.jpg',
      value: 'pele-oleosa',
    },
    {
      title: 'Pele Normal',
      description:
        'Tem textura aveludada, não apresenta excesso de brilho nem costuma sofrer ressecamento ou descamação. Geralmente tem poros pequenos e pouco visíveis, e é lisa ao toque',
      imageSrc: '/pele/pele-normal.jpg',
      value: 'pela-normal',
    },
  ]

  const stepFototipoDePele = [
    {
      title: 'Muito Clara',
      description:
        'Este fototipo nunca se bronzeia, apenas se queima porque é extremamente sensível à radiação solar.',
      imageSrc: '/fototipo/muito-clara.jpg',
      value: 'muito-clara',
    },
    {
      title: 'Clara',
      description:
        'Levemente mais escura que o primeiro tom .É uma pele sensível ao sol, mas se bronzeia lentamente.',
      imageSrc: '/fototipo/clara.jpg',
      value: 'clara',
    },
    {
      title: 'Clara média',
      description:
        'A sensibilidade existe, mas este tipo de pele consegue se bronzear com certa facilidade. Sem proteção, no entanto, também se queima facilmente.',
      imageSrc: '/fototipo/clara-media.jpg',
      value: 'clara-media',
    },
    {
      title: 'Escura média',
      description:
        'É mais resistente aos impactos dos raios UV e por isso bronzeia facilmente, queimando-se muito pouco',
      imageSrc: '/fototipo/escura-media.jpg',
      value: 'escura-media',
    },
    {
      title: 'Escura',
      description:
        'Raramente se queimam e ficam com um belo bronzeado. São pouco sensíveis ao sol, mas isso não quer dizer que podem se descuidar da proteção solar.',
      imageSrc: '/fototipo/escura.jpg',
      value: 'escura',
    },
    {
      title: 'Muito escura',
      description:
        'A pele negra é completamente pigmentada e possui uma proteção natural aos raios solares porque produz mais melanina. Também possui fibras de colágeno mais resistentes .',
      imageSrc: '/fototipo/muito-escura.jpg',
      value: 'muito-escura',
    },
  ]

  const stepManchas = [
    {
      title: 'Manchas de Sol',
      description:
        'Essas manchas são desencadeadas pelo excesso de exposição solar.',
      imageSrc: '/manchas/manchas-de-sol.jpg',
      value: 'manchas-de-sol',
    },
    {
      title: 'Manchas de Acne',
      description:
        'Esse tipo de mancha surge, geralmente, em processos inflamatórios, como é o caso de acne, espinhas e outras lesões.',
      imageSrc: '/manchas/manchas-de-acne.jpg',
      value: 'manchas-de-acne',
    },
    {
      title: 'Vitiligo',
      description:
        'Esse Kit é para quem quer limpar, tônificar e hidratar a sua pele diariamente',
      imageSrc: '/manchas/vitiligo.jpg',
      value: 'vitiligo',
    },
    {
      title: 'Melasma',
      description:
        'Ocorrem majoritariamente no rosto O melasma surge, principalmente, em mulheres na fase da menopausa ou que fazem o uso de anticoncepcionais. E, também, com a incidência do sol sem proteção.',
      imageSrc: '/manchas/melasma.jpg',
      value: 'melasma',
    },
    {
      title: 'Genética',
      description:
        'Também conhecidas como sardas, são manchas de características genéticas. Possuem cor castanha, e é comum surgir em peles mais claras (especialmente pessoas loiras e ruivas).',
      imageSrc: '/manchas/genetica.jpg',
      value: 'genetica',
    },
  ]

  const stepLinhasDeExpressao = [
    {
      title: 'Rugas dinâmicas',
      description:
        'São as primeiras a serem notadas, conhecidas também como linhas de expressão, e não aparecem no repouso',
      imageSrc: '/linhas/rugas-dinamicas.jpg',
      value: 'rugas-dinamicas',
    },
    {
      title: 'Rugas Estáticas',
      description:
        'São visíveis mesmo sem movimentos faciais e muito comuns em rostos maduros.',
      imageSrc: '/linhas/rugas-estaticas.jpg',
      value: 'ruges-estaticas',
    },
    {
      title: 'Bigode de chinês',
      description:
        'É uma ruga que se estende do canto do nariz até as extremidades dos lábios, deixando o rosto com um aspecto envelhecido.',
      imageSrc: '/linhas/bigode-de-chines.jpg',
      value: 'bigode-de-chines',
    },
    {
      title: 'Pés de galinha',
      description:
        'São as rugas que surgem ao redor dos olhos (região periocular).',
      imageSrc: '/linhas/pes-de-galinha.jpg',
      value: 'pes-de-galinha',
    },
    {
      title: 'Linhas de Expressão',
      description:
        'As linhas de expressão surgem a partir dos movimentos repetitivos e da contração dos músculos faciais.',
      imageSrc: '/linhas/linhas-de-expressao.jpg',
      value: 'linhas-de-expressao',
    },
  ]

  const stepProblemasNaPele = [
    {
      title: 'Acne',
      imageSrc: '/problemas/acne.jpg',
      value: 'acne',
    },
    {
      title: 'Cravos',
      imageSrc: '/problemas/cravos.jpg',
      value: 'cravos',
    },
    {
      title: 'Oleosidade Excessiva',
      imageSrc: '/problemas/oleosidade-excessiva.jpg',
      value: 'oleosidade-excessiva',
    },
    {
      title: 'Poros Dilatados',
      imageSrc: '/problemas/poros-dilatados.jpg',
      value: 'poros-dilatados',
    },
    {
      title: 'Sensibilidade',
      imageSrc: '/problemas/sensibilidade.jpg',
      value: 'sensibilidade',
    },
    {
      title: 'Olheiras',
      imageSrc: '/problemas/olheiras.jpg',
      value: 'olheiras',
    },
    {
      title: 'Proteção Solar',
      imageSrc: '/problemas/protecao-solar.jpg',
      value: 'protecao-solar',
    },
    {
      title: 'Linhas e Rugas',
      imageSrc: '/problemas/linhas-e-rugas.jpg',
      value: 'linhas-e-rugas',
    },
    {
      title: 'Manchas',
      imageSrc: '/problemas/manchas.jpg',
      value: 'manchas',
    },
    {
      title: 'Sardas',
      imageSrc: '/problemas/sardas.jpg',
      value: 'sardas',
    },
  ]

  return (
    <>
      {/* SEO */}
      <GatsbySeo
        title={title}
        description={site?.siteMetadata?.description ?? ''}
        titleTemplate={site?.siteMetadata?.titleTemplate ?? ''}
        language={locale}
        canonical={siteUrl}
        openGraph={{
          type: 'website',
          url: siteUrl,
          title: title ?? '',
          description: site?.siteMetadata?.description ?? '',
        }}
      />
      <Helmet>
        <link rel="stylesheet" href="/css/scanner.css" />
      </Helmet>
      <JsonLd
        json={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          url: siteUrl,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${siteUrl}/s/?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
        }}
      />
      <StepperProvider>
        <ScannerProvider>
          <Stepper>
            <ScannerPresenter
              title="Vamos descobrir seu perfil de beleza?"
              message="Agora, realizaremos algumas perguntas sobre a sua pele para entendermos as características individuais da sua pele."
              imgDesktop="/scanner-presentation.png"
              imgMobile="/scanner-presentation-mobile.png"
              buttonText="Começar"
            />

            <ScannerStep
              title="Como você definiria sua pele?"
              message="Escola uma das opções abaixo:"
              img="/scanner-step1.jpg"
              buttonText="Continuar"
              stepOptions={stepTipoDePele}
              stepSpecification="tipo-de-pele"
            />

            <ScannerStep
              title="Qual o seu fototipo de pele?"
              message="Escola uma das opções abaixo:"
              img="/scanner-step2.jpg"
              buttonText="Continuar"
              stepOptions={stepFototipoDePele}
              stepSpecification="fototipo-de-pele"
            />

            <ScannerStep
              title="Você possui manchas na pele?"
              message="Você tem manchas roxas ou vermelhas no rosto causada por acne ou exposição solar?"
              img="/scanner-step3.jpg"
              buttonText="Continuar"
              stepOptions={stepManchas}
              stepSpecification="manchas"
            />

            <ScannerStep
              title="CoVocê apresenta linhas de expressão?"
              message="Você tem manchas roxas ou vermelhas no rosto causada por acne ou exposição solar?"
              img="/scanner-step4.jpg"
              buttonText="Continuar"
              stepOptions={stepLinhasDeExpressao}
              stepSpecification="linhas-de-expressao"
            />

            <ScannerStep
              title="Como você definiria sua pele?"
              message="Escola uma das opções abaixo:"
              img="/scanner-step5.jpg"
              buttonText="Continuar"
              stepOptions={stepProblemasNaPele}
              stepSpecification="problemas-na-pele"
            />

            <ScannerPresenter
              title="Seu perfil de pele está pronto"
              message="Através do nosso teste conseguimos definir a melhor rotina para o seu perfil de beleza. Aproveite os descontos e dicas."
              imgDesktop="/scanner-presentation.png"
              imgMobile="/scanner-presentation-mobile.png"
              buttonText="Acessar"
            />
            <ScannerResults />
          </Stepper>
        </ScannerProvider>
      </StepperProvider>
    </>
  )
}

export const query = graphql`
  query ScannerPage {
    site {
      siteMetadata {
        title
        description
        titleTemplate
      }
    }
  }
`
Page.displayName = 'Page'
export default mark(Page)
