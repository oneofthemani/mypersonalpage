
import ImageSlider from "./ImageSlider";

const collectionImageMom = [
    {
        label: "Annecim iyi ki sen",
        imgPath: "assets/images/momFirst.jpg"
    }, 
    {
        label: " bizim annemizsin!",
        imgPath: "assets/images/momSecond.jpg"
    },
    {
        label: " Seni çoooook seviyoruz!!!",
        imgPath: "assets/images/momTjird.jpg"
    },
    {
        label: " Anneler Günü'n kutlu olsun canım annem!",
        imgPath: "assets/images/momFourth.jpg"
    }
]

export default async function Page() {

    return (
        <>
            <div className="items-center justify-items-center min-h-screen p-8 pb-20 ml-64">
                <ImageSlider />
            </div>
        </>
    )
}