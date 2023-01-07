# honkit-plugin-breadcrumbs

This is a Honkit plugin for displaying breadcrumbs.

## Installation

```bash
npm install gitbook-plugin-breadcrumbs
```

Add this plugin into ``book.json``.

```bash
{
  "plugins": ["breadcrumbs"]
}
```

## Configuration

book.json add the options

```js
"pluginsConfig": {
  "breadcrumbs": {
    "subdir": "/subdir/", // You can be specified when the root is a subdirectory.
    "home": "HOME",       // You can specify the character that root.
    "separator": ">",     // You can specify the character that separator.
    "aliases": [          // You can specify aliases.
      {"path": "posts", "alias": "articles"}
    ] 
  }
}
```
