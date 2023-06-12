GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
		var me=this;
        me.load.image('background',"sprites/fondo.PNG");
		me.load.spritesheet("cat","sprites/cat.png",191.5,114);
		me.load.spritesheet("megaman","sprites/astu.png",163.4,160);
        me.load.spritesheet("sonic","sprites/sonic.png",106,100);
		
    },
    create: function() {
		var me=this;
        me.game.add.sprite(0, 0, 'background');

		me.cat= me.game.add.sprite(0,30,"cat");
		me.cat.animations.add("right",[0,1,2,3,4],4,true);
		//me.niño.animations.add("left",[5,6,7,8,9,10],10,true);
		me.cat.animations.play("right");
		
		me.megaman=me.game.add.sprite(0,280,"megaman");
		me.megaman.animations.add("right",[0,1,2,3,4,5],5,true);
		//me.dinosaurio.animations.add("left",[15,14,13,12,11,10,9,8],10,true);
		me.game.cursores=me.input.keyboard.createCursorKeys();
		me.game.physics.startSystem(Phaser.Physics.ARCADE);
		me.megaman.animations.play("right");

        me.sonic=me.game.add.sprite(0,190,"sonic");
		me.sonic.animations.add("right",[0,1,2,3,4,5,6,7,8,9,10,11,12],12,true);
		//me.dinosaurio.animations.add("left",[15,14,13,12,11,10,9,8],10,true);
		me.game.cursores=me.input.keyboard.createCursorKeys();
		me.game.physics.startSystem(Phaser.Physics.ARCADE);
		me.sonic.animations.play("right");
    },
    update: function() {
		var me=this;
		me.cat.x+=2;
		me.megaman.x+=2;
        me.sonic.x+=2;
		if(me.cat.x>=me.game.world.width){
			me.cat.x=-100;
			}
		if(me.megaman.x>=me.game.world.width){
			me.megaman.x=-100;
			}
        if(me.sonic.x>=me.game.world.width){
                me.sonic.x=-100;
            }
        
    }
}

var game = new Phaser.Game(597, 453, Phaser.CANVAS);
    
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");