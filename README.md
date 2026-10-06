# InternLink Prototype

A browser-based OJT matching prototype built with plain HTML, CSS, and JavaScript.

## Run locally

Open `index.html` in a browser. The prototype uses external Google Fonts, Material Icons, and Leaflet assets, so those features need an internet connection.

## Project structure

- `index.html` — page structure and screen markup (project entry point)
- `SkillSync_Prototype_Improved.html` — compatibility redirect for older browser tabs and links
- `assets/css/app.css` — application styles
- `assets/js/app.js` — app behavior and data

The JavaScript is organized around `InternLinkApp`, with dedicated `ScreenManager`, `AuthController`, and `OverlayController` classes. Existing inline event handlers are retained for compatibility with the prototype's screens.

## Prototype behavior

Sign-in, sign-up, phone sign-in, Google sign-in, and password reset are UI demonstrations only; no accounts are created and no credentials or reset emails are sent. OJT completion is calculated from approved hours. Pending hours reduce the unlogged balance, and new logs are limited to the remaining requirement.

Internship discovery is designed for students from every program, not only computing courses. The study filter first lets students choose a department (for example, Engineering, Computing & IT), then a related program (for example, Computer Engineering, Information Technology, Software Engineering, Cybersecurity, or Computer Science). It includes common programs across business, communications, education, health, hospitality, arts, public service, agriculture, science, and sports, too. The examples are not an exhaustive catalogue of every school’s degree names; selecting “Any program” keeps all sample internships in that department eligible. Use study program, skill, distance, and match filters together, or leave the department set to “Any department.” Listings and course matches are illustrative prototype data.

Community post authors and commenters have tappable profile previews with a prototype role, description, and skills/interests. Profile actions support following and opening a direct-message conversation. Sample community identities and role details are illustrative and are not verified accounts.

The map lets you search for a city or landmark, adjust the nearby search radius, and select a listing pin to preview its details. The chosen location, radius, and filters are saved in this browser and restored on reload. Location search and map tiles require an internet connection.
