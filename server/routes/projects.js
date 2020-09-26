import { Router } from "../../node_modules/express";
const router = Router();
import { query } from "../database_connection";

// -----------------------------------------------------------------------
//get all projects
router.get("/projects", (request, response, next) => {
  query("SELECT * FROM projects ORDER BY project_id ASC", (error, results) => {
    if (error) {
      console.log(error)
      return response.status(404).json('no projects found');
    }
    else {
      // console.log(response.status(200))
      return response.status(200).json(results.rows);
    }
  });
});
//get a project by Id
router.get("/projects/:id", (request, response, next) => {
  const id = parseInt(request.params.id);
  query(
    "SELECT * FROM projects WHERE project_id=$1",
    [id],
    (error, results) => {
      if (error) {
        console.log(error)
        //return an error message stating there are no projects
        return response.status(404).json('project not found');
      }
      //return a single project
      return response.status(200).json(results.rows);

    }
  );
});
export default router;