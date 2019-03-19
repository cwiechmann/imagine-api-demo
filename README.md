# imagine-api-demo
Axway Imagine Summit API-Leraning-Lab Demo-Material

Preparation:
1. Install & Setup Swagger-Promote (https://github.com/Axway-API-Management-Plus/apimanager-swagger-promote)
2. Check-Out this project
3. Load the initial API-Swagger-File into Stoplight project: 1-imagine-weather-api-1st-version.json

Demo-Steps:
1. Open the initial API-Swagger-Version in Stoplight and explain Stoplight
2. Deploy the very bare API-Version into the API-Management platform with minimal configuration  
``
C:\temp\apimanager-swagger-promote\scripts\run-swagger-import.bat -a "https://next-api.stoplight.io/files.export?projectId=19639&branch=version%2F1.0&path=weather.oas2.yml" -h api-env -u apiadmin -p changeme -c api-definition/1-design-only-config.json
``
3. API is deployed, with only 1 Method, explore it in the API-Portal
4. It looks pretty ugly, no image, no tags, etc. Now adding image, etc. via re-deploy with: 2-design-with-image-config.json  
``
C:\temp\apimanager-swagger-promote\scripts\run-swagger-import.bat -a "https://next-api.stoplight.io/files.export?projectId=19639&branch=version%2F1.0&path=weather.oas2.yml" -h api-env -u apiadmin -p changeme -c api-definition/2-design-with-image-config.json
``
4. As the initial API-Version has only one useless method, we are now loading the 2nd version of the API-Swagger into Stoplight: 2-imagine-weather-api-2nd-version.json  
5. And re-deploy with the same configuration  
``
C:\temp\apimanager-swagger-promote\scripts\run-swagger-import.bat -a "https://next-api.stoplight.io/files.export?projectId=19639&branch=version%2F1.0&path=weather.oas2.yml" -h api-env -u apiadmin -p changeme -c api-definition/2-design-with-image-config.json
``
6. Now assuming we have got enough feedback and it's time to mock-up the service, start the API-Builder project: weather-mock-service, import the Swagger-Definition from Stoplight, Save & Mock - Explain one flow
7. Now switching the config file and explain that we have changed the Backend-Base-Path, Backend-Security, added the Mock-Tag and change the Swagger-file to remove the "No mock" notice
``
C:\temp\apimanager-swagger-promote\scripts\run-swagger-import.bat -a "https://next-api.stoplight.io/files.export?projectId=19639&branch=version%2F1.0&path=weather.oas2.yml" -h api-env -u apiadmin -p changeme -c api-definition/3-mock-up-config.json
``
8. Re-Load the API in API-Portal, explain the changes and trigger a request, the Mock will return an answer
9. Now, it's time to Publish the API. Re-Deploy the API with config: 4-complete-config.json

``
C:\temp\apimanager-swagger-promote\scripts\run-swagger-import.bat -a "https://next-api.stoplight.io/files.export?projectId=19639&branch=version%2F1.0&path=weather.oas2.yml" -h api-env -u apiadmin -p changeme -c api-definition/4-complete-config.json
``
