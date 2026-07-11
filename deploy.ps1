$ErrorActionPreference = "Stop"
$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")

$repoName = "tsmc-training-site"

gh auth status | Out-Null

if (-not (git remote get-url origin 2>$null)) {
  gh repo create $repoName --public --source=. --remote=origin --description "台積電訓練網站"
}

git push -u origin main

gh api -X POST "repos/{owner}/$repoName/pages" -f build_type=workflow | Out-Null

$owner = (gh api user --jq .login)
Write-Host ""
Write-Host "部署完成！固定網址（約 1～3 分鐘後生效）："
Write-Host "https://$owner.github.io/$repoName/"
