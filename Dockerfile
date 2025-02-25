# Use an official Node.js image
FROM node:18

# Set working directory
WORKDIR /node js

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port
EXPOSE 3000

# Command to run the application
CMD ["node", "server.js"]
