const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService {

    constructor(problemRepository){
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData) {
             // 1. Sanitize the markdown for description 
            problemData.description = sanitizeMarkdownContent(problemData.description);
             // 2. Create the problem
            const problem = await this.problemRepository.createProblem(problemData);
             // 3. Return the problem
            return problem;
    }

    async getAllProblems(){
        const problems = await this.problemRepository.getAllProblems();
        return problems;
    }

    async getProblem(problemId){
            const problem = await this.problemRepository.getProblem(problemId);
            return problem;
        
    }

    async deleteProblem(problemId) {
        const problem = await this.problemRepository.deleteProblem(problemId);
        return problem;
    }

}

module.exports = ProblemService;
