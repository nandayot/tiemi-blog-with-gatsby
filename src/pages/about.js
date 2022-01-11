import React from 'react'

import LayoutAbout from "../components/LayoutAbout"
import SEO from "../components/seo"

import * as S from '../components/About/styled'


const AboutPage = () => (
  <LayoutAbout>
    <SEO
      title="Sobre Mim | Fernanda Tiemi"
      description="Um pouco sobre minha personalidade"
    />
    <S.PostHeader>
        <S.PostDate>
          21 de Agosto de 2020 • 5 min de leitura
        </S.PostDate>
        <S.PostTitle>Sobre Mim</S.PostTitle>
        <S.PostDescription>Uma pessoa. Milhões de hobbies.</S.PostDescription>
      </S.PostHeader>
      <S.AboutContent>
      <p>
        Meu nome é Fernanda Tiemi, e sou apaixonada por muitas coisas.
        Gosto de esportes. Sou torcedora do Boston Red Sox e Toronto Raptors. Sim, não sou
        estadunidense para torcer para times de mesmo estado. Também gosto de surf, 
        curling, snowboard, esgrima, boxe. Enfim. Desde criança
        sempre gostei de aprender sobre culturas novas, seja escandinava, africana, asiática...
        Mas por ser descendente de japoneses, tive um grande interesse em aprender mais sobre
        a cultura asiática como um todo. Atualmente, gosto bastante de procurar entender mais
        sobre a cultura coreana. Fui muito fã de kpop nos anos de 2014/2016 e isso ajudou a que
        a minha paixão pelo país crescesse. 
      </p>

      <p>
          Sou muito fã de hiphop então eu basicamente conheço quase todos os rappers da Coreia do Sul. Sou grande apreciadora
          de hip hop boombap. Aquele dos anos 90 dos EUA. Meus artistas favoritos são The Pharcydes,
          ATCQ, The Fugees, Souls Of Mischief, Tupac, Biggie e muitos outros. Sou bastante eclética então ouço quase de tudo.
          Gosto de bossa nova, mpb, música clássica, R&B, jazz, folk, rock... Veja minhas playlists no <a href="https://music.youtube.com/channel/UC3S2v99aLR9jqoLKxvm6Qtw?feature=share" target="_blank">Youtube Music</a>
      </p>
      
      <p>
        Também gosto muito do mundo literário. Sou grande fã da Jane Austen. Grande fã mesmo. Daquelas que pode tatuar o nome dela no braço ao lado do nome Eiichiro Oda.
        Gosto bastante da Agatha Christie e do Sir Doyle. Douglas Adams e Patrick Ruthfuss. Irmãos Verde e a nerdfigtheria. Victor Hugo e Charles Dickens.
        Rainbow Rowell e outros YA. Deu para ter um vislumbre já.
      </p>

      <p> 
        Sou dorameira desde 2013 e sou viciada em dramas coreanos. Mesmo. Gosto de todos os gêneros e por aqui também vai ter resenhas
        de doramas sempre tentando trazer contextualizações e também analogias com outros assuntos. Veja minhas lista de doramas <a href="https://nandayot.notion.site/My-Drama-List-Page-bdd7b4ef914641589b1c5a92c1111cb3" target="_blank">aqui.</a>
      </p>
      <p>
          Este blog foi criado com o intuito principal de falar sobre cultura coreana/japonesa e conhecer artistas,
          principalmente independentes e não tão conhecidos, da Coreia do Sul e do Japão. Então esse blog vai trazer análises
          de álbuns, descobertas músicais, apresentação de artistas no geral, resenha de doramas... Mas como disse, possuo muitos hobbies, fica difícil
          falar sobre uma coisa só. Então o blog é no improviso. Se algo lhe interessar, bem-vinda(o)!
      </p>

      <h2>Allons-y!</h2>

      </S.AboutContent>
  </LayoutAbout>

)

export default AboutPage