# EdgeToHtml

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

A lightweight package for renaming .edge files to .html

## Usage

### Renaming .edge to .html

```bash
edgeToHtml forward
```

Renames all .edge files to `${filename}edge.html`
This ensures that node previous .html file is affected by the operation

### Renaming .html to .edge

To reverse the naming, run

```bash
edgeToHtml reverse
```

This will rename all `${filename}edge.html` to `${filename}.edge`, ensuring that no purely html file is renamed.

## Contributing

If you notice any issue, feel free to open an issue here on Github or make a PR.

## Licence

MIT
