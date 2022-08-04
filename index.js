/**
 * Return max of the Z-Index CSS property.
 * @method getMaxzIndex
 * @return {number} Maximum Z-index number
 */
const getMaxzIndex = () => {
  const sPositions = ['static', 'absolute', 'fixed', 'sticky']

  let _domElem = document.querySelectorAll('body *')

  _domElem = Array.from(_domElem) ?? []

  const getCssPosition = (item) => {
    let _curElementStyle = item.style

    if (_curElementStyle.position === '') {
      _curElementStyle = window.getComputedStyle(item)
    }

    return {
      isPosition: sPositions.includes(_curElementStyle.position),
      zIndex: _curElementStyle.zIndex === 'auto' ? 1 : _curElementStyle.zIndex,
    }
  }

  const zIndexArr = _domElem.map((item, n) => {
    let { isPosition, zIndex } = getCssPosition(item)
    return isPosition ? parseInt(zIndex) : 1
  })

  const maxZ = Math.max(...zIndexArr)
  return maxZ < 1 ? 1 : maxZ
}

/**
 * Create GUID / UUID. Function calls itself.
 * Return string in unique format - 279cd021-7f13-056c-ff5e-6fe1deef4379
 * @method guid
 * @return {string} GUID
 */
const guid = (() => {
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
 * Random String consisting from English Letters in Upper and Lower case and number from 0-9
 * @method getRandomString
 * @param {number} strLen - length of the random string; By default 10 chars
 * @return randomstring Length of string min 10 alphanumeric characters
 */
const getRandomString = (strLen) => {
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
const htmlCleanWhiteBreakLine = (content) => {
  return content.replace(/(\r\n|\n|\r|\s)/gm, '')
}

/**
 * Get TIMESTAMP in milliseconds
 * @method getTimeStampNow
 * @return {number} Milliseconds
 */
const getTimeStampNow = () => {
  const strDate = new Date()
  return strDate.getTime()
}

/**
 * Show the difference between two dates in minutes
 * @method dateDiff
 * @param {number} date2_ms Date converted to milliseconds
 * @param {namber} date1_ms Date converted to milliseconds
 * @return {number} Difference in minutes between two dates
 */
const dateDiff = (date2_ms, date1_ms) => {
  const one_minute = 1000 * 60 * 60
  /*** Calculate the difference in milliseconds ***/
  const difference_ms = date2_ms - date1_ms
  /*** Convert back to minute and return ***/
  return Math.round(difference_ms / one_minute)
}

/**
 * Search in object by key & value
 * @method getObjects
 * @param {object} obj Object where we search
 * @param {string} key Property in Object in our search
 * @param {string} val Value for search
 * @return {array} Array of objects
 */
const findObjectsByKeyValue = (obj, key, val) => {
  const objects = []
  for (let i in obj) {
    if (!obj.hasOwnProperty(i)) continue
    if (typeof obj[i] == 'object') {
      objects = objects.concat(getObjects(obj[i], key, val))
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
