### goofly

### Requirements

- Read from json files,
- show the list, sort by date, sort by destination, sort by departure

### Data Model

- user data

```
[
  carrier:  {
        id:
        name:
        username:
        password:
        destination:
        departure:
        departure_time:
        arriving_time:
        cost:
        contacts:{
            phone:
            email:
            chat:
        }
    },
  client: {
        id:
        name:
        username:
        password:
        location:
  }
]
```

- package

```
[
    {
        client_id: require
        carrier_id:
        document:
        weight:
        destination:
        departure:
        status: onway, notaken, shipped
    }
]
```

-
