import { useState } from "react";
import styles from "./Gallery.module.css";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const projects = [
    {
      id: 1,
      title: "Cobertura Metálica - Residencial",
      category: "estruturas",
      image: "/projects/u81Ul7RoBJe9.jpg",
      description:
        "Estrutura tubular com telha termoacústica e calhas embutidas, criando uma área de lazer protegida e confortável para uso diário."
    },
    {
      id: 2,
      title: "Estrutura Metálica Industrial",
      category: "estruturas",
      image: "/projects/p7V6xz3GbRJv.jpg",
      description:
        "Pórticos e vigas dimensionados para cargas industriais, com soldas contínuas e travamentos que sustentam pontes rolantes e passarelas técnicas."
    },
    {
      id: 3,
      title: "Portão Automático",
      category: "portoes",
      image: "/projects/8NKevbKmzSw3.jpg",
      description:
        "Portão de correr motorizado com trilho nivelado e fecho eletrônico, pensado para agilizar o acesso sem comprometer a segurança perimetral."
    },
    {
      id: 4,
      title: "Grades de Proteção",
      category: "grades",
      image: "/projects/MDlcGq3CvCGF.jpg",
      description:
        "Painéis modulares com solda MIG e pintura eletrostática, entregando proteção contínua para janelas e frentes comerciais com acabamento refinado."
    },
    {
      id: 5,
      title: "Estrutura Metálica - Comercial",
      category: "estruturas",
      image: "/projects/ScEV0CDSixjW.jpg",
      description:
        "Cobertura metálica comercial com pilares aparafusados e fechamento em policarbonato, garantindo luminosidade natural e resistência a intempéries."
    }
  ];

  const categories = [
    { id: "todos", label: "Todos os Projetos" },
    { id: "estruturas", label: "Estruturas Metálicas" },
    { id: "portoes", label: "Portões" },
    { id: "grades", label: "Grades de Proteção" }
  ];

  const filteredProjects = selectedCategory === "todos" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className={styles.gallery}>
      <div className={styles.container}>
        <h1 className={styles.title}>Galeria de Projetos</h1>
        <p className={styles.subtitle}>
          Conheça alguns dos nossos projetos realizados com qualidade e profissionalismo.
        </p>

        {/* Category Filter */}
        <div className={styles.filterContainer}>
          <div className={styles.filterButtons}>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`${styles.filterButton} ${
                  selectedCategory === category.id ? styles.active : ""
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
                <div className={styles.overlay}>
                  <div className={styles.overlayContent}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className={styles.noProjects}>
            <p>Nenhum projeto encontrado nesta categoria.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className={styles.ctaBox}>
          <h2>Gostou de Algum Projeto?</h2>
          <p>Entre em contato conosco para discutir seu projeto personalizado.</p>
          <a href="/contato" className={styles.ctaButton}>
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </div>
  );
}
