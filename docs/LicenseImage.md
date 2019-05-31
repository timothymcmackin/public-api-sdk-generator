---
title: shutterstock-api.LicenseImage
permalink: docs/LicenseImage
toc: false
---



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_cookie** | [**Cookie**](Cookie) | Cookie object | [optional] 
**editorial_acknowledgement** | **Boolean** | Set to true to acknowledge the editorial agreement | [optional] 
**format** | **String** | Image format to download | [optional] 
**image_id** | **String** | Image ID | 
**metadata** | [**LicenseRequestMetadata**](LicenseRequestMetadata) |  | [optional] 
**price** | **Number** | For revenue-sharing transactions, the final cost to the end customer | [optional] 
**search_id** | **String** | ID of the search that led to this licensing transaction | [optional] 
**show_modal** | **Boolean** | (Deprecated) | [optional] 
**size** | **String** | Image size to download | [optional] 
**subscription_id** | **String** | ID of the subscription to use for the download. | [optional] 
**verification_code** | **String** | (Deprecated) | [optional] 


## Enum: FormatEnum {#FormatEnum}


* `jpg` (value: `"jpg"`)

* `eps` (value: `"eps"`)




## Enum: SizeEnum {#SizeEnum}


* `small` (value: `"small"`)

* `medium` (value: `"medium"`)

* `huge` (value: `"huge"`)

* `vector` (value: `"vector"`)




