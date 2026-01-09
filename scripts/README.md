# Push helper

This folder contains helper scripts to copy the prepared patched files into the repository, commit, and push them to a remote branch. Use these from your local machine (Windows PowerShell or Node.js environment).

## Files

- `patch_files/` — contains copies of the modified files. These will be copied into your repo when you run the scripts.
- `push_changes.ps1` — PowerShell script. Usage:
  - `./push_changes.ps1` (interactive; will prompt before commit)
  - `./push_changes.ps1 -BranchName fix/labs-routing -RunBuild` to also run `pnpm install` and `pnpm build` if `pnpm` is installed.
- `push_changes.js` — Node script (cross-platform). Usage:
  - `node push_changes.js` or `node push_changes.js my-branch "commit message"`

## Safety
- Scripts check that `git` is installed and will refuse to run otherwise.
- Scripts copy only files present in `patch_files/` to avoid accidental edits.
- The PowerShell script will show `git status` and ask for confirmation before committing.

## Next steps
1. Open a terminal in the project root.
2. Review the files in `scripts/patch_files` to verify changes.
3. Run one of the helper scripts to apply, commit and push the changes.
4. Open a PR on GitHub or use `gh pr create --fill` to create a PR automatically (requires GitHub CLI).