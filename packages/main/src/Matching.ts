import { extend, sorted } from './helper'
import Dictionary from './matching/Dictionary'
import L33t from './matching/L33t'
import DictionaryReverse from './matching/DictionaryReverse'
import Spatial from './matching/Spatial'
import Repeat from './matching/Repeat'
import Sequence from './matching/Sequence'
import Regex from './matching/Regex'
import Date from './matching/Date'
import Pwned from './matching/Pwned'
import { ExtendedMatch } from './types'

const defaultCb = (data: ExtendedMatch) => {
  return data
}

/*
 * -------------------------------------------------------------------------------
 *  Omnimatch combine matchers ---------------------------------------------------------------
 * -------------------------------------------------------------------------------
 */

class Matching {
  matchers: any[] = [
    Dictionary,
    DictionaryReverse,
    L33t,
    Spatial,
    Repeat,
    Sequence,
    Regex,
    Date,
    Pwned,
  ]

  options = {}

  match(password: string, cb: Function = defaultCb) {
    const matches: any[] = []
    this.matchers.forEach((Entry) => {
      const matcher = new Entry()
      extend(
        matches,
        matcher.match({
          password,
          omniMatch: this,
        }),
      )
    })
    return cb(sorted(matches))
  }
}

export default Matching
