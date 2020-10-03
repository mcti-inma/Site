<template>
  <div>
    <Banner>
      <span slot="title"> Mata Atlântica </span>
    </Banner>
		<br>
    <Description>
      <div slot="banner">A Mata Atlântica</div>
      <div slot="title">1.1. A Mata Atlântica Capixaba e Suas Ameaças</div>
      <p class="text" slot="text">
        Existem mais seres vivos no Planeta Terra do que os catalogados pelos
        livros, tantos que estimativas não conseguem discriminar. Segundo JOLY
        et al. (2011), a biodiversidade não compõe somente a diversidade
        genética das espécies vivas, ou unidades evolutivas básicas, como também
        é o componente de suporte à continuidade da vida na Terra. Ou seja, tal
        como BENSUSAN (2006) propõe, a heterogeneidade do ambiente possibilita a
        diversidade, e, ao mesmo tempo, é considerada função de si mesma. Sendo
        assim, quando falamos de biodiversidade estamos também relacionando
        plantas e animais aos seus habitats, uma vez que os seres vivos
        desenvolveram, ao longo de milhões de anos, adaptações àquele tipo de
        ambiente num processo co-evolutivo. Tão relevante quanto, citamos ainda
        as milhões de moléculas, com as mais diversas propriedades, contidas em
        cada espécie viva.
      </p>
    </Description>
		<br>
    <Description>
      <div slot="title">
        1.2. Estratégias Brasileiras para a Conservação da Biodiversidade
      </div>
      <p class="text" slot="text">
        A evolução dos neotrópicos foi singular devido ao completo isolamento,
        pós soerguimento dos Andes, desde o Cretáceo até o final do Terciário, e
        gerou a megadiversidade de espécies encontradas aqui atualmente
        (ANTONELLI, 2010; JOLY et al., 2011). Em contraste, as diferentes formas
        de uso da terra exercem implicações relevantes na fragmentação de
        habitats, levando à algumas populações a sofrerem um grau de ameaça de
        extinção, um fenômeno irreversível. Várias fontes cientificas são
        categóricas em afirmar que estamos vivendo a sexta extinção em massa
        provocada por nós, humanos. O cenário original do continente
        sul-americano foi completamente modificado com a chegada do homem, pois
        mesmo antes do descobrimento caçaram algumas espécies até a sua
        extinção, alteraram em pequena escala regiões costeiras e fluviais,
        ocuparam florestas implantando sistemas de cultivo. Desta forma, a
        capacidade humana de alterar a natureza embora limitada, não deve ser
        subestimada. Ainda assim, com a chegada dos europeus, e especialmente
        nos últimos 150 anos, constituíram uma fratura temporal na história da
        humanidade e do planeta por causa do incremento exponencial de
        alterações antropomórficas da biosfera e até da atmosfera. E espécies
        como Jatobá e Jequitibá, que sem influência do homem poderiam viver mais
        de duzentos anos, estão fadadas a desaparecer por não possuírem
        capacidade de migrar para outras áreas ou elaborar uma resposta
        evolutiva frente às mudanças climáticas (JOLY et al., 2011; FRANCO et
        al., 2012).
      </p>
    </Description>

    <Description>
      <p slot="text">
        Em qualquer área do conhecimento, quando temos nas mãos a totalidade de
        dados disponíveis fica mais plausível a delimitação e a determinação de
        demandas e atividades. Com a conservação essa é a máxima, “conhecer para
        preservar”, ou seja, não podemos prever a efetividade das ações
        preservacionistas quando nem sequer conhecemos todas as espécies vivas.
        Especialistas, por exemplo, não conseguem estimar taxas de extinção
        precisas, pois não conhecem o número total. Para isso, não somente o
        número de expedições de coleta deve ser aumentado no Brasil, mas também
        o número de especialistas. A conservação e uso sustentável da
        biodiversidade segundo o Ministério do Meio Ambiente do Brasil, sustenta
        e garante a resiliência de sistemas sociais e econômicos. Até 2016, o
        país nunca havia consolidado perspectivas e ferramentas de gestão em
        apenas um documento estratégico visando a conservação da biodiversidade
        e dos ecossistemas, e em agosto daquele ano foi criado a Estratégia e
        Plano de Ações Nacionais Para a Biodiversidade (EPANB) que integra todas
        as iniciativas com esse propósito.
      </p>
    </Description>
  </div>
</template>

<script>
import Description from "@/components/template/Description.vue";
import Banner from "@/components/template/Banner.vue";

export default {
  mounted() {
    console.log(this.$route.query.option);
  },
  components: {
    Description,
    Banner,
  },
};
</script>

<style>
</style>