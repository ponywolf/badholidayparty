/**
 * main
 */

var game = {

    /**
     * object where to store game global data
     */
    data : {
        // score
        score : 0,
        muted : 0,
    },

    /**
     *
     * Initialize the application
     */
    onload: function() {

        // init the video
        if (!me.video.init('screen', me.video.CANVAS, 360, 240, true, 'auto')) {
            alert("Sorry but your browser does not support HTML 5 canvas. We suggest Google Chrome.");
            return;
        }

        // add "#debug" to the URL to enable the debug Panel
        if (document.location.hash === "#debug") {
            window.onReady(function () {
                me.plugin.register.defer(this, me.debug.Panel, "debug", me.input.KEY.V);
            });
        }

        // initialize the "sound engine"
        me.audio.init("mp3, ogg");

        // preload loading image
        me.loader.load({name: "loading",  type:"image",  src: "data/img/loading.png"},
        this.preloaded.bind(this));

        // define the donation overlay element globally
        donationOverlay = document.getElementById('donation-overlay');
        donationOverlayDismiss = document.getElementById('dismiss');

    },

    /**
    * callback when the loading screen is pre-loaded
    */
    preloaded: function () {
        // set all ressources to be loaded
        me.loader.onload = this.loaded.bind(this);

        // set all ressources to be loaded
        me.loader.preload(game.resources);

        // load everything & display a loading screen
        me.state.set(me.state.LOADING, new game.LoadingScreen());

        //me.state.transition("fade","#000", 333);

        me.state.change(me.state.LOADING);

    },

    /**
     * callback when everything is loaded
     */
    loaded: function () {

        me.state.set(me.state.TITLE, new game.TitleScreen());

        // set the "Play/Ingame" Screen Object
        me.state.set(me.state.PLAY, new game.PlayScreen());

        // set the "GameOver" Screen Object
        me.state.set(me.state.GAMEOVER, new game.GameOverScreen());

        // set the fade transition effect
        me.state.transition("fade","#000", 333);

        // register our objects entity in the object pool
        me.pool.register("mainPlayer", game.PlayerEntity);
        me.pool.register("WalkEntity", game.WalkEnemyEntity);
        me.pool.register("FlyEntity", game.FlyEnemyEntity);
        me.pool.register("CoinEntity", game.CoinEntity);
        me.pool.register("DialogEntity", game.DialogEntity);
        me.pool.register("BossEntity", game.BossEntity);
        me.pool.register("MusicEntity", game.MusicEntity);
        me.pool.register("GameOverEntity", game.GameOverEntity);

        // add some keyboard shortcuts
        me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge) {

            // change global volume setting
            if (keyCode === me.input.KEY.PLUS) {
                // increase volume
                me.audio.setVolume(me.audio.getVolume()+0.1);
            } else if (keyCode === me.input.KEY.MINUS) {
                // decrease volume
                me.audio.setVolume(me.audio.getVolume()-0.1);
            } else if (keyCode === me.input.KEY.M) {
                // mute volume
                game.data.muted = !game.data.muted;
                if (game.data.muted){
                  me.audio.disable();
                } else {
                  me.audio.enable();
                }
          }

            // toggle fullscreen on/off
            if (keyCode === me.input.KEY.F) {
                if (!me.device.isFullscreen) {
                    me.device.requestFullscreen();
                } else {
                    me.device.exitFullscreen();
                }
            }
        });

        // Disable Sound and go straight to play for testing
        //game.data.muted = false;
        //me.audio.disable();
        //me.state.change(me.state.PLAY);

        // switch to TITLE state
        me.state.change(me.state.TITLE);

        // Add the donation messaging
        setTimeout(function(){
            donationOverlay.style.right = '80px';
            donationOverlayDismiss.addEventListener('click', function(e){
                donationOverlay.style.right = '-340px';
                e.preventDefault();
            });
        }, 1000);

    }
};
