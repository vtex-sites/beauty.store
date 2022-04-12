const typedefs = `
  type Installment {
    interest: Boolean
    count: Int
    paymentGroupName: String
    value: Float
    paymentName: String
    valueText: String
  }

  type Image {
    name: String
    value: String
  }

  type Seller {
    default: Boolean
    oldPrice: Float
    price: Float
    installment: Installment
    name: String
    tax: Float
    teasers: [String]
    id: String
  }

  type Policy {
    id: String
    sellers: [Seller]
  }

  type ExtraDatum {
    value: String
    key: String
  }

  type Variant {
    images: [Image]
    nameComplete: String
    complementName: String
    policies(salesChannel: String = "default"): [Policy]
    videos: [String]
    reference: String
    idWithSplit: String
    ean: String
    name: String
    attributes: [ExtraDatum]
    id: String
    sellers: [Seller]
    stock: Int
    link: String
  }

  type Specification {
    key: String
    value: String
  }

  extend type StoreProductGroup {
    installment: Installment
    complementName: String
    variants: [Variant]
    specifications: [Specification]
  }
`

module.exports = typedefs
