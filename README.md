# geoloc

This app calculates the distance between locations.

## Setup

Install [Node][Node-Installation]

## Development

+ `make deps` will download dependencies
+ `make test` will run unit tests
+ `make run` will build and then execute the application

## Architecture

The app runs locally on port 8000.

### POST `/api/v0/locations`

Calculates the distance between locations

#### Payload:

```JSON
[
    {
        "name": "location0",
        "latitude": 29.951065,
        "longitude": -90.071533
    },
    {
        "name": "location1",
        "latitude": 49.159878,
        "longitude": 5.384423
    }
]
```

#### Response:

```JSON
[
    {
        "name": "location0",
        "closest": "location1"
    },
    {
        "name": "location1",
        "closest": "location0"
    }
]
```

[Node-Installation]: https://nodejs.org
