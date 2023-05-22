module.exports = function supabaseDB(supabase) {
  async function addIntoDatabase(table, object) {
    const { error } = await supabase.from(table).insert(object);
    if (error) throw error;
    else return true;
  }

  async function getObject(table, columnName, columnValue) {
    const { data, error } = await supabase
      .from(table)
      .select("*")
      .eq(columnName, columnValue);

    if (error) throw error;

    return data;
  }

  async function getAllObjects(table) {
    const { data, error } = await supabase.from(table).select("*");
    if (error) throw error;

    return data;
  }

  async function updateOneObject(table, columnName, columnValue, newObject) {
    const { error } = await supabase
      .from(table)
      .update(newObject)
      .eq(columnName, columnValue);
    if (error) throw error;

    return true;
  }
  async function deleteFromDatabase(table, columnName, columnValue) {
    const { error } = await supabase
      .from(table)
      .delete()
      .eq(columnName, columnValue);

    if (error) throw error;

    return true;
  }

  async function login(credentials) {}

  async function register(credentials) {
    const { data, error } = await supabase.auth.signUp(credentials);
    if (error != null) throw Error(error);
    return true;
  }

  async function query(query) {
    const { data, error } = await supabase.query(query);
    if (error != null) throw Error(error);
    return data;
  }
  return {
    addIntoDatabase,
    getObject,
    getAllObjects,
    updateOneObject,
    deleteFromDatabase,
    login,
    register,
    query,
  };
};
