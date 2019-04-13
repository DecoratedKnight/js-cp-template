import _ from 'lodash'
import * as fs from 'fs'

const main = (input) => {
  input = input.split('\n')[0]
  input = input.split(' ')
  console.log(_.join(input, '-'))
}

main(fs.readFileSync('/dev/stdin', 'utf8'))