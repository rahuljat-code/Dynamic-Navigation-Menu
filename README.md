# Dynamic Navigation Menu

This project is a responsive navigation menu for a React application, built with Vite, TypeScript, and Tailwind CSS. It features a dynamic navigation bar that fetches its content from a Supabase backend.

## Features

*   **Dynamic Navigation:** The navigation links are fetched from a Supabase table, allowing for easy updates without changing the code.
*   **Responsive Design:** The navigation menu is fully responsive and works on all screen sizes.
*   **Hero Section:** A prominent hero section to welcome users.
*   **Features Section:** A section to highlight the key features of the application.
*   **About Section:** A section to provide more information about the project or company.
*   **Contact Section:** A contact form for users to get in touch.
*   **Footer:** A footer with additional links and information.
*   **Icon Library:** Uses `lucide-react` for a rich set of icons.

## Tech Stack

*   [React](https://reactjs.org/)
*   [Vite](https://vitejs.dev/)
*   [TypeScript](https://www.typescriptlang.org/)
*   [Tailwind CSS](https://tailwindcss.com/)
*   [Supabase](https://supabase.io/)
*   [Docker](https://www.docker.com/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/your_project_name.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Create a `.env` file in the root of the project and add your Supabase credentials:
    ```
    VITE_SUPABASE_URL=your_supabase_url
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

### Running the Development Server

To run the app in the development mode, run the following command:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser. The page will reload if you make edits.

## Building for Production

To build the app for production, run the following command:

```sh
npm run build
```

This will create a `dist` folder with the production-ready files.

## Docker

You can also run the application using Docker.

### Prerequisites

You need to have [Docker](https://www.docker.com/) installed on your machine.

### Running the Docker Container

1.  Create a `.env` file in the root of the project with your Supabase credentials (as shown in the "Installation" section).
2.  Build and run the Docker container:
    ```sh
    docker-compose up -d --build
    ```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Linting and Type-checking

This project uses ESLint for linting and TypeScript for type-checking.

To run the linter, run the following command:
```sh
npm run lint
```

To run the type-checker, run the following command:
```sh
npm run typecheck
```
