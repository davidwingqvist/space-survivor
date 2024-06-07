import 'phaser';
import { Player } from './Player';

export enum MeteorStatus
{
    NONE = 1,
    PASSED = 2,
    HIT = 3
}

export class Meteor
{
    scene: Phaser.Scene;
    sprite: Phaser.Physics.Arcade.Sprite;

    constructor(scene: Phaser.Scene)
    {
        this.scene = scene;
        this.sprite = scene.physics.add.sprite(Math.random() * 200 + 1300, Math.random() * 700, 'meteor').setScale(0.5, 0.5);
        this.sprite.setVelocityX(-(Math.random() * 180 + 180));
    }

    update(player: Player)
    {
        var status = MeteorStatus.NONE;

        this.scene.physics.collide(this.sprite, player.sprite, () => {
            status = MeteorStatus.HIT;
        });

        if(this.sprite.x < -300)
        {
            this.sprite.setPosition(Math.random() * 200 + 1300, Math.random() * 700);
            status = MeteorStatus.PASSED;
        }


        return status;
    }
}