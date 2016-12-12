# Neo4j Pathfinder

> It uses allShortestPath algorithm to find the shortestPath in between rooms in a particular building. 
Here we have taken Golisano (RIT Computing and Information Sciences) block on 2nd Floor particulary. And for the sake of brevity taken less rooms into account than there are. We can always extend this though. Here, the nodes are structured into a particular path which can be followed to reach rooms. Each node contains coordinates (their x and y position scaled down according to original building floor plan) and is traversed using Dijkstra's Algorithms as these are connected by a distance. The total distance is minimized. The nodes may have 1 or more rooms connected to it. The rooms also have x and y coordinates.

The project is made using Node Js, Express Js, Jquery/Javascript/Ajax, HTML, CSS, Twitter Bootstrap and Neo4J.

## Installation Instructions

Below is the information regarding installation of the application

### Pre-requisites
- Neo4J Database
- Node Js along with Node Package Manager
- Database (Neo4j) (Zip). 

#### Installing Neo4J query interface driver 
- Unzip Neo4J database
- Start Neo4J instance and browse the unzipped database
- In the root directory inside the filename server.js on line number 5 put your neo4j username and password in the format and change it according to your conifgurations.
```sh
$ var db = new neo4j.GraphDatabase('http://databaseUsername:databasePassword@localhost:YOURPORTNUMBER');
```
- Goto root directory of the project and run this command
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
##### Author
Vipul Mehra https://www.linkedin.com/in/vipsm

##### Code-Reviews and Testing By
Rahul Vohra https://www.linkedin.com/in/rahulvohra01
