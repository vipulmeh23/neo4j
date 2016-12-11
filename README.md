# Neo4j

> It uses allShortestPath algorithm to find the shortestPath in between rooms in a particular building. 
Here we have taken Golisano (RIT Computing and Information Sciences) block on 2nd Floor particulary. And for the sake of brevity taken less rooms into account than there are. We can always extend this though. Here, the nodes are structured into a particular path which can be followed to reach rooms. Each node contains coordinates (their x and y position) and is traversed using Dijkstra's Algorithms as these are connected by some distance. And the total distance is minimized. The nodes may have 1 or more rooms connected to it. The rooms also have x and y coordinates.

## Installation Instructions

Below is the information regarding installation of the application

### Pre-requisites
- Neo4J Database
- Node Js along with Node Package Manager
- Database (Neo4j)

#### Installing Neo4J query interface driver 

```sh
$ npm install --save neo4j
```

##### Just copy and unzip the whole database file and choose and browse database location at start in the splash screen
- Select and browse the database.

#### Installing Node Js
Depending on your operating system

```sh
https://nodejs.org/en/download/package-manager/
```

##### Installation on MAC via package manager

```sh
brew install node
```

##### Installation on Ubuntu via package manager

```sh
$ curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
$ sudo apt-get install -y nodejs

```

#### Running server and web-app
Once you are done with installation of Node Js and Mongo Db along with importing of files
- Make a directory
- Download the source code, and put it inside the directory
- In the directory root, there is server.js.
- Run server.js by going to the root of directory in the terminal and then:
```sh
$ node server
```
- Then simply point your browser to 
```sh
http://localhost:8000
```
