let array = ["From Scratch", 33, ["javascript", "html", "css"], true];

console.log(array[0][4]);

for (i = 0; i < array.length; i++) {
  console.log(array[i]);
  console.log("Element numéro : " + [i] + " est un " + typeof array[i]);
}

const numbers = [21, 45, 1, 22, 44, 7]
numbers.sort();


// ****************************************
const input = document.getElementById("input");
const video = document.getElementById("video");
let link = "";

input.addEventListener("input", (e) => {
  changeLink(e.target.value);

  if (link) {
    video.innerHTML = `
      <iframe
        width="654"
        height="491"
        src=${link}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>`;
  }
});

const changeLink = (linkToChange) => {
  embed = linkToChange.replace("watch?v=", "embed/");
  link = embed.split("&")[0];
};
