---
title: shutterstock-api.DownloadHistory
permalink: docs/DownloadHistory
toc: false
---



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio** | [**DownloadHistoryMediaDetails**](DownloadHistoryMediaDetails) |  | [optional] 
**download_time** | **Date** | Date the media was downloaded the first time, in the format YYYY-MM-DDThh:mm:ssZ | 
**id** | **String** | ID of the download | 
**image** | [**DownloadHistoryMediaDetails**](DownloadHistoryMediaDetails) |  | [optional] 
**is_downloadable** | **Boolean** | Specifies if the media is downloadable via its respective downloads endpoint | [optional] 
**license** | **String** | The name of the license of this download | 
**metadata** | **Object** | The metadata that was passed in the original licensing request | [optional] 
**subscription_id** | **String** | ID of the subscription used to perform this download | [optional] 
**user** | [**DownloadHistoryUserDetails**](DownloadHistoryUserDetails) |  | [optional] 
**video** | [**DownloadHistoryMediaDetails**](DownloadHistoryMediaDetails) |  | [optional] 


