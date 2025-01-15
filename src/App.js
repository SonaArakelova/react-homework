

function shareOnFacebook(){
  const url = window.location.href;  
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  window.open(facebookShareUrl, '_blank', 'width=600,height=400'); 
}
function Header(){
return(
  <header className="header" >
    <h1 className="main-text">Welcome to the React JS World
    </h1>
    <button className="share-btn" onClick={shareOnFacebook}> Share </button>
    </header>

)
}

function Main(){
return(
  <main className="main-content">
  <h2>React is a powerful JavaScript library used for building user interfaces (UIs),
     particularly for single-page applications (SPAs). Developed and maintained by Facebook, 
     React has become one of the most popular libraries for building dynamic, responsive, and interactive web applications.</h2>
     <h3>Benefits of React:</h3>
     <ul id="paragraphList">
      <li>Reusable Components: Components in React are reusable, which means you can use the same component 
      multiple times throughout your application. This makes your code more modular and maintainable.</li>
      <li>        Fast Rendering: Reacts Virtual DOM ensures that the actual DOM is only updated when necessary, 
    making updates faster and more efficient.
      </li>
      <li>        Declarative UI: React allows you to describe your UI in a declarative way, meaning you describe 
    what the UI should look like based on the current state rather than how to update it.
      </li>
      <li> Large Ecosystem: React has a massive ecosystem, with libraries and tools for every need. 
    You can use React with state management tools like Redux or Context API, or styling solutions 
    like Styled-components and CSS-in-JS.</li>
        <li>        Strong Community and Support: React is backed by a strong community and maintained by Facebook. 
    This means a large number of resources, tutorials, and third-party tools are available.
    </li>
    <li>        Cross-Platform Development: React Native, a framework built on React, allows developers to build
     mobile applications for iOS and Android using the same React codebase. This provides a unified 
     development experience across platforms.
    </li>
    </ul>
</main>
)
}

function Footer(){
return(
  <footer className="footer">
  <p>&copy; 2025 My Website. All Rights Reserved.</p>
</footer>
)
}

function App() {
  return (
  <div className="App" id = "main">
    <Header />
    <Main />
    <Footer />
  </div>
);
}

export default App;
