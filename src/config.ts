import Phaser from 'phaser';


const WIDTH = 1700;
const HEIGHT = 900;

export default {
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: 'black',
  scale: {
    width: WIDTH,
    height: HEIGHT
  },
};
