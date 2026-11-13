export type Avaliacao={id:number;restaurante:string;avaliacao:string;problemas:string[];sentimento:'positivo'|'negativo'|'misto';urgencia:'baixa'|'media'|'alta';resumo:string};
export const avaliacoes:Avaliacao[]=[
 {
  "id": 1,
  "restaurante": "Cantina da Nona",
  "avaliacao": "O pedido chegou frio e faltou o refrigerante que eu paguei.",
  "problemas": [
   "temperatura",
   "item_faltando"
  ],
  "sentimento": "negativo",
  "urgencia": "media",
  "resumo": "Pedido chegou frio e sem o refrigerante pago"
 },
 {
  "id": 2,
  "restaurante": "Sushi Kaze",
  "avaliacao": "Tudo perfeito, peixe fresquinho e chegou antes do previsto!",
  "problemas": [
   "elogio"
  ],
  "sentimento": "positivo",
  "urgencia": "baixa",
  "resumo": "Peixe fresco e entrega antecipada, cliente satisfeito"
 },
 {
  "id": 3,
  "restaurante": "Burguer do Zé",
  "avaliacao": "Demorou quase 2 horas para chegar. O lanche estava bom, mas a espera foi absurda.",
  "problemas": [
   "atraso"
  ],
  "sentimento": "misto",
  "urgencia": "media",
  "resumo": "Entrega demorou quase 2 horas, mas o lanche estava bom"
 },
 {
  "id": 4,
  "restaurante": "Pizzaria Forno Velho",
  "avaliacao": "Veio a pizza errada, pedi calabresa e veio portuguesa.",
  "problemas": [
   "pedido_errado"
  ],
  "sentimento": "negativo",
  "urgencia": "media",
  "resumo": "Pizza enviada com sabor diferente do pedido"
 },
 {
  "id": 5,
  "restaurante": "Marmitaria Sabor Caseiro",
  "avaliacao": "Comida gostosa, mas a embalagem abriu e vazou molho na sacola toda.",
  "problemas": [
   "embalagem"
  ],
  "sentimento": "misto",
  "urgencia": "media",
  "resumo": "Comida elogiada, mas embalagem abriu e vazou molho na sacola"
 },
 {
  "id": 6,
  "restaurante": "Açaí Tropical",
  "avaliacao": "Ótimo como sempre, porção generosa.",
  "problemas": [
   "elogio"
  ],
  "sentimento": "positivo",
  "urgencia": "baixa",
  "resumo": "Cliente elogia a comida e a porção generosa"
 },
 {
  "id": 7,
  "restaurante": "Cantina da Nona",
  "avaliacao": "Achei caro para o tamanho da porção. A massa estava boa.",
  "problemas": [
   "preco"
  ],
  "sentimento": "misto",
  "urgencia": "baixa",
  "resumo": "Porção cara para o tamanho, mas massa boa"
 },
 {
  "id": 8,
  "restaurante": "Sushi Kaze",
  "avaliacao": "O entregador foi grosseiro e não quis subir até o apartamento.",
  "problemas": [
   "atendimento"
  ],
  "sentimento": "negativo",
  "urgencia": "media",
  "resumo": "Entregador foi grosseiro e não subiu ao apartamento"
 },
 {
  "id": 9,
  "restaurante": "Burguer do Zé",
  "avaliacao": "Hambúrguer cru por dentro. Fiquei com medo de comer.",
  "problemas": [
   "seguranca_alimentar"
  ],
  "sentimento": "negativo",
  "urgencia": "alta",
  "resumo": "Hambúrguer chegou cru por dentro, gerando medo de consumo"
 },
 {
  "id": 10,
  "restaurante": "Pizzaria Forno Velho",
  "avaliacao": "Chegou rápido e quentinha, a melhor pizza do bairro.",
  "problemas": [
   "elogio"
  ],
  "sentimento": "positivo",
  "urgencia": "baixa",
  "resumo": "Entrega rápida, pizza quentinha e muito elogiada"
 },
 {
  "id": 11,
  "restaurante": "Marmitaria Sabor Caseiro",
  "avaliacao": "Faltou o feijão e a salada. Paguei por uma refeição completa.",
  "problemas": [
   "item_faltando"
  ],
  "sentimento": "negativo",
  "urgencia": "media",
  "resumo": "Faltaram feijão e salada no pedido pago como refeição completa"
 },
 {
  "id": 12,
  "restaurante": "Açaí Tropical",
  "avaliacao": "O açaí chegou derretido, parecia uma sopa.",
  "problemas": [
   "temperatura"
  ],
  "sentimento": "negativo",
  "urgencia": "media",
  "resumo": "Açaí chegou derretido"
 },
 {
  "id": 13,
  "restaurante": "Cantina da Nona",
  "avaliacao": "Pedi sem cebola por alergia e veio com cebola. Isso é grave.",
  "problemas": [
   "pedido_errado",
   "seguranca_alimentar"
  ],
  "sentimento": "negativo",
  "urgencia": "alta",
  "resumo": "Pedido veio com cebola apesar de restrição por alergia"
 },
 {
  "id": 14,
  "restaurante": "Sushi Kaze",
  "avaliacao": "Demorou um pouco, mas a comida compensou.",
  "problemas": [
   "atraso"
  ],
  "sentimento": "misto",
  "urgencia": "baixa",
  "resumo": "Atraso leve, mas comida elogiada"
 },
 {
  "id": 15,
  "restaurante": "Burguer do Zé",
  "avaliacao": "Batata murcha e fria, hambúrguer ok.",
  "problemas": [
   "qualidade_comida",
   "temperatura"
  ],
  "sentimento": "misto",
  "urgencia": "media",
  "resumo": "Batata murcha e fria, hambúrguer ok"
 },
 {
  "id": 16,
  "restaurante": "Pizzaria Forno Velho",
  "avaliacao": "Tentei falar com o restaurante pelo chat e ninguém respondeu.",
  "problemas": [
   "atendimento"
  ],
  "sentimento": "negativo",
  "urgencia": "media",
  "resumo": "Restaurante não respondeu ao contato pelo chat"
 },
 {
  "id": 17,
  "restaurante": "Marmitaria Sabor Caseiro",
  "avaliacao": "Comida de vó, sempre peço daqui!",
  "problemas": [
   "elogio"
  ],
  "sentimento": "positivo",
  "urgencia": "baixa",
  "resumo": "Cliente elogia a comida caseira e diz que pede sempre"
 },
 {
  "id": 18,
  "restaurante": "Açaí Tropical",
  "avaliacao": "Veio com granola em vez de paçoca e o copo amassado.",
  "problemas": [
   "pedido_errado",
   "embalagem"
  ],
  "sentimento": "negativo",
  "urgencia": "media",
  "resumo": "Item trocado (granola no lugar de paçoca) e copo amassado"
 },
 {
  "id": 19,
  "restaurante": "Cantina da Nona",
  "avaliacao": "Atrasou 50 minutos e chegou fria.",
  "problemas": [
   "atraso",
   "temperatura"
  ],
  "sentimento": "negativo",
  "urgencia": "media",
  "resumo": "Pedido atrasou 50 minutos e chegou frio"
 },
 {
  "id": 20,
  "restaurante": "Sushi Kaze",
  "avaliacao": "Preço salgado, mas a qualidade é excelente.",
  "problemas": [
   "preco",
   "elogio"
  ],
  "sentimento": "misto",
  "urgencia": "baixa",
  "resumo": "Preço alto, mas comida de excelente qualidade"
 }
];
