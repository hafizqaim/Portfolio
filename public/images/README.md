# Project screenshots

By default every project card shows GitHub's auto-generated repo preview card,
so the site looks complete with zero setup.

To use **your own** screenshot for a project:

1. Drop the image in this folder, e.g. `pab-mri.png`.
2. Open `src/data/projects.js`, find that project, and set:
   ```js
   image: './images/pab-mri.png',
   ```

Two projects already expect a local screenshot (they have no public repo card):

- `pab-mri.png`        → PAB MRI
- `job-apply-agent.png` → Job-Apply Agent

Recommended size: **1280×800** (16:10), PNG or JPG, under ~400 KB.
If an image is missing or fails to load, a clean placeholder is shown automatically.
