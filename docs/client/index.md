### Client
> Used to simplify making calls to Imgur API endpoints.

#### Constructor
```javascript
new Imgur.Client(clientID, accessToken);
```
| PARAMETER   | TYPE   | OPTIONAL | DESCRIPTION |
| :---------: | :----: | :------: | ----------- |
| clientID    | string | yes      | The imgur application Client ID. |
| accessToken | string | yes      | An OAuth2 access token generated by Imgur's OAuth2 endpoint. |

**Properties**
> [clientID](#clientID)  
> [accessToken](#accessToken)

#### Properties

###### .clientID
> The imgur application Client ID.  
> **type** : string

###### .accessToken
> An OAuth2 access token generated by Imgur's OAuth2 endpoint. Used in place of
> a Client ID in requests which require user authentication.  
> **type** : string
