# Simple Weather Forecast Site

This is a simple web application that provides weather forecasts using data from the OpenWeatherMap API. It is built with Node.js and Express, offering both a weekly forecast and an hourly forecast.

## Project Structure

- **`public/`**: Static assets (CSS, JavaScript, images).
  - `css/`: Stylesheets.
  - `js/`: Client-side scripts.
  - `images/`: Image files.
- **`views/`**: EJS templates for HTML rendering.
  - `index.ejs`: Main page template.
  - `hourly.ejs`: Hourly forecast template.
- **`routes/`**: Route handlers.
  - `index.js`: Defines application routes.
- **`server.js`**: Entry point, sets up the Express server.

## Dependencies

- **[Express](https://expressjs.com/)**: Web framework for Node.js.  
- **[EJS](https://ejs.co/)**: Templating engine for HTML.  
- **[node-fetch](https://www.npmjs.com/package/node-fetch)**: HTTP request module.  

Full list available in `package.json`.

## How to Run

1. **Clone the repository:**

   ```
   git clone https://github.com/lawgATWIT/Web-Development--Weather-App--Final-Project.git
   cd Web-Development--Weather-App--Final-Project
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Set up API key:**
   - Get an API key from OpenWeatherMap.  
   - Create a `.env` file in the root directory and add the following line:

   ```
   API_KEY=your_api_key_here
   ```

4. **Start the server:**

   ```
   npm start
   ```

5. **Access the application:**
   - Open [http://localhost:3000](http://localhost:3000) in your browser.

---

Be sure to replace `your_api_key_here` with your actual OpenWeatherMap API key when creating the `.env` file.
