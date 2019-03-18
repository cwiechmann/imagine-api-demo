module.exports = {
	// The configuration settings for your Swagger service.
	pluginConfig: {
		'@axway/api-builder-plugin-fn-swagger': {
			'IPDataAPI': {
				// It is possible to override Swagger URI options when constructing
				// outbound requests from the Swagger plugin.
				uri: {
					protocol: 'https',
					host: 'api.ipdata.co',
					port: 443,
					basePath: ''
				}
			}
		}
	},
	// The following authorization credentials needed to use the Swagger service.
	// Please follow this guide to manually configure the credentials:
	// https://docs.axway.com/bundle/API_Builder_4x_allOS_en/page/api_builder_credentials.html
	authorization: {
		credentials: {
			'IPData.co API IPData API-Key': {
				type: 'apiKey',
				key: 'da5d26bead4d7327d33c421dde5afedcfe5e926d4f353a7caa582703'
			}
		}
	}
};
