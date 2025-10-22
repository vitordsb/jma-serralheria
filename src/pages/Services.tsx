import styles from "./Services.module.css";

export default function Services() {
  const services = [
    {
      title: "Estruturas Metálicas",
      description: "Fabricação e instalação de estruturas metálicas personalizadas para suas necessidades.",
      details: [
        "Coberturas metálicas para garagens, áreas de lazer e comerciais",
        "Mezaninos estruturados com segurança garantida",
        "Estruturas para pergolados e áreas de convivência",
        "Projetos personalizados conforme especificações técnicas",
        "Instalação profissional com acabamento impecável"
      ],
      image: "/projects/p7V6xz3GbRJv.jpg"
    },
    {
      title: "Portões",
      description: "Portões de alta qualidade em diversos modelos e estilos para sua residência ou comércio.",
      details: [
        "Portões automáticos com sistemas modernos e seguros",
        "Portões deslizantes para garagens e entradas",
        "Portões basculantes com mecanismo de qualidade",
        "Portões personalizados conforme seu projeto",
        "Manutenção e reparo de portões existentes",
        "Instalação de motores e sistemas de automação"
      ],
      image: "/projects/8NKevbKmzSw3.jpg"
    },
    {
      title: "Grades de Proteção",
      description: "Grades de proteção robustas e elegantes para segurança e estética.",
      details: [
        "Grades de proteção para janelas e portas",
        "Grades decorativas com designs modernos",
        "Grades de segurança para comércios e indústrias",
        "Grades personalizadas conforme seu gosto",
        "Acabamento em pintura ou galvanização",
        "Instalação profissional com garantia"
      ],
      image: "/projects/MDlcGq3CvCGF.jpg"
    },
    {
      title: "Serviços Adicionais",
      description: "Outros serviços de serralheria para completar seu projeto.",
      details: [
        "Conserto e reparo de estruturas metálicas",
        "Soldagem profissional de alta qualidade",
        "Corte e dobra de metais conforme especificação",
        "Pintura e acabamento de peças metálicas",
        "Manutenção preventiva de estruturas",
        "Consultoria técnica para seus projetos"
      ],
      image: "/projects/ScEV0CDSixjW.jpg"
    }
  ];

  return (
    <div className={styles.services}>
      <div className={styles.container}>
        <h1 className={styles.title}>Nossos Serviços</h1>
        <p className={styles.subtitle}>
          Oferecemos uma ampla gama de serviços de serralheria com qualidade e profissionalismo.
        </p>

        <div className={styles.servicesList}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceImage}>
                <img src={service.image} alt={service.title} />
              </div>
              <div className={styles.serviceContent}>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceDescription}>{service.description}</p>
                <ul className={styles.detailsList}>
                  {service.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaBox}>
          <h2>Interessado em Nossos Serviços?</h2>
          <p>Entre em contato conosco para discutir seu projeto e receber um orçamento personalizado.</p>
          <a href="/contato" className={styles.ctaButton}>
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </div>
  );
}

