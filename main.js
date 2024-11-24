import { Header } from "./src/components/Header.js";

import './style.css'

const app = document.querySelector('#app');
app.prepend(Header());
app.innerHTML += `
  <div>
    <h1>Welcome to the page</h1>
  </div>
`;

