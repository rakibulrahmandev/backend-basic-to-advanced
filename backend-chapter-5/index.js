// ? Backend chapter-4. ---------------------------------------------------------------------------------->

//* session cookie:
/**
 * A session cookie is a type of cookie that a web server sends to a browser to keep track of a user’s activity during a single browsing session.
 // Here’s the breakdown:

 //Key Points about Session Cookies:
 * Temporary in nature:
    * They are stored in the browser’s memory (RAM), not on the hard drive.
    * They usually expire automatically when the user closes the browser.
 * Purpose:
    * They help maintain state in otherwise stateless HTTP requests.
    * For example:
        * Keeping a user logged in while navigating between pages.
        * Remembering what’s in the shopping cart until checkout.
 * No Expiration Date
    * Unlike persistent cookies, session cookies do not usually have an explicit expiration time set.
    * They die with the browser session.

 * Security
    * Since they don’t persist on disk, they are less likely to be stolen from storage.
    * However, they can still be hijacked if intercepted over an insecure connection (so HTTPS is important).
*/

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));