## gitbook-search

![npm](https://aleen42.github.io/badges/src/npm.svg) ![javascript](https://aleen42.github.io/badges/src/javascript.svg) ![gitbook](https://aleen42.github.io/badges/src/gitbook_1.svg) ![gitbook](https://aleen42.github.io/badges/src/gitbook_2.svg)

A Gitbook plugin to implement searching with GitHub Search API, and means that you need to deploy your Gitbook repository on GitHub before using this plugin.

![github-search](./preview.png)

### Installation

Add the following plugins to your `book.json` and run the command `gitbook install`

```json
{
   "plugins": ["github-search"]
}
```

### Usage

Because it is based on [GitHub Search](https://docs.github.com/en/rest/reference/search#search-code) API, you may need to provide an access token to avoid request limitations.

```json
{
   "plugins": [
      "github-search"
   ],
   "pluginsConfig": {
      "github-search": {
         "repo": "aleen42/PersonalWiki",
         "token": "YOUR_GITHUB_ACCESS_TOKEN"
      }
   }
}
```

### TODO

- [ ] Implement pagination
- [ ] User experience enhancement
- [ ] Responsive design for mobile devices

### Release History

* ==================== **1.0.0 Initial release** ====================
    * 1.0.1 Temporarily hide when using mobile devices
    * 1.0.4 Fix some problems
        * Remove anchor outline
        * Wrong anchor path
    * 1.0.6 Base64 encode the token to avoid the detection of GitHub

### :fuelpump: How to contribute

Have an idea? Found a bug? See [how to contribute](https://wiki.aleen42.com/contribution.html).

### :scroll: License

[MIT](https://wiki.aleen42.com/MIT.html) © aleen42
