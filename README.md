# hoze
Production steps:

1. docker-compose up 

Option 2:

1. docker build -t esolar2-0

2. docker run -p 3000:3000 -d esolar2-0

Mandatory:

Use the port number present in the vite.config file.

If you need change the port number in the vite.config file, you can do it manually in the line 10 "port".

Local steps run:

If you dont have node_modules dependences installed:

1. npm i

2. npm run dev

If you have node_modules dependences installed:

1. npm run dev