# CMS 後端（帳號／備份／操作紀錄）

## 啟動

```bash
cd server
npm install
npm start
```

瀏覽：http://localhost:8787/

- 入口：訪客 / 登入
- 預設管理員：`charles` / `m215`
- 後台：http://localhost:8787/admin/

## Google Drive 自動上傳

1. 依 `server/credentials/README.md` 設定服務帳戶
2. 把資料夾分享給服務帳戶信箱（編輯者）
3. 目標資料夾：https://drive.google.com/drive/folders/1qNPPihGks7dU-0p6ltMrAarMUXyJTsgy

## 說明

- GitHub Pages 為靜態站，**每日自動備份與 Drive 上傳需要此 Node 後端常駐**。
- 未啟動後端時仍可用「本機模式」登入／管帳號／下載備份 JSON，但無法排程上傳 Drive。
