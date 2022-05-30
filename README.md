## To investigate

Use of Boostrap 5 
- navbar did not work

Dev vs prod keys - None of the below works for now within functions, which where most key are needed
=> only solution seems to test for context in the function before loading the key (process.env.CONTEXT and process.env.BRANCH)
=> OR to parse the code while it is moving to dist but that is ugly
- https://www.npmjs.com/package/netlify-plugin-contextual-env
- https://github.com/cball/netlify-plugin-contextual-env
- https://answers.netlify.com/t/per-branch-environment-variables-secrets/49223/4
- https://answers.netlify.com/t/support-guide-using-environment-variables-on-netlify-correctly/267
- https://answers.netlify.com/t/netlify-toml-context-env-variables-do-not-apply-to-functions/410/8
- https://answers.netlify.com/t/support-guide-conditional-build-deploy-behavior-for-context-branch-on-netlify/122



# Resources

- https://web.dev/payment-and-address-form-best-practices/
- https://gitlab.com/catamphetamine/input-format#readme

## Favicon

- https://favicon.io/


## routing issue driving me nuts
- https://github.com/netlify/cli/issues/3617
- https://github.com/netlify/cli/blob/main/docs/netlify-dev.md#project-detection
- https://answers.netlify.com/t/netlify-dev-functions-locally-troubleshooting/20183/10


## debug functions
- https://daily.dev/blog/how-to-debug-netlify-serverless-lambda-functions-using-vs-code
- https://cli.netlify.com/functions-dev/

# Welcome to [Astro](https://astro.build)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/starter)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components or layouts.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 👀 Want to learn more?

Feel free to check [our documentation](https://github.com/withastro/astro) or jump into our [Discord server](https://astro.build/chat).
