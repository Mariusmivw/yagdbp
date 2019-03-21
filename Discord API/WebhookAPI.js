module.exports = {
	'createWebhook': {
		'method': 'POST',
		'url_syntax': '/channels/$channelId/webhooks',
		'send_json': true
	},
	'getChannelWebhooks': {
		'method': 'GET',
		'url_syntax': '/channels/$channelId/webhooks'
	},
	'getGuildWebhooks': {
		'method': 'GET',
		'url_syntax': '/guilds/$guildId/webhooks'
	},
	'getWebhook': {
		'method': 'GET',
		'url_syntax': '/webhooks/$webhookId'
	},
	'getWebhookwithToken': {
		'method': 'GET',
		'url_syntax': '/webhooks/$webhookId/$webhookToken'
	},
	'modifyWebhook': {
		'method': 'PATCH',
		'url_syntax': '/webhooks/$webhookId',
		'send_json': true
	},
	'modifyWebhookwithToken': {
		'method': 'PATCH',
		'url_syntax': '/webhooks/$webhookId/$webhookToken'
	},
	'deleteWebhook': {
		'method': 'DELETE',
		'url_syntax': '/webhooks/$webhookId'
	},
	'deleteWebhookwithToken': {
		'method': 'DELETE',
		'url_syntax': '/webhooks/$webhookId/$webhookToken'
	},
	'executeWebhook': {
		'method': 'POST',
		'url_syntax': '/webhooks/$webhookId/$webhookToken'
	},
	'executeSlackCompatibleWebhook': {
		'method': 'POST',
		'url_syntax': '/webhooks/$webhookId/$webhookToken/slack'
	},
	'executeGitHubCompatibleWebhook': {
		'method': 'POST',
		'url_syntax': '/webhooks/$webhookId/$webhookToken/github'
	}
}