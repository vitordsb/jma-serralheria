import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.title}>Sobre a JMA Serralheria</h1>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Nossa História</h2>
            <p>
              A JMA Serralheria é uma empresa consolidada no mercado com mais de 10 anos de experiência em serviços de serralheria. 
              Nascemos com o compromisso de oferecer soluções de qualidade, durabilidade e confiança para nossos clientes.
            </p>
            <p>
              Atuamos com fabricação e reforma sob medida: estruturas metálicas, portões, grades de proteção e, principalmente,
              rampas para docas e passagem de caminhões, dimensionadas conforme chapa, medida e espessura informadas.
              Atendemos residências, comércios e indústrias em toda a região de Cotia e arredores.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Nossa Missão</h2>
            <p>
              Fornecer serviços de serralheria de excelência, utilizando os melhores materiais e técnicas, garantindo a satisfação 
              e confiança de nossos clientes através de trabalhos duráveis e seguros.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Nossos Valores</h2>
            <ul className={styles.valuesList}>
              <li><strong>Qualidade:</strong> Utilizamos apenas materiais de primeira qualidade e técnicas comprovadas.</li>
              <li><strong>Confiança:</strong> Nossos clientes confiam em nosso trabalho e compromisso com prazos.</li>
              <li><strong>Segurança:</strong> Todos os projetos seguem normas de segurança exigidas pelo mercado.</li>
              <li><strong>Inovação:</strong> Acompanhamos as tendências e inovações do mercado de serralheria.</li>
              <li><strong>Atendimento:</strong> Oferecemos atendimento personalizado e consultoria para cada projeto.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Por Que Escolher a JMA?</h2>
            <div className={styles.reasons}>
              <div className={styles.reason}>
                <h3>Experiência Comprovada</h3>
                <p>Mais de 10 anos de experiência em serviços de serralheria com clientes satisfeitos.</p>
              </div>
              <div className={styles.reason}>
                <h3>Qualidade Premium</h3>
                <p>Utilizamos os melhores materiais e técnicas para garantir durabilidade e beleza.</p>
              </div>
              <div className={styles.reason}>
                <h3>Atendimento Personalizado</h3>
                <p>Cada projeto é único e recebe atenção especial de nossa equipe.</p>
              </div>
              <div className={styles.reason}>
                <h3>Segurança Garantida</h3>
                <p>Todos os projetos seguem normas de segurança e qualidade do mercado.</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Localização</h2>
            <p>
              Estamos localizados em Cotia - SP, com fácil acesso para atender toda a região metropolitana de São Paulo.
            </p>
            <p>
              <strong>Endereço:</strong> R. Pinhal, 252 - Jardim Sabiá, Cotia - SP, 06716-575
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
