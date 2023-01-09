//[AppComp 1.09]

import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


//[APB 2.60] Define User Interactable Data Filters
function Products() {
    //[APB 2.61] Set States
    const [data, setData] = useState ([]);
    const [filter, setFilter] = useState (data);
    const [loading, setLoading] = useState (false);
    const [colour, setColour] = React.useState(''); //Dropdown menu to filter data by colour
    
    //[APB 2.62] Database Call to Load all Leader Info Records
    const getLeaderData = async() => {
        await axios("http://localhost:8080/dbscompdex/leaderinfo")
        .then((json) => {
            console.log(json.data)
            setFilter(json.data)
            setData(json.data)
            setLoading(false);
        }
        )
    }

    //[APB 2.63] Calls Selected Colour Filter by User and Calls Leader Info Function
    const handleColourChange = async (event) => {
        setColour(event.target.value);
        filterProduct(); // called function here
      };

    useEffect(() => {
      getLeaderData();
    }, [])


    const Loading = () => {
        return(
            <>x
                Loading....
            </>
        )
    }

    //[APB 2.64] Function for Filtering Data Categories
    const filterProduct = () =>{
        console.log(colour) //colour state is not updated yet and is the initial empty state, probalby something about async
        const updatedList = data.filter((x)=>x.colour === colour);
        console.log(updatedList)
        setFilter(updatedList);
    }

    //[APB 2.65] Filter Buttons and Behaviour
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Leader</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>Code</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("")}>Colour</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Trait</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Character</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Set</button>


                 </div>

                 <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Colour</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={colour}
                            label="Colour"
                            onChange={handleColourChange}>
                                <MenuItem value={"Red"}>Red</MenuItem>
                                <MenuItem value={"Yellow"}>Yellow</MenuItem>
                                <MenuItem value={"Green"}>Green</MenuItem>
                                <MenuItem value={"Blue"}>Blue</MenuItem>
                                <MenuItem value={"Black"}>Black</MenuItem>
                            </Select>
                    </FormControl>
                </Box>


                {/* [APB 2.66] Data Categories to be Returned on the Webpage*/}
                 {filter.map((property) =>{
                    return(
                        <>
                            <div className='col-md-3 mb-4' key={property.Leader}>
                                <div className="card h-100 text-center p-4 " key={property.Code}>{property.Code}</div>
                                <div className="card h-100 text-center p-4 pe-2" key={property.TotalTops}>{property.TotalTops}</div>
                                <div className="card h-100 text-center p-4" key={property.Colour}>{property.Colour}</div>
                                <div className="card h-100 text-center p-4" key={property.Trait}>{property.Trait}</div>
                                <div className="card h-100 text-center p-4" key={property.CharacterName}>{property.CharacterName}</div>
                                <div className="card h-100 text-center p-4" key={property.CardSet}>{property.CardSet}</div>
                                <div className="card h-100 text-center p-4" key={property.Era}>{property.Era}</div>
                                {/* <img className="card-img-top" src={product.image} alt={product.title} height="250px" /> */}
                                {/* <div className="card-body">
                                <h5 className="card-title mb-0 text-dark">{product.title}</h5>
                                <p className="card-text lead fw-bold text-dark">${product.price}</p>
                                <a href="#" className="btn btn-outline-dark">Buy Now</a> */}
                             
                            
                            </div>
                        </>
                    )
                 })}
            </>
        )
    }
    
  //[APB 2.67] Divs to Load Page Content into
  return (
    <div>
        <div className='container my-5 py-5'>
            <div className='row'>
                <div className='col-12 mb-5'>
                    <h1 className='display-6 fw-bolder text-center'>Leaders</h1>
                    <hr />
                </div>
            </div>
            <div className='row justify-content-center'>
                {loading ? <Loading/> : <ShowProducts/> }
            </div>
        </div>
    </div>
  )
}
export default Products