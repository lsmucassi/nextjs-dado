This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pages & Components 
> pages

- index: This is the landing page of the app, here you can find a hero/landing component and the gallery of pet bio's loaded from a local data storage (use the logo to navigate home)

- bio: In the bio page you will find a list of pet bios listed, rendered from the contentful CMS API, here the name, age, role/title and the bio of pets are listed

- blog: Empty, just a fun page

- hoof_hoof (contact): A dummy contact page

> Components included
components/
- Navbar: The component for navigation and linking pages
- Hero: The banner for tge landing page
- Snap: A card used to render the contentful data
- Card: The card component used to render gallery information
- View: A component that hold other components
- Footer: A footer component (logo and text navigates home when clicked)

## Folders
pages/
- api/store/data: Used to store the local json file with the pet's information
- bio/index: The component which renders the contenful data of pets

public/
- Stores the icons, logos and other assets
- images: logo and favicons/svg's are stored here 
- images/profiles: stored all the profile pictures of the dogs

styles
- All the css used is in the files here

:NOTE:
No use of environment variables since the spaceID and accessToken have to be shared


Links
- [Github](https://github.com/lsmucassi/nextjs-dado)
- [Hosted on Netlify](https://zealous-torvalds-caf193.netlify.app/) : I have faced issues where the application is not updating in realtime so please use the local development project for review; abd images are not perfectly rendered - this is a netlify loading issue

:TO_DO:

[x] : Bootstrap NextJS App (create-next-app)
[x] : Create Navigation Bar
[x] : add fake logo - used to navigate home '/'
[x] : Create Hero/Landing Banner 
[x] : Create A component to render local data
[x] : Render local data
[x] : Style
[x] : Test 
[x] : Create A component to render Contentful data
[x] : Create Dud Contentful Account
[x] : Configure Contentful Models
[x] : Render Contentful data
[x] : Refractor Code
[x] : Test Styling
[x] : Test Final App