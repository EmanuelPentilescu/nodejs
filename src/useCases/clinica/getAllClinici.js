module.exports = async function getAllClinici(dataController) {
  const response = await dataController.getAllObjects("Clinici");
  return response;
};
