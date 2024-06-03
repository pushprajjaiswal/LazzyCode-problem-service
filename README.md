# LazzyCode Problem Setting Service



-------------------------------------

## How routing is working in the project
- /api/v1/problems/ping
   - becouse the route starts with.
        /api      --> /v1     --> /problems     --> /ping
        apiRouter --> v1Router --> problemRouter --> problemController   ==> service layer

        
        { (all of these middleware) (but special things about final middleware is after this we forrward request to service layer) }
        thats why this final middleware is called problem controller
