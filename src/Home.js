
function Home() {
    return (
        <div>
            <h3>Leave A Review</h3>
            <form>
                <input type="text" placeholder="Review Title Here" /><br />
                <input type="text" placeholder="Your Name Here" /><br />
                <input type="text" placeholder="Leave your review here" /><br />
                <input type="number" placeholder="Rating from 1-10" /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Home