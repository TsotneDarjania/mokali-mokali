import Phaser from 'phaser';

export default class Preload extends Phaser.Scene {
  constructor() {
    super('preload');
  }

  preload() {
    //.load.image('logo', 'assets/phaser3-logo.png');
  }

  create() {
    console.log("Mokali")
  }
}
