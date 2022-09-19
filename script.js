function generateQr(){
   var input = document.querySelector(".form-container input").value;
   if(input == "") return alert("Please enter some text or url")

   var img = document.querySelector(".output-container img");

   var url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;
   img.src = url;

   var output = document.querySelector(".output-container").classList.remove("hidden")
}