# Auto Egg-Collecting Selfbot

This project is built using `discord.js-selfbot-v13@v3.4`, a [Node.js](https://nodejs.org/) module that enables user accounts to interact with the Discord API v9.

⚠️ **Disclaimer**:

- I am not responsible for any blocked Discord or Myuu accounts resulting from the use of this bot.
- Using a selfbot on a user account violates the **[Discord Terms of Service](https://discord.com/terms)** and may lead to account suspension.
- By proceeding, you acknowledge these risks.

---

## Prerequisites

Easier way to install:

1. Download project: [Download](https://github.com/minhoag/myuu-egg-selfbot/releases/download/v1.0.0/start.bat)
2. **Run start.bat file with administrator**:

   - This script will help you download and install Node.js from the [official website](https://nodejs.org/en/download/package-manager).
   - This script will install git for keeping the project up-to-date.
   - It will also help you install all the required **Dependencies**

Traditional way to install:

1. Download project: [Download](https://github.com/minhoag/myuu-egg-selfbot/archive/refs/heads/main.zip)

2. **Install Node.js**:

   - Download and install Node.js from the [official website](https://nodejs.org/en/download/package-manager).

3. **Install Dependencies**:

   - Use `npm` to install the required dependencies:

   ```bash
   npm install
   ```

---

## Setting Up the Bot

### Configure the `.env` File

1. Rename the `.env.template` file to `.env`.
2. Fill in all the required fields, using Notepad or anything that can edit text.

### `PREFIX`

- Set a command prefix that suits your preference.
- Bot commands follow this format: `[prefix][command][arguments]`
- Example: `.get Egg`

### `TOKEN`

Since this is a selfbot, it operates directly on your user account, requiring your **Discord user token**.

**Warning**: Keep your token secure! If someone gains access to your token, they can take control of your account.

#### How to Retrieve Your Token:

1. Log in to your [Discord account](https://discord.com/).
2. Open the developer tools by pressing `F12` on your keyboard.
3. Navigate to the **Console** tab.
4. Paste the following script into the console and press Enter:

   ```javascript
   window.webpackChunkdiscord_app.push([
     [Math.random()],
     {},
     req => {
       if (!req.c) return;
       for (const m of Object.keys(req.c)
         .map(x => req.c[x].exports)
         .filter(x => x)) {
         if (m.default && m.default.getToken !== undefined) {
           return copy(m.default.getToken());
         }
         if (m.getToken !== undefined) {
           return copy(m.getToken());
         }
       }
     },
   ]);
   console.log('%cWorked!', 'font-size: 50px');
   console.log('%cYour token is now copied to the clipboard!', 'font-size: 16px');
   ```

5. Your token will be copied to your clipboard. Paste it into the `.env` file as instructed.

### `CHANNEL_ID`

The bot requires a channel ID to know where it should operate. For best performance, consider creating a new server just for yourself to minimize message processing overhead.

#### How to Get a Channel ID:

1. Enable **Developer Mode**:

   - Go to **User Settings** > **Advanced**.
   - Toggle on **Developer Mode**.

2. Retrieve the Channel ID:
   - Right-click the desired channel in Discord.
   - Select **Copy Channel ID**.
   - Paste the ID into the `.env` file.

---

## Final Notes

- Use the bot responsibly.
- Always be aware of the risks when operating selfbots.

Happy egg collecting! 🥚
