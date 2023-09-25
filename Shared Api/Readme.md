## Process

### Extensions to process object.

### Electron's process object is extended from the Node.js process object.

### type - A string representing the current process's type, can be:

1. browser - The main process

2. renderer - A renderer process

3. worker - In a web worker

4. utility - In a node process launched as a service

### versions - Gives version details of current process (node/chrome)

### platform - Current OS u are using

### hang() - Causes the main thread of the current process hang.
