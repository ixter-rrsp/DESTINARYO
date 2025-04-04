
                  
                  document.addEventListener("DOMContentLoaded", function () {
                    updateShareLinks();
                  });
                  
                  function updateShareLinks() {
                    const pageUrl = encodeURIComponent(window.location.href);
                
                    document.getElementById("facebook-share").href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
                    document.getElementById("twitter-share").href = `https://twitter.com/intent/tweet?url=${pageUrl}`;
                  }
                
                  function copyToClipboard() {
                    const pageUrl = window.location.href;
                
                    const tempInput = document.createElement("input");
                    tempInput.value = pageUrl;
                    document.body.appendChild(tempInput);
                
                    tempInput.select();
                    tempInput.setSelectionRange(0, 99999);
                    document.execCommand("copy");
                
                    document.body.removeChild(tempInput);
                    alert("Link copied to clipboard!");
                  }
                
                  updateShareLinks();
           