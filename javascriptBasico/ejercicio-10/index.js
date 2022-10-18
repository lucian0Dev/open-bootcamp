import * as controller from './modules/controller.js'
import chalk from 'chalk';

const sum = controller.suma(4,5)
const mult = controller.multiplica(1,2)

console.log(sum);
console.log(chalk.green(mult));