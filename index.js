var shell = require('shelljs');

let dt = new Date();

function zeroL(n){
    return n < 10 ? '0' + n : n ; 
}

let folderDest = "E:\\backup_mysql\\backup\\";

let dataBaseName = 'super_cell';

let filName =  `${folderDest}backup_${zeroL(dt.getDate())}_${zeroL(dt.getMonth())}_${dt.getFullYear()}__${zeroL(dt.getHours())}_${zeroL(dt.getMinutes())}.sql`;

var version = shell.exec('mysqldump -hlocalhost -uroot -pchkdsk '+ dataBaseName +' > ' + filName, {silent:true}).stdout;

console.log(filName);

shell.exit();