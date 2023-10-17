import axios from 'axios';

const BASE_URL = 'http://localhost:5000/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjpmYWxzZSwidXNlcm5hbWUiOiJzZXJnaW8iLCJpYXQiOjE2OTI0Mjg4MDQsImV4cCI6MTY5MjYwMTYwNH0.BO03YaxCWr69DKLhxB3B6hyLx-ZFqeW2w2iXggKv3sQ';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: {token: `${TOKEN}`},
});
