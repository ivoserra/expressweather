# Hidden from the frontend; a proxy API

- Create a simple backend
- One endpoint: /weather 
    - this will respond with a string describing the current weather in Berlin
    - response should be very simple, for example a string like `It's 11 degrees in Berlin`
    - use axios to get the weather from https://openweathermap.org/api
 
- Research: What does "proxy" mean? How is this application a proxy? Add your answer directly into the README here :)


## an Api Proxy 

An API proxy is a thin application program interface (API) server that exposes an interface for an existing service or services. A "proxy" is something that acts as an agent or intermediary for something else. 

An API proxy is a software element that connects to back-end services, then creates a more modern and useful API to connect to the front end.

API proxies allow developers to define an API without having to change underlying services in the back end. This works by decoupling the front-end API from the back-end services, which is what shields the app from code changes on the back end. The benefit to an API proxy is that it is essentially a simple and lightweight API gateway.






- **Optional bonus** every time someone requests the weather, make a note of that writing a line into a log file; "Weather requested at 14:04"































🐻
