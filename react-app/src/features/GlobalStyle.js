import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   
    
    * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  header {
    height: 48px;
    width: 100%;
  
    display: flex;
    align-items: center;
    justify-content: space-between;
  
    background-color: #ffffff;
    border-bottom: 1px solid #dee2e6;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  
    padding: 2rem;
    position: fixed;
    z-index: 100;
  }
  
  header .brand {
    font-weight: bold;
    font-size: 1.5rem;
  }
  
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 0;
  }
  
  .Home__products {
    display: flex;
    flex-wrap: wrap;
  
    list-style-type: none;
    padding: 0;
    margin: 0 -12px;
  }
  
  .Products {
    padding-right: 12px;
    padding-bottom: 36px;
    padding-left: 12px;
    width: 33%;
    position: relative;
  }
  
  .Products__name {
    color: #333;
  
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    display: block;
  }
  
  .Products__type {
    color: #767676;
  }
  
  .Products__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  form label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }
  
  form input {
    padding: 0.3rem 0.7rem;
  
    font-size: 1rem;
    line-height: 1.5;
  
    outline: none;
  
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
  
    width: 100%;
  }
  
  form button {
    font-size: 1rem;
    line-height: 1.5;
  
    padding: 0.5rem 0.7rem;
  
    cursor: pointer;
    float: right;
  
    color: #ffffff;
    background-color: #28a745;
  
    border-radius: 0.25rem;
    border: none;
  }
  
  .UpdateForm__delete-button {
    background: none;
    color: #ea4f3e;
  
    float: left;
    padding: 0;
  }
  
  form .input-group {
    margin-bottom: 1.5rem;
  }
  
  `;

export default GlobalStyle;
