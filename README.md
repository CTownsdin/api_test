# Weather Underground API example

This is a teaching example for consuming APIs. This ExpressJS app acts as an API proxy
 to the [Weather Underground API](http://www.wunderground.com/weather/api/d/docs). It returns
 JSON to the client.

## Prerequisites
- A working NodeJS environment on your machine
- A Weather Underground API key. Get one [here](http://www.wunderground.com/weather/api/d/login.html)

## Install and Run
- Clone this repo
- `npm install`
- `node server`
- from your shell, `export WUNDERAPI=e6a3fx54579626e0` <- **replace with your key**

- visit /current/city , e.g. http://localhost:3000/current/Seattle

### Routes examples:
 Put any string after the trailing slash in /current/...

```
 /current/:city-name
 /current/:city-name,state
```

## Homework
- instead of returning all the JSON, return only the current temperature in F or C
- create a new route to show the forecast gif image. For example if the forecast is
 rain, an image of rain should be shown. Don't duplicate the request code

## LICENSE
[MIT](http://opensource.org/licenses/MIT)