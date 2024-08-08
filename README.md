## iTunes Search App

`npm run dev` - start Next.js in development mode.
`npm run build` - build the application for production usage.
`npm run start` - start a Next.js production server.
`npm run lint` - runs ESlint to check for errors.

This is a Next.js application that allows to search for media content with the help of iTunes API. 

**Functionality:**
   - Page with a search bar, displaying search results in a list below the search bar.
   - Uses iTunes Search API to fetch data (https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html#//apple_ref/doc/uid/TP40017632-CH5-SW1).
   - Ability to filter search results by category.
   - Infinite scroll.
   - Detailed information for each item in the search results.
   - Adding to favorites (favorites page).
   - Responsive design for mobile devices.

**Technologies:**
   - **React**: functional components and hooks.
   - **Next.js** with App directory approach.
   - **TypeScript** for component and data typing.
   - **Sass modules**.

**Deploy:** 

**Further improvements:** 
It would be good to implement unit tests for components and functions. Also, it would be nice to cache search results for fetching optimization.
