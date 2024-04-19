import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

function OrdersReport() {
    const [orders, setOrders] = useState([]);
    const [totalRevenue, setTotalRevenue] = useState(0);
    const [averageOrderValue, setAverageOrderValue] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5001/order/api/orders')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }
                return response.json();
            })
            .then(ordersData => {
                setOrders(ordersData);

                // Calculate total revenue
                const revenue = ordersData.reduce((total, order) => total + order.totalPrice, 0);
                setTotalRevenue(revenue);

                // Calculate average order value
                const avgOrderValue = ordersData.length ? revenue / ordersData.length : 0;
                setAverageOrderValue(avgOrderValue);

                setLoading(false);
            })
            .catch(error => {
                console.error('Failed to fetch orders:', error);
                setLoading(false);
            });
    }, []);

    
    const chartData = orders.length > 0 ? {
        labels: orders.map(order => new Date(order.createdAt).toLocaleDateString()),
        datasets: [
            {
                label: 'Total Price',
                data: orders.map(order => order.totalPrice),
                borderColor: 'blue',
                fill: true,
            },
        ],
    } : {
        labels: [],
        datasets: [
            {
                label: 'Total Price',
                data: [],
                borderColor: 'blue',
                fill: false,
            },
        ],
    };

    return (
        <div>
            <h2>Order Reports</h2>
            {loading ? (
                <p>Loading orders...</p>
            ) : (
                <>
                    <p>Total Revenue: ${totalRevenue.toFixed(2)}</p>
                    <p>Average Order Value: ${averageOrderValue.toFixed(2)}</p>
                    <Line data={chartData} />
                </>
            )}
        </div>
    );
}

export default OrdersReport;
