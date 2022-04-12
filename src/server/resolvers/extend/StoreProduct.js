const { getPath } = require('../../utils/getPath')

module.exports = {
  link: (obj, _) => {
    const {
      id,
      isVariantOf: { link },
    } = obj

    return getPath(link, id)
  },
  attributes: (obj, _) => obj.attributes,
}
