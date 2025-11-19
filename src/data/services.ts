export type Service = {
  title: string;
  description: string;
  details: string[];
  image: string;
};

export const servicesData: Service[] = [
  {
    title: "Reforço estrutural e solda em altura",
    description:
      "Execução de soldas especiais e reforços em treliças, vigas e terças de galpões, com equipe capacitada para trabalhar em altura e deixar a estrutura segura para o uso diário.",
    details: [
      "Soldagem e recuperação de pontos críticos em coberturas industriais",
      "Instalação de travamentos adicionais e suportes para novos equipamentos",
      "Time treinado em NR-35 com linha de vida e proteção completa"
    ],
    image: "/projects/servicos/servicos-personalizados.jpg"
  },
  {
    title: "Tampas metálicas em chapa xadrez",
    description:
      "Fabricação de tampas e tampões em chapa xadrez galvanizada, com alças reforçadas e recortes técnicos, ideais para fechamento de caixas de inspeção e acesso subterrâneo.",
    details: [
      "Produção sob medida com cortes CNC e dobra precisa",
      "Soldas contínuas que garantem estanqueidade e resistência",
      "Opções de pintura ou galvanização para ambientes externos"
    ],
    image: "/projects/servicos/rampas-metalicas-final.jpg"
  },
  {
    title: "Montagem de tampas e tampões",
    description:
      "Processo de montagem das tampas metálicas, com instalação de alças, reforços internos e preparação para fixação em campo, assegurando operação fácil e segura.",
    details: [
      "Soldagem de componentes e teste de movimentação das alças",
      "Reforço estrutural para suportar tráfego de pessoas e equipamentos leves",
      "Entrega pronta para solda ou aparafusamento no local"
    ],
    image: "/projects/servicos/rampas-metalicas-processo.jpg"
  },
  {
    title: "Mezanino e plataformas metálicas",
    description:
      "Mezaninos metálicos calculados por engenheiros parceiros e montados pela nossa equipe interna, liberando novos pavimentos de trabalho com segurança e produtividade.",
    details: [
      "Dimensionamento conforme carga distribuída, layout e fluxo operacional",
      "Integração com escadas marinheiro, corrimãos e guarda-corpos homologados",
      "Entrega turnkey: fabricação, pintura, montagem e liberação com checklist"
    ],
    image: "/projects/servicos/trelicas-metalicas-obra.jpg"
  },
  {
    title: "Corrimão e guarda-corpo sob medida",
    description:
      "Conjuntos de corrimão e guarda-corpo tubulares ou em chapa vazada, alinhados às normas NR-12 e ABNT, perfeitos para circulações internas e áreas técnicas.",
    details: [
      "Modelos pintados, galvanizados ou em inox escovado para diferentes ambientes",
      "Fixações químicas e mecânicas de alta ancoragem que evitam recalques",
      "Aplicação em escadas, passarelas, mezaninos, linhas de produção e fachadas"
    ],
    image: "/projects/servicos/corrimao-seguranca.jpg"
  },
  {
    title: "Escada marinheiro e acesso técnico",
    description:
      "Escadas marinheiro com guarda-anéis e patamares de descanso que atendem a áreas de manutenção, reservatórios e coberturas, garantindo acesso seguro em espaços elevados.",
    details: [
      "Projetos conforme altura, interferências e pontos de fixação disponíveis",
      "Degraus antiderrapantes e plataformas com rodapé para proteção extra",
      "Tratamentos anticorrosivos e opcionais de linha de vida para trabalhos externos"
    ],
    image: "/projects/servicos/escadas-industriais.jpg"
  }
];
