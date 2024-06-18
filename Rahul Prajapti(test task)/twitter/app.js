document.addEventListener('DOMContentLoaded', function () {
    const article = document.getElementsByClassName('article');
    const newArticle = article.length;
    const customMenu = document.getElementById('customMenu');
    const twitterShareBtn = document.getElementById('twitterShareBtn');
  
    for(let i = 0; i < newArticle; i++){
      article[i].addEventListener('mouseup', function (e) {
        const selectedText = window.getSelection().toString().trim();
        if (selectedText !== '') {
          const selection = window.getSelection();
          const range = selection.getRangeAt(0);
          const rect = range.getBoundingClientRect();
    
          customMenu.style.display = 'block';
          customMenu.style.top = `${rect.bottom}px`;
          customMenu.style.left = `${rect.left}px`;
    
          twitterShareBtn.onclick = function () {
            const encodedText = encodeURIComponent(selectedText);
            const twitterURL = `https://twitter.com/intent/tweet?text=${encodedText}`;
            window.open(twitterURL, '_blank', 'width=550,height=420');
            customMenu.style.display = 'none';
          };
        } else {
          customMenu.style.display = 'none';
        }
      });
    }
    
  
    // Hide the custom menu on outside click
    document.addEventListener('mouseUp', function (e) {
      if (!customMenu.contains(e.target)) {
        customMenu.style.display = 'none';
      }
    });
  });