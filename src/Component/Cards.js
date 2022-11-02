import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TodoList from '../../TodoList';
import PropTypes from 'prop-types';

export function MediaCard({color}) {
  return (
    <Card sx={{ maxWidth: 400, color : color }}>
      <CardMedia
        component="img"
        height="250"
        image="https://media.istockphoto.com/vectors/convincing-arguments-vector-id175917982?k=20&m=175917982&s=612x612&w=0&h=1zgyfB98ll-c9j5e7NdKXnYN_FzwkxLf5v59MO2tt5o="
        alt="angry wife"
        
      />
      <CardContent>
       <TodoList />
      </CardContent>
    
    </Card>
  );
}
MediaCard.PropTypes = {
    backgroundColor: PropTypes.string,
  }
  