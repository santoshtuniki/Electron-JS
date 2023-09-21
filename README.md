### Electron-JS

### Add the below meta tags in <head> section of index.html to avoid warning "Electron Security Warning (Insecure Content-Security-Policy)"

```
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'" />
  <meta http-equiv="X-Content-Security-Policy" content="default-src 'self'; script-src 'self'" />
```
