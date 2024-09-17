
# Sabarigirish Manikandan's application to the GDSC Dev Team. (deployment pending)

This is the website built using SvelteKit/Node.JS alongside a SQLite/Drizzle backend.

## Features in development

* Password-based authentication system
* Replies
* Profile Pictures
* Comment Deletion

## Testing

Once you've installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

# How it works

It authenticates users using a specialized cookie containing a user ID tied to a username. Posting comments puts them in a SQLite database containing comments along with source user IDs.
Signing up on first visit creates this cookie for you.
