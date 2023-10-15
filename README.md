Dependencies: Node.js, Docker.

This squid indexes the events of VRF from decentralized oracle

this squid is deployed on aquarium: https://squid.subsquid.io/vrf-squid/v/v1/graphql

### indexed events

* RandomValueRequested
* RandomValueReceived

### Entities

the only entity is "*randomValues*"

a new entity is created by a *RandomValueRequested* event and is updated by *RandomValueReceived* event

when the random value has not been processed yet, the *randomValue*  and *receivedTimestamp* fields are *null*

### Queries

last 10 randomValues requested

```
query MyQuery {
  randomValues(orderBy: requestorTimestamp_DESC, limit: 10) {
    id
    max
    min
    nonce
    randomValue
    receivedTimestamp
    requestorId
    requestorTimestamp
  }
}
```

randomValue requested from account "XxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX" and with nonce "99"

```
query MyQuery {
  randomValues(orderBy: requestorTimestamp_DESC, limit: 10, where: {requestorId_eq: "XxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX", nonce_eq: "99"}) {
    id
    max
    min
    nonce
    randomValue
    receivedTimestamp
    requestorId
    requestorTimestamp
  }
}

```

# local install

```bash
# 1. Install dependencies
npm ci

# 2. Start a Postgres database container and detach
sqd up

# 3. Start the processor
sqd process

# 4. The command above will block the terminal
#    being busy with fetching the chain data, 
#    transforming and storing it in the target database.
#
#    To start the graphql server open the separate terminal
#    and run
sqd serve
```
