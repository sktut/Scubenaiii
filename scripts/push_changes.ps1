Param(
  [string]$BranchName = "fix/labs-routing",
  [string]$CommitMessage = "fix(labs): correct routes to /scuben-ai-labs, add turbopack.root, install lottie-web",
  [switch]$RunBuild
)

# Simple script to copy patched files into place, commit and push
Write-Host "Running push helper..."

# Ensure git exists
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  Write-Error "git not found. Please install Git (https://git-scm.com/) and re-run this script."
  exit 1
}

# Confirm working directory
$repoRoot = Resolve-Path -Path ".."
Write-Host "Repo root: $repoRoot"

# Copy patched files
Write-Host "Copying patched files into repo..."
$patchDir = Join-Path $PSScriptRoot "patch_files"
Get-ChildItem -Path $patchDir -Recurse | ForEach-Object {
  if ($_.PSIsContainer) { return }
  $rel = $_.FullName.Substring($patchDir.Length + 1)
  $dest = Join-Path $repoRoot $rel
  $destDir = Split-Path $dest -Parent
  if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Path $destDir | Out-Null }
  Copy-Item -Path $_.FullName -Destination $dest -Force
  Write-Host " -> $rel"
}

# Run optional install/build
if ($RunBuild) {
  if (Get-Command pnpm -ErrorAction SilentlyContinue) {
    Write-Host "Running pnpm install and build..."
    pnpm install
    pnpm build
  } else {
    Write-Warning "pnpm not found; skipping install/build. Run 'pnpm install' and 'pnpm build' locally to verify before pushing."
  }
}

# Check git status
$status = git status --porcelain
if (-not $status) {
  Write-Host "No changes detected to commit. Exiting."
  exit 0
}

# Create branch if it doesn't exist
try {
  git rev-parse --verify $BranchName 2>$null
  $branchExists = $true
} catch {
  $branchExists = $false
}

if ($branchExists) {
  git checkout $BranchName
} else {
  git checkout -b $BranchName
}

# Stage and commit
git add -A
# Show status preview
Write-Host "Files to be committed:"
git status --porcelain

$confirm = Read-Host "Proceed to commit and push? (y/N)"
if ($confirm -ne 'y' -and $confirm -ne 'Y') {
  Write-Host "Aborting."
  exit 0
}

git commit -m "$CommitMessage"

git push -u origin $BranchName

# Optionally create a PR using GitHub CLI if available
if (Get-Command gh -ErrorAction SilentlyContinue) {
  Write-Host "gh CLI found — opening PR draft..."
  gh pr create --fill
} else {
  Write-Host "If you want a PR, run: gh pr create --fill (requires GitHub CLI)"
}

Write-Host "Done. Your branch has been pushed: $BranchName"