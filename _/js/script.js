var pixGrid=function(){function a(a){var b=(window.innerWidth-a.width)/2,c=(window.innerHeight-a.height)/2;return a.style.top=c+"px",a.style.left=b+"px",a}var b=document.querySelector(".pixgrid");b.addEventListener("click",function(b){if("IMG"===b.target.tagName){var c=document.createElement("div");c.id="overlay",document.body.appendChild(c),c.style.position="absolute",c.style.top=0,c.style.backgroundColor="rgba(0, 0, 0, 0.7)",c.style.cursor="pointer",c.style.width=window.innerWidth+"px",c.style.width=window.innerHeight+"px",c.style.width=window.pageYOffset+"px",c.style.width=window.pageXOffset+"px";var d=(b.target.src,document.createElement("img"));d.id="largeImage",d.src="imageSrc.substr(0, imageSrc.length-7).jpg",d.style.display="block",d.style.position="absolute",d.addEventListener("load",function(){this.height>window.innerHeight&&(this.ratio=window.innerHeight/this.height,this.height=this.height*this.ratio,this.width=this.width*this.ratio),this.width>window.innerWidth&&(this.ratio=window.innerWidth/this.width,this.height=this.height*this.ratio,this.width=this.width*this.ratio),a(this),c.appendChild(d)}),d.addEventListener("click",function(){c&&(c.parentNode.removeChild(c),window.removeEventListener("resize",window,!1),window.removeEventListener("scroll",window,!1))},!1),window.addEventListener("scroll",function(){c&&(c.style.top=window.pageYOffset+"px",c.style.left=window.pageXOffset+"px")},!1)}},!1)};