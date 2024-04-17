# Use an existing Node.js image as base
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 (or the port your app listens on)
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
