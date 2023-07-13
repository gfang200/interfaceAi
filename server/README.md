# interfaceAi

Starting the server locally
sls offline start

Pinging hello world
http://localhost:3000/dev/hello

Generate the client
npm start -> npx @openapitools/openapi-generator-cli generate -i http://localhost:3000/api-json -g typescript-axios -o ./internal-client

Packaging the NPM library
cd client -> npm pack

link?

installing the NPM library
npm install ../internal-client/interface-ai-1.0.0.tgz

Running the app
npm run dev in app
