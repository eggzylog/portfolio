function Experience() {
    return (
        <div className='experience row'>
            <div className="exp">
                <img src={require('../assets/images/village-88-icon.png')} alt="Village 88 Icon" />
                <div className="exp-info col-md-8">
                    <h2>Trainee</h2>
                    <h3>Village 88, Inc. · Full-time</h3>
                    <p className='text-muted'>Jul 2022 - Oct 2022 · 4 mos</p>
                    <p className='text-muted'>Philippines</p>
                    <h4><b>Skills: </b>React.js · JavaScript · Node.js · Socket.io · PHP · CodeIgniter · MySQL · AJAX · Bootstrap · Responsive Web Design · HTML · HTML5 · Cascading Style Sheets (CSS) · LESS (Stylesheet Language) · WAMP · jQuery</h4>
                </div>
            </div>
        </div>
    )
}

export default Experience;