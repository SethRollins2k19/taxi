function formatPhoneNumber (string) {
  // string string.split("").slice(0,18).join("");
  // +7 (___) ___-__-__
  string = string.split("");
  string = [...string].slice(0,18).map((item,index) => {
    if(isNaN(Number(item))){
      return "";
    }
    if(item === " ") return "";
    return item;
  }).join("").split("");
  string = string.map((item,index) => {
    switch (index) {
      case 0: return "+"+item;
      case 1: return " (" + item;
      case 3: return item;
      case 4: return ") " + item;
      case 7: return  "-" + item;
      case 9: return  "-" + item;

      default: return item
    }
  });
  return string.join("")
}


export {
  formatPhoneNumber
}
