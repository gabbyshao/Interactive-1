function randomIframe() {
  var ends = [
    "https://americanliterature.com/author/o-henry/short-story/the-gift-of-the-magi",
    "http://www.uol.com.br",
    "http://www.bol.com.br"

  ];

  var i = Math.floor(Math.random() * ends.length - 1);

  var iframe = document.createElement('iframe');
  iframe.src = ends[i];
  iframe.style.height = '300px';
  iframe.style.width = '600px';
  document.body.appendChild(iframe);

}

//window.onload = randomIframe;
document.getElementById("new-quote").onclick = randomIframe;
