# WatchTime Pro + Google Drive Backup

## What changed
The app keeps local storage for speed/offline use and can sync watchlist + watched episodes to a hidden Google Drive `appDataFolder` file.

Google documents `appDataFolder` as application-specific storage that is hidden from the user's normal Drive view and accessible only to the app. The required scope is `https://www.googleapis.com/auth/drive.appdata`.

## Google setup

1. Open Google Cloud Console.
2. Create/select a project.
3. Enable **Google Drive API**.
4. Configure **Google Auth Platform / OAuth consent**.
5. Create an **OAuth 2.0 Client ID** with application type **Web application**.
6. Add your deployed Vercel URL under **Authorized JavaScript origins**, e.g.:
   `https://your-project.vercel.app`
7. Copy the Web Client ID.
8. In `public/index.html`, replace:
   `YOUR_GOOGLE_OAUTH_CLIENT_ID.apps.googleusercontent.com`
   with your Client ID.
9. Deploy/redeploy to Vercel.
10. Click **Connect Drive** in WatchTime and authorize Drive app-data access.

No Google client secret belongs in the frontend.

## Behavior

- Existing local progress is merged with Drive progress when connecting.
- Changes are saved locally immediately.
- When connected, changes are backed up to Drive shortly afterward.
- The app uses the hidden `appDataFolder`, not a normal visible Drive file.
- If the user clears browser storage, Drive backup can restore progress after reconnecting.

## TMDB

Set `TMDB_API_KEY` as a Vercel Environment Variable. Do not put the TMDB secret in frontend code.
