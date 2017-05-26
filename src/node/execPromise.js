// @flow 
'use strict'

import { exec } from 'child_process'

export function execPromise(cmd: string, opts?: Object) {
  return new Promise(function (resolve, reject) {
    var child = exec(cmd, opts, function (err, stdout, stderr) {
      if (err) {
        reject(err);
      } else {
        resolve(stdout, stderr);
      }
    });
    // child.stdout.on('data', function (chunk) {
    //   process.stdout.write(chunk);
    // });
    // child.stderr.on('data', function (chunk) {
    //   process.stdout.write(chunk);
    // });
  });
}

export default execPromise

//import exec from '@chmontgomery/exec-promise' // Não está isolando console.log