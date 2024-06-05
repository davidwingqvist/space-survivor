import { Scene, GameObjects } from 'phaser';
import { Button } from '../classes/Button';

export class MainMenu extends Scene
{
    background: GameObjects.Image;
    title: GameObjects.Text;

    startGameButton: Button;

    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.title = this.add.text(512, 200, "Space Survivor", {
            fontFamily: 'Brush Script MT', fontSize: 120, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.startGameButton = new Button(this, 512, 600, 200, 50)
        .SetText("Start Game");
    }

    update(time: number, delta: number): void {

        this.startGameButton.update(() => {this.scene.start('Game')});

    }
}
