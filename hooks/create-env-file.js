const fs = require('fs');

const envFilePath = '.env';

// Check if the .env file already exists
if (!fs.existsSync(envFilePath)) {
    // Get all environment variables
    const envVars = process.env;
    
    // Create or overwrite the .env file with all environment variables
    fs.writeFileSync(envFilePath, Object.keys(envVars).map(key => `${key}=${envVars[key]}`).join('\n'));
}