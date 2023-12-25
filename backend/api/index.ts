import express from 'express';
import * as config from '../config.js';
import cors from 'cors';
import { IAppData, IFileObject } from '../../src/interfaces.js';
import { getFileNamesInDirectory } from '../backendTools.js';

const app = express();
app.use(cors());

app.get('/', (_req, res) => {
	res.status(200).json({ 'message': 'api works' });
});

app.get('/appdata', (_req, res) => {

	const pathAndFileNames = getFileNamesInDirectory('src/data');
	const fileObjects = [] as IFileObject[];
	for (const pathAndFileName of pathAndFileNames) {
		fileObjects.push({
			pathAndFileName,
			content: 'nnn'
		})
	}

	const appData: IAppData = {
		appIdCode: config.appIdCode(),
		frontendPort: config.frontendPort(),
		backendPort: config.backendPort(),
		fileObjects
	}
	res.status(200).json(appData);
});

app.listen(config.backendPort(), () => {
	console.log(`---
APP: ${config.appIdCode()}
FRONTEND URL: http://localhost:${config.frontendPort()}
BACKEND URL: http://localhost:${config.backendPort()}
`);
});