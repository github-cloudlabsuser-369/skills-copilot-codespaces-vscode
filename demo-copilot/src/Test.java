class Test {

    public static void main(String[] args) {
        //find all images with out alternate text
        //and give them a red border
        void processImages() {

            for (var image : images) {
                if (image.getAttribute("alt").isEmpty()) {
                    image.style.border = "1px solid red";
                }
            }
        }
    }
}