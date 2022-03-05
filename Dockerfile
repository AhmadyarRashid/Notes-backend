########
# Docker Stratergy
# Step 1 - Base Image Is Isloated Container Environment To Just Make TS Build
# Step 2 - Take The Built JS To A New Image, And Start Node Server.
#
########
FROM node:16.3.0-alpine as base

# Add config files required for build.
COPY package.json ./
COPY yarn.lock ./

# Install dependencies For Build.
RUN yarn install

# Copy source
COPY src ./src

# Copy ts config
COPY tsconfig.json ./tsconfig.json
COPY .env .env

# Compile TS -> JS
RUN yarn build

# Start production image build
FROM node:16.3.0-alpine

# Copy node modules and build directory
COPY --from=base ./node_modules ./node_modules
COPY --from=base /dist /dist
COPY --from=base .env .env

# Expose port 3000
EXPOSE 3000
CMD ["dist/server.js"]
