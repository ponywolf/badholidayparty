game.LoadingScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
      // title screen
      me.game.world.addChild(
        new me.Sprite (
          0,0,
          me.loader.getImage('loading')
        ),
        1
      );
    },

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        ; // TODO
    }
});
