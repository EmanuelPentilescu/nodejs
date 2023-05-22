const { createClient } = require("@supabase/supabase-js");

require("dotenv").config();

module.exports = function dbConnection() {
  const supabase = createClient(
    process.env.supabaseURL,
    process.env.supabaseKEY
  );
  return supabase;
};
