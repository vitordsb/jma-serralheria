import { servicesData } from "@/data/services";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <div className={styles.services}>
      <div className={styles.container}>
        <h1 className={styles.title}>Nossos Serviços</h1>
        <p className={styles.subtitle}>
          Oferecemos uma ampla gama de serviços de serralheria com qualidade e profissionalismo.
        </p>

        <div className={styles.servicesList}>
          {servicesData.map((service, index) => (
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
