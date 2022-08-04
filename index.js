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

module.exports = {
  getMaxzIndex,
}
