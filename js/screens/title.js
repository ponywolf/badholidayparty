game.TitleScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent : function() {

        // title screen
        me.game.world.addChild(
            new me.Sprite (
                0,0,
                me.loader.getImage('title')
            ),
            1
        );

        // change to play state on press Enter or click/tap
        me.input.bindKey(me.input.KEY.SPACE, "enter", true);
        me.input.bindKey(me.input.KEY.ENTER, "enter", true);
        this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge) {
            if (action === "enter") {
                // play something on tap / enter
                // this will unlock audio on mobile devices
                me.state.change(me.state.PLAY);

                // if the user hasn't already removed the donation messaging,
                // remove it now
                donationOverlay.style.right = '-340px';
            }
        });
    },

  /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent : function() {
        me.input.unbindKey(me.input.KEY.SPACE);
        me.input.unbindKey(me.input.KEY.UP);
        me.event.unsubscribe(this.handler);
   }
});
