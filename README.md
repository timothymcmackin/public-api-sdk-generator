---
title: Official JavaScript SDK client for the Shutterstock API
permalink: index
---

The Shutterstock public API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
This SDK provides classes for JavaScript and Node.js that you can use to access the API from your applications.
These classes call the API in the same way that direct REST calls do.
You can use this SDK to search for media, get information about media and about collections, and (if your subscription permits) license and download media.
This is the official SDK provided by Shutterstock for its API.

- API version: 1.0.4

## References

- For more information about the Shutterstock public API, see [https://developers.shutterstock.com/documentation](https://developers.shutterstock.com/documentation).
- For reference information about the endpoints that this SDK calls, see the [API reference](http://api-reference.shutterstock.com).
- To provide feedback or bug reports about the API and this SDK, see [https://api-feedback.shutterstock.com](https://api-feedback.shutterstock.com).
- For the status of the API, see [API status](https://status.developers.shutterstock.com/).
- For the source code, see [https://github.com/shutterstock/public-api-javascript-sdk](https://github.com/shutterstock/public-api-javascript-sdk).
- The Jekyll template for the web version of this documentation is provided by Tom Johnson of [https://idratherbewriting.com](https://idratherbewriting.com).

## Contributing

- This SDK is generated at [shutterstock/public-api-sdk-generator](https://github.com/shutterstock/public-api-sdk-generator), please make changes to SDK there.
- Changes to tests can be made directly here.

## Tests

To run the tests, you must authenticate with the Shutterstock API, get a token, and put the token in the `SHUTTERSTOCK_API_TOKEN` environment variable. See [Authentication](https://api-reference.shutterstock.com/#authentication).

```
$ SHUTTERSTOCK_API_TOKEN="Your API Key"
$ yarn run test
```

## Linting

```
$ yarn run lint
```

## Subscriptions

To access the API and license media with the SDK, you need an API subscription or a free API account.

API subscriptions are separate from the subscriptions that are available on shutterstock.com.
You can use an API subscription to license and download media only with the API; API subscriptions don't work on shutterstock.com.
To buy an API subscription or set up a free account, see the [pricing page](https://www.shutterstock.com/api/pricing).
If you have a subscription from shutterstock.com and want to use it with the API, [contact us](https://developers.shutterstock.com/contact-us).

## Applications

The REST API uses an access token or secret key that is tied to your account and to an application.
This application represents the application, program, or computer commands that are accessing the API.
To use the API, you must create an application at [https://developers.shutterstock.com/applications](https://developers.shutterstock.com/applications) and note the client ID and client secret.
You use this client ID and client secret either to use the API directly with basic authentication or to request a token for OAuth authentication.

## Installation

### npm or yarn

To install the SDK as a module with npm or yarn, run one of the following commands:

```shell
npm install shutterstock-api --save
```

```shell
yarn add shutterstock-api
```

## Authentication

Authentication in the SDK works the same way as in the API:

All endpoints in the Shutterstock API require authentication.
The API accepts HTTP basic authentication for some endpoints and OAuth authentication for all endpoints.

In the reference information for each SDK method (see [Documentation for methods](#documentation-for-methods) or the [API reference](http://api-reference.shutterstock.com), each endpoint is labeled with the types of authentication it accepts and the OAuth scopes it requires, if any.
In general, HTTP basic authentication is sufficient for search queries and for getting information about pieces of media.
The API requires OAuth authentication for actions that require customers to log in to shutterstock.com, such as licensing and downloading media.

For more information about authenticating to the API, see [Authentication](https://api-reference.shutterstock.com/#authentication) in the API reference.

### Basic authentication

In HTTP basic authentication (also known as _basic authentication_), you pass your application's client ID and secret key to the SDK along with the request.
To get the client ID and secret key for your application, go to https://developers.shutterstock.com/user/me/apps and open the information for your application.
The following example uses the variables `applicationClientId` and `applicationClientSecret` for the application's client ID and secret.

```javascript
const sstk = require('shutterstock-api');

sstk.setBasicAuth(applicationClientId, applicationClientSecret);

const api = new sstk.ImagesApi();
```

### OAuth authentication

In this type of authentication, you use an application and an individual user's login credentials to obtain a token.
For instructions on how to get a token, see [OAuth authentication](https://developers.shutterstock.com/documentation/authentication#oauth-authentication) on the Shutterstock developer portal.

When you have the token, use it to configure the API client as in the following example, using the token as the value of the `myAccessToken` variable:

```javascript
const sstk = require('shutterstock-api');

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();
```

### OAuth scopes

Most endpoints require an access token with one or more scopes, or permissions.
You can see the scopes that each method requires in the reference information for each method.

The following list shows the available scopes.

- licenses.create: Grant the ability to download and license media on behalf of the user.
- purchases.view: Grant read-only access to a user&#39;s purchase history.
- licenses.view: Grant read-only access to a user&#39;s licenses.
- collections.edit: Grant the ability to create new collections, edit a collection, and modify the contents of a collection
- collections.view: Grant read-only access to a collection and its contents.
- user.view: Grants read-only access to a user&#39;s basic account information (includes username, id, first and last name). If email is the same as username, it also implies user.email


## Examples

Follow the [installation](#installation) instructions and use the SDK in your JavaScript code as in these examples.

This example searches for images.
The search parameters go in the `queryParams` variable. The API returns responses as JavaScript objects.
The reference information for each method shows the class for the response.
In this example, the callback function extracts the image ID, description, and preview link of each search result into an object.

```javascript
const sstk = require('shutterstock-api');

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const queryParams = {
  query: 'New York',
  sort: 'popular',
  orientation: 'horizontal'
};

api.searchImages(queryParams)
  .then(({data}) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

The next example requests a license for an image.

For POST requests like this one, you must create an object of the appropriate class to pass as the request body.
In this case, the `shutterstock-api.ImagesApi.licenseImages` method accepts a body parameter of the class `shutterstock-api.LicenseImageRequest`.
This parameter is an array of objects of the class `shutterstock-api.LicenseImage`, each of which has the ID of an image to license.
The reference information for each method shows the class for the body parameter.

```javascript
const sstk = require('shutterstock-api');

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.ImagesApi();

const imageId = '' // ID of image to license

const imageToLicense = new sstk.LicenseImage(imageId);

const body = new sstk.LicenseImageRequest([imageToLicense]);

const queryParams = {
  subscriptionId: process.env.SHUTTERSTOCK_SUBSCRIPTION_ID,
  format: 'jpg',
  size: 'huge'
};

api.licenseImages(body, queryParams)
  .then(({data}) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

## Documentation for methods

All URIs are relative to *https://api.shutterstock.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*shutterstock-api.AudioApi* | [**addSoundboxItems**](docs/AudioApi.html#addSoundboxItems) | **POST** /v2/audio/collections/{id}/items | Add audio tracks to collections
*shutterstock-api.AudioApi* | [**createSoundbox**](docs/AudioApi.html#createSoundbox) | **POST** /v2/audio/collections | Create audio collections
*shutterstock-api.AudioApi* | [**deleteSoundbox**](docs/AudioApi.html#deleteSoundbox) | **DELETE** /v2/audio/collections/{id} | Delete audio collections
*shutterstock-api.AudioApi* | [**deleteSoundboxItems**](docs/AudioApi.html#deleteSoundboxItems) | **DELETE** /v2/audio/collections/{id}/items | Remove audio tracks from collections
*shutterstock-api.AudioApi* | [**downloadTracks**](docs/AudioApi.html#downloadTracks) | **POST** /v2/audio/licenses/{id}/downloads | Download audio tracks
*shutterstock-api.AudioApi* | [**getAudioLicenseList**](docs/AudioApi.html#getAudioLicenseList) | **GET** /v2/audio/licenses | List audio licenses
*shutterstock-api.AudioApi* | [**getSoundbox**](docs/AudioApi.html#getSoundbox) | **GET** /v2/audio/collections/{id} | Get the details of audio collections
*shutterstock-api.AudioApi* | [**getSoundboxItems**](docs/AudioApi.html#getSoundboxItems) | **GET** /v2/audio/collections/{id}/items | Get the contents of audio collections
*shutterstock-api.AudioApi* | [**getSoundboxList**](docs/AudioApi.html#getSoundboxList) | **GET** /v2/audio/collections | List audio collections
*shutterstock-api.AudioApi* | [**getTrack**](docs/AudioApi.html#getTrack) | **GET** /v2/audio/{id} | Get details about audio tracks
*shutterstock-api.AudioApi* | [**getTrackList**](docs/AudioApi.html#getTrackList) | **GET** /v2/audio | List audio tracks
*shutterstock-api.AudioApi* | [**licenseTrack**](docs/AudioApi.html#licenseTrack) | **POST** /v2/audio/licenses | License audio tracks
*shutterstock-api.AudioApi* | [**renameSoundbox**](docs/AudioApi.html#renameSoundbox) | **POST** /v2/audio/collections/{id} | Rename audio collections
*shutterstock-api.AudioApi* | [**searchAudio**](docs/AudioApi.html#searchAudio) | **GET** /v2/audio/search | Search for tracks
*shutterstock-api.ContributorsApi* | [**getContributor**](docs/ContributorsApi.html#getContributor) | **GET** /v2/contributors/{contributor_id} | Get details about a single contributor
*shutterstock-api.ContributorsApi* | [**getContributorCollectionItems**](docs/ContributorsApi.html#getContributorCollectionItems) | **GET** /v2/contributors/{contributor_id}/collections/{id}/items | Get the items in contributors&#39; collections
*shutterstock-api.ContributorsApi* | [**getContributorCollections**](docs/ContributorsApi.html#getContributorCollections) | **GET** /v2/contributors/{contributor_id}/collections/{id} | Get details about contributors&#39; collections
*shutterstock-api.ContributorsApi* | [**getContributorCollectionsList**](docs/ContributorsApi.html#getContributorCollectionsList) | **GET** /v2/contributors/{contributor_id}/collections | List contributors&#39; collections
*shutterstock-api.ContributorsApi* | [**getContributorList**](docs/ContributorsApi.html#getContributorList) | **GET** /v2/contributors | Get details about multiple contributors
*shutterstock-api.EditorialApi* | [**getEditorialImage**](docs/EditorialApi.html#getEditorialImage) | **GET** /v2/editorial/{id} | Get editorial content details
*shutterstock-api.EditorialApi* | [**getEditorialLivefeed**](docs/EditorialApi.html#getEditorialLivefeed) | **GET** /v2/editorial/livefeeds/{id} | Get editorial livefeed
*shutterstock-api.EditorialApi* | [**getEditorialLivefeedItems**](docs/EditorialApi.html#getEditorialLivefeedItems) | **GET** /v2/editorial/livefeeds/{id}/items | Get editorial livefeed items
*shutterstock-api.EditorialApi* | [**getEditorialLivefeedList**](docs/EditorialApi.html#getEditorialLivefeedList) | **GET** /v2/editorial/livefeeds | Get editorial livefeed list
*shutterstock-api.EditorialApi* | [**licenseEditorialImage**](docs/EditorialApi.html#licenseEditorialImage) | **POST** /v2/editorial/licenses | License editorial content
*shutterstock-api.EditorialApi* | [**searchEditorial**](docs/EditorialApi.html#searchEditorial) | **GET** /v2/editorial/search | Search editorial content
*shutterstock-api.ImagesApi* | [**addLightboxItems**](docs/ImagesApi.html#addLightboxItems) | **POST** /v2/images/collections/{id}/items | Add images to collections
*shutterstock-api.ImagesApi* | [**createLightbox**](docs/ImagesApi.html#createLightbox) | **POST** /v2/images/collections | Create image collections
*shutterstock-api.ImagesApi* | [**deleteLightbox**](docs/ImagesApi.html#deleteLightbox) | **DELETE** /v2/images/collections/{id} | Delete image collections
*shutterstock-api.ImagesApi* | [**deleteLightboxItems**](docs/ImagesApi.html#deleteLightboxItems) | **DELETE** /v2/images/collections/{id}/items | Remove images from collections
*shutterstock-api.ImagesApi* | [**downloadImage**](docs/ImagesApi.html#downloadImage) | **POST** /v2/images/licenses/{id}/downloads | Download images
*shutterstock-api.ImagesApi* | [**getFeaturedLightbox**](docs/ImagesApi.html#getFeaturedLightbox) | **GET** /v2/images/collections/featured/{id} | Get the details of featured image collections
*shutterstock-api.ImagesApi* | [**getFeaturedLightboxItems**](docs/ImagesApi.html#getFeaturedLightboxItems) | **GET** /v2/images/collections/featured/{id}/items | Get the contents of featured image collections
*shutterstock-api.ImagesApi* | [**getFeaturedLightboxList**](docs/ImagesApi.html#getFeaturedLightboxList) | **GET** /v2/images/collections/featured | List featured image collections
*shutterstock-api.ImagesApi* | [**getImage**](docs/ImagesApi.html#getImage) | **GET** /v2/images/{id} | Get details about images
*shutterstock-api.ImagesApi* | [**getImageCategories**](docs/ImagesApi.html#getImageCategories) | **GET** /v2/images/categories | List image categories
*shutterstock-api.ImagesApi* | [**getImageLicenseList**](docs/ImagesApi.html#getImageLicenseList) | **GET** /v2/images/licenses | List image licenses
*shutterstock-api.ImagesApi* | [**getImageList**](docs/ImagesApi.html#getImageList) | **GET** /v2/images | List images
*shutterstock-api.ImagesApi* | [**getImageRecommendations**](docs/ImagesApi.html#getImageRecommendations) | **GET** /v2/images/recommendations | List recommended images
*shutterstock-api.ImagesApi* | [**getLightbox**](docs/ImagesApi.html#getLightbox) | **GET** /v2/images/collections/{id} | Get the details of image collections
*shutterstock-api.ImagesApi* | [**getLightboxItems**](docs/ImagesApi.html#getLightboxItems) | **GET** /v2/images/collections/{id}/items | Get the contents of image collections
*shutterstock-api.ImagesApi* | [**getLightboxList**](docs/ImagesApi.html#getLightboxList) | **GET** /v2/images/collections | List image collections
*shutterstock-api.ImagesApi* | [**getSimilarImages**](docs/ImagesApi.html#getSimilarImages) | **GET** /v2/images/{id}/similar | List similar images
*shutterstock-api.ImagesApi* | [**licenseImages**](docs/ImagesApi.html#licenseImages) | **POST** /v2/images/licenses | License images
*shutterstock-api.ImagesApi* | [**renameLightbox**](docs/ImagesApi.html#renameLightbox) | **POST** /v2/images/collections/{id} | Rename image collections
*shutterstock-api.ImagesApi* | [**searchImages**](docs/ImagesApi.html#searchImages) | **GET** /v2/images/search | Search for images
*shutterstock-api.ImagesApi* | [**uploadEphemeralImage**](docs/ImagesApi.html#uploadEphemeralImage) | **POST** /v2/images | Upload images
*shutterstock-api.TestApi* | [**echo**](docs/TestApi.html#echo) | **GET** /v2/test | Echo text
*shutterstock-api.TestApi* | [**validate**](docs/TestApi.html#validate) | **GET** /v2/test/validate | Validate input
*shutterstock-api.UsersApi* | [**createUser**](docs/UsersApi.html#createUser) | **POST** /v2/user | Register user
*shutterstock-api.UsersApi* | [**getAccessToken**](docs/UsersApi.html#getAccessToken) | **GET** /v2/user/access_token | Get access token details
*shutterstock-api.UsersApi* | [**getUser**](docs/UsersApi.html#getUser) | **GET** /v2/user | Get user details
*shutterstock-api.UsersApi* | [**getUserSubsciptionList**](docs/UsersApi.html#getUserSubsciptionList) | **GET** /v2/user/subscriptions | List user subscriptions
*shutterstock-api.VideosApi* | [**addClipboxItems**](docs/VideosApi.html#addClipboxItems) | **POST** /v2/videos/collections/{id}/items | Add videos to collections
*shutterstock-api.VideosApi* | [**createClipbox**](docs/VideosApi.html#createClipbox) | **POST** /v2/videos/collections | Create video collections
*shutterstock-api.VideosApi* | [**deleteClipbox**](docs/VideosApi.html#deleteClipbox) | **DELETE** /v2/videos/collections/{id} | Delete video collections
*shutterstock-api.VideosApi* | [**deleteClipboxItems**](docs/VideosApi.html#deleteClipboxItems) | **DELETE** /v2/videos/collections/{id}/items | Remove videos from collections
*shutterstock-api.VideosApi* | [**downloadVideos**](docs/VideosApi.html#downloadVideos) | **POST** /v2/videos/licenses/{id}/downloads | Download videos
*shutterstock-api.VideosApi* | [**getClipbox**](docs/VideosApi.html#getClipbox) | **GET** /v2/videos/collections/{id} | Get the details of video collections
*shutterstock-api.VideosApi* | [**getClipboxItems**](docs/VideosApi.html#getClipboxItems) | **GET** /v2/videos/collections/{id}/items | Get the contents of video collections
*shutterstock-api.VideosApi* | [**getClipboxList**](docs/VideosApi.html#getClipboxList) | **GET** /v2/videos/collections | List video collections
*shutterstock-api.VideosApi* | [**getSimilarVideos**](docs/VideosApi.html#getSimilarVideos) | **GET** /v2/videos/{id}/similar | List similar videos
*shutterstock-api.VideosApi* | [**getVideo**](docs/VideosApi.html#getVideo) | **GET** /v2/videos/{id} | Get details about videos
*shutterstock-api.VideosApi* | [**getVideoCategories**](docs/VideosApi.html#getVideoCategories) | **GET** /v2/videos/categories | List video categories
*shutterstock-api.VideosApi* | [**getVideoLicenseList**](docs/VideosApi.html#getVideoLicenseList) | **GET** /v2/videos/licenses | List video licenses
*shutterstock-api.VideosApi* | [**getVideoList**](docs/VideosApi.html#getVideoList) | **GET** /v2/videos | List videos
*shutterstock-api.VideosApi* | [**licenseVideos**](docs/VideosApi.html#licenseVideos) | **POST** /v2/videos/licenses | License videos
*shutterstock-api.VideosApi* | [**renameClipbox**](docs/VideosApi.html#renameClipbox) | **POST** /v2/videos/collections/{id} | Rename video collections
*shutterstock-api.VideosApi* | [**searchVideos**](docs/VideosApi.html#searchVideos) | **GET** /v2/videos/search | Search for videos


