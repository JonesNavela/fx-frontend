// scripts/preRender.js
const fs = require('fs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Home = require('./src/pages/Home').default;
const About = require('./src/components/About').default;
const Services = require('./src/components/Services').default;
const Card = require('./src/components/Card').default;
const Footer = require('./src/components/Footer').default;
const Founder = require('./src/components/Founder').default;
const Mentorship = require('./src/components/Mentorship').default;
const Navigationbar = require('./src/components/Navigationbar').default;
const Reviews = require('./src/components/Reviews').default;
const PaymentNotificationHandler = require('./src/components/PaymentNotificationHandler').default;

// Create a directory for the static HTML files
const outputDir = './build';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Pre-render components and save as HTML files
const preRenderAndSave = (component, path) => {
  const html = ReactDOMServer.renderToString(React.createElement(component));
  fs.writeFileSync(`${outputDir}${path}`, html);
};

preRenderAndSave(Home, '/index.html');
// preRenderAndSave(About, '/about.html');
// preRenderAndSave(About, '/about.html');
// preRenderAndSave(About, '/about.html');
// preRenderAndSave(About, '/about.html');
// preRenderAndSave(About, '/about.html');
// preRenderAndSave(About, '/about.html');
// preRenderAndSave(About, '/about.html');
// preRenderAndSave(About, '/about.html');

console.log('Pre-rendering completed.');
