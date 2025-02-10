export function getBrowserLanguage(): string {
  if (navigator.languages && navigator.languages.length) {
    // `navigator.languages` is an array of languages preferred by the user
    return navigator.languages[0]
  }

  if (navigator.language) {
    // `navigator.language` contains the user's preferred language
    return navigator.language
  }
  // Default to English if no language is found
  return 'ja'
}
