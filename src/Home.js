import Feed from './Feed';

const Home = ({ tasks }) => {
    return (
        <main className="Home">
            {tasks.length ? (
                <Feed tasks={tasks} />
            ) : (
                <p style={{ marginTop: "2rem" }}>
                    The task list is empty.
                </p>
            )}
        </main>
    )
}

export default Home
