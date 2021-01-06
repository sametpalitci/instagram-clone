const emptyAreaCheck = (...theArgs) => {
    for (let i = 0; i < theArgs.length;i++){
      if(theArgs[i].length === 0) return false;
    }
    return true;
}

export default emptyAreaCheck;