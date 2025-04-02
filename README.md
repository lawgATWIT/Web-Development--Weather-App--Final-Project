# Simple Weather Forecast Site

This is a simple web application that provides weather forecasts using data from the OpenWeatherMap API. It is built with Node.js, Express, and Electron, offering both a weekly forecast and an hourly forecast.

## Project Structure

- **`public/`**: Static assets (CSS, JavaScript, images).
- **`views/`**: EJS templates for HTML rendering.
- **`routes/`**: Route handlers.
- **`main.js`**: Electron entry point.
- **`server.js`**: Express server entry point.

## Dependencies

- **[Express](https://expressjs.com/)**: Web framework for Node.js.  
- **[EJS](https://ejs.co/)**: Templating engine for HTML.  
- **[Electron](https://www.electronjs.org/)**: Framework for building desktop apps.  

## New Features

- **Rounded Corners**: The Electron app now has rounded corners for a modern look.
- **Exit Button**: An exit button is available in the top-right corner of all pages.
- **Hidden Scrollbar**: The scrollbar is hidden but the page remains scrollable.

## How to Run

### Running as a Web App

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Set up API key:**
   - Obtain an API key from OpenWeatherMap.
   - Create a `.env` file in the root directory and add the following line:

   ```bash
   API_KEY=your_api_key_here
   ```

3. **Start the server:**

   ```bash
   npm run start:web
   ```

4. **Access the application:**
   - Open [http://localhost:3000](http://localhost:3000) in your browser.

### Running as an Electron App

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the server:**

   ```bash
   npm run start:web
   ```

3. **Run the Electron app:**

   ```bash
   npm start
   ```

4. **Exit the app:**
   - Use the ✖ button in the top-right corner of the app window.

### Building the Electron App

1. **Build the app:**

   ```bash
   npm run build
   ```

2. **Locate the built app:**
   - The built app will be available in the `dist/` directory.

---
