import { chmod, copyFile } from 'node:fs/promises'

// Install Git pre-commit hook.
const preCommitHook = '.git/hooks/pre-commit'
await copyFile('script/pre-commit.sh', preCommitHook)
await chmod(preCommitHook, 0o755)

// Copy JS libs
await copyFile(
  'node_modules/design-canvas/design-canvas.js',
  'js/lib/design-canvas.js'
)
