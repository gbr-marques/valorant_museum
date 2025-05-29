# 🧠 Valorant Museum (Em desenvolvimento)

Uma wiki interativa desenvolvida com **Next.js**, baseada na <a href="https://valorant-api.com/">Valorant-API</a>, que fornece dados sobre agentes, mapas, armas e outros elementos do universo de **Valorant**. O projeto tem como objetivo organizar essas informações de forma clara, visual e acessível.


## 🛠️ Tecnologias utilizadas

- Next.js: framework React completo para criação de aplicações web rápidas, com renderização híbrida (SSR/SSG), rotas automáticas e otimizações de performance integradas.
- React: biblioteca JavaScript para construir interfaces de usuário reativas, baseada em componentes reutilizáveis e gerenciamento eficiente de estado.
- Tailwind CSS: framework utilitário de CSS que permite criar interfaces modernas diretamente no HTML com classes semânticas e responsivas.
- TypeScript: superset do JavaScript que adiciona tipagem estática ao código, oferecendo mais segurança, produtividade e melhor suporte em IDEs.
- PrimeReact: biblioteca de componentes UI prontos e acessíveis para React, com foco em design moderno e produtividade no desenvolvimento de interfaces.

## 🚀 Como rodar o projeto

1. Clone o repositório

```git clone https://github.com/gbr-marques/valorant_museum.git```\
```cd valorant_museum```

2. Instale as dependências

```npm install``` ou ```yarn add```

3. Inicie o servidor de desenvolvimento

```npm run dev``` ou ```yarn dev```

Acesse: http://localhost:3000

## 📋 Listagem dinâmica de categorias

A lista de categorias está armazenada no arquivo ```src/data/categories.ts```. A partir dela, são renderizados os cards da página inicial que, ao serem clicados, direcionam o usuário a uma única página de categorias dinâmica. Esse é um ótimo meio de utilizarmos o sistema de rotas aninhadas do Next e evitarmos criar uma página para cada categoria, otimizando o código da nossa aplicação.

## 📌 To-dos

- Página de listagem de itens por categoria
- Página de detalhe individual de item
- Adição de animações e transições
- Responsividade completa

## 🚧 App em construção...

Este projeto ainda está em fase inicial, mas toda sugestão é bem-vinda.
Você pode abrir uma issue ou fazer um fork com melhorias.