<h1 align="center">Welcome to revclient 👋</h1>
<p align="center" >
  <img alt="Version" src="https://img.shields.io/badge/version-2.1-blue.svg?cacheSeconds=2592000" />
  <a href="../license" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  </a>
    <a href="https://github.com/frinyvonnick/gitmoji-changelog">
    <img src="https://img.shields.io/badge/changelog-gitmoji-brightgreen.svg" alt="gitmoji-changelog">
  </a>
</p>

# Team ReVitalize Development Quick Start

> ReVitalize is a platform designed to help connect all the people needed to help revitalize communities.

## Important Links

### 🏠 [Production Deployment](https://revitalize.community/)

### ✨ [Staging deploy](https://revitalize.netlify.com/)

[Nelify production logs](https://app.netlify.com/sites/sleepy-brattain-252a23/deploys) |
[Nelify staging logs](https://app.netlify.com/sites/revitalize/deploys) |
[GraphiQL Playground staging](https://revitalize-development.herokuapp.com/)

## Author

👤 **Team ReVitalize**

-   Github: [@Revitalized-Playground](https://github.com/Revitalized-Playground)

-   Originators:

    -   Creator: [Anthony Venturini](https://github.com/adventurini)( Web17 -> TL Web20 -> TL Labs16 )
    -   Design Team:

        -   [Anthony Venturini](https://github.com/adventurini)
        -   [Kerry Mcphearson]() ( UX4 )
        -   [Ruth Philips]() ( UX4 )

    -   Development Team:
        -   [Alexander Piroumian](https://github.com/AlexxanderP) ( Web17 -> SL UX4 -> Labs16 )
        -   [Anthony Venturini](https://github.com/adventurini)
        -   [Clark Williams](https://github.com/Cwill14) (Web20 -> Web20.75 -> Labs16)
        -   [Elan Riznis](https://github.com/Zealll) ( Web17 -> TA Web20 -> TL Web20.75 -> Labs16 )
        -   [Frank Martinez](https://github.com/LeTanque) ( Web17 -> TL web20 -> SL 20.75 -> Labs16)
        -   [Jose Montero](https://github.com/JoseMarioDev) (Web20 -> Web20.75 -> Labs16)
        -   [Omar Salah](https://github.com/omarsalah95) ( Web17 -> TL Web20 -> TL Web20.75 -> Labs16 )
        -   [Skyelar Carrol](https://github.com/Fractured2K) ( Web17 -> TL Web20 -> TL Web20.75 -> Labs16 )

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/Revitalized-Playground/Front-End/issues/new).

## Show your support

Give a ⭐️ if this project helped you!

## **For Running Locally**

_All dependencies have been packaged and provided_

1. To link and install all dependencies

    - in client root (./revclient) install the provided packages. `yarn install` or `npm i`

1. Add and link .env file
   ( _Follow the `example.env`_ )

    - add `.env` file to client root (./revclient) directory
    - add required enviorment variables:
        - Configure Server
            - `REACT_APP_SERVER_URL=` Base URL of the GraphQL server you are using.
        - Configure Single Sign On
            - `REACT_APP_OAUTH_GOOGLE_LINK=` Google OAUTH link for Single Sign On.
            - `REACT_APP_OAUTH_FACEBOOK_LINK=` Facebook OAUTH link for Single Sign On.
        - Configure Mapbox & Geolocation
            - `REACT_APP_MAPBOX_TOKEN=` a unique token given by Mapbox API used for geolocation and mapping
            - `REACT_APP_MAPBOX_3DMAP=` a link to a specialized Mapbox style to be used
        - Configure Jason Web Token for Authentication
            - `REACT_APP_JWT_SECRET=` a unique secret string that is used to salt hashed passwords for security, and data integrity on token signatures
            - `REACT_APP_STRIPE_PUBLIC_KEY=` to indicate which port will be used to host the server on the local machine

1. Fire up a local development server
    - Start Development server:
        - run from client root `npm run start` or `yarn run start`

---

### Warnings

**File casing**

Changing the casing on a file will often result in errors on Windows based machines! Be careful when doing this.

**SVG versus PNG**

Please do not save `svg` files in assets. Export from figma as small `png`'s. They load faster and have been compatibility with optimization. Some of the `svg` files we have are > 10mb!

Only save true vectors as `svg`, never rasters; if you don't know what that is, just save as `png`, no biggie!

---

> Staging is updated frequently throughout the day.

> Master is updated at the end of the day from staging.

---

## Git flow cheat sheet

**Push your work to your branch**
On your branch, you did some work...

> `git add .` > `git commit -m` ^1^
> `git push origin your-branch-name`

now you want to pull into staging. Good.

To do that, you can checkout staging, and get the most updated version like this:

> `git checkout staging` > `git pull origin staging`

Pulling staging into staging _should_ go really smooth. All it's doing is updating your version of staging with the newest version of staging that is live. When you do it, you should see a message at the top of the list of files that says _Fast forward_.

Up to now, we've simply updated our local staging with the updated staging. The above process should be done, **at least**, once a day.

**Pull your branch into local staging**
Now, you are on the staging branch locally and your staging branch is all up to date. Do this:

> `git pull origin your-branch-name`

Ideally, you'll see another _Fast forward_^2^ and you can proceed with committing.

Alternatively, you may run into _merge conflicts_. That's ok, it happens!

**In the event of a merge conflict**
Anytime two people work on the same file during the same time, the potential for a conflict exists.

BUT, VSCode makes it really easy to see and handle such conflicts.

Click on the github icon in VS, review the merge changes (these are the first in the first section) one by one and then decide what the best course of action will be.

Remember, save each file after you resolve the conflict!

Remember, commit each file after you resolve the conflict!

**Push your newly updated staging**
Now, you have an updated staging. After handling any conflicts, don't forget to review the app to make sure nothing unexpected happened.

IF the app looks clean, the changes are good, and your ready to deploy the updated staging server, do this:

> `git push origin staging` > `git checkout -b new-branch-name`

**Notes**
^1^ _Or `git commit` if you're using gitmoji with the hook_
^2^ _Merged using recursive strategy sometimes happens_

---

# Available Scripts

## Install

```sh
npm install
```

## Usage

> This will initialize and start a development environment on [Local Host](http://localhost:3000) at port 3000

```sh
npm run start

```

## Run tests

> This will run and launch the automated test suite built into CRA

```sh
npm run test

```

## `Run Production Build`

> This is the command issued to generate a production optimized build file into the client root

```sh
npm run build
```

## `Eject All React Modules`

> Eject the Reacts internal bundled Node Modules to the package JSON incase more surgical configurations are needed. _*This Can Not Be Un-Done!*_

```sh
npm run eject`
```

---

## Directory Tree Structure

| Symbol | Definition |
| ------ | :--------: |
| `L`    |   Folder   |
| `-`    |    File    |

    L Front-End
    |   L revclient : The Client Root Directory of the application
    |   |   L node_modules : This will be auto-generated by the package manager
    |   |   L Public : This will be auto-generated to hold the base files for injecting the application
    |   |   L src : This is the source code directory
    |   |       L assets : Contains assets not stored on the cloud used across the app.
    |   |       |  L <Name Indicating Asset Target Destination>
    |   |       |      - <Asset>
    |   |       |      - <Asset>
    |   |       |      _ etc.
    |   |       L components : This holds all the shared components used across the aplication
    |   |       |  L <Component Name>
    |   |       |       - <Component>.jsx
    |   |       |       - <Component>.scss
    |   |       L config : Stores all Config files
    |   |       |   L apollo.js : Configures apollo services
    |   |       L graphql :
    |   |       |   L fragments : Exports that are used in both Mutations and Queries
    |   |       |   L mutations : All mutations are defined here
    |   |       |   L queries : All Queries are defined here
    |   |       L helpers : Clever functions used to help across all files
    |   |       L hooks : Holds custom hooks
    |   |       L styles : Contains and imports all Sass files from across the app to be Compiled
    |   |       L testing : Contains all test files
    |   |       L utils : Contains Utility functions that are used globally
    |   |       L views : Contains all Page views and relevant styles
    |   |       |   L <Page Component Title>
    |   |       |      L <Any additional custom components of the page>
    |   |       |      |   - <Component Name>.jsx
    |   |       |      |   - <Component Name>.scss
    |   |       |      - <Page Component>.jsx
    |   |       |      - <Page Component>.scss
    |   |       |   - App.jsx : Main app component
    |   |       |   - index.js : Configure Apollo Provider for caching, and inject the App through DOM
    |   |       |   - Routes.js : Indicate all separate Routes and Routing throughout the pages
    |   |   - .env : This you will build to hold all private variables the app depends on
    |   |   - .env.example : Example env file
    |   |   - .gitignore : Indicates which files to ignore and not push to github
    |   |   - .prettierrc.json : Configures and standardizes formatting
    |   |   - package-lock.json : Auto-Generated by Package Manager
    |   |   - package.json : Package used by Package Manager for reference to dependencies and scripts
    |   |   - README.md : This is the developer facing Read ME.
    |  - .gitignore
    |  - license
    |  - netlify.toml : This file helps Netlify Deploy the App
    |  - README.md : This is the user facing Read ME.

---

## 📝 License

Copyright © 2019 [Team ReVitalize](https://github.com/Revitalized-Playground).<br />
This project is [MIT](../license) licensed.

---
