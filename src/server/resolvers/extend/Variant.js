module.exports = {
  policies: ({ policies }, args) => {
    const { salesChannel } = args

    if (salesChannel === 'default') {
      return policies
    }

    return policies.filter(({ id }) => id === salesChannel)
  },
}
