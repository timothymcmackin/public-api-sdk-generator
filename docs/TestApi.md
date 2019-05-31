---
title: shutterstock-api.TestApi
permalink: docs/TestApi
---

All URIs are relative to `https://api.shutterstock.com`.

Method | HTTP request | Description
------------- | ------------- | -------------
[`echo`](#echo) | `GET /v2/test` | Echo text
[`validate`](#validate) | `GET /v2/test/validate` | Validate input


<a name="echo"></a>
# TestApi.echo
> `TestEcho TestApi.echo(queryParams)`

**Echo text**

### Example {#echo-example}

```javascript
const sstk = require('shutterstock-api');

const api = new sstk.TestApi();

const queryParams = { 
  'text': "ok" // String | Text to echo
};

api.echo(queryParams)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#echo-parameters}


Name | Type | Description
------------- | ------------- | -------------
 text | String| Text to echo, defaults to ok 

### Accepted authentication {#echo-auth}

No authentication required.

### HTTP request headers {#echo-headers}



- Accept: application/json

### Return type {#echo-return}

[TestEcho](TestEcho)

### Example response {#echo-response}

{
  "text" : "text"
}

<a name="validate"></a>
# TestApi.validate
> `TestValidate TestApi.validate(id, queryParams)`

**Validate input**

### Example {#validate-example}

```javascript
const sstk = require('shutterstock-api');

const api = new sstk.TestApi();

const id = 123; // Number | Integer ID

const queryParams = { 
  'tag': ["tag_example"], // [String] | List of tags
  'user_agent': "user_agent_example" // String | User agent
};

api.validate(id, queryParams)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#validate-parameters}


Name | Type | Description
------------- | ------------- | -------------
 id (required) | Number| Integer ID 
 tag | [[String]](String)| List of tags 
 user_agent | String| User agent 

### Accepted authentication {#validate-auth}

No authentication required.

### HTTP request headers {#validate-headers}



- Accept: application/json

### Return type {#validate-return}

[TestValidate](TestValidate)

### Example response {#validate-response}

{
  "query" : {
    "id" : 0,
    "tag" : [ "tag", "tag" ]
  },
  "header" : {
    "user-agent" : "user-agent"
  }
}

