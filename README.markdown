# Lunar Birthday to Google Calendar

A Chrome extension to add lunar birthdays to Google Calendar as solar date events, with emoji icons for a friendly user experience.

## Quick Start

### Installation
1. **Download the Extension**:
   - Clone the repository or download the ZIP and extract it:
     ```bash
     git clone https://github.com/utj99/Lunar2GoogleCalender.git
     ```

2. **Load in Chrome**:
   - Open Chrome and go to `chrome://extensions/`.
   - Turn on **Developer mode** (top-right toggle).
   - Click **Load unpacked** and select the extension folder.
   - The extension icon should appear in your Chrome toolbar.

3. **Check Emoji Images**:
   - Ensure the `images/` folder contains emoji files (e.g., `moon.png`, `sun.png`, `cake.png`, `calendar.png`, `success.png`, `error.png`).
   - Images should be 24x24px PNGs with transparent backgrounds.

### How to Use
1. **Open the Popup**:
   - Click the extension icon in Chrome's toolbar to open the popup window.

2. **Enter Lunar Birthday Details**:
   - **Lunar Month (1-12)**: Enter the month (e.g., 8 for August) next to the 🌙 emoji.
   - **Lunar Day (1-30)**: Enter the day (e.g., 15) next to the ☀️ emoji.
   - **Event Name**: Type the event name (e.g., "My Birthday") next to the 🎂 emoji.
   - **Years to Add (1-50)**: Specify how many years to add events for (e.g., 10) next to the 📅 emoji.

3. **Add to Google Calendar**:
   - Click the **Add to Google Calendar** button.
   - Sign in with Google if prompted (you’ll need a Google account).
   - The extension converts the lunar date to solar dates and adds them as all-day events to your Google Calendar.

4. **Check Results**:
   - A success message with a ✅ emoji shows the solar dates added (e.g., "2025: 2025-09-10").
   - If there’s an error, an ❌ emoji appears with a message (e.g., "Check your internet connection").
   - Open Google Calendar to view the added events.

## Example
- Input:
  - Lunar Month: 8 (🌙)
  - Lunar Day: 15 (☀️)
  - Event Name: My Birthday (🎂)
  - Years to Add: 3 (📅)
- Output:
  - Events added for 2025, 2026, 2027 with corresponding solar dates.
  - Status: "Lunar 8/15 added to calendar: 2025: 2025-09-10, 2026: 2026-08-30, 2027: 2027-09-18" with ✅ emoji.

## Troubleshooting
- **Extension doesn’t load**: Ensure all files (`popup.html`, `popup.js`, `background.js`, `manifest.json`) and the `images/` folder are in the correct folder.
- **Emojis not showing**: Check that image files exist in `images/` and paths match (e.g., `images/moon.png`).
- **Google login fails**: Verify your internet connection and try signing in again.
- **Events not added**: Ensure you have Google Calendar access and the correct permissions are granted.
- **Invalid input**: Enter valid numbers (Month: 1-12, Day: 1-30, Years: 1-50) to avoid error messages.

## Notes
- The extension uses your Google account to add events securely.
- Emoji icons (🌙, ☀️, 🎂, 📅, ✅, ❌) make the interface intuitive and fun.
- Cached data ensures faster conversions for repeated dates.
- Supports up to 50 years of events for long-term planning.

## Support
For issues or suggestions, open an issue on the [GitHub repository](https://github.com/your-username/lunar-birthday-to-google-calendar/issues).
