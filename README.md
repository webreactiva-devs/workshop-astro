# Taller de Astro en [Web Reactiva](https://webreactiva.com)

> Taller en directo con suscriptores de Web Reactiva para conocer mejor qué es Astro y cómo podemos crear potentes webs con una menor carga de JavaScript. Astro es compatible con React, Vue, Svelte y otros. Y tienen versión estable ;)

## Sigue estos pasos antes del taller:

- Haz una copia local de este repositorio usando `git clone` o descargando el código
- **Pasa a la rama `start` con `git checkout start`.**
- En tu ordenador, ejecuta `npm install` para cargar las dependencias. 
- Lanza `npm run dev` y Astro te mostrará en consola el servidor local (suele ser localhost:3000)
- Carga esa web y verás una bienvenida muy malandriner

**¡Ya tienes todo listo para el taller!**

&nbsp;
&nbsp;

## Notas sobre el taller

- Debes tener instalado Node.js 14.18.0, v16.12.0 o superior
- Para no perderse en el taller es recomendable tener conocimientos básicos de HTML y JavaScript
- Usaremos Visual Studio Code
- Aunque no seas crack de la consola, necesitarás lanzar algunos comandos sencillos por allí

&nbsp;
&nbsp;
&nbsp;

---

# Readme oficial de [Astro](https://astro.build)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
