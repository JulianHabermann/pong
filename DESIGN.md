# Design

## Implementation

### Purpose

I began this project trying to create a video game in HTML5 and then realized how difficult the process was. Eventually, I realized that the best method for game creation are JavaScript libraries that run in HTML5 such as BabylonJS. Another option was Phaser, which would have been used for a 2D game. But the process of actually implementing a game was difficult in this library. 

So, I made this process for developement. You have three levels of changes. The first level is the developement server which updates as the app.ts game file is changed. This allows for minute changes to various qualities. The second is the creation of the webpackage using webpack, which is then injected into an HTML file. This creates a static version that can be used in milestones. Finally, when the project is at a certain milestone, uploading it to github automatically creates the new heroku page which can be shared. 

Once I finished this groundwork for creating the game, I realized that my idea was already made (cs50pong meaning a 3d pong recreation in HTML5). So, I instead finetuned the boilerplate so that apps could be changed afterward. 

### npm and Webpack

This project relies heavily on npm (Node Package Manager) and Webpack in order to be implemented. npm allows the dependencies such as BabylonJS and Webpack to be installed so that the app file can be run afterwards. In order to create this, I had to make a package.json file that was properly specified and had scripts to run for Heroku. 

Next, I had to create a webpack.config.js which contains the bundle creator for the game and the developement server creation. The webpack already reads the source code and outputs an HTML to read. The BabylonJS tutorial helped immensely in this process, but there were multiple issues with versions and specifications. So, I had to specify specific file versions in order for the process to work smoothly. However, this ended up causing cacheing issues that may affect the implementation locally. 

Additionally, BabylonJS recommends using TypeScript for the game creation process. So, I had to create a configuration for it to run properly. 

### The game itself

I initially tried to create 3D Pong. However, the physics engine in Babylon JS is tricky to work with and took too much effort to make especially after I learned that the project had already been done. So, I instead included a model to show the engine. 

## Process

### Time

This final project took me roughly 30 hours to implement. While I do not have much code to show for it, most of my time was spent learning about NodeJS, Webpack, and BabylonJS. I had no prior experience coding before this course, so I had to read a lot of documentation. Additionally, I had difficulty with operating git and heroku to work, but it ended up well. 

### Challenges

My main challenge was error codes in the creation of the webpackages. This was my first time encountering problems that did not include user-end errors, but errors with the dependencies being used. This required a lot of googling and testing to correct, but my Heroku app works after the effort. 

Additionally, I had to use an Emergency Extension for this final project. I had severe concentration problems caused by mood and stress concerns surrounding COVID-19 which caused me to fall behind in all of my classes. While the extra amount of time helped immensely, I still do not feel that I was able to perform my best on this project. 