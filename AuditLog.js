class AuditLog {
	constructor(obj) {
		this.webhooks = obj.webhooks;
		this.users = obj.users;
		this.audit_log_entries = AuditLogEntry.fromArray(obj.audit_log_entries);
	}
}

class AuditLogEntry {
	constructor(obj) {
		for (const attr in obj) {
			this[attr] = obj[attr];
		}
	}

	static fromArray(arr) {
		const ret = [];
		for (const entry of arr) {
			ret.push(new AuditLogEntry(entry));
		}
		return ret;
	}
}

AuditLogEntry.prototype.EVENTS = {
	GUILD_UPDATE: 1,
	CHANNEL_CREATE: 10,
	CHANNEL_UPDATE: 11,
	CHANNEL_DELETE: 12,
	CHANNEL_OVERWRITE_CREATE: 13,
	CHANNEL_OVERWRITE_UPDATE: 14,
	CHANNEL_OVERWRITE_DELETE: 15,
	MEMBER_KICK: 20,
	MEMBER_PRUNE: 21,
	MEMBER_BAN_ADD: 22,
	MEMBER_BAN_REMOVE: 23,
	MEMBER_UPDATE: 24,
	MEMBER_ROLE_UPDATE: 25,
	ROLE_CREATE: 30,
	ROLE_UPDATE: 31,
	ROLE_DELETE: 32,
	INVITE_CREATE: 40,
	INVITE_UPDATE: 41,
	INVITE_DELETE: 42,
	WEBHOOK_CREATE: 50,
	WEBHOOK_UPDATE: 51,
	WEBHOOK_DELETE: 52,
	EMOJI_CREATE: 60,
	EMOJI_UPDATE: 61,
	EMOJI_DELETE: 62,
	MESSAGE_DELETE: 72
}

_exports = {
	AuditLog,
	AuditLogEntry
}

for (const key in _exports) {
	exports[key] = _exports[key];
}