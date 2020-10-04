function toPascalCase(string) {
  const REG_EXP = /[A-Z]/

  if (!REG_EXP.test(string)) {
    return string
      .replace(/\w\S*/g, (word) => {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
      })
      .replace(/ /g, '')
  } else {
    return string
  }
}

module.exports = toPascalCase
