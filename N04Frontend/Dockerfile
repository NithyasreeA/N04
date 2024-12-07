FROM node:18 AS build

WORKDIR /app

COPY ./package*.json ./

RUN npm install -g @angular/cli && npm install
# ENV PATH="/app/node_modules/.bin:$PATH"

# Copy the Angular project files
COPY . .

RUN ng build --configuration=production

FROM nginx:alpine

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/N04Frontend/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
