(function generateParagraphs(n = 60) {
  let i = 1;
  while (i <= n) {
    const paragraph = document.createElement("p");
    paragraph.style.marginLeft = "10px";
    const txt = document.createTextNode(`Paragraph ${i}`);
    paragraph.appendChild(txt);
    document.body.appendChild(paragraph);
    i++;
  }
})();
