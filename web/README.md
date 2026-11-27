# Web dashboard

The dashboard UI shipped in the release binary is published here for
review: `index.html`, `app.js`, `style.css`, `qrcode.js` and `flags/*.svg`.

- Fonts are not included here (binary font files). They are fetched at
  install time by `install.sh`.
- The core panel binary is closed-source. Only the UI, the installer
  (`install.sh`), the updater (`update.sh`) and the deploy files
  (`deploy/`) are open for review.
- The UI contains no credentials, tokens, server addresses or subscription
  links — only the interface and the labels it shows.
