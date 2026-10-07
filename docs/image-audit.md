# Image audit — 7 October 2026

Empty media slots found and replaced with existing local assets. Video shells now render still images without fake play controls. Images used in pending evidence sections are illustrative, not verified client results.

| File | Empty slot | Replacement |
| --- | --- | --- |
| app/design-system/page.tsx | Real asset required | /images/home/agency-collaboration.png |
| components/PriceListSections.tsx | How we scope and price a project | /images/home/campaign-review.png |
| components/SeoLandingSections.tsx | Listing walkthrough | /images/Services/Local SEO.png |
| components/SeoLandingSections.tsx | SEO review walkthrough | /images/Services/SEO 1.jpg |
| components/ServiceMedia.tsx | 45-second WordPress project overview | /images/Services/wordpress development 1.jpg |
| components/ServiceMedia.tsx | Store journey walkthrough | /images/Services/Shopify Development.jpg |
| components/ServiceMedia.tsx | Monthly report walkthrough | /images/Services/website maintenance 1.jpg |
| components/ServiceMedia.tsx | Google Ads campaign walkthrough | /images/Services/Google Ads management.png |
| components/ServiceMedia.tsx | Amazon campaign walkthrough | /images/Services/Amazon PPC.png |
| components/ServiceMedia.tsx | SEO review walkthrough | /images/Services/SEO 1.jpg |
| components/SocialLandingSections.tsx | Reel | /images/Services/social media marketing 1(2).jpg |
| components/SocialLandingSections.tsx | Social campaign walkthrough | /images/Services/social media paid advertising.jpg |
| components/SocialLandingSections.tsx | Vertical creative in the feed | /images/Services/social media marketing 1(2).jpg |
| components/SocialLandingSections.tsx | Engagement report | /images/Services/social media marketing 1(1).jpg |
| components/SocialLandingSections.tsx | Campaign manager view | /images/Services/social media paid advertising.jpg |
| components/WarrantySections.tsx | What the guarantee means in practice | /images/Services/website maintenance.jpg |
| components/WebsiteDesignsSections.tsx | {category.title} |  source={`${page.gallery.base}${category.images[0].file}`} alt={category.images[0].alt} |
| components/faq/FaqPageSections.tsx | The questions we get asked most | /images/home/agency-collaboration.png |
| components/faq/FaqPageSections.tsx | Project walkthrough | /images/Services/wordpress development.jpg |
| components/forms/FreeConsultationPage.tsx | Select a Date & Time | /images/home/agency-collaboration.png |
| components/forms/FreeConsultationPage.tsx | {client.name} |  source="/images/home/agency-collaboration.png" alt="Illustrative agency collaboration" |
| components/services/GoogleAdsPpcSections.tsx | Account baseline | /images/Services/Images on the pages/Account baseline Before.png |
| components/services/GoogleAdsPpcSections.tsx | Verified PPC result | /images/Services/Images on the pages/Verified PPC result after.png |
| components/services/LocalSeoSections.tsx | Local visibility review | /images/Services/local seo 2.jpg |
| components/services/SearchEngineOptimisationSections.tsx | Verified SEO case-study walkthrough | /images/Services/SEO 4.jpg |
| components/services/WordPressMaintenanceSections.tsx | WordPress issue screenshot | /images/Services/Images on the pages/before website maintenance.png |
| components/services/WordPressMaintenanceSections.tsx | Maintenance report or fix | /images/Services/Images on the pages/After website maintenance.png |
| components/services/WordPressServiceSections.tsx | Website issue snapshot | /images/Services/Images on the pages/WordPress Development.png |
| components/services/WordPressServiceSections.tsx | Before website screenshot | /images/Services/shopify/before.png |
| components/services/WordPressServiceSections.tsx | After website screenshot | /images/Services/shopify/after.png |
| components/solutions/SolutionPage.tsx | {content.media.videoTitle} |  source="/images/home/campaign-review.png" alt="Marketing campaign planning and review" |
| components/ui/Case.tsx | Verified campaign data | /images/home/campaign-review.png |

## Scope and prevention

- Blogs and Insights are excluded at the user's request; no blog code or CMS content was changed.
- Existing branded case-study result cards and social campaign diagrams are intentional visuals, not missing image assets.
- The existing local image library covers all replacements, so image generation was unnecessary.
- `MediaFrame` and evidence images now require a source. Empty placeholder rendering and pretend video controls have been removed.
- Marketing photographs retry the original file if optimisation fails, then use a bundled agency image if that file fails.
- Consultation imagery is accompanied by a working contact link; it is not presented as a calendar widget.
- Run `npm run audit:images` before deployment to check exact filename casing, image decoding and media-source coverage.

## Verification

- Production build: passed (136 generated routes).
- ESLint and TypeScript: passed.
- Local assets: 104 referenced paths matched exact filename casing; all 107 raster assets decoded successfully.
- Running production server: all 59 non-blog pages returned HTTP 200; all 104 distinct image URLs returned decodable image data through the Next.js optimiser at width 640. No rendered media-placeholder labels remained.
- Browser visual inspection could not run: the browser tool failed to initialise because of a local sandbox setup error. Responsive cropping and client-side failure recovery have not been browser-tested.
- Changes are local; no deployment was performed.

Repeat the server check after `npm run build` and starting the site:

```sh
npm run audit:images -- http://localhost:3100
```
