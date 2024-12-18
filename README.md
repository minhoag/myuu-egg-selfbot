# Myuu Egg-Collecting Selfbot

This project is built using **`discord.js-selfbot-v13`**, a [Node.js](https://nodejs.org/) module that enables user accounts to interact with the Discord API v9.

---

## ⚠️ Disclaimer

- I am not responsible for any **blocked Discord accounts** or **Myuu accounts** resulting from the use of this bot.
- Using a selfbot on a user account **violates the [Discord Terms of Service](https://discord.com/terms)** and may lead to account suspension.
- By using this bot, you acknowledge and accept these risks.

---

## 📋 Prerequisites

## 📥 Easy Installation Guide

1. **Download the Installer:**
   - [Windows](https://github.com/minhoag/myuu-egg-selfbot/releases/download/v1.0.0/start.bat)
   - [MacOS or Linux](https://github.com/minhoag/myuu-egg-selfbot/releases/download/v1.0.0/start.sh)

2. **Run the Installer as Administrator:**
   - Run the downloaded `start.bat` (Windows) or `start.sh` (MacOS/Linux) file with administrator privileges.
   - The installer will handle the setup process, including:
      - Downloading and installing **Node.js** from the [official website](https://nodejs.org/en/download/package-manager).
      - Installing **Git** from [official website](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) to ensure the project can stay up-to-date in the future.
      - Installing all required dependencies for the project.
      - Launching the project.
   - That's it! Just download, run, and start collecting eggs!
---

## 🚀 Setting Up the Bot

1. Open the `.env` file using any text editor (e.g., Notepad).
2. Fill in the required fields:
   - **TOKEN**: Your Discord user token.
   - **CHANNEL_ID**: The ID of the channel the bot will operate in.
   - **PREFIX**: The command prefix you prefer.

---

### `PREFIX`

The command prefix defines how you interact with your bot.  
You can choose any prefix you like.

- **Example**:
   - If the prefix is set to `.`:
      - To execute a command: `.get Egg`

---

### `TOKEN`

Since this is a selfbot, the bot will operate directly using your **Discord user token**.

🔒 **Important**:
- Never share your token with anyone!
- If someone gains access to your token, they can **control your account**, so keep it safe.

#### How to Retrieve Your Discord Token:

1. Log in to your [Discord account](https://discord.com/).
2. Press **`F12`** to open the Developer Tools.
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
   console.log('%cToken Retrieved!', 'font-size: 20px; color: green;');
   console.log('%cYour token is now copied to the clipboard.', 'font-size: 14px;');
   ```

5. Your token will be copied to your clipboard.
6. Paste the token into the `.env` file in the `TOKEN` field.

---

### `CHANNEL_ID`

The bot requires a **channel ID** to function. This ID specifies the channel it will operate in.

#### How to Retrieve a Channel ID:

1. Enable **Developer Mode** in Discord:
   - Go to **User Settings** > **Advanced**.
   - Toggle on **Developer Mode**.
2. Copy the channel ID:
   - Right-click on the desired channel in Discord.
   - Select **Copy Channel ID**.
   - Paste the ID into the `.env` file under the `CHANNEL_ID` field.

💡 **Tip**:  
To improve performance, consider creating a **private server** to minimize unnecessary message processing overhead.

---

## 📜 Final Notes

- **Use the bot Responsibly:** Operating selfbots on Discord is against their Terms of Service. You are solely responsible for the consequences of using this bot.
- **Keep Your Credentials Secure:** Never share your token or sensitive details with anyone to avoid account compromise. 
- If you encounter any issues, feel free to open an issue report or suggest improvements in the project's repository.

---

🥚 **Happy Egg Collecting!**
