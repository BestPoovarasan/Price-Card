function Pricecard({data}){
    return<div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{data.title}</h5>
            <h6 className="card-price text-center">${data.price}<span className="period">/month</span></h6>
            <hr></hr>
            <ul className="fa-ul">
             {
                data.features.map((list)=>{
                    return<li className={list.isEnable ? '':"text-muted"}>
                        <span className="fa-li">
                            <i className="fas fa-check"></i>
                        </span>
                        {list.name}

                    </li>
                })
             }
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Buy</a>
            </div>
          </div>
        </div>
      </div>
}
export default Pricecard;