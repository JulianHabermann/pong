# CS50 Pong

What was supposed to be a Recreation of 3D Pong ended up looking [not exactly like that](https://cs50pong.herokuapp.com/). While this may not be the fully-fledged game that I was planning, this project instead turned into a demo process for easily turning BabylonJS apps into websites given the death of Flash player. 

Video tutorial: 

## Processes 

### Installation

The only requirement for running this program is [Node.jS](https://nodejs.org/en/). 

In order to run the program, move your directory to the unzipped file.

Then install the dependencies for node using,

```
$ npm install
```

### Functionality

The purpose of this application is to create a game app using BabylonJS and then be able to edit and upload the game using your IDE. Already provided in the zip file is a sample game.ts in the /src folder. However, any game could be added instead in order to upload. 

In order to build the application, just run:
```
$ npm run webpack
```

From this, you can look at the html file directly by clicking in the public directory and then the html file. If you want to host the server locally on the static copy, run:

```
$ npm run http-start
```

If you instead want a development server for creation, 

```
$ npm run dev
```

### Heroku

The strongest point of this project is the ability to upload BabylonJS webpacks to Heroku. With the current configuration of package.json as a boilerplate, any game file can be uploaded Heroku using an express server. 

To do so, simply connect this folder boilerplate to github using the standard process and connect that to Heroku. The default NodeJS parser in Heroku will do the rest of the work!

### Issues

There may be issues in the developement server. This is a caching issue that I was not able to resolve and took me weeks trying to fix. I even recreated the project in a new GitHub with new code, and the problem still persisted. Regardless, the heroku app example should still work. 

I struggled a lot with this project in many ways, but I wanted to turn in the code to show the process. 

## Credit

### Programs

Much of the code in this project directly comes from documentation from:

[NodeJS](https://nodejs.org/docs/latest-v13.x/api/)

[BabylonJS](https://doc.babylonjs.com/)

[Particularly this guide from Babylon for game creation](https://doc.babylonjs.com/guidedLearning/createAGame)


### Actual 3D Pong Variants

The whole purpose of this project was inspired by the death of curveball, a free Flash game that has been popular for almost two decades. Here is a video is [unaware](https://www.youtube.com/watch?v=pgUtluRO9e0). 

However, I then realized that my purpose was a bit obsolete as the game was popular enough to inspire many html5 versions. Here are some:

[curve-ball.com's replacement game](https://www.curveball-game.com/)
[ponggame.org/3d-pong's replacement game](https://www.ponggame.org/3d-pong)

So, I decided to try and create a 3d rendered HTML5 game instead using BabylonJS. However, these were created as well. 
[Tantatorn-dev](https://github.com/Tantatorn-dev/3D-Pong)

While the project had the functionality I hoped to make, this version didn't have the ability to be hosted on a separate server. So, this BabylonJS uploader instead. 



