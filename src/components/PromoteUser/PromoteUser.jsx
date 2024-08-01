import React, { useState } from 'react';
import { usePromoteUserMutation } from '../../store/apiSlice';
import { Button, Input, message } from 'antd';

const PromoteUser = () => {
  const [userId, setUserId] = useState('');
  const [promoteUser, { isLoading }] = usePromoteUserMutation();

  const handlePromote = async () => {
    try {
      await promoteUser(userId).unwrap();
      message.success('User promoted to admin');
    } catch (error) {
      message.error('Failed to promote user');
    }
  };

  return (
    <div>
      <Input
        placeholder="Enter user ID to promote"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <Button type="primary" onClick={handlePromote} loading={isLoading}>
        Promote to Admin
      </Button>
    </div>
  );
};

export default PromoteUser;
