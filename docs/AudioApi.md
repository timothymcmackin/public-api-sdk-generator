---
title: shutterstock-api.AudioApi
permalink: docs/AudioApi
---

All URIs are relative to `https://api.shutterstock.com`.

Method | HTTP request | Description
------------- | ------------- | -------------
[`addSoundboxItems`](#addSoundboxItems) | `POST /v2/audio/collections/{id}/items` | Add audio tracks to collections
[`createSoundbox`](#createSoundbox) | `POST /v2/audio/collections` | Create audio collections
[`deleteSoundbox`](#deleteSoundbox) | `DELETE /v2/audio/collections/{id}` | Delete audio collections
[`deleteSoundboxItems`](#deleteSoundboxItems) | `DELETE /v2/audio/collections/{id}/items` | Remove audio tracks from collections
[`downloadTracks`](#downloadTracks) | `POST /v2/audio/licenses/{id}/downloads` | Download audio tracks
[`getAudioLicenseList`](#getAudioLicenseList) | `GET /v2/audio/licenses` | List audio licenses
[`getSoundbox`](#getSoundbox) | `GET /v2/audio/collections/{id}` | Get the details of audio collections
[`getSoundboxItems`](#getSoundboxItems) | `GET /v2/audio/collections/{id}/items` | Get the contents of audio collections
[`getSoundboxList`](#getSoundboxList) | `GET /v2/audio/collections` | List audio collections
[`getTrack`](#getTrack) | `GET /v2/audio/{id}` | Get details about audio tracks
[`getTrackList`](#getTrackList) | `GET /v2/audio` | List audio tracks
[`licenseTrack`](#licenseTrack) | `POST /v2/audio/licenses` | License audio tracks
[`renameSoundbox`](#renameSoundbox) | `POST /v2/audio/collections/{id}` | Rename audio collections
[`searchAudio`](#searchAudio) | `GET /v2/audio/search` | Search for tracks


<a name="addSoundboxItems"></a>
# AudioApi.addSoundboxItems
> `AudioApi.addSoundboxItems(id, body)`

**Add audio tracks to collections**

This endpoint adds one or more tracks to a collection by track IDs.

### Example {#addSoundboxItems-example}

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const audioApi = new sstk.AudioApi();

const collectionId = "48433115";

const body = {
  "items": [
    {
      "id": "442583"
    },
    {
      "id": "7491192"
    }
  ]
};

audioApi.addSoundboxItems(collectionId, body)
  .catch((error) => {
    console.error(error);
  });

```


### Parameters {#addSoundboxItems-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| Collection ID 
 body (required) | [CollectionItemRequest](CollectionItemRequest)| List of items to add to collection 

### Accepted authentication {#addSoundboxItems-auth}


- OAuth Required scopes:
  - collections.edit


### HTTP request headers {#addSoundboxItems-headers}


- Content-Type: application/json


### Return type {#addSoundboxItems-return}

No response body.


<a name="createSoundbox"></a>
# AudioApi.createSoundbox
> `CollectionCreateResponse AudioApi.createSoundbox(body)`

**Create audio collections**

This endpoint creates one or more collections (soundboxes). To add tracks, use `POST /audio/collections/{id}/items`.

### Example {#createSoundbox-example}

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const audioApi = new sstk.AudioApi();

const body = {
  "name": "Best rock music"
};

audioApi.createSoundbox(body)
  .catch((error) => {
    console.error(error);
  });

```


### Parameters {#createSoundbox-parameters}


Name | Type | Description
------------- | ------------- | -------------
 body (required) | [CollectionCreateRequest](CollectionCreateRequest)| Collection metadata 

### Accepted authentication {#createSoundbox-auth}


- OAuth Required scopes:
  - collections.edit


### HTTP request headers {#createSoundbox-headers}


- Content-Type: application/json
- Accept: application/json

### Return type {#createSoundbox-return}

[CollectionCreateResponse](CollectionCreateResponse)

### Example response {#createSoundbox-response}

{
  "id" : "48433105"
}

<a name="deleteSoundbox"></a>
# AudioApi.deleteSoundbox
> `AudioApi.deleteSoundbox(id)`

**Delete audio collections**

This endpoint deletes a collection.

### Example {#deleteSoundbox-example}

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const audioApi = new sstk.AudioApi();

const collectionId = "48433107";

audioApi.deleteSoundbox(collectionId)
  .catch((error) => {
    console.error(error);
  });

```


### Parameters {#deleteSoundbox-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| Collection ID 

### Accepted authentication {#deleteSoundbox-auth}


- OAuth Required scopes:
  - collections.edit


### HTTP request headers {#deleteSoundbox-headers}

No request headers required.



### Return type {#deleteSoundbox-return}

No response body.


<a name="deleteSoundboxItems"></a>
# AudioApi.deleteSoundboxItems
> `AudioApi.deleteSoundboxItems(id, queryParams)`

**Remove audio tracks from collections**

This endpoint removes one or more tracks from a collection.

### Example {#deleteSoundboxItems-example}

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const audioApi = new sstk.AudioApi();

const collectionId = "48433119";

// Array of tracks to remove
const tracksToRemove = {
  "item_id": [
    "76688182",
    "40005859"
  ]
};

audioApi.deleteSoundboxItems(collectionId, tracksToRemove)
  .catch((error) => {
    console.error(error);
  });

```


### Parameters {#deleteSoundboxItems-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| Collection ID 
 item_id | [[String]](String)| One or more item IDs to remove from the collection 

### Accepted authentication {#deleteSoundboxItems-auth}


- OAuth Required scopes:
  - collections.edit


### HTTP request headers {#deleteSoundboxItems-headers}

No request headers required.



### Return type {#deleteSoundboxItems-return}

No response body.


<a name="downloadTracks"></a>
# AudioApi.downloadTracks
> `Url AudioApi.downloadTracks(id)`

**Download audio tracks**

This endpoint redownloads tracks that you have already received a license for.

### Example {#downloadTracks-example}

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const audioApi = new sstk.AudioApi();

const licenseId = "i1188641348"; // license ID, not track ID

audioApi.downloadTracks(licenseId)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```


### Parameters {#downloadTracks-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| License ID 

### Accepted authentication {#downloadTracks-auth}


- OAuth Required scopes:
  - licenses.view


### HTTP request headers {#downloadTracks-headers}



- Accept: application/json

### Return type {#downloadTracks-return}

[Url](Url)

### Example response {#downloadTracks-response}

{
  "url" : "url"
}

<a name="getAudioLicenseList"></a>
# AudioApi.getAudioLicenseList
> `DownloadHistoryDataList AudioApi.getAudioLicenseList(queryParams)`

**List audio licenses**

This endpoint lists existing licenses. You can filter the results according to the track ID to see if you have an existing license for a specific track.

### Example {#getAudioLicenseList-example}

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.AudioApi();

const queryParams = { 
  'audio_id': "\"1\"" // String | Show licenses for the specified track ID
};

api.getAudioLicenseList(queryParams)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#getAudioLicenseList-parameters}


Name | Type | Description
------------- | ------------- | -------------
 audio_id | String| Show licenses for the specified track ID 

### Accepted authentication {#getAudioLicenseList-auth}


- OAuth Required scopes:
  - licenses.view


### HTTP request headers {#getAudioLicenseList-headers}



- Accept: application/json

### Return type {#getAudioLicenseList-return}

[DownloadHistoryDataList](DownloadHistoryDataList)

### Example response {#getAudioLicenseList-response}

{
  "per_page" : 6,
  "data" : [ {
    "subscription_id" : "subscription_id",
    "image" : {
      "format" : {
        "size" : "size",
        "format" : "format"
      },
      "id" : "id"
    },
    "license" : "license",
    "download_time" : "2000-01-23T04:56:07.000+00:00",
    "metadata" : "{}",
    "is_downloadable" : true,
    "audio" : {
      "format" : {
        "size" : "size",
        "format" : "format"
      },
      "id" : "id"
    },
    "id" : "id",
    "video" : {
      "format" : {
        "size" : "size",
        "format" : "format"
      },
      "id" : "id"
    },
    "user" : {
      "username" : "username"
    }
  }, {
    "subscription_id" : "subscription_id",
    "image" : {
      "format" : {
        "size" : "size",
        "format" : "format"
      },
      "id" : "id"
    },
    "license" : "license",
    "download_time" : "2000-01-23T04:56:07.000+00:00",
    "metadata" : "{}",
    "is_downloadable" : true,
    "audio" : {
      "format" : {
        "size" : "size",
        "format" : "format"
      },
      "id" : "id"
    },
    "id" : "id",
    "video" : {
      "format" : {
        "size" : "size",
        "format" : "format"
      },
      "id" : "id"
    },
    "user" : {
      "username" : "username"
    }
  } ],
  "total_count" : 1,
  "page" : 0,
  "message" : "message",
  "errors" : [ {
    "path" : "path",
    "code" : "code",
    "data" : "data",
    "message" : "message",
    "items" : [ "{}", "{}" ]
  }, {
    "path" : "path",
    "code" : "code",
    "data" : "data",
    "message" : "message",
    "items" : [ "{}", "{}" ]
  } ]
}

<a name="getSoundbox"></a>
# AudioApi.getSoundbox
> `Collection AudioApi.getSoundbox(id)`

**Get the details of audio collections**

This endpoint gets more detailed information about a collection, including the number of items in it and when it was last updated. To get the tracks in collections, use `GET /audio/collections/{id}/items`.

### Example {#getSoundbox-example}

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.AudioApi();

const id = "\"48433107\""; // String | Collection ID


api.getSoundbox(id)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#getSoundbox-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| Collection ID 

### Accepted authentication {#getSoundbox-auth}


- OAuth Required scopes:
  - collections.view


### HTTP request headers {#getSoundbox-headers}



- Accept: application/json

### Return type {#getSoundbox-return}

[Collection](Collection)

### Example response {#getSoundbox-response}

{
  "created_time" : "2000-01-23T04:56:07.000+00:00",
  "updated_time" : "2000-01-23T04:56:07.000+00:00",
  "share_url" : "share_url",
  "items_updated_time" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "share_code" : "share_code",
  "cover_item" : {
    "added_time" : "2000-01-23T04:56:07.000+00:00",
    "media_type" : "media_type",
    "id" : "id"
  },
  "total_item_count" : 0
}

<a name="getSoundboxItems"></a>
# AudioApi.getSoundboxItems
> `CollectionItemDataList AudioApi.getSoundboxItems(id, queryParams)`

**Get the contents of audio collections**

This endpoint lists the IDs of tracks in a collection and the date that each was added.

### Example {#getSoundboxItems-example}

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.AudioApi();

const id = "\"48433113\""; // String | Collection ID

const queryParams = { 
  'page': 1, // Number | Page number
  'per_page': 100, // Number | Number of results per page
  'sort': "oldest" // String | Sort order
};

api.getSoundboxItems(id, queryParams)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#getSoundboxItems-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| Collection ID 
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 100 
 sort | String| Sort order, defaults to oldest <br/><br/>Valid values: "newest", "oldest"

### Accepted authentication {#getSoundboxItems-auth}


- OAuth Required scopes:
  - collections.view


### HTTP request headers {#getSoundboxItems-headers}



- Accept: application/json

### Return type {#getSoundboxItems-return}

[CollectionItemDataList](CollectionItemDataList)

### Example response {#getSoundboxItems-response}

{
  "data" : [ {
    "added_time" : "2016-08-18T18:52:59-04:00",
    "id" : "76688182",
    "media_type" : "audio"
  }, {
    "added_time" : "2016-08-18T18:52:59-04:00",
    "id" : "40005859",
    "media_type" : "audio"
  } ],
  "page" : 1,
  "per_page" : 100
}

<a name="getSoundboxList"></a>
# AudioApi.getSoundboxList
> `CollectionDataList AudioApi.getSoundboxList(queryParams)`

**List audio collections**

This endpoint lists your collections of audio tracks and their basic attributes.

### Example {#getSoundboxList-example}

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.AudioApi();

const queryParams = { 
  'page': 1, // Number | Page number
  'per_page': 100 // Number | Number of results per page
};

api.getSoundboxList(queryParams)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#getSoundboxList-parameters}


Name | Type | Description
------------- | ------------- | -------------
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 100 

### Accepted authentication {#getSoundboxList-auth}


- OAuth Required scopes:
  - collections.view


### HTTP request headers {#getSoundboxList-headers}



- Accept: application/json

### Return type {#getSoundboxList-return}

[CollectionDataList](CollectionDataList)

### Example response {#getSoundboxList-response}

{
  "data" : [ {
    "created_time" : "2014-11-05T19:29:56-05:00",
    "id" : "5747953",
    "name" : "Test Collection cdad",
    "total_item_count" : 0,
    "updated_time" : "2014-11-05T19:29:56-05:00"
  }, {
    "created_time" : "2014-11-05T19:29:56-05:00",
    "id" : "5747955",
    "name" : "Test Collection ff5f",
    "total_item_count" : 0,
    "updated_time" : "2014-11-05T19:29:56-05:00"
  }, {
    "created_time" : "2014-11-05T19:29:58-05:00",
    "id" : "5747957",
    "name" : "Updated Collection ebc4",
    "total_item_count" : 0,
    "updated_time" : "2014-11-05T19:29:58-05:00"
  }, {
    "created_time" : "2014-11-05T19:32:13-05:00",
    "id" : "5747971",
    "name" : "Test Collection 0072",
    "total_item_count" : 0,
    "updated_time" : "2014-11-05T19:32:13-05:00"
  }, {
    "created_time" : "2014-11-05T19:32:13-05:00",
    "id" : "5747973",
    "name" : "Test Collection d332",
    "total_item_count" : 0,
    "updated_time" : "2014-11-05T19:32:13-05:00"
  } ]
}

<a name="getTrack"></a>
# AudioApi.getTrack
> `Audio AudioApi.getTrack(id, queryParams)`

**Get details about audio tracks**

This endpoint shows information about a track, including its genres, instruments, and other attributes.

### Example {#getTrack-example}

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.AudioApi();

const id = "\"442583\""; // String | Audio track ID

const queryParams = { 
  'view': "full" // String | Amount of detail to render in the response
};

api.getTrack(id, queryParams)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#getTrack-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| Audio track ID 
 view | String| Amount of detail to render in the response, defaults to full <br/><br/>Valid values: "minimal", "full"

### Accepted authentication {#getTrack-auth}

- Basic
- OAuth (No scope required.)

### HTTP request headers {#getTrack-headers}



- Accept: application/json

### Return type {#getTrack-return}

[Audio](Audio)

### Example response {#getTrack-response}

{
  "added_date" : "2016-08-16",
  "album" : {
    "id" : "",
    "title" : ""
  },
  "artists" : [ {
    "name" : "Klimenko Music"
  } ],
  "assets" : {
    "clean_audio" : {
      "file_size" : 35188408
    },
    "preview_mp3" : {
      "file_size" : 4400203,
      "url" : "https://ak.picdn.net/shutterstock/audio/442583/preview/preview.mp3"
    },
    "preview_ogg" : {
      "file_size" : 4453197,
      "url" : "https://ak.picdn.net/shutterstock/audio/442583/preview/preview.ogg"
    },
    "waveform" : {
      "file_size" : 18778,
      "url" : "https://ak.picdn.net/shutterstock/audio/442583/waveform/waveform.png"
    }
  },
  "bpm" : 110,
  "contributor" : {
    "id" : "2847971"
  },
  "description" : "Pulsing and feel-good, featuring soaring synthesizer, groovy synth bass drums and synth drums that create a euphoric, upbeat mood.",
  "duration" : 183,
  "genres" : [ "Dance/Electronic", "Electro Pop", "Pop/Rock" ],
  "id" : "442583",
  "instruments" : [ "Piano", "Synth bass", "Synth drums", "Synthesizer" ],
  "is_adult" : false,
  "is_instrumental" : true,
  "isrc" : "",
  "keywords" : [ "celebratory", "chic", "euphoric", "good times", "hip", "optimistic", "party", "soaring", "upbeat" ],
  "language" : "en",
  "lyrics" : "",
  "media_type" : "audio",
  "moods" : [ "Bright", "Confident", "Fun", "Happy", "Inspiring", "Optimistic", "Playful", "Sophisticated", "Stylish", "Uplifting" ],
  "published_time" : "2016-08-16T14:30:03-04:00",
  "recording_version" : "",
  "releases" : [ ],
  "similar_artists" : [ ],
  "title" : "Another Tomorrow",
  "updated_time" : "2016-08-18T17:59:33-04:00",
  "vocal_description" : "",
  "url" : "https://www.shutterstock.com/music/track/another-tomorrow/442583"
}

<a name="getTrackList"></a>
# AudioApi.getTrackList
> `AudioDataList AudioApi.getTrackList(id, queryParams)`

**List audio tracks**

This endpoint lists information about one or more audio tracks, including the description and publication date.

### Example {#getTrackList-example}

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.AudioApi();

const id = ["[ \"442583\", \"434750\" ]"]; // [String] | One or more audio IDs

const queryParams = { 
  'view': "minimal" // String | Amount of detail to render in the response
};

api.getTrackList(id, queryParams)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#getTrackList-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | [[String]](String)| One or more audio IDs 
 view | String| Amount of detail to render in the response, defaults to minimal <br/><br/>Valid values: "minimal", "full"

### Accepted authentication {#getTrackList-auth}

- Basic
- OAuth (No scope required.)

### HTTP request headers {#getTrackList-headers}



- Accept: application/json

### Return type {#getTrackList-return}

[AudioDataList](AudioDataList)

### Example response {#getTrackList-response}

{
  "data" : [ {
    "added_date" : "2016-04-12",
    "album" : {
      "id" : "",
      "title" : ""
    },
    "artists" : [ {
      "name" : "Fin Productions"
    } ],
    "assets" : {
      "clean_audio" : {
        "file_size" : 30760372
      },
      "preview_mp3" : {
        "file_size" : 3846606,
        "url" : "https://ak.picdn.net/shutterstock/audio/434750/preview/preview.mp3"
      },
      "preview_ogg" : {
        "file_size" : 4402608,
        "url" : "https://ak.picdn.net/shutterstock/audio/434750/preview/preview.ogg"
      },
      "waveform" : {
        "file_size" : 19822,
        "url" : "https://ak.picdn.net/shutterstock/audio/434750/waveform/waveform.png"
      }
    },
    "bpm" : 100,
    "contributor" : {
      "id" : "2847971"
    },
    "description" : "Pulsing and feel-good, featuring slick electric guitar, synthesizer, bass, electronic drum pads and drums that create a positive, celebratory mood.",
    "duration" : 160,
    "genres" : [ "Dance/Electronic", "Electro Pop", "Pop/Rock" ],
    "id" : "434750",
    "instruments" : [ "Bass", "Drums", "Electric guitar", "Pads", "Percussion", "Synthesizer" ],
    "is_adult" : false,
    "is_instrumental" : true,
    "isrc" : "",
    "keywords" : [ "breezy", "celebration", "festive", "good times", "hopeful", "optimistic", "party", "positive", "reflective" ],
    "language" : "en",
    "lyrics" : "",
    "media_type" : "audio",
    "moods" : [ "Bright", "Confident", "Fun", "Happy", "Inspiring", "Optimistic", "Playful", "Sophisticated", "Stylish", "Uplifting" ],
    "published_time" : "2016-04-12T17:45:29-04:00",
    "recording_version" : "",
    "releases" : [ ],
    "similar_artists" : [ ],
    "title" : "Fresh Love",
    "updated_time" : "2016-08-18T18:03:11-04:00",
    "vocal_description" : ""
  } ]
}

<a name="licenseTrack"></a>
# AudioApi.licenseTrack
> `LicenseAudioResultDataList AudioApi.licenseTrack(body, queryParams)`

**License audio tracks**

This endpoint gets licenses for one or more tracks.

### Example {#licenseTrack-example}

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const audioApi = new sstk.AudioApi();

const body = {
  "audio": [
    {
      "audio_id": "446348",
      "license": "premier_music_comp",
      "metadata": {
        "purchase_order": "123"
      }
    }
  ]
};

audioApi.licenseTrack(body)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```


### Parameters {#licenseTrack-parameters}


Name | Type | Description
------------- | ------------- | -------------
 body (required) | [LicenseAudioRequest](LicenseAudioRequest)| Tracks to license 
 license | String| License type, defaults to audio_standard <br/><br/>Valid values: "audio_standard", "audio_enhanced", "audio_platform"
 search_id | String| The ID of the search that led to licensing this track 

### Accepted authentication {#licenseTrack-auth}


- OAuth Required scopes:
  - licenses.create


### HTTP request headers {#licenseTrack-headers}


- Content-Type: application/json
- Accept: application/json

### Return type {#licenseTrack-return}

[LicenseAudioResultDataList](LicenseAudioResultDataList)

### Example response {#licenseTrack-response}

{
  "data" : [ {
    "audio_id" : "1",
    "download" : {
      "url" : "http://download2.dev.shutterstock.com/gatekeeper/abc/original.wav"
    }
  } ]
}

<a name="renameSoundbox"></a>
# AudioApi.renameSoundbox
> `AudioApi.renameSoundbox(id, body)`

**Rename audio collections**

This endpoint sets a new name for a collection.

### Example {#renameSoundbox-example}

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const audioApi = new sstk.AudioApi();

const collectionId = "48433107";

const body = {
  "name": "Best rock music"
};

audioApi.renameSoundbox(collectionId, body)
  .catch((error) => {
    console.error(error);
  });

```


### Parameters {#renameSoundbox-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| Collection ID 
 body (required) | [CollectionUpdateRequest](CollectionUpdateRequest)| Collection changes 

### Accepted authentication {#renameSoundbox-auth}


- OAuth Required scopes:
  - collections.edit


### HTTP request headers {#renameSoundbox-headers}


- Content-Type: application/json


### Return type {#renameSoundbox-return}

No response body.


<a name="searchAudio"></a>
# AudioApi.searchAudio
> `AudioSearchResults AudioApi.searchAudio(queryParams)`

**Search for tracks**

This endpoint searches for tracks. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter.

### Example {#searchAudio-example}

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const audioApi = new sstk.AudioApi();

const queryParams = {
  "query": "bluegrass",
  "duration_from": 60,
  "moods": ["uplifting"]
};

audioApi.searchAudio(queryParams)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```


### Parameters {#searchAudio-parameters}


Name | Type | Description
------------- | ------------- | -------------
 artists | [[String]](String)| Show tracks with one of the specified artist names or IDs 
 bpm | Number| (Deprecated; use bpm_from and bpm_to instead) Show tracks with the specified beats per minute 
 bpm_from | Number| Show tracks with the specified beats per minute or faster 
 bpm_to | Number| Show tracks with the specified beats per minute or slower 
 duration | Number| Show tracks with the specified duration (seconds) 
 duration_from | Number| Show tracks with the specified duration or longer (seconds) 
 duration_to | Number| Show tracks with the specified duration or shorter (seconds) 
 genre | [[String]](String)| Show tracks with each of the specified genres <br/><br/>Valid values: "Acoustic", "Ambient", "Audio Logo", "Blues", "Chill Out", "Classical", "Corporate", "Country", "Dance/Techno", "Dubstep", "Easy Listening", "Electro Pop", "Electronic", "Folk", "Games", "Hip Hop", "Holiday", "Independent", "Indie Pop", "Jazz", "Kids/Children", "Latin", "Masterworks", "Motown", "New Age", "News", "Piano / Solo Instrumental", "Pop", "Production / Film Scores", "R&B", "Reggae", "Rock", "Trailer", "Vocals", "World"
 is_instrumental | Boolean| Show instrumental music only 
 instruments | [[String]](String)| Show tracks with each of the specified instruments 
 moods | [[String]](String)| Show tracks with each of the specified moods <br/><br/>Valid values: "Action/Sports", "Adventure/Discovery", "Aerobics/Workout", "Aggressive", "Comedy/Funny", "Crime/Thriller/Spy", "Dark/Somber", "Epic/Orchestral", "Fashion/Lifestyle", "Feel Good", "Gentle/Light", "Happy/Cheerful", "Horror/Scary", "Magical/Mystical", "Military/Patriotic", "Relaxation/Meditation", "Religious/Christian", "Romantic/Sentimental", "Sad/Nostalgic", "Sci-Fi/Future", "Sexy/Sensual", "Strange/Bizarre", "Suspense/Drama", "Underscores", "Uplifting", "Wedding"
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20 
 query | String| One or more search terms separated by spaces 
 sort | String| Sort by <br/><br/>Valid values: "score", "ranking_all", "artist", "title", "bpm", "freshness", "duration"
 sort_order | String| Sort order, asc or desc, defaults to desc <br/><br/>Valid values: "asc", "desc"
 vocal_description | String| Show tracks with the specified vocal description (male, female) 
 view | String| Amount of detail to render in the response, defaults to minimal <br/><br/>Valid values: "minimal", "full"

### Accepted authentication {#searchAudio-auth}

- Basic
- OAuth (No scope required.)

### HTTP request headers {#searchAudio-headers}



- Accept: application/json

### Return type {#searchAudio-return}

[AudioSearchResults](AudioSearchResults)

### Example response {#searchAudio-response}

{
  "per_page" : 6,
  "data" : [ {
    "added_date" : "2016-08-16",
    "album" : {
      "id" : "",
      "title" : ""
    },
    "artists" : [ {
      "name" : "Klimenko Music"
    } ],
    "assets" : {
      "clean_audio" : {
        "file_size" : 35188408
      },
      "preview_mp3" : {
        "file_size" : 4400203,
        "url" : "https://ak.picdn.net/shutterstock/audio/442583/preview/preview.mp3"
      },
      "preview_ogg" : {
        "file_size" : 4453197,
        "url" : "https://ak.picdn.net/shutterstock/audio/442583/preview/preview.ogg"
      },
      "waveform" : {
        "file_size" : 18778,
        "url" : "https://ak.picdn.net/shutterstock/audio/442583/waveform/waveform.png"
      }
    },
    "bpm" : 110,
    "contributor" : {
      "id" : "2847971"
    },
    "description" : "Pulsing and feel-good, featuring soaring synthesizer, groovy synth bass drums and synth drums that create a euphoric, upbeat mood.",
    "duration" : 183,
    "genres" : [ "Dance/Electronic", "Electro Pop", "Pop/Rock" ],
    "id" : "442583",
    "instruments" : [ "Piano", "Synth bass", "Synth drums", "Synthesizer" ],
    "is_adult" : false,
    "is_instrumental" : true,
    "isrc" : "",
    "keywords" : [ "celebratory", "chic", "euphoric", "good times", "hip", "optimistic", "party", "soaring", "upbeat" ],
    "language" : "en",
    "lyrics" : "",
    "media_type" : "audio",
    "moods" : [ "Bright", "Confident", "Fun", "Happy", "Inspiring", "Optimistic", "Playful", "Sophisticated", "Stylish", "Uplifting" ],
    "published_time" : "2016-08-16T14:30:03-04:00",
    "recording_version" : "",
    "releases" : [ ],
    "similar_artists" : [ ],
    "title" : "Another Tomorrow",
    "updated_time" : "2016-08-18T17:59:33-04:00",
    "vocal_description" : "",
    "url" : "https://www.shutterstock.com/music/track/another-tomorrow/442583"
  }, {
    "added_date" : "2016-08-16",
    "album" : {
      "id" : "",
      "title" : ""
    },
    "artists" : [ {
      "name" : "Klimenko Music"
    } ],
    "assets" : {
      "clean_audio" : {
        "file_size" : 35188408
      },
      "preview_mp3" : {
        "file_size" : 4400203,
        "url" : "https://ak.picdn.net/shutterstock/audio/442583/preview/preview.mp3"
      },
      "preview_ogg" : {
        "file_size" : 4453197,
        "url" : "https://ak.picdn.net/shutterstock/audio/442583/preview/preview.ogg"
      },
      "waveform" : {
        "file_size" : 18778,
        "url" : "https://ak.picdn.net/shutterstock/audio/442583/waveform/waveform.png"
      }
    },
    "bpm" : 110,
    "contributor" : {
      "id" : "2847971"
    },
    "description" : "Pulsing and feel-good, featuring soaring synthesizer, groovy synth bass drums and synth drums that create a euphoric, upbeat mood.",
    "duration" : 183,
    "genres" : [ "Dance/Electronic", "Electro Pop", "Pop/Rock" ],
    "id" : "442583",
    "instruments" : [ "Piano", "Synth bass", "Synth drums", "Synthesizer" ],
    "is_adult" : false,
    "is_instrumental" : true,
    "isrc" : "",
    "keywords" : [ "celebratory", "chic", "euphoric", "good times", "hip", "optimistic", "party", "soaring", "upbeat" ],
    "language" : "en",
    "lyrics" : "",
    "media_type" : "audio",
    "moods" : [ "Bright", "Confident", "Fun", "Happy", "Inspiring", "Optimistic", "Playful", "Sophisticated", "Stylish", "Uplifting" ],
    "published_time" : "2016-08-16T14:30:03-04:00",
    "recording_version" : "",
    "releases" : [ ],
    "similar_artists" : [ ],
    "title" : "Another Tomorrow",
    "updated_time" : "2016-08-18T17:59:33-04:00",
    "vocal_description" : "",
    "url" : "https://www.shutterstock.com/music/track/another-tomorrow/442583"
  } ],
  "total_count" : 1,
  "page" : 0,
  "message" : "message"
}

