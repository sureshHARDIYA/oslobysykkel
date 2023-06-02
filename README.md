# Getting Started with Oslobysykkel

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Task 1

## Required Dependencies

1. Install [NodeJs](https://nodejs.org/en). For this project, I used `NODE` version `v18.16.0`.
2. Install either `npm`, `pnpm` or `yarn`. For this project, I used [yarn](https://classic.yarnpkg.com/en/)

## Get started

1. Navigate to the root of the project.
2. Install dependencies `yarn`. If using `npm`, do `npm install`.
3. Start the `yarn start`. If using `npm` do, `npm run start`.

Runs the app in development mode. Open http://localhost:3000 to view it in the browser and should look like:

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/2022919/232900487-87387ddd-8474-4f50-abf2-04e56132fb19.png">

## UI Features

- Client side pagination
- Client side search
- Filters
- Map visualization
- Advance search

# Task 2

1. Skriv tester til koden din fra del 1

- Tests for **Task 1** is in the main branch.
- There are two types of tests written for this project:
  -- **Unit tests**: It is in the `master` branch. For this, I have used `jest`, and `testing-library/react`.
  -- **End-to-End tests**: It is in the [active merge request](https://github.com/sureshHARDIYA/oslobysykkel/pull/1). It is done using `cypress`.
  -- To run cypress:
  1. `yarn`
  2. `npx cypress open`

2. - Lag en responsiv webløsning som visualiser lista på en eller annen måte i et kart

- Solution to this is on branch `kart_visualisering`

![image](https://github.com/sureshHARDIYA/oslobysykkel/assets/2022919/30e9b8fe-a431-424b-a124-e0ea197914eb)

![image](https://github.com/sureshHARDIYA/oslobysykkel/assets/2022919/406f1edd-2898-4f2c-93e4-516350673f0a)
