# Boilerplate pnpm vue3 with nuxt app workspace

WIP: test-driving pnpm workspaces with Vue 3, Nuxt 3, Tailwindcss, Typescript and Vite

## Stack

- [pnpm workspaces](https://pnpm.io/workspaces) for workspace management
- [vue 3](https://v3.vuejs.org/) component library with tailwindcss, vitest and typescript
- [nuxt 3](https://v3.nuxtjs.org/) kitchen sink app
- [pnpm](https://pnpm.io/) package manager
- [vite](https://vitejs.dev/) for bundling in each project

```bash
.
├── README.md
├── apps/
│   └──nuxt3/              # kitchen sink project 
├── lib                    # component lib source coee
│   ├── src/   
│   │   ├── .storybook/    # Storybook config
│   │   ├── components/    # components
│   │   └── styles/        # tailwind css files
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── tsconfig.json
├── package.json
├── packages               # packages for publishing
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── tsconfig.json
```

## Getting Started

`npm install -g pnpm` or `brew install pnpm`

If you have installed the latest v16.x or greater node version in your system, then enable the pnpm using the below cmd
```
corepack enable
corepack prepare pnpm@latest --activate
```

Storybook installed with the following command

`pnpm dlx storybook@latest init --type=vue3 --package-manager=pnpm`