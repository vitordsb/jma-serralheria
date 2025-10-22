import { Link } from "wouter";
import { Wrench, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Serralheria de Qualidade e Confiança</h1>
          <p className={styles.heroSubtitle}>
            Estruturas metálicas, portões e grades de proteção com mais de 10 anos de experiência
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
        <div className={styles.heroImage}>
          <img src="/projects/u81Ul7RoBJe9.jpg" alt="Estrutura metálica" />
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
            <h3>Experiência Comprovada</h3>
            <p>Mais de 10 anos atendendo clientes satisfeitos em toda a região de Cotia.</p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className={styles.servicesPreview}>
        <h2 className={styles.sectionTitle}>Nossos Serviços</h2>
        <div className={styles.servicesList}>
          <div className={styles.serviceItem}>
            <img src="/projects/p7V6xz3GbRJv.jpg" alt="Estruturas Metálicas" />
            <h3>Estruturas Metálicas</h3>
            <p>Coberturas, mezaninos e estruturas personalizadas para sua necessidade.</p>
          </div>
          <div className={styles.serviceItem}>
            <img src="/projects/8NKevbKmzSw3.jpg" alt="Portões" />
            <h3>Portões</h3>
            <p>Portões automáticos, deslizantes e basculantes de alta qualidade.</p>
          </div>
          <div className={styles.serviceItem}>
            <img src="/projects/MDlcGq3CvCGF.jpg" alt="Grades de Proteção" />
            <h3>Grades de Proteção</h3>
            <p>Grades de proteção personalizadas para residências e comércios.</p>
          </div>
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

