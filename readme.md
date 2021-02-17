# Graded Project - Mahanoro Station
<h1 align="center">Mahanoro Station</h1>

<div align="center">
  <h3>
    <a href="https://github.com/Betsimisaraka/mahanoro-station">
      Demo
    </a>
    <span> | </span>
    <a href="https://mahanoro-station-anita.netlify.app/">
      Solution
    </a>
  </h3>
</div>

In this project our challenge is to build a website that will allow us to reserve some seats in ``Taxi brousses` departure from Mahanoro. Also we have to get it work with `redux`, `compound components` and `styled components`, and then make it lokk as close to the design as possible.
## Overview
This how my finish project look like:

## My demo
You can see my demo by clicking this link with the username[Betsimisaraka]("https://github.com/Betsimisaraka/mahanoro-station")

## Built with
- [React]()
- [Redux]()
- [Compound components]()
- [Styled components]()
- [Html]()
## Fonctionality:

Users should be able to 
- pick a city from the city list,
- see the available trips to that city, and pick one where seats are still available.
- select one or more seats in the car, and see how much it's going to cost
- comfirm the booking
- see their comfirmed booking on the `My account` page
- Modify their own information, like name or phone number, on that same page.

## A brief explaination about the structure of my projects

Firstly, I created a few files `index.js` to render the app to the dom , `App.js` in which I have the route and the paths to go in every pages, `index.html` this is the root, `state.js` where I store the initial state and a `store.js` wich store the reducers and the state.

Secondly, I have a few folders such as `actions` which contains the action creator functions, `components` that's where I put the `compound components` and the `styled components`, `containers` where I display all the data and the logic, `pages` in this one I put all the files that specified as a page and the `reducers` where I combined all of the reducer functions.

## Improvement

If had more time I would have improved these few things below:
-	My seats part because I didn’t make them work
-	My account section which contains the personal information and all of my booking place.

## New things that I learned while working in this project

Using `redux` with `useReducer` is kind of new thing for me so I have learned a lot during this project. I learned about fetching data from an API with `redux`
 
## Challenging part

The most challenging part for me is selecting the seats and the background color should change into yellow.
Also to get the city and the departure day in the my account section I couldn't make it work. I also have trouble to store the total in the state and its through an error.

## A new explaination about a specific topic

I nead more explanation about:
-	to change the isavailable boolean into the opposite when a seat is clicked.
-	updating the form and to update the personal information.
-	To display the name of the city and the departure date in the my account section.

## How to use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/Betsimisaraka/mahanoro-station

# Install dependencies
$ npm install react react-dom react-modal react-redux react-router-dom redux redux-thunk state styled-components

# Run the app
$ parcel index.html
```

## Contact

-   GitHub [Betsimisaraka](https://{github.com/Betsimisaraka})

