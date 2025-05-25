# Simple

Simple authentication (or simple auth) is a basic username and password combination. It's the default for Drop, and is the fallback authentication mechanism if Drop is unable to initialise any others.

Simple authentication works on a system of invites.

## Creating an invite

Head to your Drop Admin dashboard, and click on the 'Users' tab. Then, head to the authentication panel by clicking the 'Authentication &rarr;' button.

Then, on the "Simple" auth, click the three-dot menu, and configure. Then, create an invite with the button and modal.

## Disabling simple auth

If you've configured another authentication mechanism, you can disable simple by setting the environment variable `DISABLE_SIMPLE_AUTH` to "true".
