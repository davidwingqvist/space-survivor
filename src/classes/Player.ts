import 'phaser';

export class Player extends Phaser.GameObjects.GameObject
{
    sprite: Phaser.GameObjects.Sprite;

    constructor(scene: Phaser.Scene)
    {
        super(scene, 'character');

        this.sprite = scene.add.sprite(100, 100, 'player');
    }
}