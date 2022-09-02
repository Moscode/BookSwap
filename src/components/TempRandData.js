import './tempranddata.css'

const DevsData = ({devs_list}) => {
    const title = "Software Engineer"
    const tech_stacks = ["HTML", "CSS", "React"]
    /*const days_avail = 3
    const company = "Google"*/
    return (
        <>
        <h2 style={{paddingBottom: '40px'}}>Top Contributors</h2>
        <div className='section'>
            {devs_list?.map((dev_data, index) => (
                    <figure className="dev" key={index}>
                    <img src={dev_data.picture.large} alt="dev" className="dev__image" />
                    <figcaption className="dev__profile">
                        <p className="dev__name">
                            {dev_data.name.last + " " + dev_data.name.first}
                        </p>
                        <p className='dev__title'>
                            {title}
                        </p>
                        <p className='dev__techstack'>
                            Tech Stacks: 
                            <p className='skill'>
                                {tech_stacks.map((skill, id) => (
                                <span key={id} className="tech">{skill}</span>
                            ))}
                            </p>
                        </p>
                            <button className='profile'>
                                View Profile
                            </button>
                        {/*<p className='dev__company'>
                            Company: {company}
                        </p>
                        <p className='dev__days'>
                            Available Days: {days_avail}
                                </p>*/}
                    </figcaption>
                    </figure>
))}
        </div>
        </>
    )
}

export default DevsData;