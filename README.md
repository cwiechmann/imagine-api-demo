# API-Management Lifecycle & DevOps Demo
This Demo-Material is used to cover the API-Lifecycle-Handling in combination with Stoplight for API-Design, API-Builder for Mock- and API-Implementation. This all is combined with Swagger-Promote to seamslessly deploy the API into the API-Manager.  
The Story is to simulate a brand new - API-First-Driven - Weather-API, that passes the following stages:
- Only having an API-Design, which is going through some iterations/evolutions  
- Secondly, a Mock-Service is created to be used by this API  
- Lastly the API is implemented by an API-Builder Microservice  

## Preparation:
1. Check-Out/Clone this project
2. Create a folder: apimanager-swagger-promote
3. Download & extract Swagger-Promote (https://github.com/Axway-API-Management-Plus/apimanager-swagger-promote) into folder apimanager-swagger-promote
4. Create a new Public Stoplight-Project
5. Load the initial API-Swagger-File into Stoplight project: 1-imagine-weather-api-1st-version.json

## Demo-Steps:

### Initial API-version - Starting the API-Lifecycle
In this step, we use the sample Swagger-File: 1-imagine-weather-api-1st-version.json to showcase and explain Stoplight. And we use Swagger-Promote to push this API into the API-Manager.  
Secondly we extend the existing API in Stoplight about a second method by importing 2-design-with-image-config.json into Stoplight.  

1. Open the initial API-Swagger-Version in Stoplight and explain Stoplight  
2. Deploy the very bare API-Version into the API-Management platform with minimal configuration (not explaing Swagger-Promote)  
``
scripts\run-swagger-import.bat -a "https://next-api.stoplight.io/files.export?projectId=19639&branch=version%2F1.0&path=weather.oas2.yml" -h api-env -u apiadmin -p changeme -c api-definition/1-design-only-config.json
``
3. API is deployed, with only 1 Method, explore it in API-Portal  
4. Re-Deploy the same 1-Method-API with an Images, some tags, etc.  
``
scripts\run-swagger-import.bat -a "https://next-api.stoplight.io/files.export?projectId=19639&branch=version%2F1.0&path=weather.oas2.yml" -h api-env -u apiadmin -p changeme -c api-definition/2-design-with-image-config.json
``
4. As the initial API-Version has only one useless method, we are now loading the 2nd version of the API-Swagger into Stoplight: 2-imagine-weather-api-2nd-version.json  
5. And re-deploy with the same configuration (incl. Image, Tags, etc.)  
``
scripts\run-swagger-import.bat -a "https://next-api.stoplight.io/files.export?projectId=19639&branch=version%2F1.0&path=weather.oas2.yml" -h api-env -u apiadmin -p changeme -c api-definition/2-design-with-image-config.json
``

### Mock-Up the Initial API
We now assume, that we got enough feedback on the Base-API-Design and it's time to implement a Mock-Service. We start to use API-Builder to implement a Mock-Service based on the Swagger-Definition we get from Stoplight. One key-point is the need to re-configure the API to point it to the created Mock-Service.  

1. Start the API-Builder project: weather-mock-service
2. Create a new API by importing the Swagger-Definition from Stoplight
3. Save & Mock - Explain one flow - Test the Mock in API-Builder
4. Changing the Swagger-File in Stoplight - Removing the "No-Mock" notice
5. Now switching the config file to include the Backend-Base-Path, Backend-Security, added the Mock-Tag  
``
scripts\run-swagger-import.bat -a "https://next-api.stoplight.io/files.export?projectId=19639&branch=version%2F1.0&path=weather.oas2.yml" -h api-env -u apiadmin -p changeme -c api-definition/3-mock-up-config.json
``
6. Re-Load the API in API-Portal, explain the changes and trigger a request, the Mock will return an answer  

### Implement the API using API-Builder
It's time to implement the API with API-Builder. Explain the concept of Connectorless and Extensibility of the API-Builder by importing the Swagger-Files (OpenWeather and IPData) into the Mock-API-Builder-Project, restart it and show the created connectors.

1. Copy the Swagger-Files: imagine-api-demo\api-builder\swagger-files\* into the Mock-API-Builder project
2. Restart the Mock-API-Builder project and show the created connectors
3. Now switching into the other API-Builder-Project and start it, which is exposed on port 8081
4. Explain, we did some work to implement a flow, using the Swagger-Connectors, used to Translate IP into location and Location into Weather.
5. Run the flow out of the API-Builder UI, show the result. All good
6. We decide to re-configure the API in API-Manager to use our Implementation-Service
7. It's time to Publish the API, incl. API-Key Front-End-Security. Re-Deploy the API with config: 4-complete-config.json  
``
scripts\run-swagger-import.bat -a "https://next-api.stoplight.io/files.export?projectId=19639&branch=version%2F1.0&path=weather.oas2.yml" -h api-env -u apiadmin -p changeme -c api-definition/4-complete-config.json
``
### Implement the API using API-Builder
As the final stage, after the API has been published and potentially used by Apps-, make clear, that even in that stage, the API can evolve by adding additional fields/methods to this API.  

1. Import the Swagger-File: 3-imagine-weather-api-final-version.json which has an additional method  
2. Deploy that API into the API-Manager (same configuration)  
``
scripts\run-swagger-import.bat -a "https://next-api.stoplight.io/files.export?projectId=19639&branch=version%2F1.0&path=weather.oas2.yml" -h api-env -u apiadmin -p changeme -c api-definition/4-complete-config.json
``
3. Reload the API in API-Portal to illustrate that existing Subscriptions stay and the API was deployed with Zero-Down-Time to consumers

## Finish
