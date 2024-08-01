import React from 'react';
import { useGetMostPopularProductsQuery } from '../../store/apiSlice';
import { List, Card, Spin, message } from 'antd';
import '../../App.css';


const { Meta } = Card;

const MostPopularProducts = () => {
  const { data, error, isLoading } = useGetMostPopularProductsQuery();

  if (error) {
    message.error('Failed to fetch popular products');
  }

  return (
    <div>
      {isLoading && <Spin />}
      {data && (
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data.products}
          renderItem={(item) => (
            <List.Item className="card-container">
              <Card
                hoverable
                cover={
                  <img
                    alt={item.title}
                    src={item.thumbnail || item.images[0] || 'https://via.placeholder.com/150'}
                    className="card-cover"
                  />
                }
                className="product-card"
              >
                <Meta
                  title={<h2 className="card-title">{item.title}</h2>}
                  description={
                    <div className="card-description">
                      <div className="card-price">Price: ${item.price}</div>
                      <div>{item.description}</div>
                    </div>
                  }
                  className="card-meta"
                />
              </Card>
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default MostPopularProducts;
