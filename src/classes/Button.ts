import 'phaser';

export class Button extends Phaser.GameObjects.GameObject
{
    background: Phaser.GameObjects.Rectangle;
    text: Phaser.GameObjects.Text;

    constructor(scene: Phaser.Scene, x: number, y: number, width: number, height: number)
    {
        super(scene, 'button');

        this.background = scene.add.rectangle(x, y, width, height).setFillStyle(0x000000).setInteractive();
        this.text = scene.add.text(x, y, "PlaceHolder").setOrigin(0.5);
    }

    SetText(newText: string)
    {
        this.text.setText(newText);

        return this;
    }

    update(func: Function): void {

        this.background.on('pointerdown', func);
    }
}