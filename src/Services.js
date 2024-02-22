import { quotes } from "./Quotes";

export function getAllQuotes() {
    return quotes;
}

function getQuotesSource(source) {
    let quotesFromSource = quotes.filter(item => item.source === source);
    return quotesFromSource
}

function getQuotesTheme(theme) {
    let quotesFromTheme = quotes.filter(item => item.theme === theme);
    return quotesFromTheme
}

function getQuotesEra(era) {
    let quotesFromEra = quotes.filter(item => item.era === era);
    return quotesFromEra
}

export function filterQuotes(filterKey) {
    switch (filterKey) {
        case 1:
          return getQuotesSource("Film")
        case 2:
          return getQuotesTheme("Love")
        case 3:
          return getQuotesEra("1950 - 1980")
        case 4:
          return getQuotesSource("Book")
        case 5:
          return getQuotesTheme("Self")
        case 6:
          return getQuotesEra("1980 - 2010")
        case 7:
          return getQuotesSource("Music")
        case 8:
          return getQuotesTheme("Life")
        case 9:
          return getQuotesEra("2010 - present")
        default:
          console.log("Error in filter mode switch");
      }
}