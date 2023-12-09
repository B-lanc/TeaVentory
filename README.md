# TeaVentory
Full stack inventory system for my sister's tea thing

Frontend: Vue (router), TypeScript, Node
Backend: Pocketbase
Everything dockerized

~~hopefully this didn't go like the previous one~~


Need .env image in base directory for production build
DOMAIN_NAME=somedomainname

Build production image:
> docker compose up


Dev script: (run everything locally etc)
> docker compose -f compose-dev.yaml up
