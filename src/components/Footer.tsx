import { Mail, Phone, MapPin } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>JMA Serralheria</h3>
          <p className={styles.description}>
            Desde 1992 fazendo serviços com qualidade e relevância no mercado.
          </p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Contato</h3>
          <div className={styles.contactItem}>
            <Phone size={18} />
            <a href="tel:11989425749">(11) 98942-5749</a>
          </div>
          <div className={styles.contactItem}>
            <Mail size={18} />
            <a href="mailto:jmaserralheria.alves@gmail.com">jmaserralheria.alves@gmail.com</a>
          </div>
          <div className={styles.contactItem}>
            <MapPin size={18} />
            <span>R. Pinhal, 252 - Jardim Sabiá, Cotia - SP, 06716-575</span>
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Horário</h3>
          <p>Segunda a Sexta: 8h - 18h</p>
          <p>Sábado: 8h - 14h</p>
          <p>Domingo: Fechado</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; 2025 JMA Serralheria. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

