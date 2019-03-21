function functify(_api, resObj) {
	for (const key in _api) {
		if (_api.hasOwnProperty(key)) {
			const settings = _api[key];
			const url = settings.url_syntax.replace(/(?:(\$\d.*?)|(?:\$)([^\d].+?))(?=\/|$)/g, '${$1$2}');
			const params = settings.url_syntax.match(/(?:(\$\d.*?)|(?<=\$)[^\d].*?)(?=\/|$)/g) || [];
			settings.send_query && params.push('queryString');
			settings.send_json && params.push('data');
			params.push('callback');
			let tabs;
			const f = new Function(params, `
			return new Promise((resolve) => {
				this.call('${settings.method}', \`${url}${settings.send_query ? '?${queryString.replace(/^\?/, \'\')}':''}\`, ${settings.send_json ? 'data, ':''}(res) => {
					res = res && JSON.parse(res);
					const data = res && new Proxy(res, {
						set: () => {
							throw new Error('Cannot set read-only property');
						}
					});
					callback && callback(data);
					resolve(data);
				});
			});`).toString().replace(/(?<=^function )anonymous(?=\()/, key).replace(/(?<=^[^\)]*),/g, ', ').replace(/(?<=^[^\)]*)\n.*(?=\))/, '')
				.replace(/\n\n\t(\t*)/, (_, _tabs) => {
					tabs = _tabs.length;
					return '\n\t' + '\t'.repeat(tabs);
				}).replace(new RegExp(`\n\t{${tabs}}`, 'gm'), '\n');
			resObj[key] = new Function('return ' + f)();
		}
	}
	return resObj;
}

const api = {
	auditLog: {},
	channel: {},
	emoji: {},
	guild: {},
	invite: {},
	user: {},
	voice: {},
	webhook: {},
};

functify(require('./Discord API/AuditLogAPI'), api.auditLog);
functify(require('./Discord API/ChannelAPI'), api.channel);
functify(require('./Discord API/EmojiAPI'), api.emoji);
functify(require('./Discord API/GuildAPI'), api.guild);
functify(require('./Discord API/InviteAPI'), api.invite);
functify(require('./Discord API/UserAPI'), api.user);
functify(require('./Discord API/VoiceAPI'), api.voice);
functify(require('./Discord API/WebhookAPI'), api.webhook);

module.exports = api;