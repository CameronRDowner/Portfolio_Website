import Project from '../models/project';
const projects = [
    new Project(
        'Todo App',
        'An App I wrote in Angular to collect a list of things to do',
        'web',
        ['<i class="fab fa-html5"></i>', '<i class="fab fa-angular"></i>','<i class="fab fa-sass"></i>', '<i class="fab fa-css3-alt"></i>']
    ),
    new Project(
        'Pokedex App',
        'This app utilizes the pokeAPI to allow users to search all current pokemon and look up their info',
        'web',
        ['<i class="fab fa-html5"></i>', '<i class="fab fa-angular"></i>','<i class="fab fa-sass"></i>', '<i class="fab fa-css3-alt"></i>']
    )
    ]

$(document).ready(function(){
let projectContainer = $('#projects-container');
projects.map(project=>{
let projectItem = $('<div></div>');

});



})