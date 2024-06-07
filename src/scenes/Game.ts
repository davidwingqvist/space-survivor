import { Scene } from 'phaser';
import { Player } from '../classes/Player';
import { Meteor, MeteorStatus } from '../classes/meteor';

export class Game extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    msg_text : Phaser.GameObjects.Text;

    scoreText: Phaser.GameObjects.Text;
    score: number;

    player: Player;

    meteors: Meteor[];

    constructor ()
    {
        super('Game');

        this.meteors = [];
        this.score = 0;
    }

    create ()
    {
        this.player = new Player(this);
        this.meteors.push(new Meteor(this));
        this.scoreText = this.add.text(500, 100, 'Score: 0');
    }

    update(time: number, delta: number): void {

        this.player.update(delta * 0.001);

        this.meteors.forEach((meteor: Meteor) => {
            switch(+meteor.update(this.player))
            {
                case MeteorStatus.HIT:
                    this.scene.start('MainMenu');
                    break;
                case MeteorStatus.PASSED:
                    this.meteors.push(new Meteor(this));
                    this.score++;
                    this.scoreText.setText('Score: ' + this.score);
                    break;
                default: 
                break;
            }
        });
    }


}
