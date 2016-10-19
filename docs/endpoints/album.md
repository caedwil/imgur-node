### Album
> Defines methods for accessing Imgur albums.

**Methods**
> [get](#get)  
> [getImages](#getImages)

###### .get(clientID, albumID, callback)
> Gets all information about an album (including a list of the album's images).
>
| PARAMETER | TYPE   | DESCRIPTION                     |
| :-------: | :----: | ------------------------------- |
| clientID  | string | An Imgur application Client ID. |
| albumID   | string | The album ID (e.g. hlF1z).      |
> **callback**
> ```javascript
> (error, response) => {
>   // handle response
> }
> ```
| PARAMETER | TYPE   | DESCRIPTION                                              |
| :-------: | :----: | -------------------------------------------------------- |
| error     | Error  | Is null if no error found.                               |
| response  | Object | Contains all album information and any returned headers. |


###### .getImages(clientID, albumID, callback)
> Gets a list of images from the specified album.
>
| PARAMETER | TYPE   | DESCRIPTION                     |
| :-------: | :----: | ------------------------------- |
| clientID  | string | An Imgur application Client ID. |
| albumID   | string | The album ID (e.g. hlF1z).      |
> **callback**
> ```javascript
> (error, response) => {
>   // handle response
> }
> ```
| PARAMETER | TYPE   | DESCRIPTION                                              |
| :-------: | :----: | -------------------------------------------------------- |
| error     | Error  | Is null if no error found.                               |
| response  | Object | Contains all album information and any returned headers. |
