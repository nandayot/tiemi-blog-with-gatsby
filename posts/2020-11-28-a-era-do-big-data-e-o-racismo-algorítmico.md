---
title: A era do Big Data e o racismo algorítmico
description: "O mundo onde milhões de dados são criados por segundo, onde a
  inteligência artificial é usada freneticamente, onde a automação é incorporada
  em todas as áreas, parece inovador e brilhante. Mas não é e te mostro o por
  quê. "
date: 2020-11-27 11:00:50
thumbnail: assets/img/capa-coded-bias.png
category: Code
tags:
  - coded bias
  - weapons of math destruction
  - race after technology
  - algorithms of oppression
  - artificial unintelligence
  - automating inequality
  - gender shades
  - compas
  - predpol
  - Joy Buolamwini
  - Shalini Kantayya
  - racismo algorítmico
  - viés algorítmico
background: "#2E29E0"
---
![Foto de uma mulher chinesa com marcações em volta da face, simbolizando uma algoritmo de reconhecimento facial.](assets/img/coded_2-1536x864.jpg)

# Introdução

Não é de hoje que as tecnologias são usadas freneticamente sem pensarmos em seu impacto. Desde a chegada dos computadores pessoais e de computadores em empresas, a ideia de que isso levantaria a economia e pouparia horas e horas de serviço fez com que diversos sistemas auxiliares fundamentais para garantia de benefícios para a população fossem usados da maneira errada.

A chegada do Google e sua ferramenta de busca chamada PageRank fez com que os cidadãos abrissem os horizontes para diversas páginas disponíveis pelo mundo, e com apenas algum impulso ou desejo de disseminar o ódio, páginas nazistas e racistas eram sugeridas para quem procurasse, gerando, em alguns, faíscas que causaria morte de diversas pessoas.

Atualmente, vivemos na era do Big Data, onde o volume de dados gerados é altamente grande e impossível de mantê-lo em planilhas de Excel. Dados não apenas de músicas, páginas de internet, jogos, livros, mas dados sobre sua vida, sua personalidade, suas preferências, seu nome, sua rede de contatos, sua [opinião política](https://www.nature.com/news/facebook-experiment-boosts-us-voter-turnout-1.11401)... Seu rosto. Quando menos espera, esses dados podem ser usados de [maneira injusta](https://science.sciencemag.org/content/366/6464/447) e isso pode custar um benefício público, uma vaga numa empresa, um [mandado criminal](https://www.nytimes.com/2020/06/24/technology/facial-recognition-arrest.html#:~:text=What%20he%20could%20not%20have,on%20technology%20and%20the%20law.).

Para entender melhor sobre todos esses assuntos eu reuni neste blog um conjunto de 5 livros que falam sobre como sistemas estátísticos, automatizados e preditivos são comercializados e usados deliberadamente em empresas, órgãos públicos, departamentos policiais e que acabam gerando preconceitos raciais, de gênero e de classe. Esses 5 livros eu li nessas últimas 3 semanas e apesar de ser difícil falar de cada um em apenas um blog, vou dar apenas uma pincelada em cada um e o resto deixo para a curiosidade e desejo de vocês de entender melhor sobre o assunto, sendo ou não do ramo da tecnologia. Todos nós somos alvos desses sistemas.

## Preliminares

Antes de começar a falar sobre os livros é necessário alguns esclarecimentos de conceitos que serão apresentados abaixo. Para quem não é da área de tecnologia, é importante ler esse próximo parágrafo para entender o decorrer do blog.

Irei citar durante toda a postagem palavras como "sistemas automatizados", "modelos estatísticos/matemáticos/de inteligência artificial". O que eu quero dizer com esses modelos? Eles são um conjunto de procedimentos que processam grande quantidade de dados, esses dados são analisados por esses modelos sob diversos padrões matemáticos e estatísticos que no final, conseguem gerar predições sobre certas variáveis que definimos previamente ou não.

Por exemplo, eu quero predizer o valor de um imóvel baseado em dados como CEP, bairro, número de cômodos, quartos, banheiros, quintal, entre outros. Para isso, eu tenho uma base de dados contendo todas essas variáveis e o valor de cada imóvel. Colocamos esses dados nesse modelo. Ele é "treinado", ou seja, o modelo aprende a identificar padrões para, depois do treinamento, conseguir predizer o valor de um certo imóvel novo que não estava na base de treino. Isso é como um modelo simples de inteligência artificial funciona. Existem diversos outros tipos de aprendizagem mas, conhecendo essa lógica, é o suficiente para entender o que será abordado abaixo.

<br><br>

![Foto de perfil de Cathy. Cathy é uma mulher branca com olhos claros e cabelo curto azul.](assets/img/1-big-data.png)

# Weapons of Math Destruction - Cathy O'Neil (2016)

Traduzindo como "Armas de Destruição Matemática" (WMD), é esse o nome que Cathy, cientista de dados e matemática, dá para os sistemas e modelos de inteligência artificial que possuem características que causam preconceito e discriminação. Não são todos os modelos que acabam criando esses viéses, Cathy fala sobre algoritmos saudáveis que são usados na ramo esportivo e são exemplos de bons modelos que usam dados apenas sobre a performance dos atletas baseados em variáveis do ambiente de jogo, como no baseball por exemplo.

O livro explica sobre como alguns modelos usados em empresas e na polícia são perigosos e não são testados da maneira como deveria e isso causa o que chamamos de racismo algorítmico. Um dos exemplos que vou falar aqui é o algoritmo que Cathy estudou e dissecou em um evento de hackers, chamado PredPol.

PredPol é um sistema que prediz, em tempo real, áreas de uma cidade onde tem um risco maior de ocorrência de crimes. O sistema recebe constantemente, dados de hitóricos criminais, e atualiza o sistema a cada hora e o resultado é um mapa da cidade marcado por quadrados vermelhos, do tamanho de dois campos de futebol, onde possui uma probabilidade maior de ocorrer crimes. E assim, caso os policiais patrulhassem essas áreas tinha uma chance maior de desencorajar os crimes.

<br><br>

![Foto de uma mapa com câmera infravermelha e ao lado foto de uma maá com quadrados vermelhos distribuídos.](assets/img/predpol.jpg)

<br><br>

Acontece que a maioria dos crimes não são tão sérios quanto roubo, assalto de carros e é aqui que o problema surge, diz Cathy. Os policiais tem a escolha de focar em crimes graves como homicídio, crimes violentos, incêndios culposos ou em crimes como o que eles chamam de "vagrancy" ou "panhandling" ou consumo pequeno de drogas. E quando eles decidem focar no segundo tipo, que são a maioria dos crimes leves cometidos, o sistema é populado por um grande número deles e acaba marcando essa mesma área ou bairro em vez de marcar áreas onde crimes violentos podem acontecer. Isso é chamado de "*feedback loop*".

Aqui tem um alerta que ela explicita durante todo o livro. Os sistemas são baseados puramente nos dados. Dados são informações do passado e esse passado é baseado na história. Crimes leves que o PredPol analisa são geralmente cometidos em bairros empobrecidos e a maioria deles é, historicamente, habitado por pessoas negras.

O sistema não tira os dados do além, não é um gênio ou um oráculo. A maioria dos dados são coletados pelos próprios policiais, e sabemos como eles são nos EUA. Um dos maiores volumes de dados que o PredPol se alimentava eram dos famosos "*stop and frisk*" dos EUA. A política de "parar e perguntar", onde os policiais paravam civis na rua que suspeitavam carregar armas ou drogas. Cathy e seu grupo, no evento de hackers, descobriu que stop and frisk parava mais pessoas negras e latinas que pessoas brancas. Todas essas "paradas" eram inseridas no sistema mesmo se a pessoa não possuísse ficha criminal, e adivinha? 90% das pessoas negras e latinas que eram interrogadas, não possuiam ficha criminal. E isso também gerava um feedback loop em bairros pobres.

Os policiais viam o quadrado vermelho também não com o objetivo de fazê-lo desaparecer mas com a ideia de que eles eram "obrigados" a achar crimes dentro deles. E esse tipo de visão também causava a inserção de mais delitos leves dentro do sistema. Onde o alvo era na maioria das vezes a população negra e latina. Crimes como corrupção, lavagem de dinheiro causado por grandes empresas e pessoas da classe alta passavam despercebido e nem mesmo entrava no sistema.

> "Os processos de Big Data codificam o passado. Eles não inventam o futuro. Fazer isso requer imaginação moral, e isso é algo que somente os humanos podem fornecer. Precisamos incorporar explicitamente melhores valores em nossos algoritmos, criando modelos de Big Data que sigam nossa orientação ética. Às vezes, isso significa colocar a justiça à frente do lucro."

Cathy, durante o livro, também investiga diversos outros softwares que causam grandes preconceitos de raça e gênero e isso deixo para vocês lerem. Um dos exemplos é o algoritmo de recrutamento que a Amazon utilizava que automaticamente rejeitava currículos de mulheres. ([](https://www.reuters.com/article/us-amazon-com-jobs-automation-insight-idUSKCN1MK08G)<https://www.reuters.com/article/us-amazon-com-jobs-automation-insight-idUSKCN1MK08G>)

<br><br>

![Foto de Ruha Benjamin, foto de cabelo comprido preso com dreads. Ruha usa terno preto e está com as mãos cruzadas.](assets/img/2-big-data.png)

# Race After Technology - Ruha Benjamin (2019)

O segundo livro que li, e aqui vou ordenar em ordem cronológica de leitura. "Raça após Tecnologia" fala justamente sobre como a raça é vista e moldada nos meios tecnológicos e aqui ela mostra no aspecto geral da tecnologia desde seu início por exemplo com a criação das máquinas fotográficas. Ruha percorre a história da tecnologia em conjunto com a raça e o racismo perpetrado dentro dela.

Cathy, adota o termo **WMD** para falar sobre Big Data e seus sistemas, Ruha em seu livro adota outro termo para falar sobre esse mesmo aspecto. Ela chama de "**New Jim Code**" (Novo Jim Code) e aqui ela faz uma analogia sobre as leis segregacionistas de Jim Crow e como elas continuam existindo no âmbito tecnológico.

Uma das primeiras coisas que Ruha expõe em seu livro é como os nomes são variáveis codificadas. Em um estudo feito sobre como nomes impactam o mercado de trabalho, os pesquisadores montaram diversos currículos em que a única coisa que diferia era os nomes. Currículos com nomes que pessoas brancas geralmente possuem, e currículos com nomes que pessoas negras geralmente têm. Os currículos com "nomes de pessoas brancas" recebiam 50% mais chamadas para entrevistas que currículos com "nomes de pessoas negras". Além disso, em currículos de pessoas com nomes brancos o algoritmo parecia prestar mais atenção no conteúdo do que com pessoas com nomes negros.

Ruha também fala que os famosos algoritmos de "**targeting**" também são uma forma de usar a raça para promover e vender produtos. Ela cita o exemplo do Netflix, para conseguir que espectadores negros vejam alguns filmes, eles mudam propositalmente o poster com personagens secundários negros para que a pessoa clique em algo que muito provavelmente ela não clicaria senão tivesse aquele poster.

A autora também traz uma reflexão sobre como as grandes companhias de tecnologia, mesmo com campanhas de incentivos de contratação mais diversa continua deixando esses funcionários fora de áreas e projetos decisivos. Um dos exemplos que ela cita é um ex-funcionário da Apple que falou sobre sua experiência em desenvolver a Siri. Enquanto trabalhava nos dialetos ingleses como o autraliano, indiano e de singapura, ele perguntou para seu chefe "*Mas e o inglês de afro-americanos?*" e quanto a isso, o chefe respondeu "*Bem, os produtos da Apple são para um mercado premium*". E aqui ela fala da ironia em capitalizar cultura afro-americana nessas empresas ao mesmo tempo que não produz tecnologias pensadas em especificidades dessa mesma cultura.

> Zeros e uns, se não tivermos cuidado, podem aprofundar a divisão entre os que têm e os que não têm, entre os que merecem e os que não merecem - julgamentos de valor enferrujados embutidos em sistemas novos e brilhantes.

No final do livro, Ruha mostra nos apêndices algumas iniciativas que vem sendo feitas com relação a emancipação de grupos marginalizados dentro da tecnologia, sobre responsabilidade e prestação de contas, sobre igualdade na tecnologia. Um deles é **ACM FAccT**, uma conferência com "foco interdisciplinar que reúne pesquisadores e profissionais interessados em justiça, responsabilidade e transparência em sistemas sociotécnicos". ([](https://facctconference.org/)<https://facctconference.org/>); **Auditing Algorithms**, "um grupo de eventos projetado para produzir um white paper que ajudará a definir e desenvolver a comunidade de pesquisa emergente para "auditoria de algoritmo"" ([](https://auditingalgorithms.science/)<https://auditingalgorithms.science/>); **Equality Labs**, "organização progressiva de construção de poder que usa pesquisa comunitária, organização cultural e política, educação popular e segurança digital para combater as opressões do apartheid de castas, islamofobia, supremacia branca e intolerância religiosa." ([](https://www.equalitylabs.org/)<https://www.equalitylabs.org/>).

<br><br>

![Foto de Safiya Noble, cabelo preto cacheado aos ombros e sorrindo para a camera.](assets/img/3-big-data.png)

# Algorithms of Oppression - Safiya Noble (2018)

Neste livro, Safiya faz um alerta sobre a ferramenta de busca do Google. Uma pesquisa de década que começou em 2011 quando ela digitou "Black Girls" no Google e foi apresentado em primeiro lugar, site pornográfico. Safiya traz esse foco nas ferramentas do Google e como o seu monopólio de informações na internet é perigoso e violento. Ela cita diversos casos em que a ferramenta de busca do Google trouxe em pesquisas, sites pornográficos, com incitações de ódio, neonazistas.

Um dos exemplos que ela traz é durante a presidência do Barack Obama, quando digitado "N*gger" no Google Maps, ele redirecionava para a Casa Branca. Outro exemplo é quando pesquisado por Michelle Obama no Google Images, ele mostrava em "pesquisas relacionadas" o nome "ape" (macaco). No decorrer de seu livro, Safiya cita diversos outros exemplos em que a ferramenta do Google mostrava viéses racistas e sexistas durante os anos.

Safiya também traz a reflexão de como as grandes companhias (Google, Facebook) produzem as típicas desculpas de **"glitch"** no sistema, "está sendo corrigido" e fica por isso. Dizendo que esses incontáveis erros são deslizes de algoritmos perfeitos e não de toda a lógica estrutural em que a tecnologia foi criada e desenvolvida.

> A posição invejável do Google como líder monopolista no fornecimento de informações permitiu que sua organização de informações e personalização fosse conduzida por seus imperativos econômicos e influenciou amplas camadas da sociedade a vê-la como criadora e mantenedora da cultura online da informação, que argumento aqui que é outra forma de imperialismo americano que se manifesta como um "porteiro" na web.

Safiya pega muito no pé do Google e Facebook e o quanto é perigoso que apenas duas companhias americanas estejam no centro, no controle de praticamente todos os dados produzidos no meio digital, sem fiscalização de praticamente nenhum órgão, e isso pode acarretar em diversas mudanças econômicas e políticas sem nem mesmo percebemos. E isso já aconteceu. Facebook já realizou experimentos durante eleições de 2012 e 2016 e foi responsável por diversos engajamentos políticos de usuários que viram postagens sobre as eleições na plataforma. Estudos comprovaram que o sistema de rankeamento do Google priorizava sites de conglomerados jornalísticos e como isso afetava, inconscientemente, a opinião de quem pesquisava sobre um determinado político, tanto positivo quanto negativamente.

Safiya responde, durante todo o seu livro, a pergunta "Esse site que aparece em primeiro lugar na pesquisa do Google é confiável?". Adianto que a resposta é não. Ela explica em seu livro como funciona o processo de ranqueamento (SEO) e como empresas de conteúdo pornográfico são especialistas em SEO e conseguem fazer com que seus sites apareçam na primeira página. A autora responsabiliza o Google por manter esses sites a vista e eu concordo. Ela questiona em seu livro, quando Google é pressionado por jornais sobre "glitches" encontrados, exemplo de Michelle Obama, eles são rapidamente e facilmente consertado, por que as demais coisas não são? Se eles não são responsáveis pelos seus próprios algoritmos e seus viéses, quem são?

<br><br>

![Foto de Meredith Broussard. Cabelo cacheado aos ombros.](assets/img/4-big-data.png)

# Artificial Unintelligence - Meredith Broussard (2018)

(Des)inteligência Artificial é um dos principais livros junto com WMD de Cathy, ambos trazem exemplos de sistemas preditivos, suas inconsistências, seus erros e como eles são causados. Aqui, Meredith, traz o termo Tecnochauvinismo (**Technochauvinism**), que seria a crença de que a tecnologia sempre é a solução. Essa crença é acompanhada também de meritocracia, valores políticos tecnolibertários, celebração da "liberdade de expressão" a tal ponto de negar que o assédio virtual é um problema, a noção de que os algoritmos são neutros porque são programados com base em classificações matemáticas, uma fé inabalável de que quanto mais computadores usados de forma apropriada todos os problemas do mundo desapareciam e viveríamos numa utopia digital.

Claro que tudo isso é mentira e Meredith explica durante todo o seu livro e sobre suas experiências como acadêmica de computação durante alguns anos, em Harvard. Por ter sido aluna numa das mais prestigiadas universidades do mundo na época da ascenção da internet, anos 90, Meredith sempre foi uma das primeiras pessoas a experimentar as inovações tecnológicas. Vendo que, naquela época, o STEM, possuía poucas mulheres, ela trocou de faculdade e começou a fazer jornalismo. Hoje ela é "**Data Journalist**" (jornalista de dados), onde ela investiga, produz histórias e reportagens com base no Big Data.

Meredith, traz nesse livro, exemplos de tecnologias "*disruptivas*" e como elas são, na verdade, um fracasso. Ela também faz uma crítica aos hackathons e eventos de start up que não cabe a mim aqui falar (rsrsr). Ela cita, como os outros livros acima, o famoso software preditivo **COMPAS**, que foi o sistema responsável por trazer a tona o perigo da Inteligência Artificial na sociedade. Existe já diversos artigos sobre o software que vocês podem estar pesquisando para entender como ele funciona e como ele acaba reforçando o racismo existente na justiça americana.

> Nosso entusiasmo coletivo em aplicar a tecnologia computacional a todos os aspectos da vida resultou em uma quantidade enorme de tecnologia mal projetada. Essa tecnologia mal projetada está atrapalhando a vida cotidiana, em vez de torná-la mais fácil. O problema aqui, como em muitos casos, é muita tecnologia e sem gente suficiente.

A autora também explora diversos outros softwares em diversas áreas, como na educação (softwares que classificavam a qualidade de um professor) e traz à tona como o ambiente educacional é complexo e não pode ser meramente classificado por um algoritmo. Os modelos matemáticos funcionam bem em problemas bem definidos, em situações bem definidas com parâmetros bem definidos. E o ambiente escolar, é o oposto disso.

Meredith também alerta sobre como a tecnologia foi desenvolvida basicamente por homens brancos (e como eles foram capazes, devido ao mundo socio-político, a focarem em seus passatempos), acabam produzindo falas erradas sobre a relação da tecnologia com a sociedade. Apesar de serem experts sobre tecnologia, não eram sobre as pessoas e a sociedade. Dessa forma, não podemos nos apressar em ser governados por sistemas computacionais projetados por pessoas que não se importam/importavam e não entendem/entendiam sobre o sistema cultural em que estamos firmados.

<br><br>

![Foto de Virgnia Eubanks, cabelo curto grisalho com óculos. ](assets/img/5-big-data.png)

# Automating Inequality - Virgnia Eubanks (2018)

"Automatizando a Desigualdade" também é um livro que contém uma pesquisa intensa e minuciosa sobre sistemas automatizados. Porém, o foco desse livro é sistemas em programas de benefícios públicos para famílias carentes. O livro foi dividido em 3 partes, onde cada uma delas foca em um sistema específico. O primeiro é um sistema automático usado para verificar a eligibilidade em diversos programas assistenciais de Indiana chamado FSSA, onde você tem direito ao TANF, SNAP, Medicaid e por aí vai. Segundo, HMIS + VI-SPDAT, uma ferramenta de decisão para priorizar indivíduos e famílias em situação de risco nas ruas ao acesso à moradia. Terceiro, AFST, uma ferramenta de modelagem preditiva do condado de Allegheny para calcular o provável risco de abuso infantil dentro de uma família.

Achei um livro bem específico que é mais destinado aos que vivem nos EUA. Mas durante a leitura deu para ter uma noção de como alguns sistemas que o governo compra de empresas privadas para auxiliar, cortar custos e melhorar os programas, na verdade, causam desgaste, demora e acabam sendo falhos.

Virginia fala em seu livro que "*A elegibilidade automatizada foi baseada na suposição de que é melhor que dez candidatos elegíveis tenham os benefícios públicos negados do que ter uma pessoa inelegível recebendo.*". Durante seu livro ela entrevista diversas famílias e indivíduos que foram afetados por esses sistemas de forma negativa e outros de forma positiva. Um deles foi Omega Young, uma mulher de 50 anos que morava sozinha num pequeno apartamento e que sofria de um cancer terminal. Omega teve seus benefícios do FSSA negados de forma automática (causado por um algoritmo) sem nem mesmo saber o por quê. Ela e sua família entraram na justiça mas devido a complicações do cancer, ela não compareceu a primeira audiência e com isso os benefícios foram cancelados. Omega perdeu direito aos seus medicamentos, vale-refeição e muitos outros serviços assistenciais, e depois de algumas semanas veio a falecer. Um dia depois de sua morte, seus direitos ao FSSA foram aprovados pelo tribunal.

Virginia também fala no livro, assim como nos outros, sobre como os diversos dados, que são decisivos para os algoritmos, são dados que chamamos de "*sujos*". Um exemplo é o CYF Hotline usada como parâmetro para calcular o risco de abuso infantil no AFST. É um dado que quantifica o total de ligações que pessoas fizeram denunciando uma família de negligência infantil. Virginia entrevistou uma família que toda semana recebia visitas de assistentes sociais por causa de denúncias feitas por vizinhos, praticamente todas as denúncias eram falsas. E mesmo assim, esse dado era usado no AFST, e quanto maior a pontuação, maior a chance da criança ser tirada do lar. As denúncias, então, são eficazes? É um parâmetro confiável? Qual a chance de serem vizinhos vingativos? Vizinhos que apenas ligava só para causar problemas para a família? Não tem como ter certeza pois as denúncias podem ser feitas de forma anônima.

> A discriminação racional não requer ódio de classe ou racial, ou mesmo preconceito inconsciente, para operar. Requer apenas ignorar o preconceito que já existe. Quando as ferramentas automatizadas de tomada de decisão não são construídas para desmontar explicitamente as desigualdades estruturais, sua velocidade e escala as intensificam.

A autora alerta também sobre o cálculo da negligência infantil feita pelo algoritmo. O sistema conta como negligência a falta de comida na casa, roupas desgastadas, doenças infantis... e todas essas condições são causadas pela pobreza. Se, em vez do algoritmo espiar as famílias com a possível retirada da criança do lar, ajudar a família a conseguir comida e moradia de qualidade? Muitos entrevistados falam que apenas quando a criança é retirada de seus cuidados, é que os assistentes sociais oferecem apoio financeiro.

No final do livro, a autora também orienta e conclui que sistemas automatizados que são usados no ambiente público devem ser **auditados**, devem ser **supervisionados** pela população, devem ser **transparentes** com relação ao seu funcionamento e a coleta de dados. O exemplo do AFST foi um ótimo estudo de caso, Virginia diz. A criadora do algoritmo sempre realizou reuniões sobre o progresso da ferramenta e suas funcionalidades, o desenvolveu de forma transparente onde pessoas que o usa são ouvidas e com isso, a autora diz, que o sistema melhorou muito depois.

<br><br>

![Foto do poster do documentário Coded Bias com uma imagem de uma pessoa negra vestida com uma máscara branca.](assets/img/coded_twitter_post_1024-x-512px.jpg)

# CODED BIAS - 2020

Minha última indicação não é um livro mas sim um documentário lançado esse ano chamado Coded Bias. O documentário, dirigido pela Shalini Kantayya, reuni tudo que eu já falei neste blog. Estão presentes nesse documentário 4 das 5 escritoras dos livros acima, Cathy, Meredith, Safiya e Virginia. Além disso o documentário faz destaque para a descoberta da pesquisadora negra do MIT, Joy Buolamwini, onde ela percebe que um algoritmo de reconhecimento facial não detectava a face dela até o momento em que ela coloca uma máscara branca em seu rosto. O trabalho dela pode ser acessado no site [gendershades.org](http://gendershades.org). O documentário explora bastante sobre como esses algoritmos de reconhecimento facial são perigosos em diversos aspectos e acompanha a jornada de Joy e sua luta para a criação de uma lei federal que regulamenta o uso.

Confira o trailer

<iframe width="560" height="315" src="https://www.youtube.com/embed/jZl55PsfZJQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Conclusão

A inteligência artificial que parece ser perfeita, capaz de substituir o ser humano, neutra e objetiva na verdade é burra (a não ser que a programemos para ser boa em uma determinada tarefa), cria viéses, encontra padrões e correlações que não são verdade e acabam reproduzindo o racismo, o sexismo, a xenofobia e outros tipos de preconceitos. Elas podem te impedir de conseguir um emprego, te impedir de conseguir uma vaga para um benefício, te confundir com um criminoso, te prender injustamente. Precisamos de mais vozes para esse problema, mais ativistas combatendo viéses, mais programadores que entendam que a ética é fundamental. Precisamos de regulamentações e para isso, o problema precisa ser visto e sentido.