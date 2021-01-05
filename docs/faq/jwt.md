# JWT

<box header>

Have some questions regarding JWT?? Check if it's listed below.

</box>

<box>

## How to remove JWT authentication?

Removing JWT authentication is simple. 

* remove JWT UI code from `Login.vue` and it's `.vue` file(Similar to firebase & auth0)
* remove `src/fake-db/data/users` folder
* remove `src/http` folder if you haven't added any extra code besides ours
  
That's it. You removed JWT auth from your project.

</box>

<box>

## Using Your API endpoints?

As you start developing your App first thing you will need with JWT is your endpoints. You can find file `/src/http/requests/auth/jwt/index.js` for modifying API endpoints.

</box>

<box>

## Modifying JWT flow?

We create actions for our demo, you can find actions in `/src/store/auth/moduleAuthActions.js`. In this file in JWT section you will find flow of JWT login and modify it according to your use. This also includes modifying mutations.

</box>

<box>

## Adding JWT to starter-kit

You might consider using starter-kit to get started with our template and you might need JWT as authentication. To implement JWt in starter-kit please follow this [guide](https://pixinvent.ticksy.com/article/15616) on our support portal.

</box>
