import 'phaser';

export class Player extends Phaser.GameObjects.GameObject
{
    sprite: Phaser.GameObjects.Sprite;


    moveSpeed: number;

    constructor(scene: Phaser.Scene)
    {
        super(scene, 'character');

        this.sprite = scene.add.sprite(100, 100, 'ship');

        this.moveSpeed = 2.0;
    }

    update(deltaTime: number): void {

        this.scene.input.keyboard?.on('keydown-W', () => {
            this.sprite.setPosition(this.sprite.x, this.sprite.y - (this.moveSpeed * deltaTime));
            console.log(deltaTime);
        });

        this.scene.input.keyboard?.on('keydown-S', () => {
            this.sprite.setPosition(this.sprite.x, this.sprite.y + (this.moveSpeed * deltaTime));
            console.log(deltaTime);
        });

    }
}