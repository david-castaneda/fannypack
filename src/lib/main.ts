import * as fs from 'fs';
import * as path from 'path';
import { spawn, execSync } from 'child_process';
import { ncp } from 'ncp';

function getNodeModulesDirectory(type: string): string {
  let nodeModulesDirectory = execSync('npm root -g', { encoding: 'utf8' });

  let sanitizedDirectory = nodeModulesDirectory.replace(/(\r\n|\n|\r)/gm, '');

  if (!sanitizedDirectory) throw 'Unable to find fannypack-core';

  const fannypackDirecory: string = `${sanitizedDirectory}/fannypack-core/examples/${type}`;

  return fannypackDirecory;
}

export default class FannyPack {
  private name: string;
  private type: string;

  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;

    this.setup();
  }

  public setup(): void {
    const sourcedir: string = getNodeModulesDirectory(this.type);
    const outputdir: string = path.resolve(`./${this.name}`);

    fs.mkdirSync(path.resolve(this.name));

    ncp(sourcedir, outputdir, err => {
      if (err) throw err;

      process.chdir(`./${this.name}`);

      const child = spawn('yarn');

      child.stdout.on('data', data => console.log(`${data}`));
      child.stderr.on('data', data => console.error(`${data}`));
      child.on('exit', (code, signal) => console.log(`Happy Hacking! 🚀`));
    });
  }
}
