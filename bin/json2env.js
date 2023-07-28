#!/usr/bin/env node

let data = ''

function convertToEnv(data) {
  let json
  try {
    json = JSON.parse(data)
  } catch {
    console.error('Input stream is not json')
    process.exit(-1)
  }

  for (let key in json) {
    let value = json[key]
    if (typeof value === 'object') {
      value = JSON.stringify(value)
    }

    console.log(`${key}=${value}`)
  }
}

process.stdin.on('readable', () => {
  let chunk
  while (null !== (chunk = process.stdin.read())) {
    data += chunk.toString()
  }
})

process.stdin.on('end', function () {
  convertToEnv(data)
})
