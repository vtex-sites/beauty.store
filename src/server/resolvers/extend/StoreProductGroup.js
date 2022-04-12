const { getPath } = require('../../utils/getPath')

module.exports = {
  complementName: (obj, _) => {
    const [firstSku] = obj.skus

    return firstSku ? firstSku.complementName : null
  },
  variants: (obj, _) => {
    const skus = obj.skus ? obj.skus : []

    const newSkus = skus.map((sku) => {
      return {
        ...sku,
        link: getPath(obj.link, sku.id),
      }
    })

    return newSkus
  },
  installment: (obj, _) => obj.installment,
  specifications: (obj, _) => {
    const groupsObj = obj.specificationGroups
    const groups = groupsObj ? JSON.parse(groupsObj) : []
    const specificationsArr = groupsObj ? groups['Especificações'] : []
    const specificationGroups = []

    if (obj && obj.textAttributes) {
      obj.textAttributes.forEach((attribute) => {
        const key = attribute.labelKey

        if (specificationsArr.includes(key)) {
          specificationGroups.push({
            key,
            value: attribute.labelValue,
          })
        }
      })
    }

    return specificationGroups
  },
}
