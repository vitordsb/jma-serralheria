import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [name, setName] = useState("");

  const whatsappNumber = "5511989425749";
  const whatsappMessage = `Olá! Meu nome é ${name || "Cliente"}. Gostaria de solicitar um orçamento para um projeto de serralheria.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <h1 className={styles.title}>Entre em Contato</h1>
        <p className={styles.subtitle}>
          Estamos prontos para ajudar com seu projeto. Entre em contato conosco!
        </p>

        <div className={styles.content}>
          {/* Contact Information */}
          <div className={styles.infoSection}>
            <h2 className={styles.sectionTitle}>Informações de Contato</h2>

            <div className={styles.infoCard}>
              <Phone className={styles.icon} size={32} />
              <div>
                <h3>Telefone</h3>
                <a href="tel:11989425749">(11) 98942-5749</a>
              </div>
            </div>

            <div className={styles.infoCard}>
              <Mail className={styles.icon} size={32} />
              <div>
                <h3>Email</h3>
                <a href="mailto:jmaserralheria.artes@gmail.com">jmaserralheria.artes@gmail.com</a>
              </div>
            </div>

            <div className={styles.infoCard}>
              <MapPin className={styles.icon} size={32} />
              <div>
                <h3>Endereço</h3>
                <p>R. Pinhal, 252 - Jardim Sabiá<br />Cotia - SP, 06716-575</p>
              </div>
            </div>

            <div className={styles.hoursCard}>
              <h3>Horário de Funcionamento</h3>
              <p><strong>Segunda a Sexta:</strong> 8h - 18h</p>
              <p><strong>Sábado:</strong> 8h - 14h</p>
              <p><strong>Domingo:</strong> Fechado</p>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className={styles.whatsappSection}>
            <div className={styles.whatsappCard}>
              <MessageCircle className={styles.whatsappIcon} size={48} />
              <h2>Converse Conosco no WhatsApp</h2>
              <p>
                A forma mais rápida de entrar em contato é através do WhatsApp. 
                Clique no botão abaixo e envie sua mensagem!
              </p>

              <div className={styles.formGroup}>
                <label htmlFor="name">Seu Nome</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Digite seu nome"
                  className={styles.input}
                />
              </div>

              <button onClick={handleWhatsAppClick} className={styles.whatsappButton}>
                <MessageCircle size={20} />
                Enviar Mensagem no WhatsApp
              </button>

              <p className={styles.whatsappInfo}>
                Você será redirecionado para o WhatsApp com uma mensagem pré-preenchida.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className={styles.additionalInfo}>
          <h2>Por Que Entrar em Contato Conosco?</h2>
          <div className={styles.reasonsGrid}>
            <div className={styles.reason}>
              <h3>Consultoria Gratuita</h3>
              <p>Oferecemos consultoria sem compromisso para discutir seu projeto.</p>
            </div>
            <div className={styles.reason}>
              <h3>Orçamento Personalizado</h3>
              <p>Cada projeto recebe um orçamento detalhado e personalizado.</p>
            </div>
            <div className={styles.reason}>
              <h3>Resposta Rápida</h3>
              <p>Respondemos rapidamente suas dúvidas e solicitações.</p>
            </div>
            <div className={styles.reason}>
              <h3>Equipe Experiente</h3>
              <p>Profissionais que atuam em serralheria industrial desde 1992, acompanhando cada instalação.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
