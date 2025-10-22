# JMA Serralheria - Portfólio Empresarial

Bem-vindo ao portfólio empresarial da **JMA Serralheria**! Este é um site moderno e profissional desenvolvido em React com CSS Modules.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior) - [Baixar aqui](https://nodejs.org/)
- **npm** ou **pnpm** (gerenciador de pacotes)

## 🚀 Como Executar o Projeto

### 1. Descompacte o arquivo ZIP

```bash
unzip jma-serralheria-portfolio.zip
cd jma-serralheria-portfolio
```

### 2. Instale as dependências

```bash
# Usando npm
npm install

# Ou usando pnpm (recomendado)
pnpm install
```

### 3. Inicie o servidor de desenvolvimento

```bash
# Usando npm
npm run dev

# Ou usando pnpm
pnpm dev
```

### 4. Acesse o site

Abra seu navegador e acesse:
```
http://localhost:5173
```

## 📁 Estrutura do Projeto

```
jma-serralheria-portfolio/
├── client/
│   ├── public/
│   │   ├── logo.jpeg           # Logo da empresa
│   │   ├── icon.jpeg           # Ícone da empresa
│   │   └── projects/           # Imagens dos projetos
│   └── src/
│       ├── pages/              # Páginas do site
│       │   ├── Home.tsx
│       │   ├── About.tsx
│       │   ├── Services.tsx
│       │   ├── Gallery.tsx
│       │   └── Contact.tsx
│       ├── components/         # Componentes reutilizáveis
│       │   ├── Header.tsx
│       │   └── Footer.tsx
│       ├── App.tsx            # Componente principal
│       └── index.css          # Estilos globais
├── package.json
└── vite.config.ts
```

## 🎨 Páginas do Site

### 1. **Home** (`/`)
- Hero section com chamada para ação
- Seção de diferenciais
- Preview dos serviços
- Call-to-action para contato

### 2. **Sobre** (`/sobre`)
- História da empresa
- Missão e valores
- Razões para escolher a JMA
- Localização

### 3. **Serviços** (`/servicos`)
- Estruturas Metálicas
- Portões
- Grades de Proteção
- Serviços Adicionais

### 4. **Galeria** (`/galeria`)
- Galeria de projetos com filtros
- Categorias: Estruturas, Portões, Grades
- Efeitos hover nas imagens

### 5. **Contato** (`/contato`)
- Informações de contato
- Botão WhatsApp com pré-preenchimento
- Horário de funcionamento
- Razões para entrar em contato

## 🛠️ Tecnologias Utilizadas

- **React 19** - Framework JavaScript
- **Vite** - Build tool moderno
- **CSS Modules** - Estilização modular
- **Wouter** - Roteamento leve
- **Lucide Icons** - Ícones SVG
- **Tailwind CSS** - Utilitários CSS (opcional)

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- ✅ Desktops (1920px+)
- ✅ Tablets (768px - 1024px)
- ✅ Celulares (320px - 767px)

## 🎯 Paleta de Cores

- **Cor Principal**: #8b3a1f (Marrom avermelhado)
- **Cor Secundária**: #6b2d17 (Marrom escuro)
- **Fundo**: #ffffff (Branco)
- **Fundo Secundário**: #f9fafb (Cinza claro)
- **Texto**: #1f2937 (Cinza escuro)

## 📝 Informações da Empresa

- **Nome**: JMA Serralheria
- **Endereço**: R. Pinhal, 252 - Jardim Sabiá, Cotia - SP, 06716-575
- **Telefone**: (11) 98942-5749
- **Email**: jmaserralheria.alves@gmail.com
- **WhatsApp**: (11) 98942-5749

## 🔧 Customizações

### Alterar Logo
Substitua o arquivo `client/public/logo.jpeg` pela nova logo.

### Alterar Imagens de Projetos
Adicione novas imagens em `client/public/projects/` e atualize o arquivo `Gallery.tsx`.

### Alterar Cores
Edite as cores em:
- `client/src/components/Header.module.css`
- `client/src/components/Footer.module.css`
- `client/src/pages/*.module.css`

### Alterar Conteúdo
Edite os arquivos `.tsx` das páginas para alterar textos e conteúdos.

## 📦 Build para Produção

Para criar uma versão otimizada para produção:

```bash
# Usando npm
npm run build

# Ou usando pnpm
pnpm build
```

Os arquivos compilados estarão na pasta `dist/`.

## 🚀 Deploy

Para fazer deploy do site, você pode usar:

- **Vercel** - Integração automática com Git
- **Netlify** - Drag & drop ou Git integration
- **GitHub Pages** - Hospedagem gratuita
- **Seu próprio servidor** - Copie a pasta `dist/`

## 📞 Suporte

Para dúvidas sobre o projeto, entre em contato com a JMA Serralheria:
- **WhatsApp**: (11) 98942-5749
- **Email**: jmaserralheria.alves@gmail.com

## 📄 Licença

Este projeto foi desenvolvido especificamente para a JMA Serralheria.

---

**Desenvolvido com ❤️ para a JMA Serralheria**
