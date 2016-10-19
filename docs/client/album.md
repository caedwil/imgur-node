### Client.album
> Defines methods for accessing Imgur albums using a Client.

**Methods**
> [get](#get)  
> [getImages](#getImages)

###### .get(albumID, callback)
> Gets all information about an album (including a list of the album's images).
>
| PARAMETER | TYPE | DESCRIPTION |
| :-------: | :--: | ----------- |
| albumID | string | The album ID (e.g. hlF1z). |
| callback | function | See below. |
> **callback**
> ```javascript
> (error, response) => {
>   // handle response
> }
> ```
| PARAMETER | TYPE | DESCRIPTION |
| :-------: | :--: | ----------- |
| error | Error  | Is null if no error found. |
| response | Object | Contains all album information and any returned headers. |


###### .getImages(albumID, callback)
> Gets a list of images from the specified album.
>
| PARAMETER | TYPE | DESCRIPTION |
| :-------: | :--: | ----------- |
| albumID | string | The album ID (e.g. hlF1z). |
| callback | function | See below. |
> **callback**
> ```javascript
> (error, response) => {
>   // handle response
> }
> ```
| PARAMETER | TYPE | DESCRIPTION |
| :-------: | :--: | ----------- |
| error | Error  | Is null if no error found. |
| response | Object | Contains all album information and any returned headers. |
