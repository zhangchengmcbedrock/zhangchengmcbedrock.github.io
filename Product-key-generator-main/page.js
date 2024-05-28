function generateRandomString() {
    var result = '';
    var characters = '23456789BCDFGHJKLMNPQRSTVWXYZ';
    var charactersLength = characters.length;

    for (var i = 0; i < 25; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));

      if ((i + 1) % 5 === 0 && i < 24) {
        result += '-';
      }
    }

    document.getElementById('randomString').textContent = result;
  }

  function copyToClipboard() {
    var copyText = document.getElementById('randomString');
    var selection = window.getSelection();
    var range = document.createRange();

    range.selectNodeContents(copyText);
    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand('copy');
    alert('产品密钥已复制到剪贴板：' + copyText.textContent);
  }