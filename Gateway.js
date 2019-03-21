const WebSocket = require('ws');
const EventEmitter = require('events');

let recievedAck = true;



class Gateway extends EventEmitter {
	constructor(token) {
		super();
		const wss = new WebSocket('wss://gateway.discord.gg/?v=6&encoding=json');

		wss.on('message', (msg) => {
			msg = JSON.parse(msg);
			switch (this.OPCODES[msg.op]) {
				case 'Heartbeat ACK':
					recievedAck = true;
					// console.log('Heartbeat ACK');
					break;

				case 'Dispatch':
					// console.log(msg.t);
					this.emit(msg.t, msg.d);
					break;

				default:
					console.log('UNKNOWN');
					console.log(msg);
					break;

				case 'Hello': // called only once
					this.heartBeat = setInterval(() => {
						if (recievedAck) {
							recievedAck = false;
							wss.send(JSON.stringify({
								op: this.OPCODES['Heartbeat'],
								d: null
							}));
						} else {
							wss.close();
							clearInterval(this.heartBeat);
						}
					}, msg.d.heartbeat_interval);

					wss.send(JSON.stringify({
						op: this.OPCODES['Identify'],
						d: {
							token: token,
							properties: {
								$os: 'linux',
								$browser: 'none',
								$device: 'node'
							}
						}
					}));
					break;
			}
		});
	}
}

Gateway.prototype.OPCODES = {
	0: 'Dispatch',
	'Dispatch': 0,
	1: 'Heartbeat',
	'Heartbeat': 1,
	2: 'Identify',
	'Identify': 2,
	3: 'Status Update',
	'Status Update': 3,
	4: 'Voice State Update',
	'Voice State Update': 4,
	6: 'Resume',
	'Resume': 6,
	7: 'Reconnect',
	'Reconnect': 7,
	8: 'Request Guild Members',
	'Request Guild Members': 8,
	9: 'Invalid Session',
	'Invalid Session': 9,
	10: 'Hello',
	'Hello': 10,
	11: 'Heartbeat ACK',
	'Heartbeat ACK': 11
}

Gateway.prototype.ERRORCODES = {
	4000: {
		desc: 'unknown error',
		expl: 'We\'re not sure what went wrong. Try reconnecting?'
	},
	4001: {
		desc: 'unknown opcode',
		expl: 'You sent an invalid Gateway opcode or an invalid payload for an opcode. Don\'t do that!'
	},
	4002: {
		desc: 'decode error',
		expl: 'You sent an invalid payload to us.Don\'t do that!'
	},
	4003: {
		desc: 'not authenticated',
		expl: 'You sent us a payload prior to identifying.'
	},
	4004: {
		desc: 'authentication failed',
		expl: 'The account token sent with your identify payload is incorrect.'
	},
	4005: {
		desc: 'already authenticated',
		expl: 'You sent more than one identify payload. Don\'t do that!'
	},
	4007: {
		desc: 'invalid seq',
		expl: 'The sequence sent when resuming the session was invalid.Reconnect and start a new session.'
	},
	4008: {
		desc: 'rate limited',
		expl: 'Woah nelly! You\'re sending payloads to us too quickly. Slow it down!'
	},
	4009: {
		desc: 'session timeout',
		expl: 'Your session timed out.Reconnect and start a new one.'
	},
	4010: {
		desc: 'invalid shard',
		expl: 'You sent us an invalid shard when identifying.'
	},
	4011: {
		desc: 'sharding required',
		expl: 'The session would have handled too many guilds - you are required to shard your connection in order to connect.'
	}
}

module.exports = Gateway;