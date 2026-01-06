# Use Node.js LTS image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy rest of backend code
COPY . .

# Expose backend port
EXPOSE 5000

# Start backend server
CMD ["npm", "start"]
