export default {
  data() {
    return {
			request:{
				url:"http://142.93.14.214:3000/",
				routes:[
					{name:"Unidades de Conservação", point:"uc"},
					{name:"Zonas de Amortecimento", point:"zonas"}
				]
			},
			topics:[
				[ //topic1
					{ //page1
						title:"1. A Biodiversidade e o bioma Mata Atlântica",
						texts:[
							{
								text:"O termo biodiversidade refere-se à diversidade biológica responsável pela variedade de formas de vida em todos os níveis, desde micro-organismos até flora e fauna silvestres, além da espécie humana. Contudo, essa variedade de seres vivos não deve ser visualizada individualmente, e sim em seu conjunto estrutural e funcional, na visão ecológica do sistema natural, ou seja, no conceito de ecossistema. Nesse sentido, a biodiversidade não compõe apenas a diversidade genética das espécies vivas, ou unidades evolutivas básicas, mas é também o componente de suporte à continuidade da vida na Terra (Joly et al., 2011). Ou seja, a heterogeneidade do ambiente possibilita a diversidade, e, ao mesmo tempo, é considerada função de si mesma (Bensusan, 2006)."
							},
							{
								text:"O bioma Mata Atlântica, na definição do Instituto Brasileiro de Geografia e Estatística (IBGE), é o “conjunto de vida (vegetal e animal) definida pelo agrupamento de tipos de vegetação contíguos e identificáveis em escala regional, com condições geoclimáticas similares e história compartilhada de mudanças, resultando em uma diversidade biológica própria”. O bioma abrange cerca de 15% do território nacional, estando presente em 17 estados brasileiros (SOS Mata Atlântica), dentre eles o estado do Espírito Santo, que tem a totalidade do seu território inserido neste bioma. As florestas da Mata Atlântica estão entre as cinco áreas prioritárias para conservação da biodiversidade e entre as 25 áreas prioritárias de conservação no mundo, devido ao alto nível de diversidade de espécies, endemismo e sua vulnerabilidade às ameaças contínuas, sendo, portanto, considerada um hotspot da biodiversidade. As formações florestais de ocorrência natural no bioma (Floresta Ombrófila Densa, Floresta Ombrófila Mista, Floresta Estacional Semidecidual, Floresta Estacional Decidual e Floresta Ombrófila Aberta) acompanham as características climáticas, de solo e de relevo, sendo influenciadas pela distância do oceano, altitude e regime de distribuição de chuvas (Mendes et al., 2014)."
							},
							{
								text:"Segundo o Portal da Biodiversidade do Ministério do Meio Ambiente, 31,6% (⅓) de todas as espécies de plantas, animais e fungos nativos das Florestas Atlânticas, sofre algum grau de ameaça de extinção (MMA, 2020). Mais de 20 mil espécies de plantas vivem neste bioma e cerca de 8 mil são endêmicas (Myers et al., 2000). No âmbito da fauna, são 518 espécies de anfíbios, sendo que 37 estão ameaçadas de extinção (Toledo & Batista, 2012), 268 espécies de répteis, destas, 39 encontram-se ameaças (Costa et al., 2014), 850 espécies de aves, 270 de mamíferos e 350 espécies de peixes (MMA, 2020). Coabitando os mesmos 1,3 milhões de km2 originais de extensão, no início do atual milênio encontrava-se mais de 70% da população brasileira, a principal ameaça ao ambiente, responsável pela paisagem degradada (Dean, 2004; Galindo-Leal & Câmara, 2005; MMA, 2020)."
							},
							{
								text:"Toda essa excepcional diversidade do bioma Mata Atlântica auxilia na proteção de importantes mananciais, garantindo água para o consumo humano, agrícola e industrial, contribuindo ainda com o controle da erosão e do clima. Contudo, não obstante todos esses serviços essenciais promovidos pela floresta, o processo de uso e ocupação humana fez com que a vegetação natural se resumisse a apenas 10,9% (SOS Mata Atlântica & INPE, 2019), portanto, avaliar o nível de proteção da biodiversidade da Mata Atlântica torna-se essencial no sentido de garantir equilíbrio dos ecossistemas a todos os seres vivos envolvidos e o uso sustentável dos serviços ecossistêmicos para as populações atuais e futuras."
							}
						]
					},
					{ //page2
						title:"1.1 A Mata Atlântica capixaba e suas ameaças",
						texts:[
							{
								text:"A evolução dos neotrópicos (região biogeográfica da América do Sul, Central e Sul da América do Norte) foi singular devido ao completo isolamento pós-soerguimento dos Andes, desde o Cretáceo até o final do Terciário, que gerou a mega diversidade de espécies encontradas aqui atualmente (Antonelli, 2010; Joly et al., 2011). Em contraste, as diferentes formas de uso da terra exercem implicações relevantes na fragmentação de habitats, levando algumas populações a sofrerem um grau de ameaça de extinção. Várias fontes científicas são categóricas em afirmar que estamos vivendo a sexta extinção em massa, provocada pelos seres humanos. O cenário original do continente sul-americano foi completamente modificado com a chegada do homem que praticava caça de algumas espécies até a sua extinção, provocando alterações, em pequena escala, de regiões costeiras e fluviais, e ocupando florestas para implantação de diferentes sistemas de cultivo. A chegada dos europeus instituiu uma fratura temporal na história da humanidade e do planeta devido ao incremento exponencial de alterações antropomórficas da biosfera e da atmosfera. A exemplo de espécies como Jatobá e Jequitibá que, sem a interferência humana, poderiam viver mais de duzentos anos, no entanto, estão fadadas a desaparecer por não possuírem capacidade de migrar para outras áreas ou elaborar uma resposta evolutiva frente às mudanças climáticas (Joly et al., 2011; Franco et al., 2012)."
							},
							{
								text:"O bioma Mata Atlântica sofreu o mais intenso processo de devastação do país (Dean, 1996). Em função do alto grau de destruição e consequente fragmentação, a Mata Atlântica é considerada um dos biomas mais ameaçados do mundo (Myers et al., 2000). O bioma apresenta ainda um elevado número de alterações fisiográficas naturais (e.g. instabilidades geológicas e variações no nível do mar), que através dos tempos foi responsável pelo isolamento e união de diversos ambientes aquáticos. Tais variações ambientais resultaram em diversos eventos biológicos e evolutivos que, por sua vez, deram origem à uma considerável biodiversidade (MMA, 2020)."
							},
							{
								text:"O estado do Espírito Santo é o quarto menor do Brasil, mas está entre os que detêm maior biodiversidade (Dutra et al. 2015). Além de representar o centro de dispersão de algumas espécies, situa-se nas proximidades de outros importantes centros como a Serra do Espinhaço por exemplo. Originalmente, os 46.095 km2 de área do estado, eram cobertos pelo bioma Mata Atlântica banhados por 16 bacias hidrográficas, todas vertendo para o mar (Paiva, 2004) e totalmente inseridos na Ecorregião Aquática da Mata Atlântica Nordeste (Abell et al., 2008). Contudo, de acordo com o último relatório técnico da ONG SOS Mata Atlântica & Instituto Nacional de Pesquisas Espaciais (INPE), divulgado em 2019, atualmente esse cenário está reduzido a apenas 10,9% de vegetação nativa remanescente, localizado principalmente na região central."
							},
							{
								text:"O estado do Espírito Santo é o quarto menor do Brasil, mas está entre os que detêm maior biodiversidade (Dutra et al. 2015). Além de representar o centro de dispersão de algumas espécies, situa-se nas proximidades de outros importantes centros como a Serra do Espinhaço por exemplo. Originalmente, os 46.095 km2 de área do estado, eram cobertos pelo bioma Mata Atlântica banhados por 16 bacias hidrográficas, todas vertendo para o mar (Paiva, 2004) e totalmente inseridos na Ecorregião Aquática da Mata Atlântica Nordeste (Abell et al., 2008). Contudo, de acordo com o último relatório técnico da ONG SOS Mata Atlântica & Instituto Nacional de Pesquisas Espaciais (INPE), divulgado em 2019, atualmente esse cenário está reduzido a apenas 10,9% de vegetação nativa remanescente, localizado principalmente na região central."
							},
							{
								text:"Dentre outras ameaças à biodiversidade capixaba estão a extração de granito e rochas ornamentais de inselbergs, extração de areia, economia agropecuarista com substituição de ambientes por monocultura, eliminação de efluentes domésticos e industriais, saneamento mal elaborado e extração de plantas ornamentais (orquídeas e bromélias)."
							},
							{
								text:"A partir da segunda metade da década de 1960, lideranças regionais abriram mercado para a indústria de bens intermediários e semielaborados, a fim de substituir a dependência econômica capixaba em relação ao café. Uma das indústrias que aqui se estabeleceu neste período foi a Aracruz Celulose (Suzano S.A.) que atualmente ocupa cerca de 250 mil hectares no Espírito Santo, com plantação de eucalipto (Gonçalves, 2019). "
							},
							{
								text:"O futuro da biodiversidade da Mata Atlântica e a sua proteção a logo prazo, dependerão do manejo de espécies e ecossistemas. No entanto, sua conservação e recuperação constituem um grande desafio, uma vez que estratégias, ações e intervenções necessárias esbarram em dificuldades impostas pelo estado fragmentado do conhecimento sobre o funcionamento dos seus ecossistemas, num ambiente sob forte pressão antrópica, marcado pela complexidade nas relações sociais e econômicas (Pinto et al., 2006)."
							}
						]
					},
					{ //page3
						title:"1.2 Estratégias Brasileiras para a Conservação da Biodiversidade",
						texts:[
							{
								text:"Muitos são os desafios socioambientais, visando um desenvolvimento sustentável, em um país que possui a maior biodiversidade do planeta e é o quinto maior em extensão territorial (MMA, 2017). Os esforços de conservação da biodiversidade no Brasil tiveram início em 1992, durante a Conferência das Nações Unidas sobre Meio Ambiente e Desenvolvimento, quando foi criada a Convenção sobre Diversidade Biológica – CDB. Dois anos depois, em 1994, foi criado o Programa Nacional da Diversidade Biológica – PRONABIO, para implementação das diretrizes orientadas pela CDB, e já na primeira década do novo milênio (2003) a Comissão Nacional da Biodiversidade – CONABIO, realizou algumas mudanças no PRONABIO. A CDB é, portanto, um dos acordos internacionais dos quais o Brasil é signatário, e sua finalidade é justamente a conservação e a utilização sustentável da biodiversidade bem como a repartição justa e equitativa dos benefícios decorrentes de sua utilização, e dos conhecimentos tradicionais associados. Por sua vez, a Conferência das Partes – COP (Convention of the Parties) é uma instância de governança que fiscaliza a implementação dos compromissos estabelecidos e é mantida pela CDB sendo renovada em reuniões periódicas. Entre os compromissos firmados para a segunda década do século XXI está o Plano Estratégico 2011-2020 que estabelece 20 metas globais para a biodiversidade, conhecidas como Metas de Aichi, estabelecidas na COP-10, em 2010, Nagoia, Japão. Desta forma, em 2011, o Brasil iniciou o processo de internalização das Metas de Aichi e definição das Metas Nacionais de Biodiversidade para 2020, com destaque dos Diálogos sobre a Biodiversidade, a elaboração dos Subsídios Multissetoriais para o Plano de Ação Governamental para a Conservação e Uso Sustentável da Biodiversidade e a criação do Painel Brasileiro de Biodiversidade – PainelBio."
							},
							{
								text:"Em qualquer área do conhecimento, a delimitação e/ou a determinação de demandas e atividades, é possível somente com a totalidade de dados necessários para este fim. No caso de ações e estratégias que garantam a conservação da biodiversidade, o termo “conhecer para preservar”, é fundamental, pois, não é possível prever a efetividade das ações preservacionistas quando nem sequer é possível conhecer todas as espécies vivas. O fato é que os especialistas não conseguem estimar com precisão as taxas de extinção, pois não conhecem o número total de espécies, consequência do baixo número de expedições de coletas no Brasil. De acordo com o Ministério do Meio Ambiente do Brasil, a conservação e o uso sustentável da biodiversidade sustenta e garante a resiliência de sistemas sociais e econômicos (MMA, 2017)."
							},
							{
								text:"Até o ano de 2016, o país não havia consolidado perspectivas e ferramentas de gestão em apenas um documento estratégico que visasse à conservação da biodiversidade e dos ecossistemas, porém, em agosto de 2016, o MMA criou a ferramenta de gestão integrada denominada “Estratégia e Plano de Ações Nacionais Para a Biodiversidade” (EPANB), que integra todas as iniciativas com esse propósito. Dentre os esforços mais importantes em prol da conservação da biodiversidade e garantia da promoção dos serviços ecossistêmicos, estão algumas ações consideradas importantes: a criação e consolidação de áreas protegidas, o monitoramento de habitats e espécies, e o combate à supressão ilegal da vegetação nativa (MMA, 2017)."
							},
							{
								text:"No estabelecimento e manejo de áreas protegidas, as atividades antrópicas são conflitantes com a conservação ambiental quando influenciam negativamente a manutenção da biodiversidade ali existente. Tais ameaças estão associadas, especialmente, à degradação de habitat, invasão biológica, superexploração, poluição e contaminação ambiental (MMA, 2017)."
							},
							{
								text:"Toda essa realidade insere a conservação da biodiversidade em um momento crucial de tomada de decisões. Há cerca de dois séculos dispúnhamos de pouquíssimos recursos humanos nacionais, pois quase todos os naturalistas coletores eram europeus, mas a nossa biodiversidade era exuberante e com grande capacidade de regeneração, mesmo com o intenso extrativismo de algumas espécies como o pau-brasil, por exemplo. Atualmente, a situação não é inversa, o que torna possível apontar a grande necessidade de aumentar o número de taxonomistas brasileiros. A maior urgência referente à conservação da biodiversidade é a necessidade de garantias por parte dos tomadores de decisões, enquanto os resultados dessas ações ainda são capazes de fazer alguma diferença na capacidade de resiliência do bioma Mata Atlântica. Nesse sentido, é importante ressaltar que a precisão das análises regionais é substancialmente maior, devido à íntima relação entre os diversos órgãos envolvidos nessa tarefa (MMA, 2017)."
							}
						]
					}
				],
				[ //topic2
					{ //page 1
						title:"2. Unidades de Conservação",
						texts:[
							{
								text:"A necessidade de proteção dos ambientes naturais surgiu durante a idade média, no início da crise ambiental decorrente do crescimento populacional e sobreexplotação dos recursos naturais (Thomas, 2010; Hassler, 2005). Registros históricos apontam que a primeira área de proteção surgiu na Polônia no século XIV (Ramade, 1979) e as primeiras leis protecionistas e formação de áreas protegidas surgiram com objetivo de proteção das áreas específicas para a caça, além da reserva dos recursos naturais para uso futuro pelas classes dominantes (Thomas, 2010). "
							},
							{
								text:"No Brasil as Unidades de Conservação (UCs) surgiram no século XVII, durante a ocupação holandesa em Pernambuco, por ordem de Maurício de Nassau, com intuito de proteger florestas do Nordeste visando à reserva de recursos naturais para uso futuro (Hassler, 2005). Posteriormente, em 1876, o engenheiro André Rebouças propôs a criação dos Parques Nacionais da Ilha do Bananal (Tocantins) e das Sete Quedas do rio Paraná (Paraná), ambos foram criados em 1939 (Hassler, 2005; Campos & Costa-Filho, 2006). A criação do Parque Nacional das Sete Quedas do rio Paraná foi motivo de forte campanha de implementação por parte do aviador e inventor Alberto Santos Dumont. Contudo, a primeira UC criada no Brasil foi o Parque Nacional do Itatiaia no Rio de Janeiro em 14 de junho de 1937, por decreto do presidente Getúlio Vargas (Campos & Costa-Filho, 2006; ICMBIO, 2013a). "
							},
							{
								text:"O uso e atribuições das UCs brasileiras são regidos atualmente pelo Sistema Nacional de Unidades de Conservação da Natureza (SNUC, Lei nº 9.985 de 18 de julho de 2000 e Decretos nº 4.340 de 22 de agosto de 2002 e nº 5.746 de 05 de abril de 2006), que classifica os objetivos de uso e proteção das UCs em 12 categorias contidas em dois grupos distintos de unidades, sendo um grupo com foco na Proteção Integral e outro no Uso Sustentável dos recursos naturais (MMA, 2011)."
							},
							{
								text:"A fragilidade do sistema de UCs na Mata Atlântica não se resume aos aspectos ligados à sua extensão, distribuição ou aos fatores de natureza técnico-científica, mas deve-se principalmente à dificuldade dos órgãos de governo em proporcionar os instrumentos adequados ao manejo e proteção dessas áreas. Entre os principais problemas constam situação fundiária indefinida, falta de pessoal técnico e recursos financeiros, instabilidade política das agências de meio ambiente, dentre outros (Arruda, 1997; Fonseca et al., 1997; Morsello, 2001; Olmos et al., 2005)."
							},
							{
								text:"Um dos entraves relacionados à criação das UCs é a propensão a ser tendenciosa, seja por seu potencial cênico ou por tratar de áreas remanescentes teoricamente intocadas ou menos antropizadas, levando a uma concentração de áreas protegidas, principalmente, em locais remotos ou de altitude (Toppa et al., 2013). As criações de UCs também tendem a ser delineadas e criadas baseando-se exclusivamente, ou quase exclusivamente, nos ambientes terrestres ou marinhos, desconsiderando os ambientes aquáticos continentais em seus planos de manejo, exceto quando criadas especificamente para a proteção de nascentes ou mananciais de abastecimento público (Agostinho et al., 2006; Pittock et al., 2015). Da mesma forma, grupos de invertebrados, aquáticos e terrestres, são comumente desconsiderados nos estudos de implementação das UCs e em seu manejo. Por este motivo, não há informações consolidadas disponíveis a respeito do papel das UCs para a proteção dos diferentes ecossistemas, especialmente os aquáticos continentais e os que envolvem a presença de invertebrados."
							},
						]
					},
					{ //page 2
						title:"2.1 A importância das Unidades de Conservação para a biodiversidade da Mata Atlântica",
						texts:[
							{
								text:"As Unidades de Conservação são áreas criadas com estratégias conservacionistas que possuem grande importância na proteção e manutenção das florestas. No âmbito do bioma Mata Atlântica, as regiões que concentram as maiores áreas de remanescentes florestais estão associadas às UCs, que representam um patrimônio de valor inestimável e têm função de proteção da sua rica biodiversidade, além de proporcionar meios e incentivos para o desenvolvimento de pesquisas e educação ambiental."
							},
							{
								text:"Os efeitos sobre a manutenção da biodiversidade dentro das UCs são muito significativos, e traduzem-se em diversas realidades, dentre as quais se destaca a inibição do desmatamento (Ferreira et al., 2005; Drummond et al., 2006; Lemos de Sá, 1999; Fearnside, 2008). Todo o sistema é interligado, as árvores e suas raízes protegem as nascentes dos rios promovendo um aumento nos índices pluviais e na umidade relativa do ar, o que cria um clima mais ameno, além de serem áreas importantíssimas para a preservação de inúmeras espécies nativas da fauna e da flora."
							},
							{
								text:"As UCs ocupam aproximadamente 17% do território brasileiro, em diferentes categorias e esferas de gestão, a conservação dessas paisagens garante não apenas a qualidade da água e a manutenção de modos de vida tradicionais, mas também a proteção de espécies ameaçadas de extinção. Áreas com altíssima riqueza de aves, mamíferos, répteis, anfíbios, peixes, invertebrados e plantas estão protegidas em doze categorias de Unidades de Conservação federais ou estaduais, nos diferentes biomas brasileiros, reduzindo o risco de extinção de muitas delas (WWF, 2014)."
							},
							{
								text:"Diante da grande importância que tem as UCs na manutenção dos ecossistemas nelas encontrados, vale ressaltar a quantidade equiparável ao recorde mundial de biodiversidade de plantas lenhosas por hectare, que foi inventariada na Estação Biológica de Santa Lúcia no município de Santa Teresa, ES (Thomaz & Monteiro, 1997; Conservation International do Brasil et al., 2000).  Outro fato importante em uma Unidade de Conservação do ES, a Reserva Natural Vale, em Linhares, foi a descoberta de uma nova espécie pertencente a um gênero, que até então era monotípico com registros apenas na Amazônia. A Dinizia jueirana-facao, nova espécie da família das Leguminosae, indivíduo com mais de 30 metros de altura e 60 toneladas, comprova como a biodiversidade brasileira está ameaçada, uma vez que a sua descoberta só foi possível por estar protegida em uma UC, caso contrário, possivelmente teria desaparecido antes mesmo de ser descoberta pela ciência (Lewis et al., 2017)."
							}
						]
					},
					{ //page 3
						title:"2.2 Unidades de Conservação no estado do Espírito Santo",
						texts:[
							{
								text:"Atualmente, existem no Brasil 2.376 Unidades de Conservação de administração federal, estadual, municipal ou particular. Destas, 1.364 estão localizadas no bioma Mata Atlântica e representam 9,84% deste bioma (MMA, 2019a)."
							},
							{
								text:"No estado do Espírito Santo existem hoje, 121 Unidades de Conservação protegendo aproximadamente 10,5% dos remanescentes de Mata Atlântica, sendo 12 federais, 17 estaduais, 38 municipais e 54 particulares (SOS Mata Atlântica & INPE, 2019; MMA, 2019b). Embora existam diversos estudos sobre fauna e flora nas Unidades de Conservação do Espírito Santo, este conhecimento encontra-se disperso na literatura livre (relatórios, livros, monografias, dissertações, teses e artigos publicados), em planos de manejo e em espécimes depositados em coleções biológicas. Esta pulverização de informações torna bastante difícil a sua utilização para o entendimento da biodiversidade no estado e o uso destas informações na tomada de decisões. Assim, torna-se extremamente útil e necessário o levantamento e disponibilização destes dados de forma integrada, visando o seu uso no desenvolvimento de políticas públicas e na gestão das UCs e dos recursos naturais do Espírito Santo."
							}
						]
					}
				],
				[ //topic3
					{ //page1
						title:"3. Análise do conhecimento sobre a biodiversidade nas Unidades de Conservação do Espírito Santo",
						texts:[
							{
								title:"3.1 Objetivos",
								text:"As informações levantadas em Unidades de Conservação por diversos pesquisadores em todo o Brasil estão dispersas em artigos científicos, herbários, teses, coleções zoológicas, publicações oficiais, planos de manejo, relatórios, entre outros. Algumas dessas informações são facilmente acessíveis, especialmente aquelas publicadas em revistas eletrônicas de livre acesso, em contrapartida, uma grande quantidade de informações importantes necessita de buscas minuciosas para ser encontrada. Buscando reunir e sistematizar todos os dados da Mata Atlântica dentro das UCs do estado do Espírito Santo, a fim de avaliar a proteção da biodiversidade deste importante bioma, o Instituto Nacional da Mata Atlântica (INMA) idealizou a Rede Integrada da Mata Atlântica (RIMA), através do projeto Rede de Compartilhamento de Dados e Divulgação da Mata Atlântica no estado do Espírito Santo (Proc. 189/2017 – INMA/FAPES/IEMA)."
							},
							{
								text:"Avaliar o nível de proteção da biodiversidade da Mata Atlântica dentro das UCs é um desafio complexo, que só foi possível com muito esforço e trabalho em equipe. Juntamente com gestores das Unidades de Conservação de todo o estado o INMA propôs realizar um diagnóstico sobre a biodiversidade das UCs capixabas, de gestão federal e estadual, que representa o primeiro passo em direção a uma avaliação mais abrangente e contínua, que é a meta do INMA para longo prazo."
							},
							{
								text:"A proposta de elaboração desse diagnóstico foi pensada com base nas respostas das seguintes perguntas:"
							},
							{
								text:"- Qual é a realidade da distribuição do conhecimento da biodiversidade nas Unidades de Conservação federais e estaduais do estado do Espírito Santo?"
							},
							{
								text:"- Quais são os grupos mais amostrados em cada Unidade de Conservação? E quais são os grupos menos amostrados?"
							},
							{
								text:"- Existe algum viés relacionado à riqueza de espécies de determinado grupo? Ou de fato, a distribuição daquele grupo é mais ou menos intensa devido a fatores ambientais da área?"
							},
							{
								text:"- Qual é a importância de cada Unidade de Conservação para os grupos de espécies avaliados? (espécies ou gêneros novos, quantidade de espécies amostradas ao longo dos anos, se maior ou menor em determinado período)."
							},
							{
								text:"- Quais são as análises a respeito dos efeitos de borda nas Unidades de Conservação, quando relacionado à ocupação populacional humana do entorno e o tipo de atividade econômica desenvolvida pela comunidade local? Houve alguma influência na mudança de paisagem da Unidade de Conservação e/ou na distribuição da biodiversidade em seu interior? (análise realizada a partir do número de coletas das espécies por períodos)."
							},
							{
								text:"- Quais as lacunas observadas para as Unidades de Conservação e/ou Grupos de plantas e animais?"
							},
							{
								text:"- Quais as estratégias que podem ser sugeridas para o preenchimento das lacunas observadas?"
							}
						]
					},
					{ //page2
						title:"3.2 Seleção das Unidades de Conservação do estado do Espírito Santo",
						texts:[
							{
								text:"Existem atualmente no Brasil duas metodologias de classificação das Unidades de Conservação, a primeira é internacional, apresentada pela International Union for Conservation of Nature and Natural Resources (IUCN) (Dudley, 2008), e a segunda é nacional, implementada através do Sistema Nacional de Unidades de Conservação da Natureza (SNUC) (MMA, 2011). A classificação da IUCN, adotada nos protocolos de cadastro do Ministério do Meio Ambiente, classifica as UCs em seis categorias (I a VI). Já o SNUC separa as UCs em dois grandes grupos, Unidades de Proteção Integral e Unidades de Uso Sustentável, os quais são subdivididos, respectivamente, por cinco e sete categorias. A lista das categorias da IUCN e do SNUC e suas equivalências aproximadas são apresentadas no Quadro 1."
							},
							{
								frame:require('@/assets/topics/frame1.png'),
								frameDesc:"Categorias e equivalências de classificação das Unidades de Conservação segundo IUCN e SNUC.",
								frameNumber:"Quadro 1"
							},
							{
								text:"Das 29 Unidades de Conservação existentes no estado do Espírito Santo sob administração estadual e federal (Instituto Estadual de Meio Ambiente e Recursos Hídricos – IEMA, e Instituto Chico Mendes de Conservação da Natureza – ICMBio, respectivamente), 20 foram selecionadas para serem incluídas neste diagnóstico (Tabela 1 e Figura 1), e estão enquadradas em todas as Unidades de Proteção Integral do SNUC e categorias I, II e III da IUCN; e em quatro das sete categorias de Unidades de Uso Sustentável, sendo elas as categorias de 3 a 6 do SNUC, correspondentes à categoria VI da IUCN."
							},
							{
								text:"Para esse diagnóstico não foram incluídas as Áreas de Proteção Ambiental (APAs, categoria 1 do SNUC), Áreas de Relevante Interesse Ecológico (ARIE, categoria 2 do SNUC) e Reservas Particulares do Patrimônio Natural (RPPN, categoria 7 do SNUC), correspondentes às categorias IV e V da IUCN. A não inclusão dessas áreas deu-se pelo fato de não haver um conhecimento expressivo e abrangente sobre as mesmas, uma vez que as informações são restritas e pulverizadas, o que dificultaria seus diagnósticos durante o período de execução do projeto. Diante disso, o levantamento e a avaliação da biodiversidade dessas áreas deverão ser incluídos em versões futuras do diagnóstico da biodiversidade da Mata Atlântica capixaba."
							},
							{
								frame:require('@/assets/topics/table1.png'),
								frameDesc:"Categorias e equivalências de classificação das Unidades de Conservação segundo IUCN e SNUC.",
								frameNumber:"Tabela 1"
							},{
								img:require('@/assets/topics/figure1.jpg'),
								imgDesc:"Categorias e equivalências de classificação das Unidades de Conservação segundo IUCN e SNUC.",
								imgNumber:"1",
								width:"650px",
								height:"800px"
							},
						],
					},
					{ //page3
						title:"3.3 Levantamento e análise dos dados",
						texts:[
							{
								text:"As informações utilizadas para a realização desse diagnóstico sobre a biodiversidade das Unidades de Conservação, foram obtidas a partir de documentos oficiais, como planos de manejos, atos legais de criação e Cadastro Nacional de Unidades de Conservação (CNUC - ICMBio, 2018b), além de informações complementares de fontes diversas (referências bibliográficas e sítios da internet)."
							},
							{
								text:"O levantamento dos dados sobre a fauna e a flora nas UCs analisadas nesse diagnóstico, ocorreu em duas etapas distintas, observando a necessidade de metodologias diferentes para os dois reinos em decorrência das particularidades sobre a forma de trabalho, organização e distribuição dos dados pelos pesquisadores. A primeira etapa, comum à fauna e à flora, foi a busca e consulta de teses de doutorado, notas e artigos científicos que tratassem sobre quaisquer aspectos da biodiversidade nas UCs selecionadas. Esse inventário foi iniciado através de consultas a uma ampla compilação de bibliografias, cedidas pelo IEMA, relacionadas às UCs que se encontram sob sua administração (cerca de 315 bibliografias). Para complementar essas informações, foi necessária a realização de buscas em outros materiais na plataforma do Google Acadêmico (https://scholar.google.com.br/), para tanto, utilizou-se como termos de pesquisa, os próprios nomes das UCs."
							},
							{
								text:"O resultado do levantamento bibliográfico sobre as informações da biodiversidade nas UCs foi transcrito para uma planilha no Microsoft  Excel obedecendo aos padrões Darwin Core (DwC). Outras informações também foram consideradas para consulta interna e interpretação dos dados, são elas: bacia e Sub-bacia hidrográfica, categoria de ameaça no ES, categoria de ameaça IUCN, origem da coordenada geográfica (original, alterada, sede do município/localidade), divisão (flora), Clado PDVIG (flora), Unidade de Conservação de ocorrência, origem da informação (artigo, nota ou tese), código da referência bibliográfica utilizada, especificação do estudo (sistemática, ecologia, etc), método de registro de ocorrência (coleta, avistamentos, vocalizações, etc), e tempo do estudo."
							},
							{
								text:"Para a segunda etapa do inventário, a metodologia ocorreu de forma distinta para fauna e flora, baseando-se em diferentes bancos de dados preexistentes. No caso da fauna, foram incluídas três bases de dados distintas, a saber: banco de dados do Projeto “Atualização da Lista de Espécies Ameaçadas de Extinção do Espírito Santo” (INMA/IEMA/FAPES); planilhas de dados disponibilizadas por pesquisadores que colaboraram com o projeto supracitado; e o banco de dados de ictiofauna da Coleção Zoológica Norte Capixaba (CZNC), da UFES de São Mateus. As informações de ocorrências da flora nas UCs foram extraídas de plataformas digitais: GBIF, speciesLink e REFLORA/JABOT e Espécies Ameaçadas de Extinção do ES (Fraga et al., 2019). As ocorrências do specieslink e JABOT foram realizadas a partir de downloads individuais via solicitação. As ocorrências provindas do GBIF foram realizadas usando rotinas em linguagem R (https://www.r-project.org/) em ferramentas do pacote RGBIF (https://www.gbif.org/pt/tool/81747/rgbif). Foram incluídos dados dos Herbários BHCB, BOTU, CEN, CEPEC, CESJ, CVRD, ESA, FLOR, FUEL, FVD, HB, HCF, HEPH, HUEFS, HUFSJ, HUFU, JOI, JPB, MBM, MBML, NYBG, RB, RUSU, SP, SPF, UB, UEC, UFG, UFP, UFPR/UPCB, UPCB, US, VIC, VIES (Acrônimos de acordo com Thiers, 2019) e coleções informais, de acordo com SpeciesLink (2019). A nomenclatura taxonômica segue de acordo com a Flora do Brasil 2020 (em construção), a partir de rotinas disponíveis via scripts em linguagem R, com funções desempenhadas pelo pacote Flora (https://cran.r- project.org/web/packages/flora/index.html). Para ordens e níveis hierárquicos superiores de angiospermas, utilizou-se APG IV (2016) com adaptações, já a nomenclatura de samambaias e embriófitas, deu-se a partir da bibliografia de Judd et al. (2009), Smith et al. (2006) e Goffinet et al. (2008)."
							},
							{
								text:"Os metadados associados às espécies (e.g., distribuição geográfica, fitogeográfica, hábito, forma de vida e status de conservação), foram adquiridos à partir da rotina na interface WEB do Pacote Flora, o Plantminer (http://www.plantminer.com/). As coordenadas geográficas de cada registro de fauna e flora seguem três padrões: (1) coordenada original; (2) coordenada inferida: coordenada aproximada e sugerida pela equipe do projeto com base em localidades, ou provindas de bancos gazeeter (Projeto “Revisão da Lista de Espécies Ameaçadas de Extinção do Espírito Santo”); (3) centroides das UCs: coordenada centroide."
							},
							{
								text:"Além dos dados aqui compilados sobre a biodiversidade, também foram obtidas informações abióticas e ambientais sobre as UCs estaduais e sobre o estado do Espírito Santo, cedidas pelo IEMA. Estes dados incluem bases georreferenciadas contendo limites e zona de amortecimento das UCs, bases hidrológicas, bases geológicas e geomorfológicas, fitofisionomia, uso do solo, áreas de risco de inundações, áreas de risco de incêndio, zonas de licenciamento de mineração, e fiscalização. As bases cartográficas com limites das UCs federais foram obtidas através do endereço eletrônico http://www.icmbio.gov.br/portal/unidades-de-conservacao."
							},
							{
								text:"A obtenção desses dados permitiu ilustrar o quantitativo de registros de ocorrência da fauna e da flora para cada uma das Unidades de Conservação (UCs) envolvidas nesse projeto. Para tanto, foi necessária a organização de uma base cartográfica contemplando informações referentes às UCs, limites políticos estaduais e municipais, hidrografia e rodovias do estado do Espírito Santo. O banco de dados contendo os registros de ocorrências da fauna e da flora foi organizado em planilhas no formato .csv utilizando o software Microsoft Excel, para posterior leitura no software Quantum Gis (QGIS), aplicativo utilizado para a criação da base cartográfica e elaboração dos referidos mapas. Foram elaborados 76 mapas, sendo 36 para contemplar os registros de ocorrências da fauna, e 40 para ilustrar os registros da flora. A apresentação dos dados em cada mapa deu-se de forma distinta para os dois grupos. Para ilustrar os registros da fauna nas UCs optou-se em evidenciar as suas classes, sendo elas: actinopterygii, amphibia, arachnida, aves, chondrichthyes, insecta, malacostraca, mammalia e reptilia; que foram organizadas em dois mapas para cada UC. Já a organização dos dados para ilustrar os registros da flora, deu-se a partir do enfoque na divisão, sendo elas: espermatófitas, embriófitas e samambaias; e no Clado APG IV (angiospermas indefinidas, eudicotiledôneas basais, grado ANA, magnoliídeas, monocotiledôneas, superasterídeas, superrosídeas). "
							},
							{
								text:"Para aprimorar a amostragem dos registros de ocorrência, objetivando ilustrar a situação mais aproximada da realidade, adotou-se uma delimitação de 1 km no entorno de cada Unidade de Conservação, utilizando a técnica do Buffer no QGIS. O entorno foi utilizado como limite de recorte para cada grupo de análise de fauna e flora, permitindo tanto a elaboração dos mapas, quanto a exportação, em formato .txt, dos dados elencados a cada UC aqui analisada, contribuindo assim para a elaboração dos gráficos e tabelas relacionadas às referidas análises."
							},
							{
								text:"Informações nacionais a respeito do estado de ameaça de extinção das espécies de fauna e flora, assim com suas categorias de ameaçadas, foram obtidas a partir dos sete volumes do Livro Vermelho da Fauna Brasileira Ameaçada de Extinção (ICMBIO, 2018a) e do Livro Vermelho da Flora do Brasil (Martinelli & Moraes, 2013), baseados nos atos legais vigentes sobre o assunto. Dados sobre as categorias e estados de ameaça a fauna e flora no Espírito Santo foram obtidos a partir de Fraga et al. (2019), baseados nos resultados do projeto “Revisão da Lista de Espécies Ameaçadas de Extinção do Espírito Santo” (INMA/IEMA/FAPES)."
							},
							{
								text:"A seguir é apresentada a síntese da biodiversidade para cada uma das 20 Unidades de Conservação. A listagem completa das espécies de fauna e flora está apresentada no Anexo I."
							}
						]
					}
				],
				[ //topic4
					{ //page1
						title:"4. Síntese do conhecimento sobre a fauna e a flora nas Unidades de Conservação do ES",
						texts:[
							{
								title:"4.1 Floresta Nacional de Goytacazes",
								text:"A Floresta Nacional de Goytacazes administrada pelo ICMBio, está localizada no município de Linhares, há cerca de 1 km do centro urbano e possui uma área de 1.426,96 ha. A origem do seu nome tem relação com uma etnia indígena, os índios Goytacazes, que habitavam a costa brasileira do sul da Bahia à foz do rio Paraíba do Sul, no Rio de Janeiro. "
							},
							{
								text:"A origem da UC deu-se no ano de 1923, quando o governo do estado do Espírito Santo doou ao governo federal uma área de 1.611,25 ha para a instauração da Fazenda Experimental de Goytacazes, com intuito de constituir uma base de pesquisas sobre a cultura do cacau. Em agosto de 1974, a fazenda foi incorporada ao patrimônio da Empresa Brasileira de Pesquisa Agropecuária (EMBRAPA), que havia sido criada em dezembro de 1972. Em junho de 1976 a EMBRAPA cedeu, em forma de comodato, a fazenda para a Empresa Capixaba de Pesquisa Agropecuária (EMCAPA, atual Instituto Capixaba de Pesquisa, Assistência Técnica e Extensão Rural - INCAPER), pertencente ao governo do Espírito Santo, com o objetivo de desenvolvimento de pesquisas agropecuárias. Como a EMCAPA já possuía uma área antropizada localizada na margem oeste da rodovia BR-101, suficiente para seus estudos, acabou por manter a fazenda inalterada, que se encontrava a leste da rodovia. Embora a área da Fazenda Experimental de Goytacazes já tivesse passado por diversas alterações antrópicas desde a época colonial, o estado de preservação de sua mata nativa era alto quando comparado às demais terras da região, o que levou o governo capixaba a declarar a fazenda como Área de Preservação Permanente em 01 de outubro de 1985, através do Decreto nº 3096-E."
							},
							{
								text:"Diante do excepcional estado de preservação da área da Fazenda Goytacazes e da importância que este remanescente florestal poderia ter na preservação da biodiversidade local, na produção de sementes de vegetais da Mata Atlântica e na composição de um corredor ecológico para este bioma, a área foi transformada em Floresta Nacional através do decreto presidencial em 28 de novembro de 2002. A área da UC, que ligava os estados da Bahia, Espírito Santo e Rio de janeiro, foi ampliada em 73,96 ha por meio do Decreto Presidencial de 05 de junho de 2012, que também revogou o decreto de 2002, e compôs assim a sua atual área total. O plano de manejo da UC é relativamente recente, criado em 2013 (ICMBIO, 2013a), e é considerado um dos mais atualizados e completos dentre as unidades aqui avaliadas. "
							},
							{
								text:"De acordo com o Decreto Presidencial de 28 de novembro de 2002, a UC tem como objetivos: "
							},
							{
								text:"- Promover o manejo de uso múltiplo dos recursos naturais;"
							},
							{
								text:"- Promover a manutenção e a proteção dos recursos hídricos e da biodiversidade;"
							},
							{
								text:"- Promover a recuperação de áreas degradadas;"
							},
							{
								text:"- Promover a educação ambiental; "
							},
							{
								text:"- Apoiar o desenvolvimento de métodos de exploração sustentável dos recursos naturais das áreas limítrofes;"
							},
							{
								text:"- Manter a diversidade. "
							},
							{
								text:"A formação vegetal desta UC é composta majoritariamente por mata secundária em estágio avançado de regeneração. O ecossistema presente na unidade é a Floresta Ombrófila Densa Aluvial, fazendo parte da planície aluvial do rio Doce, que é a maior bacia hidrográfica do estado do Espírito Santo, e cuja margem direita compõe o limite norte da FLONA. Embora a UC esteja localizada na área de inundação do rio Doce, o seu interior não conta com nenhum corpo d’água perene, ocorrendo apenas áreas alagadas formadas após as cheias ou chuvas de verão."
							},
							{
								text:"Os impactos antrópicos mais relevantes para a UC são a caça, a retirada de palmito, a extração de madeira e o despejo de lixo próximo de seus limites externos (ICMBIO, 2013b), além da poluição do rio Doce. A FLONA de Goytacazes faz parte do corredor ecológico capixaba SOCONGO (Sooretama-Comboios-Goytacazes), criado por meio do Decreto Estadual nº 2529-R, em 02 de junho de 2010."
							},
							{
								text:"De acordo com o plano de manejo da UC (ICMBIO, 2013b), sua fauna é composta por 661 espécies animais, sendo: 306 insetos, 44 anfíbios, 43 répteis, 204 aves e 64 mamíferos. Devido à ausência de corpos d’água dentro da UC, não há registro de espécies de peixes na mesma. Já a flora compreende 291 espécies, sendo cinco exóticas encontradas junto às trilhas, estradas, brejos e macegas."
							},
							{
								text:"O levantamento da biodiversidade da UC revelou 570 ocorrências de organismos de fauna e flora (Figuras 2-5; Tabelas 2 e 3) pertencentes a 310 espécies, sendo 170 ocorrências de fauna (99 espécies) e 400 ocorrências de flora (211 espécies). Esses dados são resultados de coletas realizadas na UC a partir de 1930, tendo seu ápice amostral no quinquênio de 2006-2010 para a fauna e 2011-2015 para a flora (Figura 6). Quarenta e dois registros não continham data de coleta e não puderam ser incluídos na análise gráfica, sendo 32 de fauna e 10 de flora. "
							},
							{
								img:require('@/assets/topics/figure2.jpg'),
								imgDesc:"Mapa da distribuição dos registros de fauna, representando as Classes Amphibia e Reptilia, ocorrentes na Floresta Nacional de Goytacazes.",
								imgNumber:2
							},
							{
								img:require('@/assets/topics/figure3.jpg'),
								imgDesc:"Mapa da distribuição dos registros de fauna, representando as Classes Actinopterygii, Arachnida, Insecta e Mammalia, ocorrentes na Floresta Nacional de Goytacazes.",
								imgNumber:3,
								width:"900px",
								height:"636px"
							},
							{
								img:require('@/assets/topics/figure4.jpg'),
								imgDesc:"Mapa da distribuição dos registros de flora, representando as Divisões Espermatófitas e Samambaias, ocorrentes na Floresta Nacional de Goytacazes.",
								imgNumber:4,
								width:"900px",
								height:"636px"
							},
							{
								img:require('@/assets/topics/figure5.jpg'),
								imgDesc:"Mapa da distribuição dos registros de flora, representando os Clados APG IV: Eudicotiledôneas basais, Magnoliídeas, Monocotiledôneas, Superasterídeas e Superrosídeas, ocorrentes na Floresta Nacional de Goytacazes.",
								imgNumber:5
							},
							{
								frame:require('@/assets/topics/table2.png'),
								frameDesc:"Distribuição de registros e espécies entre os grupos de fauna na Floresta Nacional de Goytacazes.",
								frameNumber:"Tabela 2"
							},
							{
								frame:require('@/assets/topics/table3.png'),
								frameDesc:"Distribuição de registros e espécies entre os grupos de flora na Floresta Nacional de Goytacazes.",
								frameNumber:"Tabela 3"
							},
							{
								img:require('@/assets/topics/figure6.png'),
								imgDesc:"Gráfico demonstrativo de número de coletas de fauna e flora realizadas na Floresta Nacional de Goytacazes, ao longo do tempo.",
								imgNumber:6
							},
							{
								text:"O levantamento da fauna revelou que os grupos com maior representatividade de registros são os répteis seguidos dos insetos, com 81 e 72 registros, respectivamente. Contudo, os grupos mais diversos são os insetos, com 58 espécies, e os répteis, com 29 espécies. A diversidade faunística abrange 19 famílias, sendo que as 10 mais representativas, quanto ao número de registros, são apresentadas na Figura 7 e representam 91% dos registros. Dentre as famílias de fauna com maior número de registros, destacam-se as serpentes da família Dipsadidae, com 51 registros para 15 espécies, e os insetos da família Culicidae, com 47 registros para 33 espécies, que mostraram a maior diversidade dentre as famílias, seguidos dos insetos da família Tephritidae com 23 espécies."
							},
							{
								text:"Das espécies registradas na UC, três estão ameaçadas de extinção no Espírito Santo, sendo duas categorizadas como Vulnerável (VU) e uma Em Perigo (EN). Com relação à lista nacional das espécies ameaçadas de extinção, este número é menor, sendo que duas espécies são consideradas ameaçadas, estando na categoria VU (Anexo I)."
							},
							{
								img:require('@/assets/topics/figure7.png'),
								imgDesc:"Gráfico das famílias mais representativas no inventário faunístico da Floresta Nacional de Goytacazes.",
								imgNumber:7
							},
							{
								text:"No levantamento da flora, o grupo mais representativo foi o das angiospermas com 364 registros, 185 espécies, pertencentes a 75 famílias. Logo após, está o grupo das samambaias com 27 registros, 20 espécies e nove famílias. Um total de 89 ocorrências (22% dos registros totais) refere-se a espécimes identificados apenas em nível de família. A maior diversidade florística de angiospermas levantada, pertence à clados derivados, a saber: superrosídeas, com mais da metade dos registros e espécies levantados, seguidas por superasterídeas, com 29% das espécies de espermatófitas. Os demais clados de angiospermas representados foram, em ordem decrescente de abundância de registros e riqueza: monocotiledôneas, magnoliídeas e eudicotiledôneas basais como mostra a Tabela 3. As famílias com maior número de espécies foram Fabaceae, com 18 espécies, Myrtaceae com 14 e Rubiaceae com 13 espécies. Entre as samambaias, apenas espécies de monilófitas constam no inventário, sendo Pteridaceae a família mais representativa, com 12 registros e oito espécies (Figura 8). "
							},
							{
								text:"Das espécies de plantas levantadas, 13 estão ameaçadas de extinção a nível nacional, sendo cinco VU, quatro EN e quatro CR. Já regionalmente, a UC possui 28 espécies ameaçadas, sendo 12 VU, 13 EN e três CR (Anexo I). A Riodocea pulcherrima Delprete é um exemplo de espécie pertencente a um gênero novo, descrito a partir de coletas realizadas nas proximidades da UC que encontra-se na categoria de ameaça EN em ambas as listas consultadas neste estudo."
							},
							{
								img:require('@/assets/topics/figure8.png'),
								imgDesc:"Gráfico das famílias mais representativas no inventário florístico da Floresta Nacional de Goytacazes.",
								imgNumber:8
							},
						]
					},
					{ //page2
						title:"4.2 Floresta Nacional de Pacotuba",
						texts:[
							{
								text:"Com apenas 450,59 ha, a Floresta Nacional de Pacotuba é a segunda menor Unidade de Conservação incluída nesse diagnóstico. É administrada pelo ICMBio e está localizada integralmente no município de Cachoeiro de Itapemirim, no sul do estado do Espírito Santo."
							},
							{
								text:"A área da UC pertencia, originalmente, ao governo do estado do ES e foi adquirida em agosto de 1929 por um morador local com a denominação de Morro Seco e Bananal. Em janeiro de 1950, parte do terreno contendo 682,14 ha e denominado de Fazenda Bananal, foi vendido para o governo federal, colocando-o sob responsabilidade da Empresa Brasileira de Assistência Técnica e Extensão Rural (EMBRATER, Ministério da Agricultura), nomeando a área de Fazenda Regional de Criação de Bananal do Norte. Semelhante ao ocorrido com a FLONA de Goytacazes, em fevereiro de 1980, o governo federal cedeu parte da fazenda em comodato à Empresa Capixaba de Pesquisa Agropecuária (EMCAPA, atual Instituto Capixaba de Pesquisa, Assistência Técnica e Extensão Rural - INCAPER). O governo do Espírito Santo declarou então cerca de 300 ha da área como de preservação vegetal permanente em 30 de setembro de 1985, através do Decreto nº 3094-E, um dia antes da publicação do decreto de preservação da UC. Diante do bom estado de conservação da área e de sua potencial importância na produção de sementes de plantas nativas, o Ministério do Meio Ambiente (MMA) interessou-se em incluí-la no projeto “Rede de Sementes Florestais Nativas”, sendo transformada em Floresta Nacional por meio do Decreto Presidencial de 13 de dezembro de 2002. Seu nome foi assim determinado por estar inserida no distrito de Pacotuba, e que em linguagem tupi significa “muitas bananas”, uma alusão a grande quantidade de bananeiras que eram encontradas na região."
							},
							{
								text:"O ecossistema presente na UC é a Floresta Estacional Semidecidual Submontana, também chamada Floresta Tropical Subcaducifólia Submontana. A UC encontra-se à margem esquerda do rio Itapemirim, que é a terceira maior bacia hidrográfica do Espírito Santo (precedido pelas bacias dos rios Doce e São Mateus), e possui diversos corpos d’água perenes e não perenes afluentes desta bacia. Sua formação vegetal é composta majoritariamente por mata primária e os impactos antrópicos mais relevantes estão relacionados à caça, pesca no rio Itapemirim e retirada de madeira (ICMBIO, 2011).  A UC possivelmente faz parte de um importante corredor ecológico conectado-se aos Parques Estaduais de Pedra Azul, Forno Grande e Mata das Flores. O plano de manejo foi criado em 2011."
							},
							{
								text:"De acordo com o Decreto Presidencial de 13 de dezembro de 2002 a FLONA de Goytacazes tem como objetivos:"
							},
							{
								text:"- Promover o manejo de uso múltiplo dos recursos naturais;"
							},
							{
								text:"- Promover a manutenção e a proteção dos recursos hídricos e da biodiversidade;"
							},
							{
								text:"- Promover a recuperação de áreas degradadas;"
							},
							{
								text:"- Promover a educação ambiental; "
							},
							{
								text:"- Apoiar o desenvolvimento de métodos de exploração sustentável dos recursos naturais das áreas limítrofes."
							},
							{
								text:"De acordo com o plano de manejo da UC (ICMBIO, 2011), sua fauna é composta por 638 espécies, sendo: 280 insetos, 25 peixes (22 no rio Itapemirim e três nos corpos d’água internos), 23 anfíbios, 20 répteis, 261 aves e 29 mamíferos. Já a flora compreende 324 espécies, sendo nove exóticas encontradas em macegas e áreas de reflorestamento."
							},
							{
								text:"O levantamento da biodiversidade da UC revelou 737 ocorrências de organismos de fauna e flora (Figuras 9-11; Tabelas 4 e 5) pertencentes a 372 espécies, sendo 17 ocorrências de fauna (12 espécies) e 720 ocorrências de flora (360 espécies). Esses dados são resultados de coletas realizadas na UC a partir de 1941 com um registro de flora. As amostragens seguintes de flora foram realizadas em 1972 e de forma mais consistente a partir de 1990. As amostragens de fauna ocorreram a partir de 1990 com apenas um registro, tornando-se mais frequentes a partir de 2004. O ápice amostral na FLONA ocorreu no quinquênio de 2011-2015 para a fauna e de 1991-1995 para a flora (Figura 12). Um total de dez registros de flora e de fauna encontra-se sem data de coleta e não puderam ser incluídos na análise gráfica. "
							},
							{
								img:require('@/assets/topics/figure9.jpg'),
								imgDesc:"Mapa da distribuição dos registros de fauna, representando as Classes Amphibia, Insecta, Mammalia e Reptilia, ocorrentes na Floresta Nacional de Pacotuba.",
								imgNumber:9
							},
							{
								img:require('@/assets/topics/figure10.jpg'),
								imgDesc:"Mapa da distribuição dos registros de flora, representando as Divisões Espermatófitas e Samambaias, ocorrentes na Floresta Nacional de Pacotuba.",
								imgNumber:10
							},
							{
								img:require('@/assets/topics/figure11.jpg'),
								imgDesc:"Mapa da distribuição dos registros de flora, representando os Clados APG IV: Eudicotiledôneas basais, Magnoliídeas, Monocotiledôneas, Superasterídeas e Superrosídeas, ocorrentes na Floresta Nacional de Pacotuba.",
								imgNumber:11
							},
							{
								frame:require('@/assets/topics/table4.png'),
								frameDesc:"Distribuição de registros e espécies entre os grupos de fauna na Floresta Nacional de Pacotuba.",
								frameNumber:"Tabela 4"
							},
							{
								frame:require('@/assets/topics/table5.png'),
								frameDesc:"Distribuição de registros e espécies entre os grupos de flora na Floresta Nacional de Pacotuba.",
								frameNumber:"Tabela 5"
							},
							{
								img:require('@/assets/topics/figure12.png'),
								imgDesc:"Gráfico demonstrativo de número de coletas de fauna e flora realizadas na Floresta Nacional de Pacotuba, ao longo do tempo.",
								imgNumber:12
							},
							{
								text:"O levantamento da fauna revelou que os grupos com maior representatividade de registros são os insetos, com 12 registros, seguido dos mamíferos com três registros e dos anfíbios e répteis com um registro cada. Estes também são os grupos mais diversos da UC, sendo que foram levantadas sete espécies de insetos, três de mamíferos, uma espécie de anfíbio e uma de répteis. A diversidade faunística abrange seis famílias apresentadas na Figura 13, sendo que o grupo dos mamíferos possui o maior número de famílias (três), com uma espécie registrada para cada família. Todos os registros da classe Insecta pertencem à família Chrysopidae (bicho-lixeiro, ordem Neuroptera)."
							},
							{
								text:"Nenhuma espécie registrada na UC encontra-se ameaçada de extinção, tanto no ES, quanto na lista nacional das espécies ameaçadas."
							},
							{
								img:require('@/assets/topics/figure13.png'),
								imgDesc:"Gráfico das famílias mais representativas no inventário faunístico da Floresta Nacional de Pacotuba.",
								imgNumber:13
							},
							{
								text:"No levantamento da flora, o grupo mais representativo foi o das angiospermas com 653 registros, 317 espécies, pertencentes a 80 famílias. Logo após, está o grupo das samambaias com 67 registros, 43 espécies e 13 famílias. Um total de 134 ocorrências (19% dos registros totais) refere-se a espécimes identificados apenas em nível de família. A maior diversidade florística de angiospermas levantada para a UC, pertence à clados derivados, a saber: superrosídeas, com mais de metade dos registros e espécies levantadas, superasterídeas, representando 25% dos registros de espermatófitas. Os demais clados de angiospermas representados foram, em ordem decrescente de abundância de registros e riqueza: monocotiledôneas, magnoliídeas e eudicotiledôneas basais (Tabela 9). As famílias com maior número de espécies foram Fabaceae, com 51 espécies, e Rubiaceae com 20 espécies. Entre as samambaias, apenas espécies de monilófitas constam no inventário, com ampla maioria de registros e espécies da classe Polypodiopsida, e apenas dois registros de uma espécie da classe Marattiopsida. A família com maior riqueza de espécies deste grupo foi Pteridaceae, com 11 espécies (Figura 14)."
							},
							{
								img:require('@/assets/topics/figure14.png'),
								imgDesc:"Gráfico das famílias mais representativas no inventário florístico da Floresta Nacional de Pacotuba.",
								imgNumber:14
							},
							{
								text:"Das espécies de plantas levantadas, 20 encontram-se ameaçadas de extinção a nível nacional, sendo oito espécies classificadas na categoria VU, oito EN e quatro CR. Já a nível estadual, a UC possui 36 espécies ameaçadas, sendo 18 VU, 10 EN e oito CR (Anexo I). As espécies de samambaia Goniopteris salinoi I. O. Moura & L. C. Moura e Oxalis kuhlmannii Lourteig, foram descritas a partir de coletas realizadas na área da Floresta Nacional de Pacotuba e encontram-se ameaçadas de extinção, a primeira como CR a nível estadual, e a segunda como CR A nível estadual e nacional (Anexo I)."
							},
						]
					},
					{ //page3
						title:"4.3 Floresta Nacional do Rio Preto",
						texts:[
							{
								text:"A Floresta Nacional do Rio Preto é uma Unidade de Conservação com área de aproximadamente 2.830 ha administrada pelo ICMBio e localizada integralmente no município de Conceição da Barra, no norte do Espírito Santo. A origem do nome da UC tem relação com o Rio Preto do Norte, um dos principais tributários da bacia do rio Itaúnas, que cruza a UC no sentido oeste/leste quase no meio de sua extensão latidudinal, e cujos afluentes banham toda a área da FLONA."
							},
							{
								text:"A história da UC tem início entre as décadas de 1950 e 1960, quando as florestas de tabuleiro do norte do Espírito Santo ainda eram formadas por matas primárias e passaram a ser exploradas de forma extremamente intensa e desordenada (Souza & Resende, 1999; Santos, 2016; Ruschi, 1950 e 1969). Essa exploração deu-se em 1954, principalmente após a inauguração da ponte sobre o rio Doce, no município de Linhares na atual BR-101, o que facilitou o acesso à região e o transporte de seus recursos madeireiros. A exploração na região deu-se na forma da supressão quase total da vegetação para de uso de suas madeiras, instalação de culturas e para o assentamento dos trabalhadores dos novos empreendimentos exploratórios, atividades associadas à época com a percepção de “chegada do progresso”. Na ocasião, a madeireira Cobraice (Companhia Brasileira de Indústria e Comercio S/A) adquiriu e explorou toda a região onde atualmente encontra-se a FLONA do Rio Preto. Estima-se que a empresa foi responsável pela derrubada de aproximadamente 53.240 ha de madeira de lei (Souza & Resende, 1999), restando a área da UC como um remanescente florestal (Rezende, 2014), logo após esses episódios, na década de 1970, a área foi vendida para a Acesita Energética S/A (atual Aperam Bioenergética S/A), subsidiária da então siderúrgica estatal Companhia Aços Especiais de Itabira (posteriormente renomeada ArcelorMittal Inox Brasil e atualmente Aperam South America). A subsidiária produzia carvão vegetal para alimentação dos fornos da usina da Acesita em Timóteo, na região do “Vale do Aço”, também conhecida como “Vale do Rio Doce” em Minas Gerais. Em 1985 a área atual da UC foi mantida pela Acesita como área de Reserva Legal até ser doada para o governo federal como pagamento da multa relativa ao Plano de Reposição Ambiental instaurado pelo Instituto Brasileiro de Desenvolvimento Florestal (IBDF) atual Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis (IBAMA) (Rezende, 2014). A área de reserva legal foi transformada em Unidade de Conservação por meio do Decreto Presidencial nº 98.845 de 17 de janeiro de 1990, criando assim a Floresta Nacional do Rio Preto."
							},
							{
								text:"O plano de manejo da UC foi criado há mais de 20 anos por docentes do Departamento de Engenharia Florestal da Universidade Federal de Viçosa - UFV (Souza & Resende, 1999) e tem como objetivos gerais a promoção das seguintes atividades:"
							},
							{
								text:"- Uso múltiplo sustentado de produtos florestais madeireiros e não madeireiros; "
							},
							{
								text:"- Conservação da biodiversidade; "
							},
							{
								text:"- Recreação e lazer;"
							},
							{
								text:"- Educação ambiental; "
							},
							{
								text:"- Pesquisas científicas básicas e aplicadas;"
							},
							{
								text:"- Educação para o trabalho; "
							},
							{
								text:"- Desenvolvimento ambiental, socioeconômico e cultural da região."
							},
							{
								text:"A FLONA do Rio Preto é composta pelo ecossistema da Floresta Ombrófila Densa de Terras Baixas (também conhecida como Floresta Tropical Pluvial de Terras Baixas) e encontra-se inserida na bacia hidrográfica do rio Itaúnas, que é a quarta maior drenagem do Espírito Santo e a mais setentrional do estado. A formação vegetal da UC é composta majoritariamente por mata secundária em avançado estágio de regeneração. Os impactos antrópicos mais relevantes estão relacionados à caça e à retirada de madeira (Souza & Resende, 1999), além da presença de espécies exóticas ou invasoras e da seca ou redução de volume dos corpos d’água na drenagem do Rio Preto do Norte."
							},
							{
								text:"De acordo com o plano de manejo (Souza & Resende, 1999) sua fauna é composta por 295 espécies sendo: 21 anfíbios, 15 répteis, 212 aves e 47 mamíferos. O documento incluiu apenas vertebrados terrestres, não havendo informações sobre invertebrados ou peixes. Já a flora compreende, pelo menos, 361 espécies arbóreas e de cipós, porém, não apresenta listas ou número preciso."
							},
							{
								text:"O levantamento da biodiversidade da UC revelou 1.580 ocorrências de organismos de fauna e flora (Figuras 15-18; Tabelas 6 e 7) pertencentes a 394 espécies, sendo 395 ocorrências de fauna (139 espécies) e 1.185 ocorrências de flora (255 espécies). Esses dados são resultados de coletas realizadas na UC a partir de 1997, tendo seu ápice amostral no quinquênio de 2006-2010 para a fauna e 2016-2020 para a flora (Figura 19). Um total de 63 registros de fauna encontra-se sem data de coleta e não puderam ser incluídos na análise gráfica. "
							},
							{
								img:require('@/assets/topics/figure15.jpg'),
								imgDesc:"Mapa da distribuição dos registros de fauna, representando as Classes Amphibia, Aves e Reptilia, ocorrentes na Floresta Nacional do Rio Preto.",
								imgNumber:15
							},
							{
								img:require('@/assets/topics/figure16.jpg'),
								imgDesc:"Mapa da distribuição dos registros de fauna, representando as Classes Actinopterygii, Arachnida, Insecta e Mammalia, ocorrentes na Floresta Nacional do Rio Preto.",
								imgNumber:16
							},
							{
								img:require('@/assets/topics/figure17.jpg'),
								imgDesc:"Mapa da distribuição dos registros de flora, representando as Divisões Espermatófitas e Samambaias, ocorrentes na Floresta Nacional do Rio Preto.",
								imgNumber:17
							},
							{
								img:require('@/assets/topics/figure18.jpg'),
								imgDesc:"Mapa da distribuição dos registros de flora, representando os Clados APG IV: Eudicotiledôneas basais, Grado ANA, Magnoliídeas, Monocotiledôneas, Superasterídeas e Superrosídeas, ocorrentes na Floresta Nacional do Rio Preto.",
								imgNumber:18
							},
							{
								frame:require('@/assets/topics/table6.png'),
								frameDesc:"Distribuição de registros e espécies entre os grupos de fauna na Floresta Nacional do Rio Preto.",
								frameNumber:"Tabela 6"
							},
							{
								frame:require('@/assets/topics/table7.png'),
								frameDesc:"Distribuição de registros e espécies entre os grupos de flora na Floresta Nacional do Rio Preto.",
								frameNumber:"Tabela 7"
							},
							{
								img:require('@/assets/topics/figure19.png'),
								imgDesc:"Gráfico demonstrativo de número de coletas de fauna e flora realizadas na Floresta Nacional do Rio Preto, ao longo do tempo.",
								imgNumber:19
							},
							{
								text:"O levantamento da fauna na UC revelou que os grupos com maior representatividade de registros são os anfíbios e os répteis, com 141 e 87 registros respectivamente. Os grupos mais diversos da fauna no âmbito da UC, sendo que foram os insetos com 40 espécies e répteis com 37 espécies. A diversidade faunística para essa UC abrange 49 famílias, sendo que as 10 mais representativas somam 73% dos registros (Figura 20). Dentre as famílias de fauna com maior número de registros, destaca-se uma família de Amphibia, as pererecas da família Hylidae, com 53 registros para 13 espécies, e as abelhas da família Apidae, com 46 registros para 23 espécies. As famílias com maior diversidade são as abelhas da família Apidae (Insecta) com 23 espécies, e as pererecas da família Hylidae, com 13 espécies."
							},
							{
								text:"Do total de espécies registradas na UC, cinco estão ameaçadas de extinção no Espírito Santo, sendo três categorizadas como VU e duas EN. Com relação à lista nacional das espécies ameaçadas de extinção, este número permanece inalterado, com quatro espécies VU e uma espécie EN (Anexo I)."
							},
							{
								img:require('@/assets/topics/figure20.png'),
								imgDesc:"Gráfico das famílias mais representativas no inventário faunístico da Floresta Nacional do Rio Preto.",
								imgNumber:20
							},
							{
								text:"No levantamento da flora, o grupo mais representativo foi o das angiospermas com 1024 registros, 217 espécies, pertencentes a 89 famílias. Logo após, está o grupo das monilófitas com 159 registros, 38 espécies e 14 famílias. O total de 293 ocorrências refere-se a espécimes identificados apenas em nível de família. A maior abundância de registros e diversidade florística de angiospermas pertence aos seguintes clados: superrosídeas, com quase a metade dos registros e espécies levantadas, seguidas por superasterídeas, os demais clados de angiospermas representados foram, em ordem decrescente de abundância de registros e riqueza: monocotiledôneas, magnoliídeas, eudicotiledôneas basais e Grado ANA como mostra a Tabela 7. Aas famílias com maior número de espécies foram Fabaceae e Asteraceae, com 15 e 11 espécies, respectivamente. Entre as samambaias, apenas espécies de monilófitas constam no inventário, representadas por espécies da classe Polypodiopsida, e apenas dois registros sem identificação de Lycopodiceae. A família com maior riqueza de espécies deste grupo foi Pteridaceae, com 11 espécies (Figura 21)."
							},
							{
								text:"Das espécies de plantas levantadas, cinco estão ameaçadas de extinção a nível nacional, sendo três espécies classificadas como VU e duas EN. Já a nível estadual, a UC possui 16 espécies ameaçadas, sendo nove VU e sete EN (Anexo I)."
							},
							{
								img:require('@/assets/topics/figure21.png'),
								imgDesc:"Gráfico das famílias mais representativas no inventário florístico da Floresta Nacional do Rio Preto.",
								imgNumber:21
							}
						]
						
					},
					{ //page4
						title:"4.4 Monumento Natural dos Pontões Capixabas",
						texts:[
							{
								text:"O Monumento Natural dos Pontões Capixabas está localizado no norte do Espírito Santo nos municípios de Pancas (86,86% da UC) e Águia Branca (13,14% da UC) (ISA, 2020), sob administração do ICMBio. A UC possui uma área total de aproximadamente 17.496 ha divididos em três áreas, sendo a maior no município de Pancas, a menor em Águia Branca e uma área intermediária, contígua a menor, ocupando os dois municípios."
							},
							{
								text:"A UC foi criada originalmente como Parque Nacional (PARNA) através do Decreto Presidencial de 19 de dezembro de 2002, visando preservar parte do vasto conjunto de afloramentos de maciços graníticos da região, de importância cênica e paisagística. Os impactos antrópicos mais comuns na região são a transformação de matas em pastagens, o turismo cênico e de aventura (alpinismo e asa-delta), e a mineração de granito (atividade comum na parte ocidental da região norte do estado). Posteriormente, o PARNA foi readequado à categoria de MONA por meio da Lei nº 11.686 de 02, de junho de 2008 indicando como objetivos:"
							},
							{
								text:"- Preservar os pontões rochosos, a flora e a fauna a eles associadas;"
							},
							{
								text:"- Preservar a paisagem formada pelos elementos naturais e culturais tradicionais."
							},
							{
								text:"Ainda de acordo com a Lei nº 11.686, o MONA permite o uso de suas terras e dos recursos naturais do local pelos proprietários, desde que não comprometam a preservação dos pontões, da fauna e da flora associadas e da paisagem, conforme o disposto no plano de manejo. Contudo, apesar da permissão de uso de sua área estar condicionada às diretrizes de seu plano de manejo, e de ser um importante ponto turístico na região, esta é uma das seis UC incluídas no presente estudo que não possui tal documento."
							},
							{
								text:"A UC é formada por dois ecossistemas da Mata Atlântica, a saber: Floresta Ombrófila Densa, conhecida também como Floresta Tropical Pluvial, e a Floresta Estacional Semidecidual, conhecida como Floresta Tropical Subcaducifólia. De acordo com ISA (2020), este último ecossistema é predominante na UC, ocupando 65,55% de sua área, embora Garbin et al. (2017) indiquem apenas a ocorrência deste ecossistema, e por outro lado, o MMA (2019b) indica apenas a ocorrência da Floresta Ombrófila Densa."
							},
							{
								text:"A UC encontra-se inserida na bacia do rio Pancas, um tributário da bacia hidrográfica do rio Doce, que é a maior drenagem do Espírito Santo e separa geograficamente a região norte do estado. A vegetação da UC é composta por fragmentos de vegetação nativa (MMA, 2019b), mas uma vez que não há plano de manejo para a área, não há informações sobre a fitofisionomia predominante na UC, assim como também não existem dados oficiais sobre a composição de sua fauna e flora. "
							},
							{
								text:"O levantamento da biodiversidade da UC revelou 229 ocorrências de organismos de fauna e flora (Figuras 22-24; Tabelas 8 e 9) pertencentes a 97 espécies, sendo 104 ocorrências de fauna (35 espécies) e 125 ocorrências de flora (62 espécies). Esses dados são resultados de coletas realizadas na UC a partir de 2003, tendo seu ápice amostral no quinquênio de 2006-2010 para a fauna e 2011-2015 para a flora (Figura 25). Apenas três ocorrências de flora encontram-se sem data de coleta e não puderam ser incluídos na análise gráfica."
							},
							{
								img:require('@/assets/topics/figure22.jpg'),
								imgDesc:"Mapa da distribuição dos registros de fauna, representando as Classes Actinopterygii, Insecta e Mammalia, ocorrentes no Monumento Natural dos Pontões Capixabas.",
								imgNumber:22
							},
							{
								img:require('@/assets/topics/figure23.jpg'),
								imgDesc:"Mapa da distribuição dos registros de flora, representando as Divisões Espermatófitas e Samambaias, ocorrentes no Monumento Natural dos Pontões Capixabas.",
								imgNumber:23
							},
							{
								img:require('@/assets/topics/figure24.jpg'),
								imgDesc:"Mapa da distribuição dos registros de flora, representando os Clados APG IV: Magnoliídeas, Monocotiledôneas, Superasterídeas e Superrosídeas, ocorrentes no Monumento Natural dos Pontões Capixabas.",
								imgNumber:24
							},
							{
								frame:require('@/assets/topics/table8.png'),
								frameDesc:"Distribuição de registros e espécies entre os grupos de fauna no Monumento Natural dos Pontões Capixabas",
								frameNumber:"Tabela 8"
							},
							{
								frame:require('@/assets/topics/table9.png'),
								frameDesc:"Distribuição de registros e espécies entre os grupos de flora no Monumento Natural dos Pontões Capixabas.",
								frameNumber:"Tabela 9"
							},
							{
								img:require('@/assets/topics/figure25.png'),
								imgDesc:"Gráfico demonstrativo de número de coletas de fauna e flora realizadas no Monumento Natural dos Pontões Capixabas, ao longo do tempo.",
								imgNumber:25
							},
							{
								text:"O levantamento da fauna da UC revelou que os grupos com maior representatividade de registros são os mamíferos seguidos dos peixes, com 69 e 31 registros, respectivamente. O outro grupo de fauna registrado foi o grupo dos insetos com quatro registros. Os mamíferos e os peixes são os grupos mais diversos, sendo representados por 16 e 15 espécies, respectivamente. A diversidade faunística levantada para a UC abrange 10 famílias, as quais são apresentadas na Figura 26. Dentre as famílias de fauna com maior número de registros, destacam-se os gambás e cuícas da família Didelphidae, com 45 registros para seis espécies, e os roedores da família Cricetidae, com 16 registros para oito espécies. As duas famílias supracitadas também são as de maior diversidade na UC. "
							},
							{
								text:"Nenhuma das espécies registradas na UC encontra-se ameaçada de extinção tanto a nível estadual, quanto nacional."
							},
							{
								img:require('@/assets/topics/figure26.png'),
								imgDesc:"Gráfico das famílias mais representativas no inventário faunístico do Monumento Natural dos Pontões Capixabas.",
								imgNumber:26
							},
							{
								text:"No levantamento da flora, o grupo mais representativo foi o das angiospermas com 125 registros, 62 espécies, pertencentes a 36 famílias. Logo após, está o grupo das monilófitas com 19 registros, 15 espécies e seis famílias, seguido das licopodófitas com cinco registros, duas espécies em uma família apenas. Um total de 17 ocorrências (13,6% dos registros totais) refere-se a espécimes identificados apenas em nível de família. A maior abundância de registros e diversidade florística de angiospermas levantada para a UC, pertence aos clados: superasterídeas e superrrosídeas, somando também a maior parte dos registros de espermatófitas, seguidas por monocotiledôneas e magnoliídeas. A família com maior número de espécies de angiospermas foi a Bromeliaceae, com cinco espécies (Figura 27). Entre as samambaias a maior abundância de registros, bem como diversidade de espécies está entre as monilófitas, na família Pteridaceae com cinco espécies inventariadas."
							},
							{
								text:"Das espécies de plantas, sete estão ameaçadas de extinção a nível nacional, sendo duas espécies classificadas na categoria VU, duas EN e três CR. Já a nível estadual, a UC possui 16 espécies ameaçadas, sendo seis VU, sete EN e três CR (Anexo I)."
							},
							{
								img:require('@/assets/topics/figure27.png'),
								imgDesc:"Gráfico das famílias mais representativas no inventário florístico do Monumento Natural dos Pontões Capixabas.",
								imgNumber:27
							},
						]
					},
					{ //page5
						title:"4.5 Monumento Natural o Frade e a Freira",
						texts:[
							{
								text:"O Monumento Natural O Frade e a Freira é uma Unidade de Conservação estadual administrada pelo IEMA e localizada no sul do Espírito Santo na divisa dos municípios de Vargem Alta, Itapemirim e Cachoeiro de Itapemirim. A UC possui uma área total de aproximadamente 861,40 ha, sendo que cerca da metade desta área pertence ao município de Itapemirim estando a 8 km do centro urbano de Cachoeiro de Itapemirim, município com menor área dentro da UC."
							},
							{
								text:"A região possui forte importância turística e cultural ligada tanto às atividades cênicas e de aventura (alpinismo e caminhada), quanto às diversas lendas que explicam o formato único do afloramento rochoso granítico, cuja forma lembra duas figuras religiosas se olhando, uma masculina que representa um Frei e uma feminina, representando uma Freira. Devido a esta importância cênica e cultural, o conjunto granítico foi declarado, em 1986, como Patrimônio Histórico Cultural pelo Conselho Estadual de Cultura através da Resolução nº 07, de 12 de junho daquele ano. Nove anos depois de seu tombamento cultural, a área tornou-se uma UC na categoria de Monumento Natural por meio do Decreto Estadual nº 1.917, de 06 de setembro de 2007. O ato de criação da UC indica os seguintes objetivos:"
							},
							{
								text:"- Preservar a integridade do conjunto granítico no qual está inserido o marco principal, denominado O Frade e a Freira;"
							},
							{
								text:"- Proteger os fragmentos florestais remanescentes localizados no afloramento;"
							},
							{
								text:"- Promover o desenvolvimento econômico regional, com a proteção da natureza, manejo adequado dos recursos naturais e disciplinamento do uso e ocupação do solo;"
							},
							{
								text:"- Desenvolver o turismo sustentável regional, integrado às condições naturais dos ecossistemas, das paisagens e das belezas cênicas;"
							},
							{
								text:"- Desenvolver programas setoriais, incluindo o turismo, educação, fiscalização e monitoramento ambiental;"
							},
							{
								text:"- Contribuir para o desenvolvimento de pesquisas científicas na área da ecologia aplicada, biologia, geologia, hidrologia e outras de interesse para a conservação e preservação dos ecossistemas naturais;"
							},
							{
								text:"- Contribuir para a instalação de processos naturais de recuperação dos ecossistemas e para a recuperação induzida, de acordo com projetos definidos no plano de manejo e aprovados pelo IEMA, ouvido o Conselho Consultivo;"
							},
							{
								text:"- Implantar equipamentos e serviços necessários à consecução desses objetivos."
							},
							{
								text:"A UC não possui plano de manejo, embora o ato de criação tenha determinado sua elaboração em um prazo máximo de três anos após a sua criação. Diante desse fato, não foram localizadas informações consolidadas oficiais sobre a UC, assim como detalhes sobre seu histórico de criação ou ameaças, embora seja possível supor que as principais ameaças que levaram à sua criação sejam semelhantes àquelas elencadas para o MONA dos Pontões Capixabas, a saber: ação antrópica pela substituição de áreas naturais por pastos, modificação proveniente da circulação de pessoas e mineração de granito."
							},
							{
								text:"Garbin et al. (2017) afirmam que a área onde localiza-se a UC é composta pelo ecossistema de Floresta Estacional Semidecidual (conhecida como Floresta Tropical Subcaducifólia), possivelmente do tipo Submontana (IBGE, 2012). A UC encontra-se inserida na bacia do rio Itapemirim, terceira maior bacia hidrográfica do ES, depois das bacias dos rios Doce e São Mateus. A vegetação da UC é composta por fragmentos florestais remanescentes (MMA, 2019b), porém, a ausência do plano de manejo leva à falta de informações sobre a fitofisionomia predominante na UC, assim como dados oficiais sobre a composição de fauna e flora. "
							},
							{
								text:"O levantamento da biodiversidade da UC revelou 12 ocorrências de organismos de fauna e flora (Figuras 28-30; Tabelas 10 e 11) pertencentes a oito espécies, sendo três ocorrências de fauna (três espécies) e nove ocorrências de flora (cinco espécies). Esses dados são resultados de coletas realizadas na UC apenas no ano 2012 para a fauna e duas coletas para a flora, realizadas em 2017 e 2019, que resultou no levantamento dos dados aqui apresentados (Figura 31). "
							},
							{
								img:require('@/assets/topics/figure28.jpg'),
								imgDesc:"Mapa da distribuição dos registros de fauna, representando a Classe Actinopterygii, ocorrente no Monumento Natural o Frade e a Freira.",
								imgNumber:28
							},
							{
								img:require('@/assets/topics/figure29.jpg'),
								imgDesc:"Mapa da distribuição dos registros de flora, representando a Divisão Espermatófitas, ocorrentes no Monumento Natural o Frade e a Freira.",
								imgNumber:29
							},
							{
								img:require('@/assets/topics/figure30.jpg'),
								imgDesc:"Mapa da distribuição dos registros de flora, representando os Clados APG IV: Magnoliídeas, Monocotiledôneas e Superrosídeas, ocorrentes no Monumento Natural o Frade e a Freira.",
								imgNumber:30
							},
							{
								frame:require('@/assets/topics/table10.png'),
								frameDesc:"Distribuição de registros e espécies entre os grupos de fauna no Monumento Natural o Frade e a Freira.",
								frameNumber:"Tabela 10"
							},
							{
								frame:require('@/assets/topics/table11.png'),
								frameDesc:"Distribuição de registros e espécies entre os grupos de flora no Monumento Natural o Frade e a Freira.",
								frameNumber:"Tabela 11"
							},
							{
								img:require('@/assets/topics/figure31.png'),
								imgDesc:"Gráfico demonstrativo de número de coletas de fauna e flora realizadas no Monumento Natural o Frade e a Freira, ao longo do tempo.",
								imgNumber:31
							},
							{
								text:"O levantamento da fauna da UC revelou apenas o grupo de peixes com três registros e três espécies. A diversidade faunística levantada para a UC abrange três famílias, as quais são apresentadas na Figura 32. "
							},
							{
								text:"Nenhuma das espécies registradas na UC encontra-se ameaçada de extinção tanto a nível estadual, quanto nacional."
							},
							{
								img:require('@/assets/topics/figure32.png'),
								imgDesc:"Gráfico das famílias mais representativas no inventário florístico do Monumento Natural o Frade e a Freira.",
								imgNumber:32
							},
							{
								text:"Neste inventário florístico, o único grupo com ocorrências registradas foi angiospermas, com dez registros, divididos em cinco espécies, e cinco famílias, outros três são de espécimes identificados apenas em nível de família. A família mais diversa foi Dioscoreaceae pertencente ao clado das monocotiledôneas, somando quatro registros em três espécies (Figura 33). Nenhuma das quatro espécies registradas é classificada em categorias de ameaçadas de extinção, de acordo com as listas consultadas."
							},
							{
								img:require('@/assets/topics/figure33.png'),
								imgDesc:"Gráfico das famílias mais representativas no inventário florístico do Monumento Natural o Frade e a Freira.",
								imgNumber:33
							},
						]
					},
					{ //page6
						title:"4.6 Monumento Natural Estadual de Serra das Torres",
						texts:[
							{
								text:"O Monumento Natural Estadual de Serra das Torres é a Unidade de Conservação mais jovem dentre as incluídas neste estudo. Foi criada através da Lei Estadual nº 9.463, de 11 de junho de 2010. A UC é administrada pelo IEMA e localiza-se no extremo sul do Espírito Santo nos municípios de Átílio Vivácqua (25,06% da área), Mimoso do Sul (36,41% da área) e Muqui (38,53% da área) (ISA, 2020). A UC possui uma área total de 10.458,90 ha e está localizada a mais de 10 km da divisa com o estado do Rio de Janeiro."
							},
							{
								text:"A região da Serra das Torres representa um dos últimos e mais bem preservados remanescentes florestais contínuos do sul do Espírito Santo, possuindo relevância cênica pelo amplo conjunto de formações graníticas do tipo pães de açúcar que formam um atrativo turístico para a região. Nesse sentido, a região foi transformada em área de preservação como Monumento Natural tendo os seguintes objetivos previstos em seu ato de criação:"
							},
							{
								text:"- Preservar a geodiversidade e a integridade das formações rochosas do maciço serrano da região de Serra das Torres;"
							},
							{
								text:"- Proteger os remanescentes florestais associados ao maciço de Serra das Torres;"
							},
							{
								text:"- Conservar a biodiversidade nas áreas naturais do maciço de Serra das Torres;"
							},
							{
								text:"- Proteger as nascentes, mananciais e aquíferos contribuintes das bacias hidrográficas dos rios Itabapoana e Itapemirim;"
							},
							{
								text:"- Aumentar a conectividade entre os remanescentes florestais da região, através de corredores ecológicos, contribuindo com o fluxo gênico, a manutenção e a recuperação dos ecossistemas locais;"
							},
							{
								text:"- Promover o desenvolvimento econômico regional, com a conservação da natureza e a manutenção dos serviços ambientais, manejo adequado dos recursos naturais e disciplinamento do uso do solo;"
							},
							{
								text:"- Promover o desenvolvimento e ordenamento do turismo sustentável e integrado às condições naturais locais;"
							},
							{
								text:"- Desenvolver programas setoriais, abrangendo temas como educação ambiental, adequação ambiental de propriedades rurais, fiscalização e monitoramento ambiental;"
							},
							{
								text:"- Contribuir para o desenvolvimento de pesquisas científicas abordando os meios físico, biótico e socioeconômico da região;"
							},
							{
								text:"- Valorizar a identidade e a cultura locais, intimamente associadas às paisagens rurais e aos recursos naturais da região."
							},
							{
								text:"A UC não possui plano de manejo, embora o ato de criação tenha determinado sua elaboração em um prazo máximo de três anos após a sua criação. Contudo, seu formulário no Cadastro Nacional de Unidades de Conservação (CNUC), atualizado em 2017 (MMA, 2019b), apresenta informações relevantes sobre a sua composição geológica, edafológica e de biodiversidade, basicamente para a fauna. O documento não contém informações sobre o seu histórico de criação ou ameaças, embora seja possível supor que as principais ameaças que levaram à sua criação sejam semelhantes àquelas listadas para os outros Monumentos Naturais: ação antrópica pela substituição de áreas naturais por pastos, modificação proveniente da circulação de pessoas e mineração de granito."
							},
							{
								text:"De acordo o ISA (2020), a área onde a UC está localizada é composta por dois ecossistemas do bioma da Mata Atlântica, a Floresta Estacional Semidecidual (67,13%) e a Floresta Ombrófila Densa (32,87%), embora  Garbin et al. (2017) indiquem somente a presença do segundo tipo florestal. A UC abrange duas amplas bacias hidrográficas, servindo como divisor de suas águas na região, a bacia do rio Itapemirim setentrionalmente (que é a terceira maior bacia hidrográfica do estado, depois das bacias dos rios Doce e São Mateus) e a bacia do rio Itabapoana meridionalmente (que demarca a divisa dos estados do Espírito Santo e Rio de Janeiro). A vegetação da UC é composta por fragmentos florestais remanescentes (MMA, 2019b), mas uma vez que não há plano de manejo para a área e esta informação é limitada no CNUC, não há informações sobre a fitofisionomia predominante na UC, assim como dados oficiais sobre a composição de sua fauna e flora."
							},
							{
								text:"De acordo com o CNUC da Unidade de Conservação (MMA, 2019b), a fauna é composta por 257 espécies, sendo: 20 peixes, 18 anfíbios, 13 répteis, 189 aves e 17 mamíferos. Já sobre a flora, a única informação presente no documento oficial informa que o registro de uma única espécie nova endêmica para o Espírito Santo pertencente ao gênero Beilschmiedia (Lauraceae)."
							},
							{
								text:"O levantamento da biodiversidade da UC revelou 592 ocorrências de organismos de fauna e flora (Figuras 34-37; Tabelas 12 e 13), pertencentes a 332 espécies, sendo 389 ocorrências de fauna (188 espécies) e 203 ocorrências de flora (144 espécies). Esses dados são resultados de coletas realizadas na UC a partir de 1952, com três amostragens de fauna naquele ano e as demais coletas realizadas a partir de 1994. O ápice amostral da UC se deu a partir do quinquênio de 2006-2010 tanto para a fauna quanto para a flora (Figura 38). Um total de 11 registros de fauna encontra-se sem data de coleta e não puderam ser incluídos na análise gráfica."
							},
							{
								img:require('@/assets/topics/figure34.jpg'),
								imgDesc:"Mapa da distribuição dos registros de fauna, representando as Classes Amphibia e Reptilia, ocorrentes no Monumento Natural Estadual de Serra das Torres.",
								imgNumber:34
							},
							{
								img:require('@/assets/topics/figure35.jpg'),
								imgDesc:"Mapa da distribuição dos registros de fauna, representando as Classes Actinopterygii, Insecta e Mammalia, ocorrentes no Monumento Natural Estadual de Serra das Torres.",
								imgNumber:35
							},
							{
								img:require('@/assets/topics/figure36.jpg'),
								imgDesc:"Mapa da distribuição dos registros de flora, representando as Divisões Espermatófitas e Samambaias, ocorrentes no Monumento Natural Estadual de Serra das Torres.",
								imgNumber:36
							},
							{
								img:require('@/assets/topics/figure37.jpg'),
								imgDesc:"Mapa da distribuição dos registros de flora, representando os Clados APG IV: Eudicotiledôneas basais, Magnoliídeas, Monocotiledôneas, Superasterídeas e Superrosídeas, ocorrentes no Monumento Natural Estadual de Serra das Torres.",
								imgNumber:37
							},
							{
								frame:require('@/assets/topics/table12.png'),
								frameDesc:"Distribuição de registros e espécies entre os grupos de fauna no Monumento Natural Estadual de Serra das Torres.",
								frameNumber:"Tabela 12"
							},
							{
								frame:require('@/assets/topics/table13.png'),
								frameDesc:"Distribuição de registros e espécies entre os grupos de flora no Monumento Natural Estadual de Serra das Torres.",
								frameNumber:"Tabela 13"
							},
							{
								img:require('@/assets/topics/figure38.png'),
								imgDesc:"Gráfico demonstrativo de número de coletas de fauna e flora realizadas no Monumento Natural Estadual de Serra das Torres, ao longo do tempo.",
								imgNumber:38
							},
							{
								text:"O levantamento da fauna da UC revelou que os grupos com maior representatividade de registros são os anfíbios e as aves, com 186 e 119 registros, respectivamente. Os dois grupos mais diversos da UC são as aves e os anfíbios, sendo que as aves são representadas por 119 espécies e os anfíbios por 37 espécies. A diversidade faunística levantada para a UC abrange 64 famílias, sendo que as 10 mais representativas quanto ao número de registros correspondem a 72% dos registros da UC (Figura 39). Dentre as famílias de fauna com maior número de registros, destacam-se as famílias dos pequenos sapos endêmicos da Mata Atlântica da família Brachycephalidae, com 126 registros para seis espécies, e os morcegos da família Phyllostomidae, com 56 registros para 12 espécies. As duas famílias com maior diversidade na UC são Tyrannidae e Hylidae com 19 e 17 espécies respectivamente."
							},
							{
								text:"De todas as espécies registradas na UC, 10 estão ameaçadas de extinção no Espírito Santo, sendo cinco categorizadas como VU, três EN e duas CR. Com relação à lista nacional das espécies ameaçadas de extinção, este número é um pouco menor, sendo que apenas duas espécies são consideradas ameaçadas, ambas categorizadas como CR (Anexo I)."
							},
							{
								img:require('@/assets/topics/figure39.png'),
								imgDesc:"Gráfico das famílias mais representativas no inventário faunístico do Monumento Natural Estadual de Serra das Torres.",
								imgNumber:39
							},
							{
								text:"No levantamento da flora, o grupo mais representativo foi o das angiospermas com 196 registros, 139 espécies, pertencentes a 54 famílias, seguido pelo grupo das monilófitas com sete registros, cinco espécies e sete famílias. Dentre esses, 29 ocorrências são de espécimes identificados apenas em nível de família. A maior abundância de registros e diversidade de angiospermas levantada para a UC, pertence aos clados das monocotiledôneas e superrosídeas, ambos somando 66%. Os demais clados de angiospermas representados foram, em ordem decrescente de abundância de registros e riqueza: superasterídeas, magnoliídeas e eudicotiledôneas basais (Tabela 13). As famílias com maior número de espécies foram Bromeliaceae e Orchidaceae, com 26 e 17 espécies, respectivamente. Entre as samambaias, apenas espécies de monilófitas constam no inventário, em sua totalidade de registros e espécies da classe Polypodiopsida (Figura 40)."
							},
							{
								text:"Das espécies de plantas levantadas, seis estão ameaçadas de extinção a nível nacional, sendo cinco espécies classificadas na categoria VU e uma CR. Já a nível estadual, a UC possui 20 espécies ameaçadas, sendo 15 VU, quatro EN e uma CR (Anexo I)."
							},
							{
								img:require('@/assets/topics/figure40.png'),
								imgDesc:"Gráfico das famílias mais representativas no inventário florístico do Monumento Natural Estadual de Serra das Torres.",
								imgNumber:40
							},
						]
					},
					{ //page7
						title:"4.7 Parque Estadual da Cachoeira da Fumaça",
						texts:[
							{
								text:"O Parque Estadual da Cachoeira da Fumaça é a menor Unidade de Conservação dentre as incluídas neste estudo, contando com uma área de apenas 162,5 ha. A UC é administrada pelo IEMA e localiza-se no sudoeste do Espírito Santo nos municípios de Alegre (59,66% da área) e Ibitirama (40,34% da área) (IEMA, 2017). A UC encontra-se próxima ao Parque Nacional do Caparaó (15 km a leste), e da divisa do estado do Espírito Santo com os estados de Minas Gerais (20 km a Oeste) e do Rio de Janeiro (25 km ao norte). "
							},
							{
								text:"A Unidade de Conservação encontra-se na região do Caparaó e foi criada para proteger a Cachoeira da Fumaça, uma queda d’água de 162,5 m de altura com grande importância cênica para a região, e proteger os remanescentes florestais associados a ela. A região foi desapropriada e transformada em Reserva Florestal por meio do Decreto Estadual nº 2.791-E de 24 de agosto de 1984. Posteriormente a UC teve sua designação mudada para Parque Estadual por meio do Decreto Estadual nº 4.568-E de 21 de setembro de 1990, e teve sua área ampliada de 24,2 ha para seus atuais 162,5 ha através do Decreto Estadual nº 2.220-R de 19 de fevereiro de 2009."
							},
							{
								text:"A UC não possui plano de manejo, contudo, existe um Plano Emergencial de Uso Público (IEMA, 2017) e um plano de manejo sendo constituídos pelo IEMA, ambos totalmente voltados para questões socioculturais, logística e de estrutura da UC, carecendo de dados bióticos (biodiversidade), abióticos (geologia, hidrologia, etc.), impactos ambientais e outros aspectos pertinentes. Apesar disto, o Cadastro Nacional de Unidades de Conservação (CNUC), atualizado pela última vez em 2009 (MMA, 2019b), indica como objetivo geral da UC a “preservação de ecossistemas naturais de grande relevância ecológica e beleza cênica, possibilitando a realização de pesquisas científicas e o desenvolvimento de atividades de educação e interpretação ambiental, de recreação em contato com a natureza e de turismo ecológico”, apresentando os seguintes objetivos específicos:"
							},
							{
								text:"- Proteger os fragmentos florestais remanescentes localizados na área; "
							},
							{
								text:"- Desenvolver o turismo sustentável regional, integrado às condições naturais dos ecossistemas, das paisagens e belezas cênicas;"
							},
							{
								text:"- Desenvolver programas setoriais, incluindo turismo, educação, fiscalização e monitoramento ambiental;"
							},
							{
								text:"- Contribuir para o desenvolvimento de pesquisas científicas na área da ecologia aplicada, biologia, geologia, hidrologia e outras de interesse para a conservação e preservação dos ecossistemas naturais;"
							},
							{
								text:"- Contribuir para a instalação de processos naturais de recuperação dos ecossistemas e para a recuperação induzida, de acordo com projetos definidos no plano de manejo e aprovados pelo IEMA, ouvido o Conselho Consultivo;"
							},
							{
								text:"- Implantar equipamentos e serviços necessários à consecução dos objetivos específicos constantes acima."
							},
							{
								text:"O Parque Estadual da Cachoeira da Fumaça está inserido na bacia do rio Braço Norte Direito (do qual a cachoeira faz parte), um dos tributários formadores do rio Itapemirim, que é a terceira maior bacia hidrográfica do Espírito Santo. De acordo com ISA (2020) e Garbin et al. (2017), a área da UC é constituída por Floresta Estacional Semidecidual. A vegetação é composta por fragmentos florestais remanescentes (IEMA, 2017), mas uma vez que não há plano de manejo para a área, não há informações disponíveis sobre a fitofisionomia predominante, assim como dados oficiais sobre a composição de sua fauna e flora. Ainda assim, é possível inferir que a fisionomia predominante seja de mata secundária em estágio médio de regeneração, uma vez que a área era originalmente composta por pastos e foi reflorestada após a criação da Reserva Florestal (Borges & Milward-de-Azevedo, 2011)."
							},
							{
								text:"O levantamento da biodiversidade da UC revelou 311 ocorrências de organismos de fauna e flora (Figuras 41-44; Tabelas 14 e 15) pertencentes a 181 espécies, sendo 84 ocorrências de fauna (60 espécies) e 227 ocorrências de flora (121 espécies). Esses dados são resultados de coletas realizadas na UC a partir de 1953, com apenas uma amostragem de flora, sendo o restante das amostragens realizadas a partir de 2000 (Figura 45). O ápice amostral na UC foi durante o quinquênio de 1996-2000 para a fauna e a 2006-2010 para a flora. Um total de 11 registros de fauna encontra-se sem data de coleta e não puderam ser incluídos na análise gráfica."
							},
							{
								img:require('@/assets/topics/figure41.jpg'),
								imgDesc:"Mapa da distribuição dos registros de fauna, representando as Classes Amphibia e Reptilia, ocorrentes no Parque Estadual da Cachoeira da Fumaça.",
								imgNumber:41
							},
							{
								img:require('@/assets/topics/figure42.jpg'),
								imgDesc:"Mapa da distribuição dos registros de fauna, representando as Classes Actinopterygii, Insecta e Mammalia, ocorrentes no Parque Estadual da Cachoeira da Fumaça.",
								imgNumber:42
							},
							{
								img:require('@/assets/topics/figure43.jpg'),
								imgDesc:"Mapa da distribuição dos registros de flora, representando as Divisões Espermatófitas e Samambaias, ocorrentes no Parque Estadual da Cachoeira da Fumaça.",
								imgNumber:43
							},
							{
								img:require('@/assets/topics/figure44.jpg'),
								imgDesc:"Mapa da distribuição dos registros de flora, representando os Clados APG IV: Eudicotiledôneas basais, Magnoliídeas, Monocotiledôneas, Superasterídeas e Superrosídeas, ocorrentes no Parque Estadual da Cachoeira da Fumaça.",
								imgNumber:44
							},
							{
								frame:require('@/assets/topics/table14.png'),
								frameDesc:"Distribuição de registros e espécies entre os grupos de fauna no Parque Estadual da Cachoeira da Fumaça.",
								frameNumber:"Tabela 14"
							},
							{
								frame:require('@/assets/topics/table15.png'),
								frameDesc:"Distribuição de registros e espécies entre os grupos de flora no Parque Estadual da Cachoeira da Fumaça.",
								frameNumber:"Tabela 15"
							},
							{
								img:require('@/assets/topics/figure45.png'),
								imgDesc:"Gráfico demonstrativo de número de coletas de fauna e flora realizadas no Parque Estadual da Cachoeira da Fumaça, ao longo do tempo.",
								imgNumber:45
							},
							{
								text:"O levantamento da fauna na UC revelou que os grupos com maior representatividade de registros são os mamíferos, com 30 registros, seguidos dos peixes e répteis, com 18 e 17 registros, respectivamente. Os grupos mais diversos são também os mamíferos e os peixes, com 29 e 13 espécies, respectivamente. A diversidade faunística levantada para a UC abrange 36 famílias, sendo que as 10 mais representativas quanto ao número de registros somam 55% dos registros da UC (Figura 46). Dentre as famílias de fauna com maior número de registros, destacam-se os borrachudos da família Simuliidae com nove registros para cinco espécies, e os sapinhos endêmicos da Mata Atlântica do sudeste do Brasil, pertencentes à família Cycloramphidae, com seis registros de Thoropa miliaris (Spix, 1824). As famílias com maior diversidade são os Simuliidae (Insecta), com cinco espécies, e os tatus da família Dasypodidae (Mammalia), com quatro espécies."
							},
							{
								text:"Cinco espécies registradas na UC estão ameaçadas de extinção no Espírito Santo, sendo duas categorizadas como VU, duas EN e uma CR. Com relação à lista nacional das espécies ameaçadas de extinção, este número é um pouco menor, quatro espécies são consideradas ameaçadas, três VU e uma EN (Anexo I). "
							},
							{
								img:require('@/assets/topics/figure46.png'),
								imgDesc:"Gráfico das famílias mais representativas no inventário faunístico no Parque Estadual da Cachoeira da Fumaça.",
								imgNumber:46
							},
							{
								text:"No levantamento da flora, o grupo mais representativo foi o das angiospermas, com 216 registros e 110 espécies, pertencentes a 53 famílias. Logo após, está o grupo das monilófitas com 11 registros, 11 espécies e quatro famílias. Um total de 28 ocorrências (11% dos registros totais) refere-se a espécimes identificados apenas em nível de família. A maior abundância de registros e diversidade florística de angiospermas levantada para a UC, pertence aos clados: superrosídeas, com quase a metade dos registros e 43% das espécies levantadas, e superasterídeas, com 31% dos registros do grupo. Os demais clados de angiospermas representados foram em ordem decrescente de abundância de registros e riqueza: magnoliídeas, monocotiledôneas e eudicotiledôneas basais (Tabela 15). As famílias com maior número de espécies foram Asteraceae e Piperaceae, ambas com 10 espécies cada e Fabaceae com nove espécies."
							},
							{
								text:"Entre as samambaias, apenas espécies de monilófitas constam no inventário, a família deste grupo com maior riqueza de espécies foi Pteridaceae, com seis espécies (Figura 47)."
							},
							{
								text:"Das espécies de plantas levantadas, cinco estão ameaçadas de extinção apenas a nível estadual, sendo duas espécies classificadas na categoria de VU, e três EN (Anexo I)."
							},
							{
								img:require('@/assets/topics/figure47.png'),
								imgDesc:"Gráfico das famílias mais representativas no inventário florístico no Parque Estadual da Cachoeira da Fumaça.",
								imgNumber:47
							},					
						]
					},
					{ //page8
						title:"4.8 Parque Estadual do Forno Grande",
						texts:[
							{
								text:"O Parque Estadual do Forno Grande é a segunda menor Unidade de Conservação deste estudo. A UC possui uma área de 730 ha, e está conectada ao Parque Estadual de Pedra Azul, por meio de um corredor ecológico que por sua vez possui uma área de 51.121 ha (Juvanhol et al., 2011)."
							},
							{
								text:"Administrada pelo IEMA, a UC está inserida no município de Castelo, região Serrana do estado do Espírito Santo. Criada na década de 1960 como Reserva Florestal de Forno Grande por meio do Decreto Estadual nº 312 de 31/10/1960 (mesmo Decreto de criação da Reserva Florestal de Pedra Azul, atual PE de Pedra Azul), foi regularizada ao longo das décadas de 1980 e 1990. A UC recebeu a atual denominação em 2013, com o Decreto nº 3585-R de 20/09/2013. De acordo com o plano de manejo, o nome da UC está relacionado ao Pico do Forno Grande com 2.039 m de altitude, sendo o segundo pico mais alto do ES. A sua forma assemelha-se a de um forno de assar pão, muito utilizado pelos descendentes de italianos."
							},
							{
								text:"A criação da UC tem como objetivo principal “A preservação dos ecossistemas naturais de grande relevância ecológica e beleza cênica, possibilitando a realização de pesquisas científicas e desenvolvimento de atividades de educação e interpretação ambiental, de recreação em contato com a natureza e de turismo ecológico”. E os seguintes objetivos específicos:"
							},
							{
								text:"- Proteger amostras dos ecossistemas da Mata Atlântica e suas formações rupestres em altitudes elevadas do Pico do Forno Grande, assegurando a preservação de sua flora, fauna e demais recursos naturais e características geológicas, geomorfológicas e cênicas;"
							},
							{
								text:"- Proteger o quadro natural e a beleza cênica do Pico do Forno Grande, mantendo inalteradas as suas características naturais;"
							},
							{
								text:"- Servir como banco de germoplasma para conservação in situ de espécies vegetais e animais, garantindo a evolução natural dos ecossistemas protegidos no Parque;"
							},
							{
								text:"- Proteger espécies da flora endêmicas, raras, vulneráveis ou ameaçadas de extinção, no âmbito regional e nacional, em especial alguns gêneros e espécies das famílias de orquídeas e bromélias;"
							},
							{ //editar
								text:"- Proteger espécies da fauna endêmicas, raras, vulneráveis ou ameaçadas de extinção, no âmbito regional e nacional, em especial a mastofauna: Marmosops incanus (catita), Callicebus personatus (guigó, peludo), Thaptomys nigrita (rato), Blarinomys breviceps (rato), Delomys sublineatus (rato), Abrawayaomys ruschi (rato), Trinomys iheringi (rato-de-espinho), Bradypus torquatus (preguiça-de-coleira), Callithrix flaviceps (sagüi-taquara), Alouatta fusca (barbado), Leopardus tigrinus (gato-do-mato-pequeno), Leopardus pardalis (jaguatirica), Puma concolor (sussuarana), Herpailurus yagouarondi (gato-mourisco), Panthera onca (onça), Chaethomus subspinosus (ouriço-preto); e as aves: Spizaetus tyrannus (gavião-pega-macaco), Procnias nudicollis (araponga), Muscipipra vetula (tesoura-cinzenta), Oryzoborus maximiliani (curió), Tinamus solitarius (macuco), Pipile jacutinga (jacutinga);"
							},
							{
								text:"- Contribuir para a proteção de nascentes da bacia do rio Itapemirim;"
							},
							{
								text:"- Fomentar atividades de pesquisa e monitoramento ambiental;"
							},
							{
								text:"- Proporcionar oportunidades controladas para visitação e educação ambiental;"
							},
							{
								text:"- Ampliar e diversificar as possibilidades de uso público e educação ambiental, levando o visitante e a população lindeira a compreender e a respeitar o valor do Parque como uma área protegida e o valor da conservação ambiental;"
							},
							{
								text:"- Contribuir com o planejamento e o ordenamento do uso e da ocupação do solo das áreas adjacentes ao Parque;"
							},
							{
								text:"- Estimular o desenvolvimento regional integrado, com base nas práticas de conservação;"
							},
							{
								text:"- Contribuir com o desenvolvimento do ecoturismo regional, através de recursos compartilhados e outras potencialidades regionais."
							},
							{
								text:"De acordo com plano de manejo, sua vegetação está inserida no bioma Mata Atlântica e é composta por Floresta Ombrófila Densa Montana, e Altomontana em Transição para Floresta Estacional Semidecidual. Sua fitofisionomia predominante é Mata secundária de estágio avançado. Possui clima tropical megatérmico, quase mesotérmico e subúmido. O índice de pluviosidade média anual fica em torno de 1.200 mm, com verões chuvosos e invernos secos. A temperatura média anual fica em torno de 23ºC, podendo variar entre a mínima de 5ºC e 7ºC, e a máxima podendo atingir os 36ºC. Seu relevo é montanhoso, tendo uma altitude que varia de 1.128 a 2.039 m acima do nível do mar. A região do Parque possui cambissolo álico, um tipo de solo com textura argilosa ou média."
							},
							{
								text:"O Parque Estadual do Forno Grande está inserido na bacia do rio Itapemirim, que atravessa todo o ES na direção geral NW-SE. Ao norte, limita-se com as bacias dos rios Novo, Jucu e Doce, a noroeste, com o estado de Minas Gerais, ao Sul, com a Bacia do Rio Itabapoana e a leste, com o Oceano Atlântico. Suas nascentes situam-se nos limites com as bacias dos rios Jucu a Nordeste e Itabapoana ao sul, com altitudes de 2.600 m no Braço Norte Direito e 1.200 m no Braço Norte Esquerdo. O rio Castelo, que se encontra na margem esquerda e o rio Muqui do Norte, na margem direita, são os afluentes mais importantes."
							},
							{
								text:"O levantamento da biodiversidade da UC revelou 5.731 ocorrências de organismos de fauna e flora (Figuras 48-51; Tabelas 16 e 17), pertencentes a 1.211 espécies, sendo 600 ocorrências de fauna (89 espécies) e 4.497 ocorrências de flora (1.034 espécies). Esses dados são resultados de coletas realizadas na UC a partir de 1927 para a flora e 1973 para a fauna, tendo seu ápice amostral a partir do quinquênio de 2006-210 para a fauna e 2006-2010 para a flora (Figura 52). Um total de ?? registros, sendo 13 de fauna e sete de flora, encontra-se sem data de coleta e não puderam ser incluídos na análise gráfica. "
							},
							{
								img:require('@/assets/topics/figure48.jpg'),
								imgDesc:"Mapa da distribuição dos registros de fauna, representando as Classes Amphibia e Reptilia, ocorrentes no Parque Estadual do Forno Grande.",
								imgNumber:48
							},
							{
								img:require('@/assets/topics/figure49.jpg'),
								imgDesc:"Mapa da distribuição dos registros de fauna, representando as Classes Actinopterygii, Insecta e Mammalia, ocorrentes no Parque Estadual do Forno Grande.",
								imgNumber:49
							},
							{
								img:require('@/assets/topics/figure50.jpg'),
								imgDesc:"Mapa da distribuição dos registros de flora, representando as Divisões Embriófitas, Espermatófitas e Samambaias, ocorrentes no Parque Estadual do Forno Grande.",
								imgNumber:50
							},
							{
								img:require('@/assets/topics/figure51.jpg'),
								imgDesc:"Mapa da distribuição dos registros de flora, representando os Clados APG IV: Angiospermas indefinidas, Eudicotiledôneas basais, Magnoliídeas, Monocotiledôneas, Superasterídeas e Superrosídeas, ocorrentes no Parque Estadual do Forno Grande.",
								imgNumber:51
							},
							{
								frame:require('@/assets/topics/table16.png'),
								frameDesc:"Distribuição de registros e espécies entre os grupos de fauna no Parque Estadual do Forno Grande.",
								frameNumber:"Tabela 16"
							},
							{
								//frame:require('@/assets/topics/table17.png'),
								frameDesc:"Distribuição de registros e espécies entre os grupos de flora no Parque Estadual do Forno Grande.",
								frameNumber:"Tabela 17"
							},
							{
								// img:require('@/assets/topics/figure52.png'),
								imgDesc:"Gráfico demonstrativo de número de coletas de fauna e flora realizadas no Parque Estadual do Forno Grande, ao longo do tempo.",
								imgNumber:52
							},
							{
								text:"O levantamento da fauna da UC revelou que os grupos com maior representatividade de registros são os anfíbios e as aves, com 432 e 124 registros, respectivamente. Estes também são os grupos da fauna mais diversos da UC, com 39 espécies de anfíbios e 23 espécies de mamíferos. A diversidade faunística levantada abrange 35 famílias, sendo que as 10 mais representativas quanto ao número de registros somam 69% dos registros da UC (Figura 53). Dentre as famílias de fauna com maior número de registros, destacam-se as pererecas da família Hylidae, com 283 registros para 21 espécies, e os sapos da família Cycloramphidae, com 56 registros para três espécies. As famílias com maior diversidade registrada na FLONA são também a família Hylidae, com 21 espécies, e a família Formicidae com seis espécies."
							},
							{
								text:"Sete espécies registradas na UC estão ameaçadas de extinção a nível estadual, sendo duas categorizadas como VU, quatro EN e uma CR. Com relação à lista nacional nenhuma espécie registrada na UC encontra-se ameaçada (Anexo I)."
							},
							{
								img:require('@/assets/topics/figure53.png'),
								imgDesc:"Gráfico das famílias mais representativas no inventário faunístico no Parque Estadual do Forno Grande.",
								imgNumber:53
							},
							{
								text:"No levantamento da flora, o grupo mais representativo foi o das angiospermas com 4097 registros, 807 espécies, pertencentes a 108 famílias. Logo após, está o grupo das samambaias representado pelas monilófitas que apresentaram 537 registros, 143 espécies e 19 famílias, seguido das licopodófitas com 78 registros de 19 espécies e duas famílias. E por fim, o grupo das embriófitas com 238 registros em 61 espécies de 27 famílias de briófitas verdadeiras; e 47 registros, em quatro espécies e quatro famílias de marchantiófitas. Dentre esses, 1.252 ocorrências (25% dos registros totais) representam espécimes identificados apenas em nível de família. A maior abundância de registros de angiospermas levantadas para a UC pertence às superasterídeas e superrosídeas, que somam quase dois terços deles, porém a maior diversidade florística, pertence às monocotiledôneas, com cerca um terço das espécies de espermatófitas. Os demais clados de angiospermas representados foram, em ordem decrescente de abundância de registros e riqueza, magnoliídeas e eudicotiledôneas basais como mostra a Tabela 17. As famílias com maior número de espécies de angiospermas foram Orchidaceae, com 121 espécies e Asteraceae, com 68 espécies. Entre as samambaias a maior abundância de registros, bem como diversidade de espécies, está entre as monilófitas, já a família mais representativa foi Polypodiaceae, com 151 registros e 37 espécies. Entre as samambaias, a família Lycopodiacee foi a que apresentou maior número de espécies, um total de 13. Entre as embriófitas, a maior abundância de registros, bem como diversidade de espécies está entre as briófitas verdadeiras. A família mais representativa em termos de ocorrências foi a Orthotrichaceae com 68 registros em 14 espécies (Figura 54)."
							},
							{
								text:"Das espécies de plantas levantadas, 37 estão ameaçadas de extinção, a nível nacional, sendo 10 espécies classificadas na categoria VU, 23 EN e quatro CR. Já a nível estadual, a UC possui 131 espécies ameaçadas, sendo 70 VU, 47 EN e 14 CR. A espécie de gramínea Aulonemia prolifera  P.L. Viana & Filg., foi descrita a partir de coletas realizadas na área da Parque Estadual de Forno Grande, e encontra-se na categoria de ameaça EN a nível estadual (Anexo I)."
							},
							{
								// img:require('@/assets/topics/figure54.png'),
								imgDesc:"Gráfico das famílias mais representativas no inventário florístico no Parque Estadual do Forno Grande.",
								imgNumber:54
							},
						]
					},
					{	//page9
						title:"4.9 Parque Estadual de Itaúnas",
						texts:[
							{
								text:"O Parque Estadual de Itaúnas é uma Unidade de Conservação costeira administrada pelo IEMA localizada no extremo norte capixaba, no município de Conceição da Barra, tendo seu limite norte na divisa dos estados da Bahia e Espírito Santo através do Riacho Doce. A UC conta com uma área de aproximadamente 3.481 ha considerando a área de marinha, e encontra-se na área urbanizada da vila de Itaúnas, que é um importante ponto turístico do norte do ES. A origem do nome da UC tem relação com o rio Itaúnas, que o corta de oeste para leste e significa “pedra preta” em tupi, possivelmente em alusão aos arenitos quaternários presentes junto ao mar na barra do rio e às rochas basálticas formadoras do leito do rio por toda sua extensão."
							},
							{
								text:"A origem da UC ocorreu no ano de 1948 seguindo as recomendações feitas pelo Conselho Florestal do Espírito Santo, baseadas nas análises do naturalista Augusto Ruschi, que indicava a criação de sete Reservas Florestais visando proteger remanescentes naturais preservados e representativos no estado do Espírito Santo. Tais recomendações resultaram na publicação do Decreto Estadual nº 55 de 20 de setembro de 1948 que criou, entre outras, uma “reserva da flora halófila” (restinga), com cerca de 10.000 ha e que compreendia uma área ampla com terras devolutas onde atualmente localiza-se o Parque Estadual de Itaúnas e outras áreas atualmente não protegidas (Ruschi, 1949a, 1949b, 1959; Rezende, 2014). Esta área também foi chamada de Reserva Florestal e Biológica do rio Itaúnas (Ruschi, 1949a), Reserva do Rio Itaúnas (Ruschi, 1950), Reserva de Proteção e Conservação da Natureza do Rio Itaúnas (Ruschi, 1969), Reserva Biológica de Itaúnas (Ruschi, 1976) e consta como Reserva Florestal do Riacho Doce na carta São Mateus de 1982, do Instituto Brasileiro de Geografia e Estatística (IBGE)."
							},
							{
								text:"Embora o Decreto Estadual nº 55, e outros documentos legais posteriores, não especifiquem os limites sul e oeste da área de “reserva da flora halófila”, é possível identificá-los através de informações fornecidas pelo próprio Ruschi. Em artigo sobre a necessidade da implantação de novas Unidades de Conservação no Espírito Santo, Ruschi (1976) informou que o limite sul da UC seria o próprio rio Itaúnas, coincidindo com o limite sudeste do atual Parque Estadual de Itaúnas. Em uma entrevista datada em 1984 (Jornal do Brasil, 1984) aquele autor indicou que aquela reserva, até então não implementada, localizava-se à leste da Fazenda São Joaquim (localidade da atual REBIO do Córrego Grande). Diante disto, deduz-se que a área do Parque Estadual de Itaúnas certamente estaria incluída na reserva criada em 1948, já que a mesma era limitada ao norte pela divisa com a Bahia, à leste com a costa atlântica e a sul pela foz do rio Itaúnas, conforme indicado nas duas referências supracitadas e na  Lei Estadual nº 976 de 1955. Também fica claro que a Reserva do Rio Itaúnas não abrange a área da REBIO do Córrego Grande, conforme sugerido por Rezende (2014), e que as questões envolvendo a delimitação das reservas do norte capixaba são um tema complexo, conforme indicado por Santos (2016)."
							},
							{
								text:"Em 1955, o governo do ES doou à união cinco de suas reservas florestais, por meio da Lei Estadual nº 976, de 10 de dezembro, sendo elas: Itaúnas; Córrego do Veado; Barra Seca, parte da atual REBIO de Sooretama; Nova lombardia, atual REBIO Augusto Ruschi; e Pico da Bandeira, parte do atual PARNA do Caparaó. Contudo, não se sabia ao certo a localização ou delimitação da Reserva Florestal do Rio Itaúnas e ela não havia sido efetivamente implementada, não sendo assumida pelo o governo federal (Santos, 2016). A não implementação e o desaparecimento da reserva foram fatos confirmados posteriormente por Ruschi (1969) em sua atualização fitogeográfica do ES e em entrevista ao Jornal do Brasil em 1984 (Jornal do Brasil, 1984), onde indicou que a área em questão já havia sido totalmente descaracterizada, ocupada por posseiros e se perdido. "
							},
							{
								text:"Em 1986 as Dunas de Itaúnas foram tombadas pelo estado do Espírito Santo como patrimônio natural capixaba por meio da Resolução nº 08 de 10 de setembro do Conselho Estadual de Cultura. No início da década de 1990, diante da possibilidade de instalação de um grande empreendimento hoteleiro imediatamente ao norte da Vila de Itaúnas, que incluiria a abertura de uma estrada na área de restinga, precipitaram-se pressões populares em defesa da região, o que levou o governo estadual a transformá-la em uma área de proteção ambiental. Assim, o conjunto de áreas devolutas do estado que acompanhava boa parte do trecho inferior do rio Itaúnas, a região das Dunas de Itaúnas e de praias do extremo norte capixaba e uma série de propriedades privadas adjacentes foram transformados no Parque Estadual de Itaúnas, por meio do Decreto Estadual nº 4.967-E de 08 de novembro de 1991. Uma vez que boa parte da área do parque já era ocupada por propriedades diversas, dezenas de atos legais de desapropriações foram emitidos a partir daquela data e nos anos subsequentes à criação da UC. Desde 1992 o Parque Estadual de Itaúnas é tombado pela UNESCO como Patrimônio Natural da Humanidade, fazendo parte da Reserva da Biosfera da Mata Atlântica (CEPEMAR, 2004a). "
							},
							{
								text:"O plano de manejo da UC foi criado em 2004 (CEPEMAR, 2004a) e apresenta informações tanto sobre questões sociais, econômicas, fundiárias e históricas, quanto abióticas e sobre sua biodiversidade. De acordo com o Decreto Estadual de criação da UC, o PE de Itaúnas tem como objetivos: "
							},
							{
								text:"- Resguardar os atributos excepcionais da natureza na região;"
							},
							{
								text:"- Resguardar a proteção integral da flora, da fauna, do solo, dos rios, das áreas de alagados e alagáveis, das dunas e dos demais recursos naturais; "
							},
							{
								text:"- Resguardar a utilização dos bens supracitados para objetivos educacionais, recreativos e científicos como o desenvolvimento do Projeto Tartaruga Marinha (atual Projeto Tamar MMA/ICMBio)."
							},
							{
								text:"O ecossistema presente na UC é formado por Floresta Ombrófila Densa Aluvial composta por um mosaico de ambientes de Restinga, Mata Atlântica de Tabuleiro, áreas alagadas, rios, dunas e manguezal. O parque protege e abrange praticamente todo o curso inferior da bacia do rio Itaúnas, que é a quarta maior bacia hidrográfica do ES, e a mais setentrional do estado, além de uma pequena parte da bacia do rio Riacho Doce. A formação vegetal da UC é composta majoritariamente por mata secundária de estágio médio e avançado de regeneração. Os impactos antrópicos mais relevantes são a pesca, caça, extração de madeira, coleta de frutos, descarte de lixo e emissões de efluentes domésticos de forma inadequada, pressões causadas pelas atividades turísticas, ocupação de culturas diversas (lavouras domésticas, criação de animais, plantações de côco, etc.), queimadas, ocupações irregulares e questões fundiárias. Os problemas fundiários se dão pelo fato de que a maioria das propriedades que compõem o parque foi desapropriada, mas seus proprietários jamais foram indenizados, fazendo com os mesmos continuem ocupando e utilizando ativamente a área da UC para fins diversos, o que leva à uma situação de conflito entre a sua categoria de restrição e a situação de ocupação e uso. A UC faz parte, juntamente com a REBIO de Comboios, do Corredor Marinho do Rio Doce, criado por meio do Decreto Estadual nº 2529-R em 02 de junho de 2010, e que se estende da divisa com a Bahia até a foz do rio Reis Magos."
							},
							{
								text:"De acordo com o plano de manejo (CEPEMAR, 2004a), a fauna da UC é composta por 352 espécies, sendo: 32 crustáceos, 91 peixes, 29 anfíbios, 36 répteis, 135 aves e 29 mamíferos. Já a flora da UC compreende 562 espécies (Souza et al., 2016)."
							},
							{
								text:"O levantamento da biodiversidade da UC revelou 4.285 ocorrências de organismos de fauna e flora (Figuras 55-58; Tabelas 18 e 19), pertencentes a 759 espécies, sendo 1.894 ocorrências de fauna (208 espécies) e 2.464 ocorrências de flora (581 espécies). Esses dados são resultados de coletas realizadas na UC a partir de 1942, sendo que para a fauna as coletas ocorreram de forma regular a partir de 1952. Para a flora uma amostragem de 1953 representa o único registro anterior a 1992, quando as coletas de vegetais tornaram-se regulares. O ápice amostral da biodiversidade deu-se no quinquênio de 2011-2015 para a fauna e 2011-2015 para a flora (Figura 59). Um total de 1.556 registros, sendo 321 de fauna e 1.547 de flora, encontra-se sem data de coleta e não puderam ser incluídos na análise gráfica."
							},
							{
								img:require('@/assets/topics/figure55.jpg'),
								imgDesc:"Mapa da distribuição dos registros de fauna, representando as Classes Amphibia, Aves e Reptilia, ocorrentes no Parque Estadual de Itaúnas.",
								imgNumber:55
							},
							{
								img:require('@/assets/topics/figure56.jpg'),
								imgDesc:"Mapa da distribuição dos registros de fauna, representando as Classes Actinopterygii, Insecta e Mammalia, ocorrentes no Parque Estadual de Itaúnas.",
								imgNumber:56
							},
							{
								img:require('@/assets/topics/figure57.jpg'),
								imgDesc:"Mapa da distribuição dos registros de flora, representando as Divisões Espermatófitas e Samambaias, ocorrentes no Parque Estadual de Itaúnas.",
								imgNumber:57
							},
							{
								img:require('@/assets/topics/figure58.jpg'),
								imgDesc:"Mapa da distribuição dos registros de flora, representando os Clados APG IV: Eudicotiledôneas basais, Grado ANA, Magnoliídeas, Monocotiledôneas, Superasterídeas e Superrosídeas, ocorrentes no Parque Estadual de Itaúnas.",
								imgNumber:58
							},
							{
								frame:require('@/assets/topics/table18.png'),
								frameDesc:"Distribuição de registros e espécies entre os grupos de fauna no Parque Estadual de Itaúnas.",
								frameNumber:"Tabela 18"
							},
							{
								// frame:require('@/assets/topics/table19.png'),
								frameDesc:"Distribuição de registros e espécies entre os grupos de flora no Parque Estadual de Itaúnas.",
								frameNumber:"Tabela 19"
							},
							{
								// img:require('@/assets/topics/figure59.png'),
								imgDesc:"Gráfico demonstrativo de número de coletas de fauna e flora realizadas no Parque Estadual de Itaúnas, ao longo do tempo.",
								imgNumber:59
							},
							{
								text:"O levantamento da fauna revelou que os grupos com maior representatividade de registros são os anfíbios e os répteis, com 1.314 e 267 registros, respectivamente. Contudo, os grupos mais diversos são os peixes (70 espécies) e as aves (36 espécies). A diversidade faunística levantada para a UC abrange 88 famílias, sendo que as 10 mais representativas quanto ao número de registros somam 84% e são apresentadas na Figura 60. Dentre as famílias de fauna com maior número de registros, destacam-se as pererecas da família Hylidae, com 1.146 registros para 22 espécies, e as rãs da família Leptodactylidae, com 136 registros para duas espécies. As famílias com maior diversidade registrada na UC são as pererecas da família Hylidae (Amphibia), com 22 espécies, os morcegos da família Phyllostomidae (Mammalia) e as aves da família Thraupidae (Aves), ambas as famílias com 10 espécies cada."
							},
							{
								text:"Vinte e duas espécies registradas na UC estão ameaçadas de extinção no Espírito Santo, sendo oito categorizadas como VU, seis EN e oito CR. Na lista nacional das espécies ameaçadas de extinção, este número é um pouco menor, sendo 14 espécies ameaçadas, sete VU, quatro EN e três CR (Anexo I)."
							},
							{
								img:require('@/assets/topics/figure60.png'),
								imgDesc:"",
								imgNumber:60
							},
							{
								text:"No levantamento da flora, o grupo mais representativo foi o das angiospermas com 2432 registros, 568 espécies, pertencentes a 116 famílias. Logo após, está o grupo das monilófitas com 31 registros, 12 espécies e 10 famílias, seguido das licopodófitas com apenas um registro de uma espécie e uma família. Dentre esses, 709 ocorrências (28,7% dos registros totais) são de espécimes identificados apenas em nível de família. A maior abundância de registros e diversidade florística de angiospermas levantada pertence ao clado superrosídeas, com metade dos registros e 40% das espécies, logo em seguida, ambas com o mesmo número de espécies, estão as superasterídeas, somando 24% dos registros, e monocotiledôneas com um quinto dos registros inventariados dentre as espermatófitas. Os demais clados de angiospermas amostrados foram, em ordem decrescente de abundância de registros e riqueza: magnoliídeas, eudicotiledôneas basais, e Grado ANA (Tabela 19). A família com maior número de espécies de angiospermas foi a Fabaceae com 44 espécies seguida por Myrtaceae e Cyperaceae, ambas com 36 espécies cada (Figura 61). Entre as samambaias a maior abundância de registros, bem como diversidade de espécies está entre as monilófitas, da família Polypodiaceae, com 18 registros e três espécies levantadas."
							},
							{
								text:"Das espécies de plantas levantadas, 14 estão ameaçadas de extinção a nível nacional, sendo oito espécies classificadas na categoria de VU, cinco EN e uma CR. Já a nível estadual, a UC possui 41 espécies ameaçadas, sendo 27 VU, 13 EN e uma CR, sendo esta, a espécie Humiriastrum spiritu-sancti Cuatrec., que também está na mesma categoria nacional."
							},
							{
								// img:require('@/assets/topics/figure61.png'),
								imgDesc:"Gráfico das famílias mais representativas no inventário florístico no Parque Estadual de Itaúnas.",
								imgNumber:61
							},
						]
					}
				],
				
			],
			members:[
				{
					name:"Bruce",
					lastName:"Wayne",
					description:"Bruce Wayne é um bilionário americano, magnata de negócios, filantropo e dono da corporação Wayne Enterprises.",
					img:"https://i.pinimg.com/564x/b7/41/8b/b7418b3c6d8ada9058a28db9309c2a65.jpg",
				},
				{	
					name:"Clark",
					lastName:"Kent",
					description:"Clark Kent tenta viver a vida de um ser humano normal, e mantém em segredo, para seus amigos, a sua herança alienígena. Ele tem um relacionamento com Lana Lang durante as sete primeiras temporadas.",
					img:"https://i.pinimg.com/originals/76/fc/86/76fc86692e1d7e03a21e130ead24904a.jpg",
				}
			]
    }
  }
}




