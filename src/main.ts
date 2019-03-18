#!/usr/bin/env node

import * as inquirer from 'inquirer';
import * as fs from 'fs';
import * as path from 'path';

import { spawn, execSync } from 'child_process';
import { ncp } from 'ncp';

import { options } from './options.js';

class Main {
  private name!: string;
  private project!: string;
  private language!: string;
  private services!: Array<Services>;

  constructor() {
    this.setup();
  }

  private async setup(): Promise<void> {
    const operationResponse: Prompt = await inquirer.prompt(options);

    this.name = operationResponse.name;
    this.project = operationResponse.project;
    this.language = operationResponse.language;
    this.services = operationResponse.services;

    const sourcedir: string = path.resolve(
      `examples/${this.language}/${this.project}`,
    );

    const outputdir: string = path.resolve(this.name);

    fs.mkdirSync(outputdir);

    ncp(sourcedir, outputdir, err => {
      if (err) throw err;

      process.chdir(`${this.name}`);

      const child = spawn('yarn');

      child.stdout.on('data', data => console.log(`${data}`));
      child.stderr.on('data', data => console.error(`${data}`));
      child.on('exit', (code, signal) => console.log(`Happy Hacking! 🚀`));
    });
  }
}

module.exports = new Main();
