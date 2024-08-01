import React, { useState } from 'react';
import { useSearchProductsQuery } from '../../store/apiSlice';
import { Input, List, Spin, Card, message } from 'antd';
import '../../App.css';

const { Search } = Input;

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const { data, error, isLoading } = useSearchProductsQuery(query, {
    skip: !query,
  });

  const handleSearch = (value) => {
    setQuery(value);
  };

  if (error) {
    message.error('Failed to fetch products');
  }

  return (
    <div>
      <Search
        placeholder="Search products"
        enterButton
        onSearch={handleSearch}
      />
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
                <Card.Meta
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

export default SearchComponent;
