import { Scene } from 'phaser';

export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        this.load.image('ship', 'assets/ship.png');
    }

    create ()
    {
        this.scene.start('Preloader');
    }
}
