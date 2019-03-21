module.exports = {
	'getCurrentUser': {
		'method': 'GET',
		'url_syntax': '/users/@me'
	},
	'getUser': {
		'method': 'GET',
		'url_syntax': '/users/$userId'
	},
	'modifyCurrentUser': {
		'method': 'PATCH',
		'url_syntax': '/users/@me',
		'send_json': true
	},
	'getCurrentUserGuilds': {
		'method': 'GET',
		'url_syntax': '/users/@me/guilds',
		'send_query': true
	},
	'leaveGuild': {
		'method': 'DELETE',
		'url_syntax': '/users/@me/guilds/$guildId'
	},
	'getUserDMs': {
		'method': 'GET',
		'url_syntax': '/users/@me/channels'
	},
	'createDM': {
		'method': 'POST',
		'url_syntax': '/users/@me/channels',
		'send_json': true
	},
	'createGroupDM': {
		'method': 'POST',
		'url_syntax': '/users/@me/channels',
		'send_json': true
	},
	'getUserConnections': {
		'method': 'GET',
		'url_syntax': '/users/@me/connections'
	}
}