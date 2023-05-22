const dbController = require("./controller/dataController");
const supabaseImport = require("./database/supabase/supabase");
const supabaseConnection = require("./database/supabase/dbConnection");
const validatorsImport = require("./validator/validator_controller");
const modelImport = require("./model/modelImplementation");
const useCasesImport = require("./useCases/useCases");
const webserver = require("./webserver/server");

async function main() {
  console.log(JSON.stringify(["4ac51997-f541-4f08-8637-0c0b92a983a2"]));
  const supabase = supabaseImport(supabaseConnection());
  const dataController = dbController(supabase);
  const validators = validatorsImport();
  const model = modelImport(validators);
  const useCases = useCasesImport(dataController);
  const server = webserver(useCases, model);
  server.run();
}

main();
