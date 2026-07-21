let toggled = false;

function changePhoto() {
  const img = document.getElementById("photo");
  img.src = toggled ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbeLXLsGwRgupntjNv-qBA9RiP9i87LhMIthe_59q_j1sQjiijfIySD2fa&s=10" :
   "https://posterjack.ca/cdn/shop/articles/landscape_photography_tips_featured_image.jpg?v=1563408049&width=1500";
  toggled = !toggled;
}
