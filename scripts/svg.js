const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(fs.readFile);
const readDirAsync = promisify(fs.readdir);

const dir = path.resolve(__dirname, '..', 'src', 'assets', 'icons');

let icons = '/* eslint-disable */\n\nconst icons = {';

const readSvg = async filename => {
  const fullpath = path.resolve(dir, filename);
  const filestr = await readFileAsync(fullpath, { encoding: 'utf8' });
  icons += `  ['${filename.slice(0, -4)}']`;
  icons += ': ';
  icons += `\`${filestr.replace(/\n/g, '')}\`, \n`;
};

const getAllFiles = async () => {
  const files = await readDirAsync(dir);
  for (let i in files) {
    const file = files[i];
    const extension = file.substr(-3);
    if (extension === 'svg') {
      await readSvg(file);
    }
  }

  icons += '}\n\n';
  icons += 'export default icons;';

  const file = path.resolve(dir, 'index.js');
  console.log(file);
  fs.writeFile(file, icons, err => {
    if (err) {
      console.error('Falha ao salvar o arquivo: ' + err);
    }

    console.log('Icones linkados com sucesso!');
  });
};

getAllFiles();
