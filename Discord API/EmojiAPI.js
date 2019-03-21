module.exports = {
	'listGuildEmojis': {
		'method': 'GET',
		'url_syntax': '/guilds/$guildId/emojis'
	},
	'getGuildEmoji': {
		'method': 'GET',
		'url_syntax': '/guilds/$guildId/emojis/$emojiId'
	},
	'createGuildEmoji': {
		'method': 'POST',
		'url_syntax': '/guilds/$guildId/emojis',
		'send_json': true
	},
	'modifyGuildEmoji': {
		'method': 'PATCH',
		'url_syntax': '/guilds/$guildId/emojis/$emojiId',
		'send_json': true
	},
	'deleteGuildEmoji': {
		'method': 'DELETE',
		'url_syntax': '/guilds/$guildId/emojis/$emojiId'
	}
}