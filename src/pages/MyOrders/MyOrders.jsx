import React, { useContext, useEffect, useState, useCallback } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import './MyOrders.css';
import { assets } from '../../assets/assets';

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  // ✅ useCallback ensures function identity doesn’t change
  const fetchOrders = useCallback(async () => {
    try {
      const response = await axios.post(
        url + '/api/order/userorders',
        {},
        { headers: { token } }
      );
      if (response.data.orders) {
        setData(response.data.orders);
        console.log(response.data.orders);
      } else {
        setData([]);
      }
    } catch (err) {
      console.error("Failed to fetch orders:", err);
      setData([]);
    }
  }, [url, token]); // depends on url + token

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [fetchOrders]); // ✅ ESLint clean now

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order, index) => (
          <div key={index} className="my-orders-order">
            <img src={assets.parcel_icon} alt="Parcel" />
            <p>
              {order.items.map((item, i) =>
                i === order.items.length - 1
                  ? `${item.name} X ${item.quantity}`
                  : `${item.name} X ${item.quantity}, `
              )}
            </p>
            <p>${order.amount}.00</p>
            <p>Items: {order.items.length}</p>
            <p>
              <span>&#x25cf;</span> <b>{order.status}</b>
            </p>
            <button className="btn">Track Order</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
