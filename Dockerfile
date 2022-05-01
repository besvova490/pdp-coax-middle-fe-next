FROM node:14
WORKDIR /out/pdp-app-fe
ADD package.json /out/pdp-app-fe
ADD package-lock.json /out/pdp-app-fe
RUN npm install
ADD . .
ENV NODE_OPTIONS="--max-old-space-size=2048"
RUN npm run build
CMD npm start
EXPOSE 3000
