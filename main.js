var AM = new AssetManager();
function arrAnimation(spritesArray, frameDuration, loop, scale){
	this.spritesArray = spritesArray;
	this.frameDuration = frameDuration;
	this.loop = loop;
	this.scale = scale;
	this.totalTime = frameDuration * spritesArray.length;
	this.elapsedTime = 0;
}

arrAnimation.prototype.drawFrame = function (tick, ctx, x, y) {
	this.elapsedTime += tick;
    if (this.isDone()) {
        if (this.loop) this.elapsedTime = 0;
    }
    var frame = this.currentFrame();
	var image = this.spritesArray[frame];
    ctx.drawImage(image, x, y, image.width*this.scale, image.height*this.scale);
}

arrAnimation.prototype.currentFrame = function () {
    return Math.floor(this.elapsedTime / this.frameDuration);
}

arrAnimation.prototype.isDone = function () {
    return (this.elapsedTime >= this.totalTime);
}

function Animation(spriteSheet, frameWidth, frameHeight, sheetWidth, frameDuration, frames, loop, scale) {
    this.spriteSheet = spriteSheet;
    this.frameWidth = frameWidth;
    this.frameDuration = frameDuration;
    this.frameHeight = frameHeight;
    this.sheetWidth = sheetWidth;
    this.frames = frames;
    this.totalTime = frameDuration * frames;
    this.elapsedTime = 0;
    this.loop = loop;
    this.scale = scale;
}

Animation.prototype.drawFrame = function (tick, ctx, x, y) {
    this.elapsedTime += tick;
    if (this.isDone()) {
        if (this.loop) this.elapsedTime = 0;
    }
    var frame = this.currentFrame();
    var xindex = 0;
    var yindex = 0;
    xindex = frame % this.sheetWidth;
    yindex = Math.floor(frame / this.sheetWidth);

    ctx.drawImage(this.spriteSheet,
                 xindex * this.frameWidth, yindex * this.frameHeight,  // source from sheet
                 this.frameWidth, this.frameHeight,
                 x, y,
                 this.frameWidth * this.scale,
                 this.frameHeight * this.scale);
}

Animation.prototype.currentFrame = function () {
    return Math.floor(this.elapsedTime / this.frameDuration);
}

Animation.prototype.isDone = function () {
    return (this.elapsedTime >= this.totalTime);
}

// no inheritance
function Background(game, spritesheet) {
    this.x = 0;
    this.y = 0;
    this.spritesheet = spritesheet;
    this.game = game;
    this.ctx = game.ctx;
};

Background.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
                   this.x, this.y, 800, 700);
};

Background.prototype.update = function () {
};



// inheritance 
function explosion(game, spritesheetArray) {
	this.animation = new arrAnimation(spritesheetArray, .02, true, 2);
    this.speed = 0;
    this.ctx = game.ctx;
    Entity.call(this, game, 720, 458);
}

explosion.prototype = new Entity();
explosion.prototype.constructor = explosion;

explosion.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (this.x > 800) this.x = -230;
    Entity.prototype.update.call(this);
}

explosion.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}



// inheritance 
function ninja(game, spritesheetArray) {
	this.animation = new arrAnimation(spritesheetArray, .01, true, .25);
    this.speed = 250;
    this.ctx = game.ctx;
    Entity.call(this, game, 0, 250);
}

ninja.prototype = new Entity();
ninja.prototype.constructor = ninja;

ninja.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (this.x > 800) this.x = -230;
    Entity.prototype.update.call(this);
}

ninja.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}


// inheritance 
function tninja(game, spritesheetArray) {
	this.animation = new arrAnimation(spritesheetArray, .1, true, .25);
    this.speed = 0;
    this.ctx = game.ctx;
    Entity.call(this, game, 0, 425);
}

tninja.prototype = new Entity();
tninja.prototype.constructor = tninja;

tninja.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (this.x > 800) this.x = -230;
    Entity.prototype.update.call(this);
}

tninja.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}

// inheritance 
function rocket(game, spritesheetArray) {
	this.animation = new arrAnimation(spritesheetArray, .005, true, 3);
    this.speed = 600;
    this.ctx = game.ctx;
    Entity.call(this, game, 0, 475);
}

rocket.prototype = new Entity();
rocket.prototype.constructor = rocket;

rocket.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (this.x > 650) this.x = 50;
    Entity.prototype.update.call(this);
}

rocket.prototype.draw = function () {
		this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
		Entity.prototype.draw.call(this);
}

AM.queueDownload("./img/explosion/expl_07_0000.png");
AM.queueDownload("./img/explosion/expl_07_0001.png");
AM.queueDownload("./img/explosion/expl_07_0002.png");
AM.queueDownload("./img/explosion/expl_07_0003.png");
AM.queueDownload("./img/explosion/expl_07_0004.png");
AM.queueDownload("./img/explosion/expl_07_0005.png");
AM.queueDownload("./img/explosion/expl_07_0006.png");
AM.queueDownload("./img/explosion/expl_07_0007.png");
AM.queueDownload("./img/explosion/expl_07_0008.png");
AM.queueDownload("./img/explosion/expl_07_0009.png");
AM.queueDownload("./img/explosion/expl_07_0010.png");
AM.queueDownload("./img/explosion/expl_07_0011.png");
AM.queueDownload("./img/explosion/expl_07_0012.png");
AM.queueDownload("./img/explosion/expl_07_0013.png");
AM.queueDownload("./img/explosion/expl_07_0014.png");
AM.queueDownload("./img/explosion/expl_07_0015.png");
AM.queueDownload("./img/explosion/expl_07_0016.png");
AM.queueDownload("./img/explosion/expl_07_0017.png");
AM.queueDownload("./img/explosion/expl_07_0018.png");
AM.queueDownload("./img/explosion/expl_07_0019.png");
AM.queueDownload("./img/explosion/expl_07_0020.png");
AM.queueDownload("./img/explosion/expl_07_0021.png");
AM.queueDownload("./img/explosion/expl_07_0022.png");
AM.queueDownload("./img/explosion/expl_07_0023.png");
AM.queueDownload("./img/explosion/expl_07_0024.png");
AM.queueDownload("./img/explosion/expl_07_0025.png");
AM.queueDownload("./img/explosion/expl_07_0026.png");
AM.queueDownload("./img/explosion/expl_07_0027.png");
AM.queueDownload("./img/explosion/expl_07_0028.png");
AM.queueDownload("./img/explosion/expl_07_0029.png");
AM.queueDownload("./img/explosion/expl_07_0030.png");
AM.queueDownload("./img/explosion/expl_07_0031.png");

AM.queueDownload("./img/ninja/Throw__000.png");
AM.queueDownload("./img/ninja/Throw__001.png");
AM.queueDownload("./img/ninja/Throw__002.png");
AM.queueDownload("./img/ninja/Throw__003.png");
AM.queueDownload("./img/ninja/Throw__004.png");
AM.queueDownload("./img/ninja/Throw__005.png");
AM.queueDownload("./img/ninja/Throw__006.png");
AM.queueDownload("./img/ninja/Throw__007.png");
AM.queueDownload("./img/ninja/Throw__008.png");
AM.queueDownload("./img/ninja/Throw__009.png");

AM.queueDownload("./img/rocket/rocket_1_0000.png");
AM.queueDownload("./img/rocket/rocket_1_0001.png");
AM.queueDownload("./img/rocket/rocket_1_0002.png");
AM.queueDownload("./img/rocket/rocket_1_0003.png");
AM.queueDownload("./img/rocket/rocket_1_0004.png");
AM.queueDownload("./img/rocket/rocket_1_0005.png");
AM.queueDownload("./img/rocket/rocket_1_0006.png");
AM.queueDownload("./img/rocket/rocket_1_0007.png");
AM.queueDownload("./img/rocket/rocket_1_0008.png");
AM.queueDownload("./img/rocket/rocket_1_0009.png");
AM.queueDownload("./img/rocket/rocket_1_0010.png");
AM.queueDownload("./img/rocket/rocket_1_0011.png");
AM.queueDownload("./img/rocket/rocket_1_0012.png");
AM.queueDownload("./img/rocket/rocket_1_0013.png");
AM.queueDownload("./img/rocket/rocket_1_0014.png");
AM.queueDownload("./img/rocket/rocket_1_0015.png");

AM.queueDownload("./img/ninja/Run__000.png");
AM.queueDownload("./img/ninja/Run__001.png");
AM.queueDownload("./img/ninja/Run__002.png");
AM.queueDownload("./img/ninja/Run__003.png");
AM.queueDownload("./img/ninja/Run__004.png");
AM.queueDownload("./img/ninja/Run__005.png");
AM.queueDownload("./img/ninja/Run__006.png");
AM.queueDownload("./img/ninja/Run__007.png");
AM.queueDownload("./img/ninja/Run__008.png");
AM.queueDownload("./img/ninja/Run__009.png");

AM.queueDownload("./img/background0.png");

AM.downloadAll(function () {
    var canvas = document.getElementById("gameWorld");
    var ctx = canvas.getContext("2d");
    var gameEngine = new GameEngine();
    gameEngine.init(ctx);
    gameEngine.start();
	var explosionArr = [];
	explosionArr.push(AM.getAsset("./img/explosion/expl_07_0000.png"));
	explosionArr.push(AM.getAsset("./img/explosion/expl_07_0001.png"));
	explosionArr.push(AM.getAsset("./img/explosion/expl_07_0002.png"));
	explosionArr.push(AM.getAsset("./img/explosion/expl_07_0003.png"));
	explosionArr.push(AM.getAsset("./img/explosion/expl_07_0004.png"));
	explosionArr.push(AM.getAsset("./img/explosion/expl_07_0005.png"));
	explosionArr.push(AM.getAsset("./img/explosion/expl_07_0006.png"));
	explosionArr.push(AM.getAsset("./img/explosion/expl_07_0007.png"));
	explosionArr.push(AM.getAsset("./img/explosion/expl_07_0008.png"));
	explosionArr.push(AM.getAsset("./img/explosion/expl_07_0009.png"));
	explosionArr.push(AM.getAsset("./img/explosion/expl_07_0010.png"));
	explosionArr.push(AM.getAsset("./img/explosion/expl_07_0011.png"));
	explosionArr.push(AM.getAsset("./img/explosion/expl_07_0012.png"));
	explosionArr.push(AM.getAsset("./img/explosion/expl_07_0013.png"));
	explosionArr.push(AM.getAsset("./img/explosion/expl_07_0014.png"));
	explosionArr.push(AM.getAsset("./img/explosion/expl_07_0015.png"));
	explosionArr.push(AM.getAsset("./img/explosion/expl_07_0016.png"));
	explosionArr.push(AM.getAsset("./img/explosion/expl_07_0017.png"));
	explosionArr.push(AM.getAsset("./img/explosion/expl_07_0018.png"));
	explosionArr.push(AM.getAsset("./img/explosion/expl_07_0019.png"));
	explosionArr.push(AM.getAsset("./img/explosion/expl_07_0020.png"));
	explosionArr.push(AM.getAsset("./img/explosion/expl_07_0021.png"));
	explosionArr.push(AM.getAsset("./img/explosion/expl_07_0022.png"));
	explosionArr.push(AM.getAsset("./img/explosion/expl_07_0023.png"));
	explosionArr.push(AM.getAsset("./img/explosion/expl_07_0024.png"));
	explosionArr.push(AM.getAsset("./img/explosion/expl_07_0025.png"));
	explosionArr.push(AM.getAsset("./img/explosion/expl_07_0026.png"));
	explosionArr.push(AM.getAsset("./img/explosion/expl_07_0027.png"));
	explosionArr.push(AM.getAsset("./img/explosion/expl_07_0028.png"));
	explosionArr.push(AM.getAsset("./img/explosion/expl_07_0029.png"));
	explosionArr.push(AM.getAsset("./img/explosion/expl_07_0030.png"));
	explosionArr.push(AM.getAsset("./img/explosion/expl_07_0031.png"));
	var tninjaArr = [];
	tninjaArr.push(AM.getAsset("./img/ninja/Throw__000.png"));
	tninjaArr.push(AM.getAsset("./img/ninja/Throw__001.png"));
	tninjaArr.push(AM.getAsset("./img/ninja/Throw__002.png"));
	tninjaArr.push(AM.getAsset("./img/ninja/Throw__003.png"));
	tninjaArr.push(AM.getAsset("./img/ninja/Throw__004.png"));
	tninjaArr.push(AM.getAsset("./img/ninja/Throw__005.png"));
	tninjaArr.push(AM.getAsset("./img/ninja/Throw__006.png"));
	tninjaArr.push(AM.getAsset("./img/ninja/Throw__007.png"));
	tninjaArr.push(AM.getAsset("./img/ninja/Throw__008.png"));
	tninjaArr.push(AM.getAsset("./img/ninja/Throw__009.png"));
	var rocketArr = [];
	rocketArr.push(AM.getAsset("./img/rocket/rocket_1_0000.png"));
	rocketArr.push(AM.getAsset("./img/rocket/rocket_1_0001.png"));
	rocketArr.push(AM.getAsset("./img/rocket/rocket_1_0002.png"));
	rocketArr.push(AM.getAsset("./img/rocket/rocket_1_0003.png"));
	rocketArr.push(AM.getAsset("./img/rocket/rocket_1_0004.png"));
	rocketArr.push(AM.getAsset("./img/rocket/rocket_1_0005.png"));
	rocketArr.push(AM.getAsset("./img/rocket/rocket_1_0006.png"));
	rocketArr.push(AM.getAsset("./img/rocket/rocket_1_0007.png"));
	rocketArr.push(AM.getAsset("./img/rocket/rocket_1_0008.png"));
	rocketArr.push(AM.getAsset("./img/rocket/rocket_1_0009.png"));
	rocketArr.push(AM.getAsset("./img/rocket/rocket_1_0010.png"));
	rocketArr.push(AM.getAsset("./img/rocket/rocket_1_0011.png"));
	rocketArr.push(AM.getAsset("./img/rocket/rocket_1_0012.png"));
	rocketArr.push(AM.getAsset("./img/rocket/rocket_1_0013.png"));
	rocketArr.push(AM.getAsset("./img/rocket/rocket_1_0014.png"));
	rocketArr.push(AM.getAsset("./img/rocket/rocket_1_0015.png"));
	var ninjaRun = [];
	ninjaRun.push(AM.getAsset("./img/ninja/Run__000.png"));
	ninjaRun.push(AM.getAsset("./img/ninja/Run__001.png"));
	ninjaRun.push(AM.getAsset("./img/ninja/Run__002.png"));
	ninjaRun.push(AM.getAsset("./img/ninja/Run__003.png"));
	ninjaRun.push(AM.getAsset("./img/ninja/Run__004.png"));
	ninjaRun.push(AM.getAsset("./img/ninja/Run__005.png"));
	ninjaRun.push(AM.getAsset("./img/ninja/Run__006.png"));
	ninjaRun.push(AM.getAsset("./img/ninja/Run__007.png"));
	ninjaRun.push(AM.getAsset("./img/ninja/Run__008.png"));
	ninjaRun.push(AM.getAsset("./img/ninja/Run__009.png"));
    gameEngine.addEntity(new Background(gameEngine, AM.getAsset("./img/background0.png")));
	gameEngine.addEntity(new ninja(gameEngine, ninjaRun));
	gameEngine.addEntity(new rocket(gameEngine, rocketArr));
	gameEngine.addEntity(new tninja(gameEngine, tninjaArr));
	gameEngine.addEntity(new explosion(gameEngine, explosionArr));

    console.log("All Done!");
});