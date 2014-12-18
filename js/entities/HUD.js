/**
* a HUD container and child items
*/

game.HUD = game.HUD || {};


game.HUD.Container = me.Container.extend({

    init: function() {
        // call the constructor
        this._super(me.Container, 'init');

        // persistent across level change
        this.isPersistent = true;

        // make sure we use screen coordinates
        this.floating = true;

        // make sure our object is always draw first
        this.z = Infinity;

        // give a name
        this.name = "HUD";

        // add our child score object at the right-top position
        this.addChild(new game.HUD.ScoreItem(10, 10));
        this.addChild(new game.HUD.DialogBox(2, 161));
    }
});

/**
* a basic HUD item to display score
*/
game.HUD.ScoreItem = me.Renderable.extend( {
    /**
    * constructor
    */
    init: function(x, y) {

        // call the parent constructor
        // (size does not matter here)
        this._super(me.Renderable, 'init', [x, y, 10, 10]);

        // create a font
        this.font = new me.BitmapFont("font",{x:16,y:16}, 1, 48);
        this.font.set("left");

        // local copy of the global score
        this.score = -1;

    },

    /**
    * update function
    */
    update : function (dt) {
        // we don't draw anything fancy here, so just
        // return true if the score has been updated
        if (this.score !== game.data.score) {
            this.score = game.data.score;
            return true;
        }
        return false;
    },

    /**
    * draw the score
    */
    draw : function (renderer) {
        this.font.draw (renderer, game.data.score || "0", this.pos.x, this.pos.y);
    }
});


/**
* a basic HUD item to display score
*/
game.HUD.DialogBox = me.Renderable.extend( {
    /**
    * constructor
    */
    init: function(x, y) {

        // call the parent constructor
        // (size does not matter here)
        this._super(me.Renderable, 'init', [x, y, 10, 10]);

        // create a font
        this.font = new me.BitmapFont("smallfont", {x:7,y:9});
        this.font.set("left");

        this.text = ""
        this.dialog = me.loader.getImage("dialog");

    },

    wordwrap: function (str, width, brk) {

        brk = brk || '\n';
        width = width || 45;

        if (!str) {
            return str;
        }
        var regex = '.{1,' + width + '}(\\s|$)' + (false ? '|.{' + width + '}|.+$' : '|\\S+?(\\s|$)');
        return str.match(RegExp(regex, 'g')).join(brk);

    },


    /**
    * update function
    */
    update : function (dt) {
        // we don't draw anything fancy here, so just
        // return true if the score has been updated

        this.text = game.data.text || "Welcome to Bad Company Holiday Office Party Super Fun Time Adaventure Quest!!!"
        if (game.data.dialog) {
            this.pos.y = 161;
        } else {
            this.pos.y = 240;
        }
        return this.isShown;
    },

    /**
    * draw the score
    */
    draw : function (renderer) {
        renderer.drawImage(this.dialog, this.pos.x, this.pos.y);
        this.font.draw (renderer, this.wordwrap(this.text.replace("+","\n")), this.pos.x +20, this.pos.y +16);
    }
});

var FacebookShare = me.GUI_Object.extend({
    init : function(x, y) {
        this.isPersistent = true;
        var settings = {};
        settings.image = "share";
        settings.spritewidth = 16;
        settings.spriteheight = 16;
        this._super(me.GUI_Object, 'init', [x, y, settings]);
        this.isClickable = true;
        this.isPersistent = true;
    },
    onClick : function(e) {
        console.log('Clicked!');
        var shareText = 'TEST';
        var url = 'http://badcompanyparty.com';

        FB.api('/', function(response){
            console.log(response);
        });

        // FB.ui(
        //     {
        //      method: 'feed',
        //      name: 'My Clumsy Bird Score!',
        //      caption: "Share to your friends",
        //      description: (
        //             shareText
        //      ),
        //      link: url,
        //      picture: 'http://ellisonleao.github.io/clumsy-bird/data/img/clumsy.png'
        //     }
        // );
        return false;
    }
});
