const text = [
  `hello i love you bhai  "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
    commodo consequat..." 
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type 
    specimen book. It has survived not only five centuries, but also the leap into 
    electronic typesetting, remaining essentially unchanged. It was popularised in
    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
    and more recently with desktop publishing software like Aldus PageMaker including 
    versions of Lorem Ipsum.
    
    It is a long established fact that a reader will be distracted by the readable 
    content of a page when looking at its layout. The point of using Lorem Ipsum is 
    that it has a more-or-less normal distribution of letters, as opposed to using 
    'Content here, content here', making it look like readable English. Many desktop 
    publishing packages and web page editors now use Lorem Ipsum as their default 
    model text, and a search for 'lorem ipsum' will uncover.
    
    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots 
    in a piece of classical Latin literature from 45 BC, making it over 2000 years 
    old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
    looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum 
    passage, and going through the cites of the word in classical literature, discovered 
    the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de 
    Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 
    45 BC. This book is a treatise on the theory of ethics, very popular during the 
    Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes 
    from a line in section 1.10.32.

    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those 
    interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero 
    are also reproduced in their exact original form, accompanied by English versions from 
    the 1914 translation by H. Rackham.`, // Reduced text for brevity
  // Add more paragraphs as needed
];

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

const item = document.querySelector("#item");
const datacontainer = document.querySelector("#data");

const genrate = () => {
  if (isNaN(item.value) || item.value < 1 || item.value > 30) {
    datacontainer.innerHTML = `<p>Please enter a number between 1 and 30</p>`;
  } else {
    const localtext = shuffle(text);
    const data = localtext.slice(0, item.value);
    const paras = data.map((d) => `<p>${d}</p>`);
    datacontainer.innerHTML = paras.join("");
  }
};
