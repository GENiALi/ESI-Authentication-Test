Basic test implementation of Eve Online ESI Third Party Authentication including storage of refresh tokens and correct oauth flow according to spec.

Using:
- Ionic Framework
-- Native Wrappers (HTTP, Toast, Chrome CustomTabs, Deeplinks etc.)
- AngularJS
- Swagger + SwaggerGen
- Promise experiments

All authentication and UI code is written by myself (eve-auth provider). SwaggerGen was used simply to test the access tokens once the authentication flow was completed.

Third Party Authentication Spec: http://eveonline-third-party-documentation.readthedocs.io/en/latest/sso/authentication.html
ESI Swagger Spec: https://esi.tech.ccp.is/ui/

Note: Public and Secret Keys have been removed from files.
