const chalk = require('chalk');
const log = console.log;

log("Hello");

// log(chalk.bgYellow("Lol").blue("Blue"));

log(chalk`
CPU: {red ${cpu.totalPercent}%}
RAM: {green ${ram.used / ram.total * 100}%}
DISK: {rgb(255,131,0) ${disk.used / disk.total * 100}%}
`);