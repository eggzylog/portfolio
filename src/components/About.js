function About() {
    return (
        <div className='about row align-items-start'>
            <div className='summary col-md-6'>
                <h2><span>SUMMARY:</span></h2>
                <ul>
                    <li>I was directly recruited after college to be part of a team that teaches mathematics online, and proudly I have been one for almost 10 years. I instantly fell in love with teaching. Though, I still enjoy doing it, I feel like doing something more for personal and professional growth.</li>
                    <li>I have been thinking of changing careers for a long time, and attending my first bootcamp was my best decision because it put me in the right track.</li>
                    <li>I am well-organized, and I can be creative in problem solving, which I think is a great asset in web development.</li>
                    <li>Work-from-home is a very familiar setup for me, but I'm also open to having to work onsite.</li>
                </ul>
            </div>

            <div className='technologies col-md-6'>
                <h2><span>TECHNOLOGIES:</span></h2>
                <ul>
                    <li className="web-fundamentals"><span className="web-fundamentals">Web Fundamentals:</span> HTML5, CSS, LESS, SASS, PicoCSS, Media Query, Bootstrap, RWD, GitHub, jQuery, ERD, MySQL, SQL Queries</li>
                    <li className="php"><span className="php">PHP:</span> OOP, Codeigniter, Ajax</li>
                    <li className="javascript"><span className="javascript">JavaScript:</span> JavaScript ES5/ES6, Node.js, NPM, Express.js, Socket.io, React.js, Angular, TypeScript</li>
                    <li className="others"><span className="others">Others:</span> MS Word, MS Excel, MS PowerPoint, LaTeX, Canva</li>
                </ul>
            </div>
        </div>
    )
}

export default About;