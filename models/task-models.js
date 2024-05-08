// // const mongoose = require('mongoose');

// // const userSchema = new mongoose.Schema({
// //     name: {
// //         type: String,
// //         required: true,
// //     },
// //     email: {
// //         type: String,
// //         required: true,
// //         unique: true,
// //     },
// //     password: {
// //         type: String,
// //         required: true,
// //     },
// // });

// // const User = mongoose.model('Task', userSchema);

// // module.exports = Task

// /*
// TASK ID --gotten from mongodb
// TITLE -title /name of task 
// DESCRIPTION 
// DUE DATE 
// PRIORITY-high medium low
// STATUS-started ,not started in progress 
// ASSIGNEE
// TAGS-work,personal ,urgent ,school needs e.t.c
// CREATED AT 
// UPDATED AT 
// */



// const moongose = require('mongoose')

// const taskSchema = new mongoose.Schema({
// title:{
// 	type:string,
// 	required:true
// },
// description{
// 	type:date,
// 	required:true
// },
// dueDate{
// 	type:date,
//         required:true
// },
// priority{
// 	type:string,
//         enum:['not started','in progress','completed']
// }
// })
