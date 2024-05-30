const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
    title: {
        type : String,
        required : [true, "Title is not be empty"],
    },
    description: {
        type : String,
        required : [true, 'Description is not be empty'],
    },
    difficulty: {
            type : String,
            enum :['easy', 'medium','hard'],
            required : [true, 'Difficulty is not be empty'],
            default : 'easy'
    },
    testCases : [
        {
            input : {
                type: String,
                required : true
            },
            output : {
                type: String,
                required : true
            }
        }
    ],
    editorial : {
        type : String
    }    
});

const Problem = mongoose.model('problem', problemSchema);


module.exports = Problem;