///////////////////////////////
// CONFIG
// Constants defining the configuration.

// The path to the page's CSS file.
// TODO: Dynamically create the URL, relative to this JS file.
var PATH_CSSFile = "https://appydog.github.io/TelehackProfile/happydog.css";

///////////////////////////////
// LOAD STYLESHEET

var objLinkElement = document.createElement("link");
objLinkElement.setAttribute("rel", "stylesheet");
objLinkElement.setAttribute("type", "text/css");
objLinkElement.setAttribute("href", PATH_CSSFile);

document.getElementsByTagName("head")[0].appendChild(objLinkElement);

///////////////////////////////
// Proof of concept for Github hosting.
// Will be replaced by something actually worthwhile, eventually.

if (typeof console != "undefined")
	console.log("Loader loaded.");
