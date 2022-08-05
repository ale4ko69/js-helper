/**
 * Checks all DOM elements in the document body for position inline style and computed CSS and returns the maximum number of the z-index CSS property.
 * @method getMaxzIndex
 * @return {number} Maximum Z-index number
 */
const getMaxzIndex: GetMaxzIndex = (): number => {
  const sPositions = ['static', 'absolute', 'fixed', 'sticky']
  const _domElem = document.querySelectorAll<Element>('body *')
  const arrDomElem = Array.from(_domElem) as [] ?? []

  const getCssPosition = (item: HTMLElement) => {
    let _curElementStyle = item.style

    if (_curElementStyle.position === '') {
      _curElementStyle = window.getComputedStyle(item)
    }

    return {
      isPosition: sPositions.includes(_curElementStyle.position),
      zIndex: _curElementStyle.zIndex === 'auto' ? 1 : _curElementStyle.zIndex,
    }
  }

  const zIndexArr = arrDomElem.map((item, n) => {
    let { isPosition, zIndex } = getCssPosition(item)
    return isPosition ? typeof zIndex === 'string' ? parseInt(zIndex) : zIndex : 1
  })

  const maxZ = Math.max(...zIndexArr)
  return maxZ < 1 ? 1 : maxZ
}

/**
 * Generate GUID/UUID string.
* @method guid
* @return {string} string in unique format GUID - 279cd021-7f13-056c-ff5e-6fe1deef4379
 */
const guid: Guid = (() => {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }

  return () => {
    return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`
  }
})()

/**
 * Generate random string consisting from English Letters in Upper and Lower case and number from 0-9
 * @method getRandomString
 * @param strLen=10 {number | undefined} Length of the random string; By default 10 chars
 * @return {string} Generated random string
 */
const getRandomString: GetRandomString = (strLen: number | undefined): string => {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'
  let _randomstring = ''
  const _strLen = strLen ?? 10

  for (let i = 0; i < _strLen; i++) {
    const rnum = Math.floor(Math.random() * chars.length)
    _randomstring += chars.substring(rnum, rnum + 1)
  }
  return _randomstring
}

/**
 * Clean Html String from line break, space
 * @method htmlCleanWhiteBreakLine
 * @param {string} content Text with all type of breake lines and spaces
 * @return {string} Clean string
 */
const htmlCleanWhiteBreakLine: HtmlCleanWhiteBreakLine = (content: string): string => {
  return content.replace(/(\r\n|\n|\r|\s)/gm, '')
}

/**
 * Get current TIMESTAMP in milliseconds
 * @method getTimeStampNow
 * @return {number} Milliseconds
 */
const getTimeStampNow: GetTimeStampNow = (): number => {
  const strDate = new Date()
  return strDate.getTime()
}

/**
 * Show the difference between two dates in minutes
 * @method dateDiff
 * @param {number} date2_ms Date converted to milliseconds
 * @param {number} date1_ms Date converted to milliseconds
 * @return {number} Difference in minutes between two dates
 */

const dateDiff: DateDiff = (date2_ms: number, date1_ms: number): number => {
  const one_minute = 1000 * 60 * 60
  /*** Calculate the difference in milliseconds ***/
  const difference_ms = date2_ms - date1_ms
  /*** Convert back to minute and return ***/
  return Math.round(difference_ms / one_minute)
}

/**
 * Search in object by key & value
 * @method findObjectsByKeyValue
 * @param {object} obj Object where we search
 * @param {string} key Property in Object in our search
 * @param {string} val Value for search
 * @return {array} An array of the found objects
 */
const findObjectsByKeyValue: FindObjectsByKeyValue = (obj: object, key: string, val: string): Array<any> => {
  let objects = []
  for (let i in obj) {
    if (!obj.hasOwnProperty(i)) continue
    if (typeof obj[i] == 'object') {
      objects = objects.concat(findObjectsByKeyValue(obj[i], key, val))
    } else if (i == key && obj[key] == val) {
      objects.push(obj)
    }
  }
  return objects
}

/** EXPORT METHODS */
module.exports = {
  getMaxzIndex,
  guid,
  getRandomString,
  htmlCleanWhiteBreakLine,
  getTimeStampNow,
  dateDiff,
  findObjectsByKeyValue,
}
