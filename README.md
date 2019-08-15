# Neo4j Pathfinder

>Path Finder is an application to find shortest path between a source room and a destination room in the B.Thomas Golisano college of computing and information sciences 2nd floor (IST department). Uses Dijkstra algorithm to find all shortest paths. Technology stack used is Neo4J graph database for the back-end and the front-end utilizes Node.js, Express.js, JQuery and HTML Canvas. A graph has been constructed as can be seen in the figure below, and the nodes in the graph are structured into a particular path which can be followed to reach rooms. Each node defines coordinates (their x and y position scaled down according to original building floor plan) and is traversed using Dijkstra's Algorithm. The nodes are connected by a distance which is calculated using the Manhattan distance formula. At the end shortest path is returned. The total distance is minimized. The nodes may have 1 or more rooms connected to it. The rooms also have x and y coordinates.

The project is made using Node Js, Express Js, Jquery/Javascript/Ajax, HTML, CSS, Twitter Bootstrap and Neo4J.

![alt text](https://github.com/vipulmeh23/neo4j/blob/master/Screen%20Shot%202016-12-08%20at%205.03.36%20AM.png)

## Installation Instructions

Below is the information regarding installation of the application

### Pre-requisites
- Neo4J Database
- Node Js along with Node Package Manager
- Database (Neo4j) (Zip). (not included here - available on request)

#### Installing Neo4J query interface driver 
- Unzip Neo4J database
- Start Neo4J instance and browse the unzipped database

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
