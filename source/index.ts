import { applicationPort, databaseUri, emailPassword } from './secrets.js';
import { startApplication } from 'wick-apps-backend';

startApplication({
	launchMode: `development`,
	name: `Wick App Template`,
	database: { uri: databaseUri },
	port: applicationPort,
	routers: [],
	email: {
		host: `smtp.gmail.com`,
		port: 465,
		fromAddress: `nathanwick2001@gmail.com`,
		password: emailPassword,
	},
});
