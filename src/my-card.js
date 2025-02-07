import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Brent Faiyaz Album: A.M. Paradox";
    this.img = "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/a3/96/25/a3962539-6df4-53f8-47f8-e9998cbecd81/859718224273_cover.jpg/1200x1200bf-60.jpg";
    this.description = "Do you like this artist? If you haven't listened to him, give it a try! He is a popular artist, but this album of his is less known.";
    this.link = "https://hax.psu.edu";
  
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      h1{ 
  color: red;
  font-size: 26px;
}

p{
  font-size: 16px;
  color: red;
}


.card {
  background-color: pink;
  display: inline-block;
  max-width: 400px;
  padding: 20px;
  margin: 10px;
  border: dotted red;
  border-width: 5px;
  border-radius: 10px; 
}

a {
    text-decoration: none;
  color: white;
}

.details-button {
  background-color: #ff0055;
  padding: 5px 165px;
  border-radius: 100px;
  border-color: black;
  border-width: 10px;
  font-size: 16px;
  font-weight: bold;
 
}
img{
  max-width: 400px;
  margin: auto;
 
}

.fancy{
 background-color: black;
 color: #FF0099;
}


@media (min-width: 800px), (max-width: 500px) {
  .details-button {
    display: none;
  }
}

@media (max-width: 500px) {
  .card {
    width: 100%;
    margin: 10px;
    padding: 10px 30px 20px 10px;
  }
  img {
    width: 100%;
    padding: 10px;
    
  }
  h1
  {
    font-size: 21px;
    margin: auto;
  }
  p
  {
    font-size: 14px;
    margin: auto;
  }
  
}


    `;
  }

  render() {
    return html`<div class= "card">
      <h1>${this.title}</h1>
      <img src="${this.img}" alt="${this.title}" />
      <p>${this.description}</p>
      <button class="details-button"><a href="${this.link}" target="_blank">Details</a></button>

      </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      img: { type: String },
      description: { type: String },
      link: { type: String }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
