param(
  [Parameter(Mandatory = $false)]
  [string]$NodeHome
)

$ErrorActionPreference = 'Stop'

function Resolve-NodePath {
  param([string]$NodeHome)

  if ($NodeHome) {
    $nodeExe = Join-Path $NodeHome 'node.exe'
    if (Test-Path $nodeExe) {
      return $nodeExe
    }

    throw "NodeHome was provided but node.exe was not found at: $nodeExe"
  }

  $cmd = Get-Command node -ErrorAction SilentlyContinue
  if ($cmd -and $cmd.Source) {
    return $cmd.Source
  }

  return $null
}

$repoRoot = Split-Path -Parent $PSScriptRoot
Set-Location $repoRoot

$nodeExePath = Resolve-NodePath -NodeHome $NodeHome
if (-not $nodeExePath) {
  Write-Host "Node.js was not found in PATH." -ForegroundColor Yellow
  Write-Host "" 
  Write-Host "Fix options:" -ForegroundColor Yellow
  Write-Host "1) Install Node.js LTS (recommended), then rerun this script" -ForegroundColor Yellow
  Write-Host "2) Or download the official Windows ZIP Node.js and run with -NodeHome" -ForegroundColor Yellow
  Write-Host "   Example: .\\scripts\\run-build.ps1 -NodeHome \"C:\\Users\\<you>\\Tools\\node\\node-vXX-win-x64\"" -ForegroundColor Yellow
  exit 1
}

$nodeDir = Split-Path -Parent $nodeExePath
$env:PATH = "$nodeDir;$env:PATH"

if (-not (Test-Path (Join-Path $repoRoot 'node_modules'))) {
  Write-Host "node_modules not found. Installing dependencies (npm i)..." -ForegroundColor Cyan
  npm i
}

Write-Host "Building (npm run build)..." -ForegroundColor Cyan
npm run build

Write-Host "Previewing (npm run preview)..." -ForegroundColor Cyan
npm run preview
