FROM node:14-alpine as build
WORKDIR /out/pdp-app-fe
ADD package.json /out/pdp-app-fe
ADD package-lock.json /out/pdp-app-fe
RUN npm install
ADD . .
ENV NODE_OPTIONS="--max-old-space-size=2048"
RUN npm run build

FROM node:14-alpine
WORKDIR /out/pdp-app-fe
ADD package.json /out/pdp-app-fe
ADD package-lock.json /out/pdp-app-fe
RUN npm install --only=prod
COPY --from=build /out/pdp-app-fe/.next /out/pdp-app-fe/.next

CMD npm start
EXPOSE 3000
