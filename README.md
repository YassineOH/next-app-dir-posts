# Next.js 13.4 (Leave your Post)

This is a Next.js app that utilizes React Server Components to test the features of Next.js 13.4> . The app allows users to sign up using their Google or GitHub accounts through NextAuth.js and enables them to leave posts that will be registered in a Neon PostgreSQL database.

## Setup

To set up and run the app locally, follow the steps below:

1. Clone the repository:

```sh
 git clone <repository_url>
```

2. Navigate to the project directory:

```sh
cd <project_directory>
```

3. Install dependencies:

```sh
npm install
```

4. Configure environment variables:

- Create a `.env.local` file in the project root.
- Add the following variables to the file and provide the appropriate values:

```.env
    GOOGLE_ID=<your_google_client_id>
    GOOGLE_SECRET=<your_google_client_id>

    GITHUB_ID=<your_github_client_id>
    GITHUB_SECRET=<your_github_client_id>

    DATABASE_URL=<your_neon_postgresql_database_url>
    SHADOW_DATABASE_URL=<your_shadow_database_url>

    NEXTAUTH_SECRET=<Used to encrypt the NextAuth.js JWT>
    NEXTAUTH_URL=<the canonical URL of your site>
```

1. Start the development server:

```sh
    npm run dev
```

1. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the app.

## Building the App

To build the Next.js app for production, run the following command:

```sh
    npm run build
```

The optimized production-ready app will be generated in the `.next` directory.

## Additional Notes

- Ensure you have the necessary credentials and access keys for the Google and GitHub authentication services, as well as the Neon PostgreSQL database.
- Make sure to configure the NextAuth.js settings and providers in the appropriate file(s) to match your authentication requirements.
- Customize the app's UI and functionality as desired for your specific use case.
