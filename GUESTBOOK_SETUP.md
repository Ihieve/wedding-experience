# Wedding guestbook setup

The guestbook is website-only. Guests submit a name and message; submissions are written to the Firebase Firestore collection `guestbookMessages` and shown in the public guestbook.

## Firebase setup

1. Configure the `NEXT_PUBLIC_FIREBASE_*` values in `.env.local` using your Firebase project settings.
2. Add the rules from `firestore.guestbook.rules.example` to your existing Firestore rules, merging carefully rather than replacing unrelated rules.
3. Confirm the rules allow guest submissions only to the intended fields and restrict public reads to approved messages. Add moderation, App Check, and/or rate limiting before sharing widely.

No Resend account, API key, or email domain is required for guestbook submissions.
