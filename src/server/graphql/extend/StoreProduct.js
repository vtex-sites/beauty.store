const typedefs = `
  type AttributesSpec {
    value: String
    key: String
  }

  extend type StoreProduct {
    link: String
    attributes: [AttributesSpec]
  }
`

module.exports = typedefs
