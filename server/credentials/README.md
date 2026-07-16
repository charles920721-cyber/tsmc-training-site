# Google Drive 憑證

請將服務帳戶 JSON 金鑰存成此資料夾內的：

`google-service-account.json`

## 設定步驟

1. 到 Google Cloud Console 建立專案，啟用 **Google Drive API**
2. 建立 **Service Account**，下載 JSON 金鑰
3. 將備份資料夾分享給該服務帳戶的 email（權限：編輯者）  
   https://drive.google.com/drive/folders/1qNPPihGks7dU-0p6ltMrAarMUXyJTsgy
4. 把 JSON 放到本資料夾並命名為 `google-service-account.json`
5. 在 `server` 目錄執行 `npm start` 重啟後端

未設定時，備份仍會寫入 `server/backups/`；本機模式則下載 JSON 供手動上傳。
