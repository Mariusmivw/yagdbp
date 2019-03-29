const https = require('https');
const Gateway = require('./Gateway');
const api = require('./Discord API');

let user;

class Bot extends Gateway {
	constructor(token) {
		super(token);
		this.token = token;
		this.api = {};
		for (const apiPart in api) {
			this.api[apiPart] = {};
			for (const key in api[apiPart]) {
				this.api[apiPart][key] = api[apiPart][key].bind(this);
			}
		}
		this.api.call = this.call;
		this.call('GET', '/users/@me', (data) => {
			user = JSON.parse(data);
		});
	}

	get user() {
		this.call('GET', '/users/@me', (data) => {
			user = JSON.parse(data);
		});
		return user;
	}

	/**
	 * @param {'DELETE'|'GET'|'PATCH'|'POST'|'PUT'} method whichever method to use to communicate with the discord API
	 * @param {string} url the (relative) API url
	 * @param {object} data the data to send to the discord API
	 * @param {(res:string)=>void} callback callback function
	 */
	call(method, url, data, callback) {
		return new Promise((resolve, reject) => {
			if (typeof data == 'function') {
				callback = data;
				data = undefined;
			}
			const req = https.request({
				'path': `/api${url}`,
				'host': 'discordapp.com',
				'method': method || 'GET',
				'headers': {
					'Authorization': `Bot ${this.token}`
				}
			}, (res) => {
				let response = '';
				res.setEncoding('utf8');
				res.on('data', (chunk) => {
					response += chunk;
				});
				res.on('error', (e) => {
					console.error(e);
					throw e;
				});
				res.on('end', () => {
					callback && callback(response);
					resolve(response);
				})
			});
			if (data) {
				let bound;
				let multipart;
				req.setHeader('Content-Type', data.file ? 'multipart/form-data; boundary=' + (bound = `${Math.random().toString().slice(2)}`) : 'application/json');
				if (data.file) {
					multipart = `--${bound}\r\nContent-Disposition: form-data; name="file"; filename="${data.file.name || data.file.filename || Math.random().toString(36).substring(7)}"\r\nContent-Transfer-Encoding: ${data.file.encoding || 'binary'}\r\n\r\n${data.file.contents || data.file.content || data.file}`;
					for (const field in data) {
						if (field != 'file' && field != 'embed') {
							multipart += `\r\n--${bound}\r\nContent-Disposition: form-data; name="${field}"\r\n\r\n${data[field]}`;
						}
					}
					multipart += `\r\n--${bound}--`;
				}
				req.setHeader('Content-Length', Buffer.byteLength(multipart || JSON.stringify(data)));
				req.write(multipart || JSON.stringify(data));
			}
			req.end();
		});
	}
}

module.exports = Bot;