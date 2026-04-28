// BDN Town Meeting — Google Sheets Tracker (standalone / personal account)
// Deploy this from a personal Google account at script.google.com.
// It writes directly to the BDN sheet by ID — make sure your personal
// account has Editor access to the sheet.

const SHEET_ID = '1EGDvwJ6omtFlihG7PabX_1rvw4L74k64H30Z0flJYMo';
const HEADERS  = ['Timestamp', 'Display Name', 'Session ID', 'Email', 'Character', 'Events', 'Details', 'Score', 'Win/Loss'];

function doGet(e) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length)
           .setFontWeight('bold')
           .setBackground('#1a3660')
           .setFontColor('#ffffff');
      sheet.setFrozenRows(1);
    }

    const p = e.parameter;
    sheet.appendRow([
      p.ts ? new Date(Number(p.ts)) : new Date(),  // A: Timestamp
      p.name    || '',                               // B: Display Name
      p.session || '',                               // C: Session ID
      p.email   || '',                               // D: Email
      p.char === 'S' ? 'Selectman' : p.char === 'D' ? 'Democracy' : '', // E: Character
      p.events  || '',                               // F: Events (clicks, comma-sep)
      p.details || '',                               // G: Details (results, comma-sep)
      Number(p.score) || 0,                          // H: Score
      p.win     || '',                               // I: Win/Loss
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ─── SETUP ──────────────────────────────────────────────────────────────────
// Since you've already deployed once, you need to create a NEW deployment
// for this updated script to take effect:
//
// 1. Paste this file into your existing Apps Script project (replacing old code)
// 2. Deploy > New deployment (not "Manage deployments" > edit)
//    - Type: Web app · Execute as: Me · Who has access: Anyone
// 3. Copy the new /exec URL and update TRACKER_URL in index.html
// ────────────────────────────────────────────────────────────────────────────
