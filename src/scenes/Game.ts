import { Scene } from 'phaser';
import { Player } from '../classes/Player';

export class Game extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    msg_text : Phaser.GameObjects.Text;

    player: Player;

    constructor ()
    {
        super('Game');
    }

    create ()
    {

    }
}
