game.PlayScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
      // load a level
        me.levelDirector.loadLevel("office1");

        // reset the score
        game.data.score = 0;
        game.data.music = game.data.music || "office";

        // add our HUD to the game world
        this.HUD = new game.HUD.Container();
        me.game.world.addChild(this.HUD);

        // add the Facebook share to the game world
        // this.SHARE = new FacebookShare(318, 10);
        // me.game.world.addChild(this.SHARE);

        // play some music
        me.audio.playTrack(game.data.music);
    },

    /**
     *  action to perform on state change
     */
    onDestroyEvent: function() {

        // remove the HUD from the game world
        me.game.world.removeChild(this.HUD);

        // me.game.world.removeChild(this.SHARE);

        // stop some music
        me.audio.stopTrack(game.data.music);
    }
});
