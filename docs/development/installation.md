---
---

# Installation

<box header>

Vuexy Admin is built using [Vue CLI](https://cli.vuejs.org/). Vue CLI is nicely documented to start off.
You **don't** need to install or configure tools like Webpack or Babel. They are **preconfigured and hidden** so that you can focus on the code.

</box>


<box>

## Follow along to get everything running


1. First of all it's required to Install [Node](https://nodejs.org/en/) and [npm](https://www.npmjs.com)
2. You can download Vuexy Admin .zip file from Themeforest, **Unzip** the zip file that you have downloaded from Themeforest. Inside the zip file, you will find the `vuexy` folder and `documentation.html` file for documentation.
3. Open your favourite console application (Terminal, iTerm, Command Prompt etc.). Navigate to the `vuexy` folder and Install packages using one of the following command: `npm i`, `npm install`. This command will install all the required Node.js modules into the node_modules directory inside `vuexy` folder. And now, you are ready to run the Vuexy Admin for the first time.
4. To run project locally: `npm run serve`. This command will runs the app in development mode. Open [http://localhost:8080](http://localhost:8080) to view it in the browser.
The page will automatically reload if you make changes to the code.

::: warning
Sometimes app may run on different port than `8080`. To be sure, You can check correct address in console right after label `App running at:`.
:::


:::tip
If installation fails there's are some common solutions:
- Use yarn for better dependency management
- Use stable & recommended node.js release rather than latest
- Download fresh zip from themeforest and retry
:::

</box>

<box>
	
## Starter Kit

Vuexy Admin also provide starter kit to kick start your project with just base code. You can find start-kit named `vuexy-starter` in root of unzipped folder.

<br/>

Starter kit have all components and their styles. It also includes `themeConfig.js` file to quickly change theme appearance.

<br/>

To run starter kit you just have to command `npm install`, which will install all the packages. Upon successful execution of command you can run your project using `npm run serve` command. Now visit the displayed url in console to have a look at starter kit.

</box>
