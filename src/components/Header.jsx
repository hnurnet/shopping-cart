import React from 'react'
import {Navbar,Container,NavbarBrand, FormControl, Nav, Dropdown, DropdownToggle, DropdownMenu,Button} from "react-bootstrap";
import { Link } from 'react-router-dom';
import {FaShoppingCart} from "react-icons/fa";
import {AiFillDelete} from "react-icons/ai";
import {CartState} from "../context/Context";


const Header = () => {
    const {
        state: { cart },
        dispatch,
      } = CartState();
    
  return (
    <Navbar bg='dark' variant='dark' style={{height: 80}}>
        <Container>
            <NavbarBrand><Link>Shopping Cart</Link></NavbarBrand>
            <Navbar.Text>
                <FormControl 
                style={{width: 500}} placeholder='Search a product . . .' 
                className='m-auto'/>
            </Navbar.Text>
            <Nav>
                <Dropdown alingRight>
                    <DropdownToggle variant='success'>
                        <FaShoppingCart color='white' fontSize="25px"/>
                        <badge>{cart.length}</badge>
                    </DropdownToggle>
                    <DropdownMenu style={{minWidth: 370}}>
                        {cart.length > 0 ? (
                            <>
                            {cart.map(prod => (
                                <span className='cartitem' key={prod.id}>
                                    <img 
                                    src={prod.image} className='cartItemImg'
                                    alt={prod.name} 
                                    />
                                    <div className="cartItemDetail">
                                        <span>{prod.name}</span>
                                        <span>$ {prod.price.split(".")[0]}</span>
                                    </div>
                                    <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>          
                            ))}
                            <Link to="cart">
                                <Button style={{width: "95%", margin: "0 10px"}}>
                                Go To Cart
                                </Button>
                            </Link>
                            </>
                        ) : (
                            <span style={{padding: 10}}>Cart is Empty!</span>
                        )}
                    </DropdownMenu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header
