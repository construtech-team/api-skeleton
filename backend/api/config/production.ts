export default {
	root: 'src',
	server: {
		port: 3000,
		options: {
			cors: [
				{
					route: '/*',
					header: {
						'Access-Control-Allow-Origin': '*',
						'Access-Control-Allow-Headers':
							'Authorization, Content-Type, Origin, Accept, X-Requested-With, Origin, Cache-Control,X-File-Name',
						'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, OPTIONS, DELETE'
					}
				}
			]
		}
	},
	secrets: {
		admin: {
			secret: '8f27h93fojnqipwoefub9qgf301bi2uvy89f23',
			ignore: [ 'favicon.ico' ]
		},
		expires: '5 days'
	},
	database: {
		uri: `${process.env.DB_CONNECTION}`,
		options: {
			useNewUrlParser: true,
			useFindAndModify: false,
			useCreateIndex: true
		}
	}
};
