const steamrollArray = (nestedArray) => {
  let newArray = [];

  nestedArray.forEach((elmt) => {
    if (Array.isArray(elmt)) {
      // si c’est un tableau, on l’aplatit récursivement
      newArray.push(...steamrollArray(elmt));
    } else {
      newArray.push(elmt);
    }
  });

  return newArray;
};
