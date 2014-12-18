game.resources = [

    /* Graphics.
     * @example
     * {name: "example", type:"image", src: "data/img/example.png"},
     */
    // tiles
    {name: "people",        type:"image",    src: "data/img/people.png"},
    {name: "level",        type:"image",    src: "data/img/level.png"},
    {name: "items",        type:"image",    src: "data/img/items.png"},
    {name: "alley",        type:"image",    src: "data/img/alley.png"},
    {name: "office",        type:"image",    src: "data/img/office.png"},
    {name: "snow",        type:"image",    src: "data/img/snow.png"},
    {name: "background",        type:"image",    src: "data/img/background.png"},
    {name: "bar",        type:"image",    src: "data/img/bar.png"},

    // hero
    {name: "guy",        type:"image",    src: "data/img/character/guy.png"},

    // enemies
    {name: "rat",        type:"image",    src: "data/img/enemies/rat.png"},
    {name: "bat",        type:"image",    src: "data/img/enemies/bat.png"},
    {name: "email",        type:"image",    src: "data/img/enemies/email.png"},
    {name: "love",        type:"image",    src: "data/img/enemies/love.png"},
    {name: "boss",        type:"image",    src: "data/img/enemies/boss.png"},
    {name: "intern",        type:"image",    src: "data/img/enemies/intern.png"},
    {name: "accountant",        type:"image",    src: "data/img/enemies/accountant.png"},
    {name: "bouncer",        type:"image",    src: "data/img/enemies/bouncer.png"},
    {name: "santa",        type:"image",    src: "data/img/enemies/santa.png"},

    // stuff
    {name: "coin",        type:"image",    src: "data/img/coin.png"},

    // gui
    {name: "font",        type:"image",    src: "data/img/font.png"},
    {name: "smallfont",        type:"image",    src: "data/img/smallfont.png"},
    // {name: "share",        type:"image",    src: "data/img/share.png"},
    {name: "dialog",        type:"image",    src: "data/img/dialog.png"},
    {name: "title",        type:"image",    src: "data/img/title.png"},
    {name: "end",        type:"image",    src: "data/img/end.png"},    

    /* Maps.
     * @example
     * {name: "example01", type: "tmx", src: "data/map/example01.tmx"},
     * {name: "example01", type: "tmx", src: "data/map/example01.json"},
      */
    {name: "office1",            type: "tmx",    src: "data/map/office1.tmx"},
    {name: "office2",            type: "tmx",    src: "data/map/office2.tmx"},
    {name: "alley1",            type: "tmx",    src: "data/map/alley1.tmx"},
    {name: "alley2",            type: "tmx",    src: "data/map/alley2.tmx"},
    {name: "bar1",            type: "tmx",    src: "data/map/bar1.tmx"},
    {name: "bar2",            type: "tmx",    src: "data/map/bar2.tmx"},
    {name: "bar3",            type: "tmx",    src: "data/map/bar3.tmx"},
    //{name: "clouds1",            type: "tmx",    src: "data/map/clouds1.tmx"},
    {name: "snow",            type: "tsx",    src: "data/map/snow.tsx"},

    /* Background music.
     * @example
     * {name: "example_bgm", type: "audio", src: "data/bgm/" },
     */
    {name: "office",type: "audio",    src: "data/bgm/" },
    {name: "drunk",type: "audio",    src: "data/bgm/" },
    {name: "club",type: "audio",    src: "data/bgm/" },
    {name: "alley",type: "audio",    src: "data/bgm/" },
    //{name: "mario",type: "audio",    src: "data/bgm/" },

    /* Sound effects.
     * @example
     * {name: "example_sfx", type: "audio", src: "data/sfx/"}
     */
    {name: "cling", type: "audio", src: "data/sfx/"},
    {name: "die", type: "audio", src: "data/sfx/"},
    {name: "enemykill", type: "audio", src: "data/sfx/"},
    {name: "jump", type: "audio", src: "data/sfx/"},


    /* Atlases
     * @example
     * {name: "example_tps", type: "json", src: "data/img/example_tps.json"},
     */
    // texturePacker
    //{name: "texture",        type: "json",    src: "data/img/texture.json"},
    //{name: "texture",        type: "image",    src: "data/img/texture.png"}
    // ShoeBox
    //{name: "texture",        type: "json",    src: "data/gfx/shoebox.json"},
    //{name: "texture",        type:"image",    src: "data/gfx/shoebox.png"}

];
