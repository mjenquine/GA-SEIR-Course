![ga](../../../ga_cog.png)


<hr>
Title: Captains Log with JSX<br>
Type: Homework<br>
Duration: 4hrs <br>
Creator: Brendan Quirk<br>
<hr>

#### Learning Objectives
- Convert Captains Log to use JSX

### Deliverables
- Full CRUD on logs.
---
## Set-Up
- run `npm install` to install all dependencies.
- run nodemon and go to `localhost:3000` and make sure there are no errors(nothing should render yet).

## Server
- Server has already been set up in our starter code.

# Controllers
- All routes have been updated to render given JSX views.
- All sessions/auth have been commented out for MVP, see Hungry For More for more.

## Views
- Add React to each view and set up each component (test with a simple h1 on each page to make sure everything is working).
<hr>

## Hungry For More

- Convert the rest of Captains log so that sessions/auth work.
- You will have to comment back in our auth middleware, add it back into our routes, and change your `app.get(/)` in our server file back to rendering our welcome view instead of redirecting to `/logs`.
