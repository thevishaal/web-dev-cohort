class urlInfo {
  constructor() {
    this.cache = new Map();
    this._shortCodeDB = new Map();
    this._urlDB = new Map();
    this.shortCode = null;
  }

  createShortUrl(url) {
    const existingUrlShortCode = this._urlDB.get(url);
    if (existingUrlShortCode !== undefined) {
      return existingUrlShortCode;
    }
    do {
      this.shortCode = Math.random().toString(36).slice(2, 8);
    } while (this._shortCodeDB.has(this.shortCode));
    this._shortCodeDB.set(this.shortCode, url);
    this._urlDB.set(url, this.shortCode);
    return this.shortCode;
  }

  redirectUrl(shortCode) {
    const urlFromCache = this.cache.get(shortCode);
    if (urlFromCache !== undefined) {
      console.log("I am from cache!");
      return urlFromCache;
    }
    console.log("I am from db");
    const url = this._shortCodeDB.get(shortCode);
    if (url === undefined) throw new Error("Url not found");
    this.cache.set(shortCode, url);
    return url;
  }
}

const url = new urlInfo();
const scode = url.createShortUrl("https://www.google.com");
console.log(url._urlDB);
console.log(url._shortCodeDB);
console.log(url.redirectUrl(scode));
console.log(url.cache);
