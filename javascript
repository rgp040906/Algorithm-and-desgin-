javascript:(function(){
  allowCopyAndPaste = function(e){
  e.stopImmediatePropagation();
  return true;
  };
  document.addEventListener('copy', allowCopyAndPaste, true);
  document.addEventListener('paste', allowCopyAndPaste, true);
  document.addEventListener('onpaste', allowCopyAndPaste, true);
})();
