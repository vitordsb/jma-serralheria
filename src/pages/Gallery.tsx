import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import styles from "./Gallery.module.css";

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
};

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Rampa metálica em operação",
      category: "estruturas",
      image: "/projects/servicos/rampas-metalicas-final.jpg",
      description:
        "Rampa metálica nivelada com pintura antiderrapante para agilizar cargas e descargas com total segurança."
    },
    {
      id: 2,
      title: "Rampa metálica sob medida",
      category: "estruturas",
      image: "/projects/servicos/rampas-metalicas.jpg",
      description:
        "Estrutura reforçada com travessas e proteções laterais seguindo o layout do cliente."
    },
    {
      id: 3,
      title: "Rampa em fabricação",
      category: "estruturas",
      image: "/projects/servicos/rampas-metalicas-processo.jpg",
      description:
        "Processo interno de soldagem e inspeção dimensional garantindo paralelismo perfeito."
    },
    {
      id: 4,
      title: "Corrimão de segurança",
      category: "acessos",
      image: "/projects/servicos/corrimao-seguranca.jpg",
      description:
        "Corrimão tubular pintado em amarelo segurança, instalado com chumbadores químicos de alto desempenho."
    },
    {
      id: 5,
      title: "Guarda-corpo industrial",
      category: "acessos",
      image: "/projects/servicos/guarda-corpo-industrial.jpg",
      description:
        "Proteção completa para mezaninos com fechamento inferior e portinhola para acesso controlado."
    },
    {
      id: 6,
      title: "Escada de acesso técnico",
      category: "acessos",
      image: "/projects/servicos/escadas-industriais.jpg",
      description:
        "Escada com patamares, guarda-corpo e rodízios com sistema de travamento para manutenção rápida."
    },
    {
      id: 7,
      title: "Proteção para paletes",
      category: "protecao",
      image: "/projects/servicos/protecao-paletes.jpg",
      description:
        "Defensas frontais e abraçadeiras de coluna absorvendo impactos de empilhadeiras e paleteiras."
    },
    {
      id: 8,
      title: "Proteções em tela",
      category: "protecao",
      image: "/projects/servicos/protecao-telas.jpg",
      description:
        "Painéis em tela eletrossoldada com portas e fechaduras, garantindo segurança sem bloquear ventilação."
    },
    {
      id: 9,
      title: "Mesas de refeitório",
      category: "operacao",
      image: "/projects/servicos/mesas-refeitorio.jpg",
      description:
        "Mesas metálicas resistentes à higienização frequente, com bancos integrados e pintura eletrostática."
    },
    {
      id: 10,
      title: "Mesas com rodízios",
      category: "operacao",
      image: "/projects/servicos/mesas-rodizios.jpg",
      description:
        "Conjunto com rodízios traváveis para movimentação ágil em linhas de montagem e manutenção."
    },
    {
      id: 11,
      title: "Treliças metálicas",
      category: "estruturas",
      image: "/projects/servicos/trelicas-metalicas.jpg",
      description:
        "Treliças dimensionadas para grandes vãos, já preparadas para receber cobertura metálica."
    },
    {
      id: 12,
      title: "Treliças na obra",
      category: "estruturas",
      image: "/projects/servicos/trelicas-metalicas-obra.jpg",
      description:
        "Montagem em campo com alinhamento a laser e supervisão direta da nossa equipe."
    },
    {
      id: 13,
      title: "Caçamba metálica",
      category: "operacao",
      image: "/projects/servicos/cacambaMetalica.jpg",
      description:
        "Caçamba basculante com reforços inferiores e olhais para içamentos seguros."
    },
    {
      id: 14,
      title: "Trincos personalizados",
      category: "operacao",
      image: "/projects/servicos/trincos-personalizados.jpg",
      description:
        "Produção seriada de trincos, dobradiças e peças especiais com acabamento anticorrosivo."
    }
  ];

  const categories = [
    { id: "todos", label: "Todos os Projetos" },
    { id: "estruturas", label: "Estruturas e Plataformas" },
    { id: "acessos", label: "Escadas e Corrimãos" },
    { id: "protecao", label: "Proteções" },
    { id: "operacao", label: "Operação e Logística" }
  ];

  const filteredProjects =
    selectedCategory === "todos"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 8);
  const canShowMore = filteredProjects.length > visibleProjects.length;

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setShowAll(false);
  };

  const handlePreview = (project: Project) => {
    setSelectedProject(project);
  };

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
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {visibleProjects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <button
                  type="button"
                  className={styles.imagePreviewButton}
                  onClick={() => handlePreview(project)}
                  aria-label={`Ampliar imagem do projeto ${project.title}`}
                >
                  <img src={project.image} alt={project.title} />
                  <span className={styles.imagePreviewLabel}>Ampliar imagem</span>
                </button>
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

        {(canShowMore || showAll) && filteredProjects.length > 0 && (
          <div className={styles.showMoreWrapper}>
            <button
              type="button"
              className={styles.showMoreButton}
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "Mostrar menos" : "Visualizar mais"}
            </button>
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

      <Dialog open={Boolean(selectedProject)} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className={styles.imageDialog}>
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
              </DialogHeader>
              <img src={selectedProject.image} alt={selectedProject.title} />
              <DialogDescription className={styles.dialogDescription}>{selectedProject.description}</DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
