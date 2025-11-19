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
          <span className={styles.heroBadge}>Atendimentos profissionais emergenciais • Soldas especiais no pronto atendimento</span>
          <h1 className={styles.heroTitle}>Portões e Estruturas Internas com Acabamento Premium</h1>
          <p className={styles.heroSubtitle}>
            Projetamos portões basculantes, portas de enrolar, mezaninos e escadas marinheiro com equipe própria, soldagens qualificadas e liberação assistida.
          </p>
          <p className={styles.heroNote}>
            Foco total em produção e reforma interna. Serviços externos são avaliados e negociados diretamente com nossa equipe técnica.
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
        <h2 className={styles.sectionTitle}>Por que Escolher a JMA?</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <Wrench size={40} className={styles.featureIcon} />
            <h3>Produção e Reforma Interna</h3>
            <p>Time próprio dedicado a fabricação, retrofit e ajustes finos dentro da nossa planta, mantendo qualidade e prazos.</p>
          </div>
          <div className={styles.featureCard}>
            <Shield size={40} className={styles.featureIcon} />
            <h3>Pronto Atendimento Emergencial</h3>
            <p>Disponibilizamos equipes de solda especial para respostas rápidas e reparos críticos em portões e estruturas.
            </p>
          </div>
          <div className={styles.featureCard}>
            <Award size={40} className={styles.featureIcon} />
            <h3>Terceirização Especializada</h3>
            <p>Fornecemos equipes de serralheria para terceiros com gestão completa, relatórios e inspeções compartilhadas.</p>
          </div>
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
