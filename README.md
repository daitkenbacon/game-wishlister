# salad-wishlister
    A video game wishlist-maker utilizing the RAWG API.
        -Uses Typescript, React, Framer, and Axios

# How to run
    Visit https://rawg.io/apidocs to get RAWG's API key.
    Create 'salad-config.json' in src.
    Give field "key" a value of the given API key in the config file.

    Use 'npm start' to start development server
    Build will be hosted on http://localhost:3000

# How to use
    Games with release dates between the current day and one year from now will be displayed.
    Click on a game to add it to your wishlist.
    Click it again to remove it from your wishlist.
    Uncheck the "show all" checkbox to display only games on your wishlist.