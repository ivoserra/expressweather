# Full stack

## Create a simple frontend

- Use React if you want, but it's not necessary
- One text input asking for a city name, one button
- When you click the button, use fetch() to POST a request
- Send whatever the user has written to the input field in the body of the request
- When you get the result, display that somehow :)

## Create a simple backend

- One endpoint: POST /weather
- When a request comes, read the requested city from the request body
- Respond with the current weather in the requested city as a simple string
- Choose interesting information from the request & response
- Save the interesting information into a lowdb "database"
