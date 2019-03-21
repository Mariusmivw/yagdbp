module.exports = {
	'createGuild': {
		'method': 'POST',
		'url_syntax': '/guilds',
		'send_json': true
	},
	'getGuild': {
		'method': 'GET',
		'url_syntax': '/guilds/$guildId'
	},
	'modifyGuild': {
		'method': 'PATCH',
		'url_syntax': '/guilds/$guildId',
		'send_json': true
	},
	'deleteGuild': {
		'method': 'DELETE',
		'url_syntax': '/guilds/$guildId'
	},
	'getGuildChannels': {
		'method': 'GET',
		'url_syntax': '/guilds/$guildId/channels'
	},
	'createGuildChannel': {
		'method': 'POST',
		'url_syntax': '/guilds/$guildId/channels',
		'send_json': true
	},
	'modifyGuildChannelPositions': {
		'method': 'PATCH',
		'url_syntax': '/guilds/$guildId/channels',
		'send_json': true
	},
	'getGuildMember': {
		'method': 'GET',
		'url_syntax': '/guilds/$guildId/members/$userId'
	},
	'listGuildMembers': {
		'method': 'GET',
		'url_syntax': '/guilds/$guildId/members',
		'send_query': true
	},
	'addGuildMember': {
		'method': 'PUT',
		'url_syntax': '/guilds/$guildId/members/$userId',
		'send_json': true
	},
	'modifyGuildMember': {
		'method': 'PATCH',
		'url_syntax': '/guilds/$guildId/members/$userId',
		'send_json': true
	},
	'modifyCurrentUserNick': {
		'method': 'PATCH',
		'url_syntax': '/guilds/$guildId/members/@me/nick',
		'send_json': true
	},
	'addGuildMemberRole': {
		'method': 'PUT',
		'url_syntax': '/guilds/$guildId/members/$userId/roles/$roleId'
	},
	'removeGuildMemberRole': {
		'method': 'DELETE',
		'url_syntax': '/guilds/$guildId/members/$userId/roles/$roleId'
	},
	'removeGuildMember': {
		'method': 'DELETE',
		'url_syntax': '/guilds/$guildId/members/$userId'
	},
	'getGuildBans': {
		'method': 'GET',
		'url_syntax': '/guilds/$guildId/bans'
	},
	'getGuildBan': {
		'method': 'GET',
		'url_syntax': '/guilds/$guildId/bans/$userId'
	},
	'createGuildBan': {
		'method': 'PUT',
		'url_syntax': '/guilds/$guildId/bans/$userId',
		'send_query': true
	},
	'removeGuildBan': {
		'method': 'DELETE',
		'url_syntax': '/guilds/$guildId/bans/$userId'
	},
	'getGuildRoles': {
		'method': 'GET',
		'url_syntax': '/guilds/$guildId/roles'
	},
	'createGuildRole': {
		'method': 'POST',
		'url_syntax': '/guilds/$guildId/roles',
		'send_json': true
	},
	'modifyGuildRolePositions': {
		'method': 'PATCH',
		'url_syntax': '/guilds/$guildId/roles',
		'send_json': true
	},
	'modifyGuildRole': {
		'method': 'PATCH',
		'url_syntax': '/guilds/$guildId/roles/$roleId',
		'send_json': true
	},
	'deleteGuildRole': {
		'method': 'DELETE',
		'url_syntax': '/guilds/$guildId/roles/$roleId'
	},
	'getGuildPruneCount': {
		'method': 'GET',
		'url_syntax': '/guilds/$guildId/prune',
		'send_query': true
	},
	'beginGuildPrune': {
		'method': 'POST',
		'url_syntax': '/guilds/$guildId/prune',
		'send_query': true
	},
	'getGuildVoiceRegions': {
		'method': 'GET',
		'url_syntax': '/guilds/$guildId/regions'
	},
	'getGuildInvites': {
		'method': 'GET',
		'url_syntax': '/guilds/$guildId/invites'
	},
	'getGuildIntegrations': {
		'method': 'GET',
		'url_syntax': '/guilds/$guildId/integrations'
	},
	'createGuildIntegration': {
		'method': 'POST',
		'url_syntax': '/guilds/$guildId/integrations',
		'send_json': true
	},
	'modifyGuildIntegration': {
		'method': 'PATCH',
		'url_syntax': '/guilds/$guildId/integrations/$integrationId',
		'send_json': true
	},
	'deleteGuildIntegration': {
		'method': 'DELETE',
		'url_syntax': '/guilds/$guildId/integrations/$integrationId'
	},
	'syncGuildIntegration': {
		'method': 'POST',
		'url_syntax': '/guilds/$guildId/integrations/$integrationId/sync'
	},
	'getGuildEmbed': {
		'method': 'GET',
		'url_syntax': '/guilds/$guildId/embed'
	},
	'modifyGuildEmbed': {
		'method': 'PATCH',
		'url_syntax': '/guilds/$guildId/embed'
	},
	'getGuildVanityURL': {
		'method': 'GET',
		'url_syntax': '/guilds/$guildId/vanity-url'
	},
	'getGuildWidgetImage': {
		'method': 'GET',
		'url_syntax': '/guilds/$guildId/widgetPng',
		'send_query': true
	}
}