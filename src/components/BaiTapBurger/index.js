import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./BaiTapBurger.css";

export default function BaiTapBurger() {
    const renderBreadmid = () => {
        // console.log(burger);
        let content = [];
        for(let propBuger in burger){
            let breadMid = [];
            for(let i = 0; i < burger[propBuger]; i ++){
                breadMid.push(<div key={i} className={propBuger}></div>)
            }
            content.push(breadMid);
        }
        return content;
        // return Object.entries(burger).map(([propBuger, value], index) => {
        //     const breadMid = [];
        //     for (let i = 0; i < value; i++) {
        //         breadMid.push(<div key={i} className={propBuger}></div>);
        //     }

        //     return breadMid;
        // });
    };

    const renderMenu = () => {
       
      return Object.entries(menu).map(([propMenu,price], index) => {
        //   console.log(propMenu, price);
            return (
                <tr key={index}>
                    <td>{propMenu}</td>
                    <td>
                        <button onClick={() => addBreadMid(propMenu, 1)} className="btn btn-success">+</button>
                            {burger[propMenu]}
                        <button onClick={() => addBreadMid(propMenu, -1)}  className="btn btn-danger">-</button>
                    </td>
                    <td>{price}</td>
                    <td>{burger[propMenu] * price}</td>
                </tr>
            )
      });
        
        
    }
     
    // Lấy state từ store sử dụng useSelector    
    const burger = useSelector(state => state.BurgerReducer.burger);
    const menu = useSelector(state => state.BurgerReducer.menu);
    const total = useSelector(state => state.BurgerReducer.total);
    // 
    const dispatch = useDispatch(); 
    
    const addBreadMid = (propsBuger,amount) => {
        const action = {
            type: "ADD_BREADMID",
            payload: {
                propsBuger,
                amount,
            }
        }
        dispatch(action);
    }

    return (
        <div className="container">
            <h3 className="text-center pb-2 text-success">Bài tập burger</h3>
            <div className="row">
                <div className="col-7">
                    <h3 className="text-center">Cửa hàng burger cybersoft</h3>
                    <div className="breadTop"></div>
                    {renderBreadmid()}
                    <div className="breadBottom"></div>
                </div>
                <div className="col-5">
                <h3 className="text-center text-success ">Chọn thức ăn</h3>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Thức ăn</th>
                                <th></th>
                                <th>Đơn giá</th>
                                <th>Thành tiền</th>
                            </tr>
                           {renderMenu()}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="2"></td>
                                <td>Tổng tiền</td>
                                <td>{total}</td>
                            </tr>
                        </tfoot>
                  
                    </table>
                 
                </div>
            </div>
        </div>
    );
}
