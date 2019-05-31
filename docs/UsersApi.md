---
title: shutterstock-api.UsersApi
permalink: docs/UsersApi
---

All URIs are relative to `https://api.shutterstock.com`.

Method | HTTP request | Description
------------- | ------------- | -------------
[`createUser`](#createUser) | `POST /v2/user` | Register user
[`getAccessToken`](#getAccessToken) | `GET /v2/user/access_token` | Get access token details
[`getUser`](#getUser) | `GET /v2/user` | Get user details
[`getUserSubsciptionList`](#getUserSubsciptionList) | `GET /v2/user/subscriptions` | List user subscriptions


<a name="createUser"></a>
# UsersApi.createUser
> `UserPostResponse UsersApi.createUser(body)`

**Register user**

### Example {#createUser-example}

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.UsersApi();

const body = new ShutterstockApiReference.UserPostRequest(); // UserPostRequest | User details


api.createUser(body)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#createUser-parameters}


Name | Type | Description
------------- | ------------- | -------------
 body (required) | [UserPostRequest](UserPostRequest)| User details 

### Accepted authentication {#createUser-auth}


- OAuth (No scope required.)

### HTTP request headers {#createUser-headers}


- Content-Type: application/json
- Accept: application/json

### Return type {#createUser-return}

[UserPostResponse](UserPostResponse)

### Example response {#createUser-response}

{
  "id" : "id"
}

<a name="getAccessToken"></a>
# UsersApi.getAccessToken
> `AccessTokenDetails UsersApi.getAccessToken()`

**Get access token details**

### Example {#getAccessToken-example}

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.UsersApi();
api.getAccessToken()
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#getAccessToken-parameters}

This endpoint does not accept any parameters.

### Accepted authentication {#getAccessToken-auth}


- OAuth (No scope required.)

### HTTP request headers {#getAccessToken-headers}



- Accept: application/json

### Return type {#getAccessToken-return}

[AccessTokenDetails](AccessTokenDetails)

### Example response {#getAccessToken-response}

{
  "user_id" : "user_id",
  "organization_id" : "organization_id",
  "realm" : "customer",
  "scopes" : [ "scopes", "scopes" ],
  "customer_id" : "customer_id",
  "expires_in" : 0,
  "client_id" : "client_id",
  "contributor_id" : "contributor_id",
  "username" : "username"
}

<a name="getUser"></a>
# UsersApi.getUser
> `UserDetails UsersApi.getUser()`

**Get user details**

### Example {#getUser-example}

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.UsersApi();
api.getUser()
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#getUser-parameters}

This endpoint does not accept any parameters.

### Accepted authentication {#getUser-auth}


- OAuth Required scopes:
  - user.view


### HTTP request headers {#getUser-headers}



- Accept: application/json

### Return type {#getUser-return}

[UserDetails](UserDetails)

### Example response {#getUser-response}

{
  "only_enhanced_license" : true,
  "is_premier_parent" : true,
  "is_premier" : true,
  "last_name" : "last_name",
  "premier_permissions" : [ "premier_permissions", "premier_permissions" ],
  "language" : "language",
  "only_sensitive_use" : true,
  "full_name" : "full_name",
  "organization_id" : "organization_id",
  "id" : "id",
  "customer_id" : "customer_id",
  "first_name" : "first_name",
  "email" : "email",
  "contributor_id" : "contributor_id",
  "username" : "username"
}

<a name="getUserSubsciptionList"></a>
# UsersApi.getUserSubsciptionList
> `SubscriptionDataList UsersApi.getUserSubsciptionList()`

**List user subscriptions**

### Example {#getUserSubsciptionList-example}

```javascript
const sstk = require('shutterstock-api');

// To use OAuth access token authorization:
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const api = new sstk.UsersApi();
api.getUserSubsciptionList()
  .then(({ data }) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```

### Parameters {#getUserSubsciptionList-parameters}

This endpoint does not accept any parameters.

### Accepted authentication {#getUserSubsciptionList-auth}


- OAuth Required scopes:
  - purchases.view


### HTTP request headers {#getUserSubsciptionList-headers}



- Accept: application/json

### Return type {#getUserSubsciptionList-return}

[SubscriptionDataList](SubscriptionDataList)

### Example response {#getUserSubsciptionList-response}

{
  "per_page" : 5,
  "data" : [ {
    "license" : "license",
    "metadata" : { },
    "formats" : [ {
      "size" : "size",
      "media_type" : "image",
      "format" : "format",
      "min_resolution" : 1,
      "description" : "description"
    }, {
      "size" : "size",
      "media_type" : "image",
      "format" : "format",
      "min_resolution" : 1,
      "description" : "description"
    } ],
    "expiration_time" : "2000-01-23T04:56:07.000+00:00",
    "allotment" : {
      "start_time" : "2000-01-23T04:56:07.000+00:00",
      "downloads_left" : 0,
      "downloads_limit" : 6,
      "end_time" : "2000-01-23T04:56:07.000+00:00"
    },
    "description" : "description",
    "id" : "id",
    "price_per_download" : {
      "local_amount" : 6.02745618307040320615897144307382404804229736328125,
      "local_currency" : "local_currency"
    }
  }, {
    "license" : "license",
    "metadata" : { },
    "formats" : [ {
      "size" : "size",
      "media_type" : "image",
      "format" : "format",
      "min_resolution" : 1,
      "description" : "description"
    }, {
      "size" : "size",
      "media_type" : "image",
      "format" : "format",
      "min_resolution" : 1,
      "description" : "description"
    } ],
    "expiration_time" : "2000-01-23T04:56:07.000+00:00",
    "allotment" : {
      "start_time" : "2000-01-23T04:56:07.000+00:00",
      "downloads_left" : 0,
      "downloads_limit" : 6,
      "end_time" : "2000-01-23T04:56:07.000+00:00"
    },
    "description" : "description",
    "id" : "id",
    "price_per_download" : {
      "local_amount" : 6.02745618307040320615897144307382404804229736328125,
      "local_currency" : "local_currency"
    }
  } ],
  "total_count" : 2,
  "page" : 5,
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

