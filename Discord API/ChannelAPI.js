module.exports = {
	'getChannel': {
		'method': 'GET',
		'url_syntax': '/channels/$channelId'
	},
	'modifyChannel': {
		'method': 'PUT/PATCH',
		'url_syntax': '/channels/$channelId',
		'send_json': true
	},
	'deleteCloseChannel': {
		'method': 'DELETE',
		'url_syntax': '/channels/$channelId'
	},
	'getChannelMessages': {
		'method': 'GET',
		'url_syntax': '/channels/$channelId/messages',
		'send_query': true
	},
	'getChannelMessage': {
		'method': 'GET',
		'url_syntax': '/channels/$channelId/messages/$messageId'
	},
	'createMessage': {
		'method': 'POST',
		'url_syntax': '/channels/$channelId/messages',
		'send_json': true
	},
	'createReaction': {
		'method': 'PUT',
		'url_syntax': '/channels/$channelId/messages/$messageId/reactions/$emoji/@me'
	},
	'deleteOwnReaction': {
		'method': 'DELETE',
		'url_syntax': '/channels/$channelId/messages/$messageId/reactions/$emoji/@me'
	},
	'deleteUserReaction': {
		'method': 'DELETE',
		'url_syntax': '/channels/$channelId/messages/$messageId/reactions/$emoji/$userId'
	},
	'getReactions': {
		'method': 'GET',
		'url_syntax': '/channels/$channelId/messages/$messageId/reactions/$emoji',
		'send_query': true
	},
	'deleteAllReactions': {
		'method': 'DELETE',
		'url_syntax': '/channels/$channelId/messages/$messageId/reactions'
	},
	'editMessage': {
		'method': 'PATCH',
		'url_syntax': '/channels/$channelId/messages/$messageId',
		'send_json': true
	},
	'deleteMessage': {
		'method': 'DELETE',
		'url_syntax': '/channels/$channelId/messages/$messageId'
	},
	'bulkDeleteMessages': {
		'method': 'POST',
		'url_syntax': '/channels/$channelId/messages/bulk-delete',
		'send_json': true
	},
	'bulkDeleteMessagesdeprecated': {
		'method': 'POST',
		'url_syntax': '/channels/$channelId/messages/bulk_delete'
	},
	'editChannelPermissions': {
		'method': 'PUT',
		'url_syntax': '/channels/$channelId/permissions/$overwriteId',
		'send_json': true
	},
	'getChannelInvites': {
		'method': 'GET',
		'url_syntax': '/channels/$channelId/invites'
	},
	'createChannelInvite': {
		'method': 'POST',
		'url_syntax': '/channels/$channelId/invites',
		'send_json': true
	},
	'deleteChannelPermission': {
		'method': 'DELETE',
		'url_syntax': '/channels/$channelId/permissions/$overwriteId'
	},
	'triggerTypingIndicator': {
		'method': 'POST',
		'url_syntax': '/channels/$channelId/typing'
	},
	'getPinnedMessages': {
		'method': 'GET',
		'url_syntax': '/channels/$channelId/pins'
	},
	'addPinnedChannelMessage': {
		'method': 'PUT',
		'url_syntax': '/channels/$channelId/pins/$messageId'
	},
	'deletePinnedChannelMessage': {
		'method': 'DELETE',
		'url_syntax': '/channels/$channelId/pins/$messageId'
	},
	'groupDMAddRecipient': {
		'method': 'PUT',
		'url_syntax': '/channels/$channelId/recipients/$userId',
		'send_json': true
	},
	'groupDMRemoveRecipient': {
		'method': 'DELETE',
		'url_syntax': '/channels/$channelId/recipients/$userId'
	}
}