# imagine-api-demo
Axway Imagine Summit API-Leraning-Lab Demo-Material

Preparation:
1. Load the initial API-Swagger-File into Stoplight project: 1-imagine-weather-api-1st-version.json

Demo-Steps:

1. Show the initial API-Version in Stoplight
2. Deploy the very bare API-Version into the API-Management platform with minimal configuration

C:\temp\apimanager-swagger-promote\scripts\run-swagger-import.bat -a "https://next-api.stoplight.io/files.export?projectId=19639&branch=version%2F1.0&path=weather.oas2.yml" -h api-env -u apiadmin -p changeme -c api-definition/1-design-only-config.json

3. API is deployed, explore it in the API-Portal
4. It looks pretty ugly, no image, no tags, etc. - re-deploy with: 2-design-with-image-config.json

C:\temp\apimanager-swagger-promote\scripts\run-swagger-import.bat -a "https://next-api.stoplight.io/files.export?projectId=19639&branch=version%2F1.0&path=weather.oas2.yml" -h api-env -u apiadmin -p changeme -c api-definition/2-design-with-image-config.json

4. Load the 2nd version of the API-Swagger into Stoplight: 2-imagine-weather-api-2nd-version.json