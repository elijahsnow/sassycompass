var pixGrid = function() {
    // Selecting our node
    var myNode = document.querySelector('.pixgrid');
    myNode.addEventListener("click", function(e) {
        if(e.target.tagName === "IMG") {
            var myOverlay = document.createElement('div');
            myOverlay.id = 'overlay';
            document.body.appendChild(myOverlay);

            //set up overlay styles
            myOverlay.style.position = "absolute";
            myOverlay.style.top = 0;
            myOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            myOverlay.style.cursor  = 'pointer';

            //resize and position overlay
            myOverlay.style.width = window.innerWidth + 'px';
            myOverlay.style.width = window.innerHeight + 'px';
            myOverlay.style.width = window.pageYOffset + 'px';
            myOverlay.style.width = window.pageXOffset + 'px';

            //create image element
            var imageSrc = e.target.src;
            var largeImage = document.createElement('img');
            largeImage.id = 'largeImage';
            largeImage.src = 'imageSrc.substr(0, imageSrc.length-7)' + '.jpg';
            largeImage.style.display = 'block';
            largeImage.style.position = 'absolute';

            //wait until the image has loaded
            largeImage.addEventListener('load', function() {
                //resize if taller
                if (this.height > window.innerHeight) {
                    this.ratio = window.innerHeight / this.height;
                    this.height = this.height * this.ratio;
                    this.width = this.width * this.ratio;
                }
                //resize if wider
                if (this.width > window.innerWidth) {
                    this.ratio = window.innerWidth / this.width;
                    this.height = this.height * this.ratio;
                    this.width = this.width * this.ratio;
                } //if wider

                centerImage(this);
                myOverlay.appendChild(largeImage);
            }); //image has loaded

            //listen for image click
            largeImage.addEventListener ("click", function() {
                if (myOverlay) {
                    myOverlay.parentNode.removeChild(myOverlay);
                    window.removeEventListener('resize', window, false);
                    window.removeEventListener('scroll', window, false);
                } //overlay exists
            }, false); //image clicked

            //listen for scroll
            window.addEventListener ("scroll", function() {
                if (myOverlay) {
                    myOverlay.style.top = window.pageYOffset + 'px';
                    myOverlay.style.left = window.pageXOffset + 'px';
                } //overlay exists
            }, false);
        } //target is an image
    }, false); //image is clicked

    //center the image
    function centerImage (theImage) {
        //center on the window
        var myDifX = (window.innerWidth - theImage.width)/2;
        var myDifY = (window.innerHeight - theImage.height)/2;

        theImage.style.top = myDifY + 'px';
        theImage.style.left = myDifX + 'px';

        return theImage;
    } //center an image
}; //pixGrid
