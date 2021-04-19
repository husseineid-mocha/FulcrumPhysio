<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://fulcrumphysio.herokuapp.com/">
    <img src="./READMEImages/fulcrumLogo.png" alt="Logo" style="background-color:white">
  </a>

  <h3 align="center">Fulcrum Physio</h3>

  <p align="center">
   Fulcrum Physio is an orthopedic physical therapy symptom checker. Create your own program or have us create one for you by tapping into the experience of several Doctors of Physical Therapy. We'll ask you the same questions we ask our patients to guarantee we have an accurate diagnosis and helpful advice and exercises based on your pathology. 
    <br />
    <a href="https://github.com/husseineid-mocha/FulcrumPhysio/wiki"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://fulcrumphysio.herokuapp.com/">View Site</a>
    ·
    <a href="https://github.com/husseineid-mocha/FulcrumPhysio/issues">Report Bug</a>
    ·
    <a href="https://github.com/husseineid-mocha/FulcrumPhysio/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[Click here to view FulcrumPhysio live on the web!](https://fulcrumphysio.herokuapp.com/)
<br>
</br>
![homepage-screenshot](READMEImages/splash.png)

## Overall Structure

### Back End
The app was built using Flask, SQLAlchemy, and Python on the back end with a PostgreSQL database. The backend structure is RESTful API. Model associations are used to minimize database queries to the backend, assuring speed and reliability.

### Front End
The front end is built with React and Javascript while utilizing Redux architecture, producing a lightning-fast user interface and calling upon dynamically rendered components.

### Built With

* [React](https://reactjs.org/)
* [JavaScript](https://www.javascript.com/)
* [Python](https://docs.python.org/3/)
* [Redux](https://redux.js.org/)
* [Flask](https://flask.palletsprojects.com/en/1.1.x/)
* [SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/en/2.x/)
* [PostgreSQL](https://www.postgresql.org/docs/current/)
* [CSS](http://www.css3.info/)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Here is everything we need you to do to get started with Discordanc3.

### Installation

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/husseineid-mocha/FulcrumPhysio.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.


<!-- USAGE EXAMPLES -->
## Usage
### An easy-to-use login with a pre-configured Demo User.
![Login](READMEImages/demoLogin.png)
### Hover over injured body part to answer questions and receive personalized program
![Create Own Plan](READMEImages/createOwnPlan.gif)
### Create your own plan and add / edit / delete exercises
![Exercises](READMEIMAGES/addEditDelete.gif)


<!-- ROADMAP -->
## Roadmap

See the [Project Wiki](https://github.com/husseineid-mocha/FulcrumPhysio/wiki) for more details about Discordanc3.

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- CONTACT -->
## Contact 

* Hussein Eid - [LinkedIn](https://www.linkedin.com/in/hussein-eid/) - [GitHub](https://github.com/husseineid-mocha)


Project Link: [https://github.com/husseineid-mocha/FulcrumPhysio/](https://github.com/husseineid-mocha/FulcrumPhysio/)
