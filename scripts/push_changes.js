#!/usr/bin/env node
const { execSync } = require('child_process')
const path = require('path')

const branch = process.argv[2] || 'fix/labs-routing'
const message = process.argv[3] || 'fix(labs): correct routes to /scuben-ai-labs, add turbopack.root, install lottie-web'
const cwd = path.resolve(__dirname, '..')

function run(cmd) {
  console.log(`> ${cmd}`)
  execSync(cmd, { stdio: 'inherit', cwd })
}

try {
  run('git --version')
} catch (err) {
  console.error('git is not installed or not in PATH. Install git and re-run this script.')
  process.exit(1)
}

// Copy patched files
console.log('Copying patched files into repo...')
run('powershell -Command "Copy-Item -Path \"scripts\\patch_files\\**\" -Destination .. -Recurse -Force"')

// Check for changes
let status
try {
  status = execSync('git status --porcelain', { cwd }).toString().trim()
} catch (err) {
  console.error('Failed to run git status')
  process.exit(1)
}

if (!status) {
  console.log('No changes to commit.')
  process.exit(0)
}

// Create branch if necessary
try {
  execSync(`git rev-parse --verify ${branch}`, { cwd, stdio: 'ignore' })
  run(`git checkout ${branch}`)
} catch (err) {
  run(`git checkout -b ${branch}`)
}

run('git add -A')
console.log('Committing...')
run(`git commit -m "${message}"`)
console.log('Pushing...')
run(`git push -u origin ${branch}`)

// Try to create PR using gh if available
try {
  execSync('gh --version', { stdio: 'ignore' })
  console.log('Creating PR with gh...')
  run('gh pr create --fill')
} catch (err) {
  console.log('gh not found; PR creation skipped. Run `gh pr create --fill` or create a PR via GitHub UI.')
}

console.log('Done.')