const getSlug = (link, id) => `${link}-${id}`
const getPath = (link, id) => `/${getSlug(link, id)}/p`

module.exports = {
  getSlug,
  getPath,
}
