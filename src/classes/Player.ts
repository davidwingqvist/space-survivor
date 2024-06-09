import 'phaser';

export class Player
{
    sprite: Phaser.Physics.Arcade.Sprite;
    scene: Phaser.Scene;
    moveSpeed: number;

    cursor: Phaser.Types.Input.Keyboard.CursorKeys | undefined;



    constructor(scene: Phaser.Scene)
    {
        this.scene = scene;
        this.sprite = scene.physics.add.sprite(100, 100, 'ship');

        this.moveSpeed = 2.0;

        
        this.cursor = this.scene.input.keyboard?.createCursorKeys();
    }

    update(deltaTime: number): void {

        if(this.cursor?.up.isDown)
        {
            this.sprite.setVelocityY(-360);
        }
        else if(this.cursor?.down.isDown)
        {
            this.sprite.setVelocityY(360);
        }
        else
        {
            this.sprite.setVelocityY(0);
        }

        /*
        this.scene.input.keyboard?.on('keydown-W', () => {
            this.sprite.setVelocityY(-360);
        });

        this.scene.input.keyboard?.on('keydown-S', () => {
            this.sprite.setVelocityY(360);
        });
        */

        if(this.sprite.y < -25)
            this.sprite.setY(788);
        else if(this.sprite.y > 793)
            this.sprite.setY(-20);

    }
}