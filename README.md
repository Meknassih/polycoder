# polycoder
### Multi-tool for decoding/encoding strings and code formatting.
---
This is a lightweight web app with no back-end I find quite useful for my everyday developper needs. It doesn't use any popular front-end framework, I implemented instead a simple component-based architecture. Components are defined by a Javascript file and an HTML file. They can be top level at which point I'll call them "pages". The difference between top level components and normal ones is that the former are accessible through the router. This architecture is clearly not the best, but has the two criteria I'm looking for in such a project : simple & modular.

To make contributors feel welcome, I have set up a few scripts to make component generation easy. You can find them in the [Utilities](#Utilities) section below.

# Installation
Pretty straightforward.
```sh
npm i
```

# Start
- Start development server with Hot Reloading.
    ```sh
    npm run dev
    ```

- Build productions files.
    ```sh
    npm run build
    ```

# Utilities
There are several scripts that allow you to perform repetitive tasks automatically. Keep your component names simple for this to work properly although the scripts will do their best to standardize them.

- Generate a component.
    ```sh
    npm run add:comp <component_name>
    ```

- Generate a top level component (or page), add a router rule and add a link in the main menu.
    ```sh
    npm run add:page <component_name>
    ```

- Add a router rule for a component.
    ```sh
    npm run add:route <component_name>
    ```

- Add a link in the main menu for a component.
    ```sh
    npm run add:link <component_name>
    ```

# Contributors
[Hamza El Meknassi](https://github.com/Meknassih)