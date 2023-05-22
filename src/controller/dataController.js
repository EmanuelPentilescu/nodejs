const dataController = (database) => {
  const addIntoDatabase = async (table, object) => {
    return await database.addIntoDatabase(table, object);
  };

  const deleteOneObject = async (table, columnName, columnValue) => {
    return await database.deleteFromDatabase(table, columnName, columnValue);
  };

  const updateOneObject = async (table, columnName, columnValue, newObject) => {
    return await database.updateOneObject(
      table,
      columnName,
      columnValue,
      newObject
    );
  };

  const getObject = async (table, columnName, columnValue) => {
    return await database.getObject(table, columnName, columnValue);
  };

  const getAllObjects = async (table) => {
    return await database.getAllObjects(table);
  };

  const login = async (credentials) => {
    return await database.login(credentials);
  };

  const register = async (credentials) => {
    return await database.register(credentials);
  };

  const query = async (query) => {
    return await database.query(query);
  };
  return {
    addIntoDatabase,
    getObject,
    getAllObjects,
    updateOneObject,
    deleteOneObject,
    login,
    register,
    query,
  };
};

module.exports = dataController;
