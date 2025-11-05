const width = 100;
const height = 200;
const color = "red";
const calculateArea = {
    add(width,height){
        return width * height;
    }
}

const rectangle = {
  width,
  height,
  color,
  calculateArea,
  describe: function () {
    return `Rectangle ${this.width}x${this.height}, color: ${this.color}`;
  },
};
console.log(rectangle);