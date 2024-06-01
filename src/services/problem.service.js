const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService {

    constructor(problemRepository){
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData) {
             // 1. Sanitize the markdown for description 
            console.log("problem description", problemData.description);
            console.log("problem title", problemData.title);
            
            problemData.description = sanitizeMarkdownContent(problemData.description);
             // 2. Create the problem
            console.log("Problem data", problemData);
            const problem = await this.problemRepository.createProblem(problemData);
             // 3. Return the problem
            
            console.log("Problem created", problem);
            return problem;
    }

    async getAllProblems(){
        const problems = await this.problemRepository.getAllProblems();
        return problems;
    }

}

module.exports = ProblemService;
