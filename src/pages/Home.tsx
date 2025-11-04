import { Link } from "wouter";
import { Wrench, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/services";
import styles from "./Home.module.css";

export default function Home() {
  const featuredServices = servicesData.slice(0, 6);
  const whatsappNumber = "5511989425749";

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Estruturas Metálicas Sob Medida desde 1992</h1>
          <p className={styles.heroSubtitle}>
            Rampas para docas, proteções industriais, mesas móveis e soluções construídas pela JMA para manter sua
            operação segura e produtiva.
          </p>
          <div className={styles.heroCTA}>
            <Link href="/servicos">
              <Button className={styles.primaryButton}>Conheça Nossos Serviços</Button>
            </Link>
            <Link href="/contato">
              <Button className={styles.secondaryButton}>Solicitar Orçamento</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Por Que Escolher a JMA?</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <Wrench size={40} className={styles.featureIcon} />
            <h3>Qualidade Premium</h3>
            <p>Utilizamos os melhores materiais e técnicas de trabalho para garantir durabilidade.</p>
          </div>
          <div className={styles.featureCard}>
            <Shield size={40} className={styles.featureIcon} />
            <h3>Segurança Garantida</h3>
            <p>Todos os projetos seguem normas de segurança e qualidade exigidas pelo mercado.</p>
          </div>
          <div className={styles.featureCard}>
            <Award size={40} className={styles.featureIcon} />
            <h3>Tradição desde 1992</h3>
            <p>Mais de três décadas acompanhando o dia a dia de indústrias, comércios e operadores logísticos.</p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className={styles.servicesPreview}>
        <h2 className={styles.sectionTitle}>Nossos Serviços</h2>
        <div className={styles.servicesList}>
          {featuredServices.map((service) => {
            const contactMessage = encodeURIComponent(`quero fazer uma cotação de: ${service.title}`);
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${contactMessage}`;
            return (
              <div key={service.title} className={styles.serviceItem}>
                <img src={service.image} alt={service.title} />
                <div className={styles.serviceItemContent}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.serviceContactButton}
                  >
                    <span className={styles.serviceWhatsappIcon} aria-hidden="true">
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
        <div className={styles.previewCTA}>
          <Link href="/galeria">
            <Button className={styles.primaryButton}>Ver Galeria Completa</Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>Pronto para Transformar Seu Projeto?</h2>
        <p>Entre em contato conosco para um orçamento sem compromisso.</p>
        <Link href="/contato">
          <Button className={styles.ctaButton}>Solicitar Orçamento</Button>
        </Link>
      </section>
    </div>
  );
}
