function handleSubmit(e) {
  e.preventDefault();
  let inputField = document.getElementById("input-field");
  let text = inputField.value;
  inputField.value = "";
  createIdenticon(text);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
})

function createIdenticon(text){
  let hashedArray = md5.array(text);
  console.log(text)
  console.log(hashedArray)
  colorBlocks(hashedArray);
}

function colorBlocks(hashedArray){
  const blockColor = "rgb(" + `${hashedArray[0]}, ${hashedArray[1]}, ${hashedArray[2]}` + ")";
  let index = 0;
  let element;
  let element2;
  for(let y = 0; y < 3; y++){
    for(let x = 0; x < 5; x++){
      element = document.getElementById(`${x}-${y}`);
      element.style.backgroundColor = "rgb(255, 255, 255)";
      if(hashedArray[index] % 2 === 0){
        element.style.backgroundColor = blockColor;
      }
      //check if done
      if(index === 14){
        return 1;
      }
      //color mirrored block
      if(index < 5){
        element2 = document.getElementById(`${x}-${4}`);
        element2.style.backgroundColor = element.style.backgroundColor;
        console.log("here < 5")
        console.log(element2)
      }
      else if (index < 10) {
        element2 = document.getElementById(`${x}-${3}`);
        element2.style.backgroundColor = element.style.backgroundColor;
        console.log("here < 10")
      }
      index++;
    }
  }
}
