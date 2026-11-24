# 🌟 Personal Developer Portfolio

A fast, modern, minimalist portfolio website tailored for **Students and Entry-Level Software Engineers**.

Designed specifically to be opened and edited inside **Visual Studio Code**, with all content cleanly managed in a single JavaScript file (`data.js`) without needing complex build chains, bundlers, or frameworks!

---

## 🚀 Quick Start in VS Code

### 1. Open in Visual Studio Code
1. Open **VS Code**.
2. Go to **File** > **Open Folder...**
3. Select this folder:
   ```text
   C:\Users\faisa\.gemini\antigravity\scratch\portfolio
   ```

### 2. Live Preview
- **Option A (Recommended — Live Server Extension)**:
  1. If prompted by VS Code, click **Install** on the recommended extensions (`Live Server`).
  2. Right-click on `index.html` and choose **"Open with Live Server"** (or click the **"Go Live"** button at the bottom-right status bar).
  3. Your browser will automatically open to `http://127.0.0.1:5500/index.html`. Whenever you save any file, your browser refreshes instantly!
- **Option B (Direct Browser Preview)**:
  1. Simply double-click `index.html` in your file explorer. It will open directly in Chrome, Edge, or Firefox.

---

## 🛠️ How to Customize Your Content in `data.js`

You don't need to touch complex HTML tags! Everything is driven by the clean, well-commented `data.js` file:

| Section in `data.js` | What you can edit |
| :--- | :--- |
| `personal` | Your full name, job title, animated typing roles, bio, and social links (GitHub, LinkedIn, LeetCode, Email). |
| `personal.statusBadge` | Toggle availability status (`isAvailable: true/false`) and edit custom text like *"Open to Summer 2025 Internships"*. |
| `personal.resumeUrl` | Path to your `resume.pdf` (put your PDF in this folder, or paste a Google Drive link). |
| `stats` | Numbers in the stats bar (Years of coding, completed projects, problems solved, GPA). |
| `about` | Your personal tech story, current focus/explorations, and the 4 highlight skill cards. |
| `education` | Degree, university, graduation year, relevant coursework tags, campus leadership roles, and hackathons. |
| `projects` | Add or edit projects with titles, categories (`fullstack`, `frontend`, `tools`), descriptions, key bullet points, tech stack tags, and GitHub/Demo URLs. |
| `skills` | Grouped skill categories: Languages, Web & Frameworks, Databases & DevOps, Core Competencies. |
| `contact` | Email address, location, and contact channel cards. |

---

## 🎨 Theme & Styling (`style.css`)
- **Light & Dark Theme**: Built-in toggle switch with automatic `localStorage` persistence and system theme preference detection.
- **Accent Color**: To change the primary blue accent color across the entire site, open `style.css` and adjust `--accent-primary` at the top of the file!

---

## 🌐 Free 1-Click Deployment

When you're ready to share your portfolio with recruiters, host it online for free in under 2 minutes:

### Method 1: GitHub Pages (Recommended for Students)
1. Create a new repository on GitHub named `portfolio` (or `<your-username>.github.io`).
2. Push all files from this folder to your repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
3. In your GitHub repo, go to **Settings** > **Pages** > Select Branch: `main` > Click **Save**.
4. Your site will be live at `https://<your-username>.github.io/<your-repo-name>/`!

### Method 2: Vercel or Netlify (Drag & Drop)
- Go to [Netlify Drop](https://app.netlify.com/drop) or [Vercel](https://vercel.com).
- Simply drag and drop this entire folder into their dashboard. It deploys with zero configuration!

---

## 📂 Project Structure

```text
portfolio/
├── .vscode/
│   ├── settings.json       # Live Server port & auto-formatting rules
│   └── extensions.json     # Recommended VS Code extensions
├── index.html              # Clean semantic HTML5 layout & containers
├── data.js                 # ⭐️ ALL your content, projects, and bio
├── script.js               # Dynamic rendering engine & animations
├── style.css               # Clean minimalist styles (Light & Dark theme)
├── resume.pdf              # (Optional) Drop your resume PDF here
└── README.md               # Documentation & setup guide
```
