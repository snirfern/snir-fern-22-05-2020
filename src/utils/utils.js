const path = "weather_fav";
export const lsGetLength = () => {
  try {
    let ls = localStorage.getItem(path);
    let parsed = JSON.parse(ls);
    return parsed === undefined || parsed === null || parsed.length === 0
      ? 0
      : parsed.length;
  } catch (e) {
    console.log("Error occured during ls pulling");
  }
};
export const lsGetKeys = () => {
  try {
    let ls = localStorage.getItem(path);
    let parsed = JSON.parse(ls);
    return parsed;
  } catch (e) {
    console.log(e);
    return [];
  }
};
export const lsGetItem = (key) => {
  try {
    let ls = localStorage.getItem(path);
    let parsed = JSON.parse(ls);

    if (parsed === undefined || parsed === null) parsed = [];
    let item = parsed.filter((p) => p.Key === key);
    return item;
  } catch (e) {
    return [];
  }
};

export const lsRemoveItem = (key, value) => {
  let ls = localStorage.getItem(path);

  if (ls === undefined || ls === null) {
    localStorage.setItem(path, JSON.stringify([]));
    return;
  }

  let parsed = JSON.parse(ls);
  parsed = parsed.filter((p) => p !== null && p !== undefined);
  let newLS = [];
  parsed.forEach((p) => {
    if (p.Key !== key) newLS.push({ Key: p.Key, City: value });
  });
  localStorage.setItem(path, JSON.stringify(newLS));
};
export const lsSetItem = (key, value) => {
  if (key === null || value === null || value === null || value === undefined)
    return;
  try {
    let ls = localStorage.getItem(path);
    let parsed = JSON.parse(ls);
    if (parsed === null || parsed === undefined) {
      localStorage.setItem(path, JSON.stringify([{ Key: key, City: value }]));
      return;
    } else if (
      parsed.filter((v) => {
        return v.Key === key;
      }).length === 0
    ) {
      parsed.push({ Key: key, City: value });
    } else return;
    localStorage.setItem(path, JSON.stringify(parsed));
  } catch (e) {
    console.log(e);
  }
};

export const cTOf = (temperature) => {
  let num = temperature * 1.8 + 32;
  return parseInt(num);
};
export const fTOc = (temperature) => {
  let num = (temperature - 32) / 1.8;
  return parseInt(num);
};
