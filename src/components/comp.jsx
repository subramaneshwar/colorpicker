import './comp.css'

function Card({ hex, colors }) {
    return (
        <div className="card">
            <div className="color" style={{backgroundColor:colors}}>
                    
            </div>
            <div className="text">
                <p className='hex'>{hex}</p>
                <p style={{color:colors}}>{colors}</p>
            </div>
        </div>
    )
}
export default Card
