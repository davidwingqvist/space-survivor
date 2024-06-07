import 'phaser';

export class Player
{
    sprite: Phaser.Physics.Arcade.Sprite;
    scene: Phaser.Scene;
    moveSpeed: number;

    constructor(scene: Phaser.Scene)
    {
        this.scene = scene;
        this.sprite = scene.physics.add.sprite(100, 100, 'ship');

        this.moveSpeed = 2.0;
    }

    update(deltaTime: number): void {

        this.scene.input.keyboard?.on('keydown-W', () => {
            this.sprite.setVelocityY(-360);
        });

        this.scene.input.keyboard?.on('keydown-S', () => {
            this.sprite.setVelocityY(360);
        });

        if(this.sprite.y < -25)
            this.sprite.setY(788);
        else if(this.sprite.y > 793)
            this.sprite.setY(-20);

    }
}