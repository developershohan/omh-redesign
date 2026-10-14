# Demo bookings → Google Calendar

The "Book a 30-minute demo" tab (`components/BookDemo.tsx`) sends each request
two ways:

1. `/api/enquiry`: stored in Sanity and emailed like every other form, with the
   page it came from in the subject (`New enquiry — Demo booking (/seo-services)`).
2. `/api/book-demo`: adds a 30-minute event to OMH's Google Calendar at the slot
   the visitor picked, with their details and the full page URL in the
   description.

The calendar step runs through a Google Apps Script web app on OMH's own Google
account, so there is no Google Cloud project or service-account key. Until it is
set up, step 1 still works and the route logs `Calendar is not configured`.

## Setup (about 5 minutes)

1. Signed in to the Google account whose calendar should get the bookings, open
   <https://script.new>. Name the project "OMH demo bookings".
2. Replace everything in `Code.gs` with the script below. Change `SECRET` to a
   long random string, and keep a copy of it for step 6.
3. **Project Settings** (gear icon): check that **Time zone** is
   `(GMT+00:00) London`.
4. **Deploy → New deployment**. Type: **Web app**. Execute as: **Me**. Who has
   access: **Anyone**. Click Deploy.
5. Approve the permissions prompt. Google warns that the app is unverified,
   because it is your own script: Advanced → Go to OMH demo bookings. Copy the
   **Web app URL** (it ends in `/exec`).
6. Add two environment variables wherever the site runs (Vercel: Settings →
   Environment Variables, Production and Preview; VPS: `/opt/omh/.env`), then
   redeploy:
   ```
   GOOGLE_BOOKING_WEBHOOK=<the Web app URL>
   GOOGLE_BOOKING_SECRET=<the same string as SECRET>
   ```
7. Test it: book a slot on any service page and check the calendar.

"Anyone" access is safe here: the script does nothing unless the request
carries the secret, and only the site's server knows it.

If you edit the script later, use **Deploy → Manage deployments → Edit →
Version: New version**. That keeps the same URL. A *new* deployment gets a new
URL, and the env var would need updating.

## Script

```js
// OMH demo bookings: adds website demo requests to this account's calendar.
const SECRET = 'paste-a-long-random-string-here';
// Leave as-is for your main calendar, or paste a shared calendar's ID
// (Calendar settings -> Integrate calendar -> Calendar ID).
const CALENDAR_ID = 'primary';

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  if (data.secret !== SECRET) return ContentService.createTextOutput('forbidden');

  const start = Utilities.parseDate(data.date + ' ' + data.time, 'Europe/London', 'yyyy-MM-dd HH:mm');
  const end = new Date(start.getTime() + 30 * 60 * 1000);
  const calendar = CALENDAR_ID === 'primary'
    ? CalendarApp.getDefaultCalendar()
    : CalendarApp.getCalendarById(CALENDAR_ID);

  calendar.createEvent(data.title, start, end, { description: data.description });
  return ContentService.createTextOutput('ok');
}
```

## What it does not do (yet)

- **No invite to the visitor.** The page promises "We'll email to confirm, or
  suggest another if it's taken", so the event is yours to confirm. To send an
  invite instead, add `guests: '<their email>', sendInvites: true` to the
  `createEvent` options and pass the email through from the route.
- **No live availability.** The six times are fixed (`lib/book-demo.ts`). Two
  people can pick the same slot; both land in the calendar and you offer one of
  them another time.
