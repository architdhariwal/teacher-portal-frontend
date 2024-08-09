## Running the Project Locally

To run the project on your local machine, you need to update the base URL in two places:

1. In the `src/api/index.js` file:

   Replace the `baseURL` in the axios instance creation with:

   ```javascript
   const instance = axios.create({
     baseURL: 'http://localhost:5000' || process.env.REACT_APP_API_BASE_URL,
   });

2. In the .env file: Update the REACT_APP_API_BASE_URL variable:
   REACT_APP_API_BASE_URL='http://localhost:5000'
