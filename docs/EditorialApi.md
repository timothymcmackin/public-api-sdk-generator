---
title: shutterstock-api.EditorialApi
permalink: docs/EditorialApi
---

All URIs are relative to `https://api.shutterstock.com`.

Method | HTTP request | Description
------------- | ------------- | -------------
[`getEditorialImage`](#getEditorialImage) | `GET /v2/editorial/{id}` | Get editorial content details
[`getEditorialLivefeed`](#getEditorialLivefeed) | `GET /v2/editorial/livefeeds/{id}` | Get editorial livefeed
[`getEditorialLivefeedItems`](#getEditorialLivefeedItems) | `GET /v2/editorial/livefeeds/{id}/items` | Get editorial livefeed items
[`getEditorialLivefeedList`](#getEditorialLivefeedList) | `GET /v2/editorial/livefeeds` | Get editorial livefeed list
[`licenseEditorialImage`](#licenseEditorialImage) | `POST /v2/editorial/licenses` | License editorial content
[`searchEditorial`](#searchEditorial) | `GET /v2/editorial/search` | Search editorial content


<a name="getEditorialImage"></a>
# EditorialApi.getEditorialImage
> `EditorialContent EditorialApi.getEditorialImage(id, country)`

**Get editorial content details**

This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.

### Example {#getEditorialImage-example}

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.EditorialApi();

const id = "\"9926131a\""; // String | Editorial ID

const country = "\"USA\""; // String | Returns only if the content is available for distribution in a certain country; specify with 3-letter country code


api.getEditorialImage(id, country)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#getEditorialImage-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| Editorial ID 
 country (required) | String| Returns only if the content is available for distribution in a certain country; specify with 3-letter country code 

### Accepted authentication {#getEditorialImage-auth}

- Basic
- OAuth (No scope required.)

### HTTP request headers {#getEditorialImage-headers}



- Accept: application/json

### Return type {#getEditorialImage-return}

[EditorialContent](EditorialContent)

### Example response {#getEditorialImage-response}

{
  "assets" : {
    "thumb_220" : {
      "width" : 7,
      "url" : "url",
      "height" : 2
    },
    "original" : {
      "is_licensable" : true,
      "format" : "format",
      "width" : 5,
      "display_name" : "display_name",
      "dpi" : 6,
      "file_size" : 1,
      "height" : 5
    },
    "watermark_450" : {
      "width" : 7,
      "url" : "url",
      "height" : 2
    },
    "thumb_170" : {
      "width" : 7,
      "url" : "url",
      "height" : 2
    },
    "medium_jpg" : {
      "is_licensable" : true,
      "format" : "format",
      "width" : 5,
      "display_name" : "display_name",
      "dpi" : 6,
      "file_size" : 1,
      "height" : 5
    },
    "small_jpg" : {
      "is_licensable" : true,
      "format" : "format",
      "width" : 5,
      "display_name" : "display_name",
      "dpi" : 6,
      "file_size" : 1,
      "height" : 5
    },
    "watermark_1500" : {
      "width" : 7,
      "url" : "url",
      "height" : 2
    }
  },
  "keywords" : [ "keywords", "keywords" ],
  "aspect" : 0.80082819046101150206595775671303272247314453125,
  "caption" : "caption",
  "description" : "description",
  "categories" : [ {
    "name" : "name"
  }, {
    "name" : "name"
  } ],
  "id" : "id",
  "title" : "title",
  "byline" : "byline",
  "date_taken" : "2000-01-23"
}

<a name="getEditorialLivefeed"></a>
# EditorialApi.getEditorialLivefeed
> `EditorialLivefeed EditorialApi.getEditorialLivefeed(id, country)`

**Get editorial livefeed**

### Example {#getEditorialLivefeed-example}

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.EditorialApi();

const id = "\"2018%2F10%2F15%2FWomen%20of%20the%20Year%20Lunch%20%26%20Awards%2C%20London\""; // String | Editorial livefeed ID; must be an URI encoded string

const country = "\"USA\""; // String | Returns only if the livefeed is available for distribution in a certain country; specify with 3-letter country code


api.getEditorialLivefeed(id, country)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#getEditorialLivefeed-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| Editorial livefeed ID; must be an URI encoded string 
 country (required) | String| Returns only if the livefeed is available for distribution in a certain country; specify with 3-letter country code 

### Accepted authentication {#getEditorialLivefeed-auth}

- Basic
- OAuth (No scope required.)

### HTTP request headers {#getEditorialLivefeed-headers}



- Accept: application/json

### Return type {#getEditorialLivefeed-return}

[EditorialLivefeed](EditorialLivefeed)

### Example response {#getEditorialLivefeed-response}

{
  "created_time" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "cover_item" : {
    "width" : 6,
    "id" : "id",
    "url" : "url",
    "height" : 0
  },
  "total_item_count" : 1
}

<a name="getEditorialLivefeedItems"></a>
# EditorialApi.getEditorialLivefeedItems
> `EditorialContentDataList EditorialApi.getEditorialLivefeedItems(id, country)`

**Get editorial livefeed items**

### Example {#getEditorialLivefeedItems-example}

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.EditorialApi();

const id = "\"2018%2F10%2F15%2FWomen%20of%20the%20Year%20Lunch%20%26%20Awards%2C%20London\""; // String | Editorial livefeed ID; must be an URI encoded string

const country = "\"USA\""; // String | Returns only if the livefeed items are available for distribution in a certain country; specify with 3-letter country code


api.getEditorialLivefeedItems(id, country)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#getEditorialLivefeedItems-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | String| Editorial livefeed ID; must be an URI encoded string 
 country (required) | String| Returns only if the livefeed items are available for distribution in a certain country; specify with 3-letter country code 

### Accepted authentication {#getEditorialLivefeedItems-auth}

- Basic
- OAuth (No scope required.)

### HTTP request headers {#getEditorialLivefeedItems-headers}



- Accept: application/json

### Return type {#getEditorialLivefeedItems-return}

[EditorialContentDataList](EditorialContentDataList)

### Example response {#getEditorialLivefeedItems-response}

{
  "per_page" : 6,
  "data" : [ {
    "assets" : {
      "thumb_220" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "original" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "watermark_450" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "thumb_170" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "medium_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "small_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "watermark_1500" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      }
    },
    "keywords" : [ "keywords", "keywords" ],
    "aspect" : 0.80082819046101150206595775671303272247314453125,
    "caption" : "caption",
    "description" : "description",
    "categories" : [ {
      "name" : "name"
    }, {
      "name" : "name"
    } ],
    "id" : "id",
    "title" : "title",
    "byline" : "byline",
    "date_taken" : "2000-01-23"
  }, {
    "assets" : {
      "thumb_220" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "original" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "watermark_450" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "thumb_170" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "medium_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "small_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "watermark_1500" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      }
    },
    "keywords" : [ "keywords", "keywords" ],
    "aspect" : 0.80082819046101150206595775671303272247314453125,
    "caption" : "caption",
    "description" : "description",
    "categories" : [ {
      "name" : "name"
    }, {
      "name" : "name"
    } ],
    "id" : "id",
    "title" : "title",
    "byline" : "byline",
    "date_taken" : "2000-01-23"
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

<a name="getEditorialLivefeedList"></a>
# EditorialApi.getEditorialLivefeedList
> `EditorialLivefeedList EditorialApi.getEditorialLivefeedList(country, queryParams)`

**Get editorial livefeed list**

### Example {#getEditorialLivefeedList-example}

```javascript
const sstk = require('shutterstock-api');

// To use HTTP basic authorization:
sstk.setBasicAuth(client_id, client_secret);

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.EditorialApi();

const country = "\"USA\""; // String | Returns only livefeeds that are available for distribution in a certain country; specify with 3-letter country code

const queryParams = { 
  'page': 1, // Number | Page number
  'per_page': 20 // Number | Number of results per page, defaults to 20
};

api.getEditorialLivefeedList(country, queryParams)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#getEditorialLivefeedList-parameters}


Name | Type | Description
------------- | ------------- | -------------
 country (required) | String| Returns only livefeeds that are available for distribution in a certain country; specify with 3-letter country code 
 page | Number| Page number, defaults to 1 
 per_page | Number| Number of results per page, defaults to 20, defaults to 20 

### Accepted authentication {#getEditorialLivefeedList-auth}

- Basic
- OAuth (No scope required.)

### HTTP request headers {#getEditorialLivefeedList-headers}



- Accept: application/json

### Return type {#getEditorialLivefeedList-return}

[EditorialLivefeedList](EditorialLivefeedList)

### Example response {#getEditorialLivefeedList-response}

{
  "per_page" : 5,
  "data" : [ {
    "created_time" : "2000-01-23T04:56:07.000+00:00",
    "name" : "name",
    "id" : "id",
    "cover_item" : {
      "width" : 6,
      "id" : "id",
      "url" : "url",
      "height" : 0
    },
    "total_item_count" : 1
  }, {
    "created_time" : "2000-01-23T04:56:07.000+00:00",
    "name" : "name",
    "id" : "id",
    "cover_item" : {
      "width" : 6,
      "id" : "id",
      "url" : "url",
      "height" : 0
    },
    "total_item_count" : 1
  } ],
  "total_count" : 2,
  "page" : 5,
  "message" : "message"
}

<a name="licenseEditorialImage"></a>
# EditorialApi.licenseEditorialImage
> `LicenseEditorialContentResultDataList EditorialApi.licenseEditorialImage(body)`

**License editorial content**

This endpoint gets licenses for one or more editorial images. You must specify the country and one or more editorial images to license.

### Example {#licenseEditorialImage-example}

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const editorialApi = new sstk.EditorialApi();

const body = {
  "editorial": [
    {
      "editorial_id": "8594090h",
      "license": "premier_editorial_comp"
    }
  ],
  "country": "USA"
};

editorialApi.licenseEditorialImage(body)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```


### Parameters {#licenseEditorialImage-parameters}


Name | Type | Description
------------- | ------------- | -------------
 body (required) | [LicenseEditorialContentRequest](LicenseEditorialContentRequest)| License editorial content 

### Accepted authentication {#licenseEditorialImage-auth}


- OAuth Required scopes:
  - licenses.create


### HTTP request headers {#licenseEditorialImage-headers}


- Content-Type: application/json
- Accept: application/json

### Return type {#licenseEditorialImage-return}

[LicenseEditorialContentResultDataList](LicenseEditorialContentResultDataList)

### Example response {#licenseEditorialImage-response}

{
  "per_page" : 1,
  "data" : [ {
    "download" : {
      "url" : "url"
    },
    "allotment_charge" : 0,
    "error" : "error",
    "editorial_id" : "editorial_id"
  }, {
    "download" : {
      "url" : "url"
    },
    "allotment_charge" : 0,
    "error" : "error",
    "editorial_id" : "editorial_id"
  } ],
  "total_count" : 5,
  "page" : 6,
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

<a name="searchEditorial"></a>
# EditorialApi.searchEditorial
> `EditorialSearchResults EditorialApi.searchEditorial(country, queryParams)`

**Search editorial content**

This endpoint searches for editorial images. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.

### Example {#searchEditorial-example}

```javascript
const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const editorialApi = new sstk.EditorialApi();

const queryParams = {
  "query": "football",
  "country": "USA",
  "sort": "newest",
  "date_start": "2018-10-23"
};

const country = "USA";

editorialApi.searchEditorial(country, queryParams)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```


### Parameters {#searchEditorial-parameters}


Name | Type | Description
------------- | ------------- | -------------
 country (required) | String| Show only editorial content that is available for distribution in a certain country; specify with 3-letter country code 
 query | String| One or more search terms separated by spaces 
 sort | String| Sort by, defaults to relevant <br/><br/>Valid values: "relevant", "newest", "oldest"
 category | String| Show editorial content within a certain editorial category; specify by category name 
 supplier_code | [[String]](String)| Show only editorial content from certain suppliers 
 date_start | Date| Show only editorial content generated on or after a specific date, in the format of YYYY-MM-DD 
 date_end | Date| Show only editorial content generated on or before a specific date, in the format of YYYY-MM-DD 
 per_page | Number| Number of results per page, defaults to 20, defaults to 20 
 cursor | String| The cursor of the page with which to start fetching results; this cursor is returned from previous requests 

### Accepted authentication {#searchEditorial-auth}

- Basic
- OAuth (No scope required.)

### HTTP request headers {#searchEditorial-headers}



- Accept: application/json

### Return type {#searchEditorial-return}

[EditorialSearchResults](EditorialSearchResults)

### Example response {#searchEditorial-response}

{
  "next" : "next",
  "per_page" : 1,
  "data" : [ {
    "assets" : {
      "thumb_220" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "original" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "watermark_450" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "thumb_170" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "medium_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "small_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "watermark_1500" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      }
    },
    "keywords" : [ "keywords", "keywords" ],
    "aspect" : 0.80082819046101150206595775671303272247314453125,
    "caption" : "caption",
    "description" : "description",
    "categories" : [ {
      "name" : "name"
    }, {
      "name" : "name"
    } ],
    "id" : "id",
    "title" : "title",
    "byline" : "byline",
    "date_taken" : "2000-01-23"
  }, {
    "assets" : {
      "thumb_220" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "original" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "watermark_450" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "thumb_170" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      },
      "medium_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "small_jpg" : {
        "is_licensable" : true,
        "format" : "format",
        "width" : 5,
        "display_name" : "display_name",
        "dpi" : 6,
        "file_size" : 1,
        "height" : 5
      },
      "watermark_1500" : {
        "width" : 7,
        "url" : "url",
        "height" : 2
      }
    },
    "keywords" : [ "keywords", "keywords" ],
    "aspect" : 0.80082819046101150206595775671303272247314453125,
    "caption" : "caption",
    "description" : "description",
    "categories" : [ {
      "name" : "name"
    }, {
      "name" : "name"
    } ],
    "id" : "id",
    "title" : "title",
    "byline" : "byline",
    "date_taken" : "2000-01-23"
  } ],
  "total_count" : 5,
  "prev" : "prev",
  "page" : 6,
  "message" : "message",
  "search_id" : "search_id"
}

