README — Make your revision app installable (PWA)

Put these files in the SAME folder as your index.html:
- manifest.webmanifest
- service-worker.js
- icon-192.png
- icon-512.png
- icon-192-maskable.png
- icon-512-maskable.png
- apple-touch-icon.png

1) Rename your file
Make sure your main file is called:
  index.html
(not index.html.txt)

2) Add these lines inside <head> in index.html
<link rel="manifest" href="manifest.webmanifest">
<link rel="apple-touch-icon" href="apple-touch-icon.png">

3) Register the service worker (put just before </body>)
<script>
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./service-worker.js");
    });
  }
</script>

4) IMPORTANT: it must be hosted (not opened as a file)
PWAs only install from:
- https:// (recommended) OR
- http://localhost

Fast hosting options:
A) GitHub Pages
- Create a repo (e.g. russia-revision-app)
- Upload index.html + all files in this zip
- Settings → Pages → Deploy from main branch → root
- Use the Pages link it gives you

B) School website / SharePoint site (if it serves over https)

5) Student install instructions
Android Chrome:
- Open the link → (⋮) → “Install app”

iPhone Safari:
- Open the link → Share icon → “Add to Home Screen”
