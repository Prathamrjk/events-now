 import '../../UI1/Home.css'
 const MiniSideProduct = ({product}) => {
    return (  
        <div>
             <div className="message " style={{display:'flex',flexDirection:'column', height:'100px',margin:'0px 10px', alignItems:'center'}}>
                                <img src={product.img}
                                    alt="" style={{width:'90%',height:'40%',borderRadius:'1rem'}} />

                                <div className="message-body">
                                    <h5 style={{fontSize:'0.8rem'}}>{product.title}</h5>
        
                                </div> 
                                <div style={{display:'flex', justifyContent:'space-between',alignContent:'center',alignItems:'center', width:'100%',marginRight:'10px',marginLeft:'15px'}}>
                                <p className="text-muted">Rs. 500</p>
                                    <span  className='btn 'style={{width:'40px',right:'0px',position:'absolute'}}><Icon  icon="uil-eye" style={{fontSize:'20px' }}></Icon></span>
                                </div>

                            </div>

        </div>
    );
}

export default MiniSideProduct;
    

 





{/* <div className="message">
                                <img src="data:image/jpeg;base64,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"
                                    alt="" className="profile-picture" />

                                <div className="message-body">
                                    <h5>Harry Watson</h5>
                                    <p className="text-muted">Good Morning Bro</p>
                                </div>
                            </div> */}
