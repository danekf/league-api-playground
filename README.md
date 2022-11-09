# LeagueApiPlayground

## The "what"
This project will be an exploration of using the riot api. Starting goal is to create seperate widgets that can then be expanded to display extra information.

## Generating a key
In order to generate a key to use the Riot API, visit the [Riot developper website](https://developer.riotgames.com/). 

## Set api key in environment
Rename "/src/environments/apiKeys.example" to apiKeys.ts and insert your API key generated in previous step, where indicated.

## Updating the champion pool.
In the apiKeys.ts file, there is a CURRENT_CHAMPION_LIST. This pulls JSON data for all champions in league at a current patch. This will need to be updated as patches come out, especially when new champions are released.

## Project Roadmap
<ul>
<li>[] - Setup environment variables for API key
<li>[] - Create component for a single search
  <ol>
    <li>[] - Load static info with search parameter
    <li>[] - Create layout for a basic widget
    <li>[] - Add ability to modify search input
    <li>[] - Add expand option for widget to show more info
  </ol>
<li>[] - Create second component for a different search (modeled on first component)
<li>[] - Play and expand further
</ul>


<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

### *↓↓ below to be removed at a later date ↓↓*
# Angular default Readme stuff 


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
