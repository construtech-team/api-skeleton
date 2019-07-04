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
			secret: 'ASP09tcm,YTg#[#Y3d1b1346!',
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
