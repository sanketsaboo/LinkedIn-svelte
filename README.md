# IDS.Company Sveltekit + Tailwind Init Project

## Technologies

Sveltekit + Tailwindcss + Typescript

## Getting Started

> \*Feel free to substitute `npm` with `pnpm` or `yarn`.

|                              |                                                                    |
| ---------------------------- | ------------------------------------------------------------------ |
| Install                      | · `npm install`                                                    |
| Develop                      | · `npm run dev`                                                    |
| Develop and Open browser tab | · `npm run dev -- --open`                                          |
| Build                        | · `npm run build` => Builds Mac (dmg), Windows, and Linux Packages |
| Preview                      | · `npm run preview` => Previews built site                         |
| Check                        | · `npm run check` => Does a type check across the project          |

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Svelte for VSCode](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)

## Recommended File Structure

There are several directories one needs to keep in mind when working with the app during development. All the directories listed below are in the `src` directory and have aliases linked to them allowing for imports done in this manner; `$stores/{FileName}`. Specifically;

### `static`

This directory contains the static files that can be accessed in the app from the `/` route. In this case, its recommended to have the files in directories associated with their types such as `images/png` for png images.

The project types should be placed in the `global.d.ts` file or any additional files in an `@types` directory which can be added for this purpose.

Other directories such as the `utils` can be added for utility functions used across the application. There are already aliases for these directories thereby allowing their imports to take the following approach `$routes/{...file_path}/{file_name}`. More aliases can be added to the `tsconfig` and `svelte.config` files.

### `src`

- `lib`
  When working in the lib directory, it is important to ensure that only `.svelte` files are in this directory. In particular, these need to be structured using the parent page as the name of the directory. For instance, `.svelte` components associated with the home page, need to be in the `Home` directory. For shared components such as buttons and others, a `Components` directory exists in the `lib` directory. Using this approach, components that are aggregations of smaller components can be placed within child directories in the primary `Components` directory. For instance, the `Navigation` component has reusable buttons but is in the `Nav` directory within the `Components` parent directory.
  `pages`, the pages directory in the `lib` folder is used to store all `.svelte` files used to render entire pages in the application. If different sections are being made, these should be in the `sections` directory.
  Please note that components are reusable pieces of code. However, the `.svelte` files in the `pages` directory are not. They are basically combinations of different components to make pages.

  Please note that since all of the directories indicated have aliases, they files in these directories can be imported as `$lib/{PageName}/{fileName}.svelte`, or in the case of components `$components/{ComponentName|Directory}/{fileName}.svelte`, etc.

- `routes`
  This directory contains the route files associated with the app.
- `stores`
  This directory includes the stores used across the app. These should be named based on the page or function of the store. i.e. `auth.store.ts` or `history.store.ts`. The `store` suffix is not mandatory but recommended.
- `style`
  All css files used across the application must be in this directory. Since tailwindcss is being used, additional files are not required. However, if need for an additional file arises, it should be placed in this directory.
- `utils`
  This directory contains all the utility functions used across the application. The recommended naming convention is similar to the stores, but with a `util.ts` suffix. While not mandatory, it is highly recommended. Additionally, it is recommended that these be classified based on function. An example of this is all `auth` related utility functions be in a child `auth` directory within the `utils` folder.
- `icons`
  This directory contains all svg icons used across the app, but initialized within `.svelte` components. All these are reusable across the application. The `.svelte` should contain the actual svg content and might expose props to modify the underlying svg such as its fill color, among other attributes of the icon.

## Styling

When working with styles, one has the choice of either adding the styles in the html or styles section. However, its recommended to use the styles section and limiting the length of the styles to improve readability. 
In some cases, such as when using darkmode in sveltekit and tailwind css, one is required to make the styles global. In these instances, and others, it is recommended to ensure the classes used in each file are prefixed with the file name or parent component name to ensure the global css styles are not polluted to the extent of affecting other styles. Examples of this are shown below;

```postcss
.HeaderButton {
	@apply bg-red-300;
}
```

In the example above, `Header` is the parent component while `Button` is the component we are trying to style. These styles can be either in `camelCase` or `PascalCase`. However, its recommended that when prefixing a component with its parent, we use `PascalCase`.

## Automatic Formating on Github

The repository currently uses Husky pre-commit hooks to format the code based on the `.prettierrc` file. This automatically kicks in before the files are added to the commit. If successful, a message similar to the one shown in the screenshot below will be shown.
![image](https://user-images.githubusercontent.com/89821717/145913449-fcd7e5c8-ebf8-416c-bf5f-7ab5c32f9be7.png)

## Suggested Component Development Approach

Owing to the fact that there is no theme initialized in the tailwind files, these will have to be added as development proceeds. In this case, one would confirm that the color of the component they want to add does not yet exist and if it doesn't, it should be added to either the `dark` or `light` theme sections in the `tailwind.config.cjs` file in the sections indicated below.

```js
	theme: {
		extend: {
			colors: {
				...require('tailwindcss/defaultTheme').colors,
				// Add other colors (theme here)
				dark: {
					// Light Theme Colors
				},
				light: {
					// Dark Theme Colors
				},
			},
		},
	},
```

### tailwind.config.cjs

To foster DRY principles, it is recommended to extend the basic tailwind theme in this file to ensure that theme related changes can be made from a single point as opposed to searching for what changes to make within the code. Having all the colors in this file ensures that any changes to the design theme can be made from a single file.

## types

Being a typescript project, it is recommended that the types used across the application be defined before hand. However, this should not be done within the `.svelte` files or `.ts` files. It is recommended to always have the project types in the `global.d.ts` file. Otherwise, the only other approach would be to create a `@types` or `@interfaces` directory and declaring types within `.d.ts` files in these directories.
