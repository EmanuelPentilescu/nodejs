const buildRegisterReq = (registerValidator) => {
  return ({ email, parola } = {}) => {
    let { error } = registerValidator({
      email,
      parola,
    });
    if (error) throw new Error(error);
    return {
      getEmail: () => email,
      getParola: () => parola,
    };
  };
};

module.exports = buildRegisterReq;
