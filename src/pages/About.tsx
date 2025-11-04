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
              Desde 1992, a JMA Serralheria transforma aço em estruturas inteligentes que mantêm operações funcionando com segurança.
              Surgimos como uma oficina familiar e evoluímos para um time especializado em projetos industriais completos.
            </p>
            <p>
              Crescemos junto com nossos clientes — empresas que precisam de rampas para docas, proteções para linhas de produção,
              estruturas aéreas, portões automatizados e adequações especiais que mantêm a rotina segura e organizada.
            </p>
            <p>
              Somos parceiros de manutenção e engenharia, atuando desde a visita técnica até a montagem final, sempre com acabamento
              refinado e respeito aos prazos combinados.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Nossa Missão</h2>
            <p>
              Entregar soluções de serralheria que resolvam desafios reais da operação dos nossos clientes, utilizando materiais certificados,
              processos controlados e uma equipe que cuida de cada etapa do projeto.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Nossos Valores</h2>
            <ul className={styles.valuesList}>
              <li><strong>Qualidade Industrial:</strong> Materiais e acabamentos pensados para resistir a ambientes exigentes.</li>
              <li><strong>Confiança Total:</strong> Parcerias de longo prazo construídas com transparência e cumprimento de prazos.</li>
              <li><strong>Segurança em Primeiro Lugar:</strong> Projetos alinhados às normas e boas práticas que evitam paradas.</li>
              <li><strong>Inovação na Medida:</strong> Soluções personalizadas que combinam experiência com novas tecnologias.</li>
              <li><strong>Atendimento Consultivo:</strong> Entendemos o desafio antes de propor a melhor alternativa técnica.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Por Que Escolher a JMA?</h2>
            <div className={styles.reasons}>
              <div className={styles.reason}>
                <h3>Tradição em Movimento</h3>
                <p>Mais de três décadas entregando estruturas metálicas sob medida para indústrias e comércios.</p>
              </div>
              <div className={styles.reason}>
                <h3>Qualidade Premium</h3>
                <p>Processos de fabricação internos e soldas certificadas asseguram durabilidade e acabamento superior.</p>
              </div>
              <div className={styles.reason}>
                <h3>Atendimento Personalizado</h3>
                <p>Projetos acompanhados de perto, com relatórios de evolução e ajustes conforme a necessidade.</p>
              </div>
              <div className={styles.reason}>
                <h3>Segurança Garantida</h3>
                <p>Entrega com checklist técnico, inspeção final e orientação de uso para a sua equipe.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
