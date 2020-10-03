export default {
  data() {
    return {
      store: {
        name: "Tiger store",
        logo: {
          width: "50", //sem adicionar "px" no final
          height: "",
          link: require("@/assets/store-logo-black.png")
        }
      },
      slides: [
        {
          href: '#',
          src: 'https://images-submarino.b2w.io/spacey/suba/2020/09/21/trd-mkt_livros_record_1509_HI_destaque_desk.png'
        },
        {
          href: '#',
          src: 'https://images-submarino.b2w.io/spacey/suba/2020/09/16/hi_amolivros_destaque_desk.png'
        },
        {
          href: '#',
          src: 'https://lojasaraiva.vteximg.com.br/arquivos/ids/31727855/200921_sy_livros_tv03.png?v=637360528045200000'
        },
        {
          href: '#',
          src: 'https://lojasaraiva.vteximg.com.br/arquivos/ids/31727859/200921_sy_tv4_condado.png?v=637360605868730000'
        },
        {
          href: '#',
          src: 'https://images-americanas.b2w.io/spacey/acom/2020/09/02/Homeinterna-Desk-02.png'
        }
        
      ],
      offerCards:[
        {
          //   size: "200",
          img:
            "https://lojasaraiva.vteximg.com.br/arquivos/ids/4676872/1604_capa_lista-mais-vendidos-da-veja-2.jpg?v=637055388168630000",
          link: "#",
        },
        {
          //   size: "200",
          img:
            "https://lojasaraiva.vteximg.com.br/arquivos/ids/19912221/0704_capa_organize-se.png?v=637263756866130000",
          link: "#",
        },
        {
          //   size: "200",
          img:
            "https://lojasaraiva.vteximg.com.br/arquivos/ids/20358152/0807_capa_os-destaques-da-geracao.png?v=637299182968470000",
          link: "",
        },
        {
          //   size: "200",
          img:
            "https://lojasaraiva.vteximg.com.br/arquivos/ids/19919982/0306_capa_Livrosqueabalaramomundo.png?v=637272499463870000",
          link: "",
        },
      ],
      cardsSlide:[
        {
          title:"Volumes",
          img:"https://images-americanas.b2w.io/produtos/imagens/123804025/123804033_1GG.jpg",
          link:"#"
        },
        {
          title:"Descontos imperdiveis na loja",
          img:"https://static3.tcdn.com.br/img/img_prod/103175/livro_batismo_de_fogo_padre_marcelo_rossi_14731_1_20200814102244.jpg",
          link:"#"
        },
        {
          title:"Triologias",
          img:"https://images-na.ssl-images-amazon.com/images/I/41d-vMAJ8gL._SX331_BO1,204,203,200_.jpg",
          link:""
        }
      ],
      carousel:{
        link:"#",
        cards:[
          {
            title:"Um amor de vigarista: Série Querida Conselheira Amorosa ",
            img:"https://images-na.ssl-images-amazon.com/images/I/41a-N5sICoL._SX335_BO1,204,203,200_.jpg",
            price:"26,39"
          },
          {
            title:"Três semanas para se casar: Série Os Worthingtons ",
            img:"https://images-na.ssl-images-amazon.com/images/I/51htaTyGeWL._SX336_BO1,204,203,200_.jpg",
            price:"56,10"
          },
          {
            title:"Estou nas mãos de Deus (Português) Capa comum – 9 abril 2014",
            img:"https://images-na.ssl-images-amazon.com/images/I/518bvuThbxL._SX346_BO1,204,203,200_.jpg",
            price:"72,90"
          },
          {
            title:"O Poder do Encantamento (Português) Capa comum – 15 setembro 2017",
            img:"https://images-na.ssl-images-amazon.com/images/I/51kcKTPmBcL._SX344_BO1,204,203,200_.jpg",
            price:"39,00"
          },
          {
            title:"Livro - Fundação e Império",
            img:"https://images-americanas.b2w.io/produtos/imagens/1973772613/1973772621_1GG.jpg",
            price:"35,91"
          },
          {
            title:"Livro - Coleção Harry Potter - 7 volumes",
            img:"https://images-americanas.b2w.io/produtos/imagens/123804025/123804033_1GG.jpg",
            price:"149,90"
          }
        ]
      },
      carousel2:{
        link:"#",
        cards:[
          {
            title:"Veronika Decide Morrer",
            img:"https://i2.wp.com/becoliterario.com/wp-content/uploads/2016/05/Veronika-Decide-Morrer-Paulo-Coelho-1657396.jpg",
            price:"40,39"
          },
          {
            title:"O milagre da manhã: O segredo para transformar sua vida (antes das 8 horas)",
            img:"https://m.media-amazon.com/images/I/41zcA8iynSL._AC_UY218_.jpg",
            price:"25,00"
          },
          {
            title:"A Cabana",
            img:"https://m.media-amazon.com/images/I/91eXvRufnFL._AC_UY218_.jpg",
            price:"23,48"
          },
          {
            title:"Cartas Do Passado (Português) Capa comum – 26 junho ",
            img:"https://images-na.ssl-images-amazon.com/images/I/51AlHRss5uL._SX355_BO1,204,203,200_.jpg",
            price:"19,99"
          },
          {
            title:"Alguém Para Amar (série Westcott - Livro 1) (Português) ",
            img:"https://images-na.ssl-images-amazon.com/images/I/517XcKmGWML._SX350_BO1,204,203,200_.jpg",
            price:"35,91"
          },
          {
            title:"Livro - Coleção Harry Potter - 7 volumes",
            img:"https://images-americanas.b2w.io/produtos/imagens/123804025/123804033_1GG.jpg",
            price:"149,90"
          }
        ]
      },
      socials:[
        {
          name:"instagram",
          link:"#"
        },
        {
          name:"facebook",
          link:"#"
        },
        {
          name:"youtube",
          link:"#"
        },
      ]
    }
  }
}




