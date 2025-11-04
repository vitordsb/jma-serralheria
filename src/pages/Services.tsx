import { useState } from "react";
import { servicesData } from "@/data/services";
import styles from "./Services.module.css";

export default function Services() {
  const [showAll, setShowAll] = useState(false);

  const whatsappNumber = "5511989425749";

  const visibleServices = showAll ? servicesData : servicesData.slice(0, 6);

  const hasMoreServices = servicesData.length > 6;

  return (
    <div className={styles.services}>
      <div className={styles.container}>
        <h1 className={styles.title}>Nossos Serviços</h1>
        <p className={styles.subtitle}>
          Projetos industriais completos — rampas, proteções, mesas, escadas e muito mais. Todos executados pela
          nossa equipe para atender empresas com segurança e acabamento profissional.
        </p>

        <div className={styles.servicesList}>
          {visibleServices.map((service) => {
            const contactMessage = encodeURIComponent(`quero fazer uma cotação de: ${service.title}`);
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${contactMessage}`;
            return (
              <div key={service.title} className={styles.serviceCard}>
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
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsappButton}
                  >
                    <span className={styles.whatsappIcon} aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.04 2a9.94 9.94 0 0 0-8.53 15.21L2 22l4.91-1.47A9.95 9.95 0 1 0 12.04 2Zm5.93 14.32c-.25.7-1.43 1.33-1.98 1.38-.51.05-1.15.08-1.87-.12-.43-.14-.98-.32-1.69-.63-2.97-1.29-4.9-4.24-5.05-4.44-.15-.21-1.21-1.6-1.21-3.06 0-1.46.77-2.18 1.04-2.48.27-.3.6-.37.8-.37.2 0 .4.01.57.01.18 0 .43-.08.68.52.25.6.86 2.05.94 2.2.08.15.12.33.02.53-.1.2-.15.33-.3.51-.15.18-.32.4-.46.54-.15.15-.3.31-.13.6.17.3.75 1.23 1.61 2 1.11.99 2.06 1.3 2.36 1.45.3.15.48.13.66-.08.18-.21.76-.88.96-1.18.2-.3.4-.25.68-.15.27.1 1.73.82 2.03.97.3.15.5.22.57.35.06.13.06.74-.19 1.44Z" />
                      </svg>
                    </span>
                    Entrar em contato
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {hasMoreServices && (
          <div className={styles.showMoreWrapper}>
            <button
              type="button"
              className={styles.showMoreButton}
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "Mostrar menos serviços" : "Mostrar mais serviços"}
            </button>
          </div>
        )}

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
