# Typescript

## How to Run in Command Line

* [TS Node](https://github.com/TypeStrong/ts-node);

Install packages:

```bash
# Locally in your project.
npm install -D ts-node
npm install -D typescript

# Or globally with TypeScript.
npm install -g ts-node
npm install -g typescript
```

## Usage

```bash
# Execute a script as `node` + `tsc`.
ts-node script.ts

# Starts a TypeScript REPL.
ts-node

# Execute code with TypeScript.
ts-node -e 'console.log("Hello, world!")'

# Execute, and print, code with TypeScript.
ts-node -p -e '"Hello, world!"'

# Pipe scripts to execute with TypeScript.
echo 'console.log("Hello, world!")' | ts-node
```
