#!/usr/bin/env node

var data = "";

function convertToEnv(data){
    let json;
    try {
        json = JSON.parse(data);
    } catch {
        console.error("Input stream is not json");
        process.exit(-1);
    }

    for(let p in json){
        console.log(`${p}=${json[p]}`);
    }

}

process.stdin.on('readable', () => {
    let chunk;
    while (null !== (chunk = process.stdin.read())) {
      data += chunk.toString();
    }
  });

process.stdin.on("end", function () {
  convertToEnv(data);
});
