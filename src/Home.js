
function Home({ companyInfo }) {

    const theAbout = companyInfo.about

    return (
        <div>
            <h1 className="font-serif text-center text-4xl p-4">Home</h1>
            <p className="font-serif text-center text-xl p-4">{theAbout}</p>
        </div>
    )
}
export default Home