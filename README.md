# berlindaanaman.com

Static portfolio site for Berlinda Anaman, PMP. Plain HTML and CSS: no build step, no framework, no cookies.

## Deploy to Vercel (about 10 minutes)

1. Create a free account at vercel.com and sign in with GitHub.
2. Create a new GitHub repository (e.g. `berlindaanaman-site`) and upload **everything in this folder** to it. GitHub's "Add file → Upload files" works; drag the folder contents in.
3. In Vercel: **Add New → Project → Import** the repository.
   - Framework preset: **Other**
   - Build command: *leave empty*
   - Output directory: *leave empty* (the site is in the root)
   - Click **Deploy**.
4. Add your domain: **Project → Settings → Domains → Add `berlindaanaman.com`** (and `www.berlindaanaman.com`). Vercel shows the DNS records to add at your domain registrar. HTTPS is automatic.
5. Turn on analytics: **Project → Analytics → Enable Web Analytics.** It's cookieless and collects no personal data, so no consent banner is needed. Until you enable it, browsers will log one harmless 404 for `/_vercel/insights/script.js`.

After it's live, paste `https://berlindaanaman.com` into LinkedIn's Post Inspector (linkedin.com/post-inspector) to check the preview card.

## Before you share the Transparent Rentals and Doctorevs pages

Search the HTML for `BERLINDA TO CONFIRM`. Each one shows as a gold tag on the page. Replace the whole `<span class="confirm">…</span>` with your answer, or delete the sentence if you'd rather not say.

**work/transparent-rentals/index.html** (11)
- Team: who built the site, who drives, who runs operations
- Start and launch dates
- Discovery method (e.g. conversations with travellers and drivers, price checks)
- The one or two insights that shaped the product
- Website build / fleet and drivers / daily operations: who
- One change after launch: what changed, why, and the result
- Bookings since launch, repeat-customer %, web vs WhatsApp split

**work/doctorevs/index.html** (6)
- Team (engineering, design, founders)
- Dates
- Number of stakeholders / provider types consulted
- Clinical and domain input: who
- Test cases run or bugs triaged; releases shipped to beta

The homepage and the HYRO page have no placeholders and are ready to share now.

## Please double-check

- **Dieti** is labelled *Pre-launch* because Doctorevs is still in beta. Change it to *Live* in `index.html` if Dieti already has real users.
- **Annologic** is shown as the company where you are product manager for Lepta QA, Lepta Studio and Doctorevs. Correct this if those products sit elsewhere.
- Confirm these links open after deploy (they couldn't be re-checked from the build environment): homigh.com, quveebeads.com, gourmetafrik.com, web3africagroup.com, the Byond App Store page.

## Files

```
index.html                       Home (hero, impact, case studies, gallery, how I work, toolkit, about, contact)
work/transparent-rentals/        Case study
work/hyro/                       Case study
work/doctorevs/                  Case study
404.html
resume/Berlinda-Anaman-Resume.pdf
assets/css/style.css             All styling
assets/fonts/                    Lora (SIL Open Font License), self-hosted
assets/img/                      Product screenshots, portrait, og.jpg (LinkedIn preview)
vercel.json                      Clean URLs, security headers, caching
robots.txt, sitemap.xml
```

To update the résumé, replace `resume/Berlinda-Anaman-Resume.pdf` and keep the same file name.
