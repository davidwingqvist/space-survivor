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
            //console.log(this.sprite.y);
        });

        this.scene.input.keyboard?.on('keydown-S', () => {
            this.sprite.setVelocityY(360);
            //console.log(this.sprite.y);
        });

        if(this.sprite.y < -20)
            this.sprite.setY(768);
        else if(this.sprite.y > 788)
            this.sprite.setY(0);

    }
}